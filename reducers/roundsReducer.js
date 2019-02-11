export function rounds(state = {round:0},action) {
    switch(action.type) {
        case 'ADDROUND':
            return Object.assign({},state,{
                round :(Number.parseInt(state.round) + 1)
            })
        case 'REMROUND':
            return Object.assign({},state,{
                round :(Number.parseInt(state.round) - 1)
            })
        default:
            return state;
    }
}