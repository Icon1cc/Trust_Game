/* ------------------------------------------------------------------------
                         This is for the FIXED AI
------------------------------------------------------------------------ */

/* ------------------------------
         Data processing
------------------------------ */

// Create and export final data for trust game
export const invTrust = [10, 8, 9, 0, 5, 11, 0, 4, 7, 10, 12, 0, 6];
export const invTrustPost = [12, 7, 9, 0, 5, 10, 0, 4, 8, 10, 11, 0, 6];

// Create and export final data for trust game
export const invUlti = [10, 8, 5, 8, 10, 9, 4, 10];
export const invUltiPost = [9, 10, 5, 8, 9, 10, 4, 10];

/* ------------------------------
             Functions
------------------------------ */

/**
 * Return the next AI action as a percentage of the endowment.
 * @param {Array} v - Previous interactions' investments/returns.
 * @param {Array} investments - List of predefined investment percentages.
 * @returns {number} - The percentage of endowment to invest.
 */
export function returnAi_investmentPct(v, investments) {
    const N = v[0].length; // Current round number
    return investments[N] / 20;
}
