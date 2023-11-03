export type Styles = {
  'storybook-button': string
  'storybook-button-large': string
  'storybook-button-medium': string
  'storybook-button-primary': string
  'storybook-button-secondary': string
  'storybook-button-small': string
}

export type ClassNames = keyof Styles

declare const styles: Styles

export default styles
