import React from 'react'

import downIconImg from '../../images/down.png'
import noneIconImg from '../../images/noneIcon.png'
import upIconImg from '../../images/up.png'
import s from './SuperSort.module.css'

// добавить в проект иконки и импортировать
const downIcon = downIconImg
const upIcon = upIconImg
const noneIcon = noneIconImg

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) {
        return up
    } else if(sort === up){
        return ''
    } else
        return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
      <img className={s.imgIcon} id={id + '-icon-' + sort} src={icon} />
        </span>
    )
}

export default SuperSort

