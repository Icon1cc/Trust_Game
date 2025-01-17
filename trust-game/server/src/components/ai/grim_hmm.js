/* ------------------------------------------------------------------------
                         This is for the GRIM HMM AI
------------------------------------------------------------------------ */

/**
 * Sample an index based on probabilities.
 * @param {Array} probs - Probabilities for each index.
 * @returns {number} - Selected index.
 */
export function sample(probs) {
    const sum = probs.reduce((a, b) => a + b, 0);
    if (sum <= 0) throw new Error("Probabilities must sum to a value greater than zero");

    const normalized = probs.map((prob) => prob / sum);
    const rand = Math.random();
    let total = 0;

    for (let i = 0; i < normalized.length; i++) {
        total += normalized[i];
        if (rand < total) return i;
    }
}

/**
 * Update the AI state based on Profit and Loss (PnL).
 * @param {string} state - Current AI state.
 * @param {number} PnL - Profit or Loss value.
 * @returns {string} - Updated state.
 */
export function updateState_grim(state, PnL) {
    const states = ["unhappy", "neutral", "happy"];
    const modifiers = {
        unhappy: [Math.exp(10.0 + 0.0 * PnL), Math.exp(-3.366 + 0.409 * PnL), Math.exp(-3.572 - 0.081 * PnL)],
        neutral: [Math.exp(3.0 + 0.0 * PnL), Math.exp(3.314 + 0.376 * PnL), Math.exp(0.916 + 0.450 * PnL)],
        happy: [Math.exp(0.0 + 0.0 * PnL), Math.exp(0.713 + 0.021 * PnL), Math.exp(2.221 + 0.161 * PnL)],
    };

    const mod = modifiers[state] || modifiers["neutral"];
    const i = sample(mod.map((m) => m / mod.reduce((a, b) => a + b)));

    console.log(`state: ${state}, PnL: ${PnL}, probs: ${mod}, newState: ${states[i]}`);
    return states[i];
}
