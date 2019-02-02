export function calcReducer(state = [],action) {
    flag = true;

    switch(action.type) {
        case 'CALCULATE_WEIGHT':

           // let index = state.findIndex(name => name.weightkg == action.weight.weightkg);
           // if(index == -1)
                return [...state, Object.assign( {},action.weight)];
           // return state;
        case 'REMOVE_WEIGHT':
            let newArray = state.slice()
            let index = state.findIndex(name => name.wlb == action.weight.wlb);
            newArray.splice(index, 1)
            return newArray

        default:
            return state;
    }
}

export function currWeight(state = {currW:0},action) {
    switch(action.type) {
        case 'ADDWEIGHT':
            return Object.assign({},state,{
                currW :(Number.parseFloat(state.currW) + Number.parseFloat(action.currW)).toFixed(2)
            })
        case 'REMWEIGHT':
            return Object.assign({},state,{
                currW :(Number.parseFloat(state.currW) - Number.parseFloat(action.currW)).toFixed(2)
            })
        default:
            return state;
    }
}

export function currBarbell(state = {barbell:20},action) {

    switch(action.type) {

        case 'CHANGEBARBELL':
            return Object.assign({},state,{
                barbell :action.barbell
            })
        default:
            return state;
    }
}