import React from 'react'
import { Button } from './Button'

export default {
  title: 'Button/Button',
  component: Button,
  args: { label: 'tsuchida' },
}

export const All = ({ ...args }) => {
  return (
    <>
      <div style={buttonWrapStyle}>
        <Button label={args.label} primary={args.primary} backgroundColor={args.backgroundColor} />
      </div>
    </>
  )
}

export const Single = () => {
  return (
    <>
      <div style={buttonWrapStyle}>
        <Button label={'tsuchida'} backgroundColor={'blue'} />
      </div>
    </>
  )
}

const buttonWrapStyle: React.CSSProperties = {
  display: 'flex',
  gap: '10px',
  padding: '10px',
}
