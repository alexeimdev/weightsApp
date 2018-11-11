export function CalcWeight(weight) {
    return { type: 'CALCULATE_WEIGHT', weight : weight}
}
export function CURR(title) {
    return { type: 'CURR', title : title}
}
export function ShowBar(weight) {
    return { type: 'SHOWBAR', weight : weight}
}