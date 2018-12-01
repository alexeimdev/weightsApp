export function calcReducer(state = [],action) {
    switch(action.type) {
        case 'CALCULATE_WEIGHT':

           // let index = state.findIndex(name => name.weightkg == action.weight.weightkg);
           // if(index == -1)
                return [...state, Object.assign( {},action.weight)];
           // return state;
        case 'REMOVE_WEIGHT':
            return state.filter((data, i) => i !== action.id);
        default:
            return state;
    }
}

export function currWeight(state = {currW:0},action) {
    switch(action.type) {
        case 'ADDWEIGHT':
            return Object.assign({},state,{
                currW :(state.currW + action.currW)
            })

        default:
            return state;
    }
}