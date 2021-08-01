export type Theme = {
  colors: {
    background: string,
    text: string,
    primary: string,
  },
  gaps: {
    sm: string
  }
}

const theme: Theme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#000000',
  },
  gaps: {
    sm: '1.5rem'
  }
}

export default theme