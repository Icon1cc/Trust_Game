import { ClassicListenersCollector } from "@empirica/core/admin/classic";
export const Empirica = new ClassicListenersCollector();

// Import helper functions and AI logic
import { invTrust, invTrustPost, invUlti, invUltiPost, returnAi_investmentPct } from "./components/ai/fixed";
import { getInvestment, updateState } from "./components/ai/hmm";
import { getInvestment_nice, updateState_nice } from "./components/ai/nice_hmm";
import { choice } from "./components/helper-functions/random";

// onGameStart is triggered once per game before the game starts
Empirica.onGameStart(({ game }) => {
  console.log("Game started:", game.id);
});

// onRoundStart is triggered before each round starts
Empirica.onRoundStart(({ round }) => {
  const game = round.game;

  if (round.get("roundType") === "pairing") {
    const pairingID = round.get("pairingID");
    game.set("ai-avatar", game.get(`ai-avatar-${pairingID}`));
    game.set("investorState", "neutral");
  }
});

// onStageStart is triggered before each stage starts
Empirica.onStageStart(({ stage }) => {
  console.log(`Starting stage: ${stage.get("name")} in round: ${stage.round.get("name")}`);
});

// onStageEnd is triggered after each stage ends
Empirica.onStageEnded(({ stage }) => {
  const round = stage.round;
  const game = round.game;
  const twoHumansPlaying = game.get("opponent") === "player";

  const roundType = round.get("roundType");
  const postIntervention = round.get("postIntervention");
  const priorActionsLabel = round.get("priorActionsLabel") ?? "";
  const priorActions = game.get(priorActionsLabel) ?? [[], []];

  if (roundType === "trust") {
    handleTrustGame({ stage, round, game, twoHumansPlaying, priorActions, priorActionsLabel, postIntervention });
  } else if (roundType === "ulti") {
    handleUltimatumGame({ stage, round, game, priorActions, postIntervention });
  } else if (roundType === "PD") {
    handlePrisonersDilemmaGame({ stage, round, game });
  }
});

// Trust Game Logic
function handleTrustGame({ stage, round, game, twoHumansPlaying, priorActions, priorActionsLabel, postIntervention }) {
  const endowment = round.get("endowment");
  const roundNum = round.get("roundNum");
  const totalRounds = round.get("totalRounds");
  const currentTrustOpponent = round.get("game_opponent");

  if (stage.get("name") === "investing") {
    if (!twoHumansPlaying) {
      let investment;
      let investmentPct;

      if (currentTrustOpponent === "AI_fixed") {
        investmentPct = returnAi_investmentPct(priorActions, postIntervention ? invTrustPost : invTrust);
        investment = Math.round(endowment * investmentPct);
      } else if (currentTrustOpponent === "AI_HMM") {
        if ((!postIntervention && roundNum === totalRounds - 3) || (postIntervention && roundNum === totalRounds - 2)) {
          investment = 2;
        } else {
          const investorState = game.get("investorState") ?? "neutral";
          investment = getInvestment(investorState);
        }
      } else if (currentTrustOpponent === "AI_HMM_nice") {
        const investorState = game.get("investorState") ?? "neutral";
        investment = getInvestment_nice(investorState);
      }

      investmentPct = investment / endowment;
      const investmentX = investment * 3;

      round.set("investment", investment);
      round.set("investmentX", investmentX);
      priorActions[0].push(investmentPct);
      game.set(priorActionsLabel, priorActions);
      round.set("ai_investment_pct", investmentPct);
    }
  } else if (stage.get("name") === "returning") {
    const investment = round.get("investment");
    const investmentX = round.get("investmentX");
    const returns = round.get("returns");

    if (!twoHumansPlaying) {
      const returnsPct = investmentX > 0 ? returns / investmentX : 0;
      priorActions[1].push(returnsPct);
      game.set(priorActionsLabel, priorActions);
      round.set("player_returns_pct", returnsPct);

      if (currentTrustOpponent === "AI_HMM") {
        const oldState = game.get("investorState");
        const newState = updateState(oldState, returns - investment);
        game.set("investorState", newState);
      } else if (currentTrustOpponent === "AI_HMM_nice") {
        const oldState = game.get("investorState");
        const newState = updateState_nice(oldState, returns - investment);
        game.set("investorState", newState);
      }
    }

    updatePayoffs({ round, game, investment, investmentX, returns, endowment });
  }
}

// Ultimatum Game Logic
function handleUltimatumGame({ stage, round, game, priorActions, postIntervention }) {
  if (stage.get("name") === "proposing") {
    const endowment = round.get("endowment");
    const proposalPct = returnAi_investmentPct(priorActions, postIntervention ? invUltiPost : invUlti);
    const proposal = Math.ceil(endowment * proposalPct);
    round.set("proposal", proposal);
    priorActions[0].push(proposalPct);
    game.set(round.get("priorActionsLabel"), priorActions);
  } else if (stage.get("name") === "response") {
    const accepted = round.get("isAccepted");
    priorActions[1].push(accepted ? 1 : 0);
    game.set(round.get("priorActionsLabel"), priorActions);

    const player = game.players[0];
    const currentPayoff = player.get("payoff") || 0;
    const newPayoff = accepted ? currentPayoff + round.get("proposal") : currentPayoff;
    player.set("payoff", newPayoff);
  }
}

// Prisoner's Dilemma Game Logic
function handlePrisonersDilemmaGame({ stage, round, game }) {
  if (stage.get("name") === "choice") {
    const lastActionHum = game.get("lastActionHum") ?? "cooperate";
    const roundNum = round.get("roundNum");

    const aiChoice = roundNum === 4 ? "defect" : lastActionHum;
    round.set("ai-pd-choice", aiChoice);

    const playerChoice = round.get("PDchoice");
    game.set("lastActionHum", playerChoice);
  }
}

// Payoff Calculation
function updatePayoffs({ round, game, investment, investmentX, returns, endowment }) {
  game.players.forEach((player) => {
    const role = player.get("role_trust");
    const currentPayoff = player.get("payoff") || 0;

    let newPayoff;
    if (role === "investor") {
      newPayoff = currentPayoff + endowment - investment + returns;
    } else {
      newPayoff = currentPayoff + investmentX - returns;
    }

    player.set("payoff", newPayoff);
  });
}

// onRoundEnd is triggered after each round ends
Empirica.onRoundEnded(({ round }) => {
  console.log(`Round ended: ${round.get("name")}`);
});

// onGameEnd is triggered after the game ends
Empirica.onGameEnded(({ game }) => {
  console.log("Game ended. Final payoffs:", game.players.map((p) => p.get("payoff")));
});
