/* ------------------------------------------------------------------------
                         This is for the NICE HMM AI
------------------------------------------------------------------------ */

/* ------------------------------
             Functions
------------------------------ */

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
 * Update the AI state based on Profit & Loss (PnL) with adjustments for a "nice" AI.
 * @param {string} state - Current AI state.
 * @param {number} PnL - Profit or Loss value.
 * @returns {string} - Updated state.
 */
export function updateState_nice(state, PnL) {
    const states = ["unhappy", "neutral", "happy"];
    const modifiers = {
        unhappy: [
            Math.exp(-10.0 + 0.0 * PnL),
            Math.exp(-3.366027 + 0.40910797 * PnL),
            Math.exp(-3.572619 - 0.08137274 * PnL),
        ],
        neutral: [
            Math.exp(0.0 + 0.0 * PnL),
            Math.exp(3.3142637 + 0.3763408 * PnL),
            Math.exp(0.9169736 + 0.4502838 * PnL),
        ],
        happy: [
            Math.exp(0.0 + 0.0 * PnL),
            Math.exp(0.7134085 + 0.02101626 * PnL),
            Math.exp(2.2215478 + 0.16162964 * PnL),
        ],
    };

    const mod = modifiers[state] || modifiers["neutral"];
    const probabilities = mod.map((m) => m / mod.reduce((a, b) => a + b));
    const i = sample(probabilities);

    console.log(`state: ${state}, PnL: ${PnL}, probs: ${mod}, newState: ${states[i]}`);
    return states[i];
}

/**
 * Get AI's investment decision based on the current state.
 * @param {string} state - Current AI state.
 * @returns {number} - Investment amount.
 */
export function getInvestment_nice(state) {
    const investments = Array.from({ length: 21 }, (_, i) => i);
    const probabilities = {
        unhappy: [
            0.1025436430408, 0.1221931236853, 0.1345215238995, 0.1368182252617, 0.1285592471751, 0.1116014322677,
            0.0895041220882, 0.0663166721334, 0.0453950277118, 0.0287077419587, 0.0167723588011, 0.0090530028158,
            0.0045143317507, 0.0020796744990, 0.0008851094702, 0.0003480141146, 0.0001264134789, 0.0000424213859,
            0.0000131513231, 0.0000037665630, 0.0000009965755,
        ],
        neutral: [
            0.003393529, 0.006930874, 0.013053553, 0.022671228, 0.036310144, 0.053627606, 0.073039389,
            0.091734929, 0.106248217, 0.113479701, 0.111769796, 0.101517390, 0.085028780, 0.065675083,
            0.046778251, 0.030725245, 0.018610323, 0.010394861, 0.005354126, 0.002543094, 0.001113881,
        ],
        happy: [
            0.003162697, 0.001057162, 0.001410197, 0.001881016, 0.002508877, 0.003346113, 0.004462480,
            0.005950950, 0.007935434, 0.010581067, 0.014107909, 0.018809194, 0.025075644, 0.033427845,
            0.044559370, 0.059394206, 0.079163228, 0.105506029, 0.140606514, 0.187373417, 0.249680651,
        ],
    };

    const i = sample(probabilities[state] || probabilities["neutral"]);
    return investments[i];
}
