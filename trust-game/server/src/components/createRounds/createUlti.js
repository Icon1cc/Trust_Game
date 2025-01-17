export const createUltiRounds = (n, game, gameNumber, endowment, overrideTime, isTimeOverriden, priorActionsLabel) => {

    _.times(n, i => {
        const round = game.addRound({
            data: {
                roundType: "ulti",
                roundId: "ulti_" + i.toString(),
                roundNum: i + 1,
                priorActionsLabel,
                totalRounds: n,
                isLastRound: i + 1 === n, // use this to vary whether the button says "next round" or "end of game"
                postIntervention: gameNumber > 1, // mark whether this is post intervention
                isAccepted: false,
                gameNumber,
                endowment,
            }
        })

        round.addStage({
            name: "proposing",
            displayName: "Proposing",
            durationInSeconds: overrideTime
        })

        round.addStage({
            name: "response",
            displayName: "Response",
            durationInSeconds: overrideTime
        })

        round.addStage({
            name: "outcome",
            displayName: "Outcome",
            durationInSeconds: overrideTime
        })
    })

}

export const createUltiInstructions = (game, nbRounds, endowment, overrideTime, isTimeOverriden, postIntervention) => {
    const round = game.addRound({
        data: {
            roundType: "ulti",
            postIntervention,
            nbRounds: nbRounds,
            endowment
        }
    })

    round.addStage({
        name: "instructions",
        displayName: "Instructions",
        durationInSeconds: overrideTime
    })
}

export const createUltiEnd = (game, nbRounds, overrideTime, isTimeOverriden, isNext, isEnd) => {
    const round = game.addRound({
        data: {
            roundType: "ulti",
            nbRounds,
            isNext,
            isEnd
        }
    })

    round.addStage({
        name: "endPage",
        displayName: "End Page",
        durationInSeconds: overrideTime
    })
}
