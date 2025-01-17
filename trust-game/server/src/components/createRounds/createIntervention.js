export const createIntervention = (game, interventionName, overrideTime, isTimeOverriden, delay, includeSituation = true) => {
    const interventionRound = game.addRound({
        data: {
            roundType: "intervention",
            interventionType: interventionName,
            delay
        }
    })

    if (includeSituation) {
        interventionRound.addStage({
            name: "situation",
            displayName: "Situation",
            durationInSeconds: overrideTime
        })
    }

    interventionRound.addStage({
        name: "intervention",
        displayName: "Intervention",
        durationInSeconds: overrideTime
    })
}