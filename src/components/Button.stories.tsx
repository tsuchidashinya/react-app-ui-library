import { Button } from './Button'
import React from 'react'

export default {
  title: 'Button/Button',
  component: Button,
  args: {},
}

export const All = () => {
  return (
    <>
      <div style={buttonWrapStyle}>
        <Button label={'tsuchida'} backgroundColor={'red'} />
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
