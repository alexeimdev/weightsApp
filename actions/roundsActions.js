export function AddRound(round) {
    return { type: 'ADDROUND', currW : round}
}
export function RemRound(currW) {
    return { type: 'REMROUND', currW : round}
}