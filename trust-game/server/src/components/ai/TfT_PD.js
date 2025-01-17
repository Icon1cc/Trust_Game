/* ------------------------------------------------------------------------
                         This is for the Tit-for-Tat AI in PD
------------------------------------------------------------------------ */

/* ------------------------------
             Functions
------------------------------ */

/**
 * Tit-for-Tat logic: Cooperate if the opponent cooperated in the last round.
 * @param {string} prevOppAction - Opponent's previous action.
 * @returns {string} - AI's next action.
 */
export function getTfT_action(prevOppAction) {
    return prevOppAction === "cooperate" ? "cooperate" : "defect";
}
