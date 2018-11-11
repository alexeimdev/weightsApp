export default function calcReducer(state = [],action) {
    switch(action.type) {
        case 'CALCULATE_WEIGHT':

           // let index = state.findIndex(name => name.weightkg == action.weight.weightkg);
           // if(index == -1)
                return [...state, Object.assign( {},action.weight)];
           // return state;

        case 'CURR':
            return state;
                //return [state, Object.assign( {},action.title)];
        case 'SHOWBAR':
            return state;
            //return [state, Object.assign( {},action.title)];

        default:
            return state;
    }
}