export function CalcWeight(weight) {
    return { type: 'CALCULATE_WEIGHT', weight : weight}
}
export function DelWeight(weight) {
    return { type: 'REMOVE_WEIGHT', weight : weight}
}
export function ReCalc(currW) {
    return { type: 'ADDWEIGHT', currW : currW}
}
export function ReCalcREM(currW) {
    return { type: 'REMWEIGHT', currW : currW}
}
export function ChangeBarBell(barbell) {
    return { type: 'CHANGEBARBELL', barbell : barbell}
}