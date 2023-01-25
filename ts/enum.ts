/*

 Iterieren über enums kann zum Problem werden,
 da hier je Wertpaare als key und value noch einmal getauscht vorkommen

 Der folgende Code ist eine Notlösung für die Unzulänglichkeit in TypeScript

    Quelle:
    https://github.com/microsoft/TypeScript/issues/17198#issuecomment-315400819

*/

enum E { A, B }
// ["A", "B"]
// [0, 1]
const keys = Object.keys(E).filter(k => typeof E[k as any] === "number");
const values = keys.map(k => E[k as any]);
