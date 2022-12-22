const initState = {
    themeId: 1,
}

export type InitStateType = {
    themeId: number
}

export type changeThemeIdAC = {
    type: 'SET_THEME_ID',
    id: number
}
export const themeReducer = (state = initState, action: changeThemeIdAC): InitStateType => {
    debugger// fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...initState, themeId: action.id}


        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdAC => ({type: 'SET_THEME_ID', id}) as const// fix any
