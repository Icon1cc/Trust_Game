import { choice } from "../helper-functions/random";
import Papa from "papaparse";

/* ------------------------------------------------------------------------
                         This is for the GEOMETRIC AI
------------------------------------------------------------------------ */

/* ------------------------------
         Data processing
------------------------------ */

// TRUST GAME DATA PREPROCESSING
const csv = Assets.getText("trust_data_pct.csv");
const data = Papa.parse(csv).data;
data.shift(); // Remove first row with column names
data.pop(); // Remove last element (single 0)

// ULTI GAME DATA PREPROCESSING
const csvUlti = Assets.getText("ulti_data_pct.csv");
const dataUlti = Papa.parse(csvUlti).data;

/**
 * Transform a 1D array into a 2D array of specified row size.
 * @param {Array} arr - Input array.
 * @param {number} size - Number of elements in each row.
 * @returns {Array} - Transformed 2D array.
 */
function TwoDimensional(arr, size) {
    const res = [];
    for (let i = 0; i < arr.length; i += size) {
        const temp = arr.slice(i, i + size);
        res.push(temp);
    }
    return res;
}

/**
 * Rearrange data into a 3D array for each round.
 * @param {Array} db - Input data array.
 * @param {number} size - Number of rounds per game.
 * @returns {Array} - Transformed 3D array.
 */
function ArrangeData(db, size) {
    return db.map((item) => TwoDimensional(item, size));
}

// Create and export final data for trust and ultimatum games
export const finalDataTrust = ArrangeData(data, 10);
export const finalDataUlti = ArrangeData(dataUlti, 20);

/* ------------------------------
             Functions
------------------------------ */

/**
 * Calculate the distance between two 1D vectors using a decay factor.
 * @param {Array} v1 - First vector.
 * @param {Array} v2 - Second vector.
 * @param {number} a - Decay factor.
 * @returns {number} - Calculated distance.
 */
function dist(v1, v2, a) {
    const length = Math.min(v1.length, v2.length);
    let sum = 0;

    for (let i = 0; i < length; i++) {
        const d = Number(v1[i]) - Number(v2[i]);
        sum += (a ** (length - i)) * (d * d);
    }

    return Math.sqrt(sum);
}

/**
 * Identify the nearest neighbor and return the next AI action.
 * @param {Array} v - Previous interactions' investments/returns.
 * @param {Array} database - Historical data from human interactions.
 * @returns {number} - The investment percentage for the next round.
 */
export function returnAi_investmentPct(v, database) {
    let N = v[0].length; // Current round number

    if (N === 0) return 0.5; // First round, choose 50%

    if (N === 10) {
        database.forEach((matrix) =>
            matrix.forEach((row) => row.splice(0, 5))
        );
        return 0.1; // Round 11 sends 10%
    }

    let investorAction;
    let minDist = Infinity;

    if (N > 10) {
        v = [v[0].slice(10), v[1].slice(10)];
        N %= 10;
    }

    database.forEach((matrix) => {
        let d = 0;
        matrix.forEach((row, j) => {
            const truncRow = row.slice(0, N);
            d += dist(truncRow, v[j], 0.9); // Use a decay factor of 0.9
        });

        if (d < minDist) {
            minDist = d;
            investorAction = matrix[0][N];
        }
    });

    return investorAction;
}
