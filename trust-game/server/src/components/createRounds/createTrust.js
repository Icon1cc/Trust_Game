export const createTrustRounds = (
    n, game, gameNumber,
    endowment,
    overrideTime, isTimeOverriden,
    priorActionsLabel,
    isInvestorEmotionGrid,
    game_opponent
) => {
    // _.times javascript library allowing you to perform action number of times (n)
    _.times(n, i => {
        const round = game.addRound({
            data: {
                roundType: "trust",
                roundId: "trust_" + i.toString(),
                roundNum: i + 1,
                totalRounds: n,
                isLastRound: i + 1 === n, // use this to vary whether the button says "next round" or "end of game"
                priorActionsLabel,
                postIntervention: gameNumber > 1, // mark whether this is post intervention
                gameNumber,
                endowment,
                game_opponent
            }
        })

        round.addStage({
            name: "investing",
            displayName: "Investing",
            durationInSeconds: isTimeOverriden ? overrideTime : 60
        })

        round.addStage({
            name: "return",
            displayName: "Return",
            durationInSeconds: isTimeOverriden ? overrideTime : 60
        })

        if (isInvestorEmotionGrid && game.treatment.emotionGrid !== "none") {
            round.addStage({
                name: "investorEmotionGrid",
                displayName: "Investor's reaction",
                durationInSeconds: isTimeOverriden ? overrideTime : 60
            })
        }

        round.addStage({
            name: "outcome",
            displayName: "Outcome",
            durationInSeconds: isTimeOverriden ? overrideTime : 60
        })

    })

}

export const createTrustInstructions = (game, nbRounds, endowment, overrideTime, isTimeOverriden, gameNumber) => {
    const round = game.addRound({
        data: {
            roundType: "trust",
            postIntervention: gameNumber > 1,
            nbRounds,
            endowment,
            gameNumber
        }
    })

    round.addStage({
        name: "instructions",
        displayName: "Instructions",
        durationInSeconds: isTimeOverriden ? overrideTime : 60 * 3,
        trustInstructions: true
    })

    // round.addStage({
    //     name: "instructions2",
    //     displayName: "Instructions2",
    //     durationInSeconds: overrideTime,
    //     trustInstructions: true
    // })

    // round.addStage({
    //     name: "emotion_instructions",
    //     displayName: "Emotion's Grid Instructions",
    //     durationInSeconds: overrideTime,
    //     trustInstructions: true
    // })

    // if (!postIntervention) {
    //     round.addStage({
    //         name: "TrustQuiz",
    //         displayName: "Quiz for Investment Game",
    //         durationInSeconds: overrideTime,
    //         trustInstructions: true
    //     })
    // }

}

export const createTrustEnd = (game, gameNumber,nbRounds, overrideTime, isTimeOverriden, isNext, isEnd) => {
    const round = game.addRound({
        data: {
            roundType: "trust",
            gameNumber,
            nbRounds,
            isNext,
            isEnd
        }
    })

    round.addStage({
        name: "QuTrust",
        displayName: "Rate Other Player",
        durationInSeconds: isTimeOverriden ? overrideTime : 10
    })

    round.addStage({
        name: "endPage",
        displayName: "End Page",
        durationInSeconds: isTimeOverriden ? overrideTime : 10
    })
}
