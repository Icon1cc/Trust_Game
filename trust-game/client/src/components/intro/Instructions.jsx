import React from "react";
import Header from "../extras/Header";
import ScrollableContent from "../extras/ScrollableContent";
import Section from "../extras/Section";
import ConsentButton from "../extras/ConsentButton";

export default function Instructions({ hasPrev, hasNext, onNext, onPrev, game }) {
    const {
        treatment: {
            nbRoundsTrustPart1,
            nbRoundsUltiPart1,
            nbRoundsPDPart1,
            intervention,
            nbRoundsTrustPart2,
            nbRoundsUltiPart2,
            nbRoundsPDPart2,
            opponent,
        },
    } = game;

    let gamesPlayed = 0;
    gamesPlayed += nbRoundsTrustPart1 + nbRoundsTrustPart2 > 0 ? 1 : 0;
    gamesPlayed += nbRoundsUltiPart1 + nbRoundsUltiPart2 > 0 ? 1 : 0;
    gamesPlayed += nbRoundsPDPart1 + nbRoundsPDPart2 > 0 ? 1 : 0;

    const instructionText =
        gamesPlayed >= 2 ? "different multiplayer games" : "a multiplayer game";

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-100 py-4 px-4">
            <div className="max-w-5xl w-full bg-white shadow-md rounded-lg overflow-hidden">
                {/* Header Section */}
                <div className="w-full bg-white flex items-center justify-center" style={{ height: "163px" }}>
                    <img
                        src="/images/Heidelberg_logo.jpg"
                        alt="UCL Banner"
                        className="w-auto h-full"
                    />
                </div>

                {/* Content Section */}
                <div className="p-6">
                    <Header title="Instructions for the Experiment" />
                    <ScrollableContent>
                        <Section title="Welcome">
                            <p>
                                Welcome to this study and thank you for your participation. You
                                will be paired with other players to engage in {instructionText}.
                                You will be given choices to make in order to win some money.
                                The amount of money earned depends on the choices made by you
                                and the choices made by the other player.
                            </p>
                        </Section>

                        <Section title="How to Play">
                            {opponent === "player" ? (
                                <p>
                                    You will be paired with another real player. Carefully make
                                    your decisions, as your earnings depend on both your choices
                                    and theirs.
                                </p>
                            ) : (
                                <p>
                                    You will play against an AI opponent. The AI's behavior is
                                    programmed based on predefined strategies.
                                </p>
                            )}
                        </Section>

                        <Section title="Objective">
                            <p>
                                <strong>Your goal is to maximize your income</strong>, as your
                                bonus compensation will depend on the total number of points
                                you earn during the experiment. On top of the money earned
                                based on your decisions, you will receive a fixed fee for
                                answering questions about yourself and your experience making
                                the choices. Note that payment is conditional on completing the
                                study.
                            </p>
                        </Section>

                        <Section title="Important Notes">
                            <ul className="list-disc list-inside mt-2">
                                <li>Do not refresh the page once the study begins.</li>
                                <li>
                                    Ensure you are on a stable internet connection to avoid
                                    disruptions.
                                </li>
                                <li>
                                    If you encounter any issues, contact the experiment
                                    administrator immediately.
                                </li>
                            </ul>
                        </Section>
                    </ScrollableContent>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-4">
                        <button
                            className="main-btn inlist-btn"
                            type="button"
                            onClick={onPrev}
                            disabled={!hasPrev}
                        >
                            Previous
                        </button>
                        <ConsentButton
                            isChecked={true}
                            onClick={() => {
                                if (onNext) onNext();
                            }}
                        >
                            Next
                        </ConsentButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
