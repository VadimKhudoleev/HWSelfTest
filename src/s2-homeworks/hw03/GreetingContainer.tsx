import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'
import {fchown} from "fs";

type GreetingContainerPropsType = {
    users: UserType[] // need to fix any
    addUserCallback: (name: string)=>void // need to fix any
}

export const pureAddUser = (name: string, setError: Function, setName: Function, addUserCallback: Function) => {
    // !name.trim() ? setError('Ошибка! Введите имя!') : addUserCallback(name)
    // setName('') //
    !name.trim() ? setError('Ошибка! Введите имя!') : addUserCallbackAndSet(setName, addUserCallback, name)
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}


const addUserCallbackAndSet = (setName: Function, addUserCallback:Function, name:string) => {
    addUserCallback(name)
    setName('')
}
export const pureOnBlur = (name: string, setError: (er: string) => void) => {
    !name.trim() && setError("Ошибка! Введите имя!")
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser: Function) => {
    e.key == "Enter" && addUser()
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value)
        // console.log(e.currentTarget.value)// need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length // need to fix
    const lastUserName =  users.length!==0? users[totalUsers-1].name : ''// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
