import React from 'react'
import { IBoxProps } from './box.interface'
import styles from './box.module.scss'
import classNames from 'classnames/bind'

const classes = classNames.bind(styles)

const Box = ({ value, status }: IBoxProps) => {

  const boxStatus = classes({
    correct: status === 'correct',
    edit: status === 'edit',
    absent: status === 'absent',
    empty: status === 'empty',
  })

  return (
    <div className={boxStatus}>
      <h3>{value}</h3>
    </div>
  )
}

export default Box
