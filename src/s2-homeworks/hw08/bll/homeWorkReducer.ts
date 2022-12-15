import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    debugger// need to fix any
    switch (action.type) {

        case 'sort': { // by name
            let sortedState = state.sort(function(a,b){
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                return 0;
            })
            return action.payload === 'up' ? sortedState :
                action.payload === 'down' ? sortedState.reverse() :
                    state
            // need to fix
        }
        case 'check': {
            return state.filter(p=> p.age>=action.payload).reverse() // need to fix
        }
        default:
            return state
    }
}
