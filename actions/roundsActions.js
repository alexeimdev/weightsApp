export function AddRound(round) {
    return { type: 'ADDROUND', round : round}
}
export function RemRound(round) {
    return { type: 'REMROUND', round : round}
}
export function ResetRound(round) {
    return { type: 'RESETROUND', round : round}
}
