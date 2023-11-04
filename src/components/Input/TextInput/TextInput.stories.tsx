import { TextInput, TextInputProps } from './TextInput'
export default {
  title: 'Input/TextInput',
  component: TextInput,
  args: {},
}

export const All = ({ ...args }: TextInputProps) => {
  return (
    <>
      <div style={componentStyle}>
        <TextInput value={args.value} onChange={args.onChange} />
      </div>
    </>
  )
}

export const Single = ({ ...args }: TextInputProps) => {
  return (
    <>
      <div style={componentStyle}>
        <TextInput {...args} />
      </div>
    </>
  )
}

const componentStyle: React.CSSProperties = {
  padding: 20,
  display: 'flex',
}
