import React from 'react'
import styles from './TextInput.module.scss'

export type TextInputProps = {
  value?: string
  onChange: (val: string) => void
}

const _TextInput = ({ value, onChange }: TextInputProps) => {
  const onChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }
  return (
    <div className={styles['text-input']}>
      <input value={value} onChange={onChangeEvent} />
    </div>
  )
}

export const TextInput = React.memo(_TextInput)
