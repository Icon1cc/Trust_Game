import { EmpiricaClassic } from "@empirica/core/player/classic";
import { EmpiricaContext } from "@empirica/core/player/classic/react";
import { EmpiricaMenu, EmpiricaParticipant } from "@empirica/core/player/react";
import React from "react";
import { Game } from "./Game";

// Intro Components
import InfoSheet from "./components/Steps/InfoSheet";
import TermsAndConditions from "./components/Steps/TermsAndConditions";
import ProlificIDInput from "./components/Steps/ProlificIDInput";
import Instructions from "./components/intro/Instructions";
import ExperimentTimeline from "./components/intro/ExperimentTimeline";
import Quiz from "./components/intro/Quiz";
import ChooseYourAvatar from "./components/intro/ChooseYourAvatar";

// Exit Components
import ExitSurvey from "./intro-exit/ExitSurvey";
import Thanks from "./components/exit/Thanks";
import Sorry from "./components/exit/Sorry";

export default function App() {
  const urlParams = new URLSearchParams(window.location.search);
  const playerKey = urlParams.get("participantKey") || "";

  const { protocol, host } = window.location;
  const url = `${protocol}//${host}/query`;

  // Define the intro steps for the trust game
  function introSteps() {
    return [
      ({ next }) => <InfoSheet next={next} />,
      ({ next }) => <TermsAndConditions next={next} />,
      ({ next }) => <ProlificIDInput next={next} />,
      ({ next }) => <Instructions next={next} />,
      ({ next }) => <ExperimentTimeline next={next} />,
      ({ next }) => <Quiz next={next} />,
      ({ next }) => <ChooseYourAvatar next={next} />,
    ];
  }

  // Define the exit steps for the trust game
  function exitSteps(game, player) {
    // Handle cases where the game ends abruptly or normally
    if (
      !game ||
      (player.exitStatus &&
        player.exitStatus !== "finished" &&
        player.exitReason !== "playerQuit")
    ) {
      return [({ next }) => <Sorry next={next} />];
    }

    return [({ next }) => <ExitSurvey next={next} />, ({ next }) => <Thanks next={next} />];
  }

  return (
    <EmpiricaParticipant url={url} ns={playerKey} modeFunc={EmpiricaClassic}>
      <div className="h-screen relative">
        <EmpiricaMenu position="bottom-left" />
        <div className="h-full overflow-auto">
          <EmpiricaContext introSteps={introSteps} exitSteps={exitSteps}>
            <Game />
          </EmpiricaContext>
        </div>
      </div>
    </EmpiricaParticipant>
  );
}
