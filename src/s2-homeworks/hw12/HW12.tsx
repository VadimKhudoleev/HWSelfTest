import React, {ChangeEvent, ChangeEventHandler, useEffect} from 'react'
import s from './HW12.module.css'
import s2 from '../../s1-main/App.module.css'
import SuperSelect from '../hw07/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {changeThemeId, InitStateType} from './bll/themeReducer'

/*
* 1 - в файле themeReducer.ts написать нужные типы вместо any, дописать редьюсер
* 2 - получить themeId из редакса
* 3 - дописать тип и логику функции change
* 4 - передать пропсы в SuperSelect
* */

const themes = [
    {id: 1, value: 'light'},
    {id: 2, value: 'blue'},
    {id: 3, value: 'dark'},
]
type MainStateType = {
    theme: InitStateType
}
const HW12 = () => {
    const dispatch = useDispatch()
    // взять ид темы из редакса
    let themeId = 1

    themeId = useSelector<MainStateType, number>(state => state.theme.themeId)
    const change = (e: ChangeEvent<HTMLSelectElement>) => {
        // debugger// дописать функцию
        dispatch(changeThemeId(+e.currentTarget.value))
    }

    useEffect(() => {
        document.documentElement.dataset.theme = themeId + ''
    }, [themeId])

    return (
        <div id={'hw12'}>
            <div id={'hw12-text'} className={s2.hwTitle}>
                Homework #12
            </div>

            <div className={s2.hw}>
                <SuperSelect
                    id={'hw12-select-theme'}
                    className={s.select}
                    options={themes}
                    onChange={change}

                    // сделать переключение тем

                />
            </div>
        </div>
    )
}

export default HW12
