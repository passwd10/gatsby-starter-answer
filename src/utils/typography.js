import Typography from "typography"
import githubTheme from "typography-theme-github"

githubTheme.overrideStyles = () => {
  return {
    a: {
      textDecoration: `none`,
      fontFamily: `Ubuntu`,
    },
    
    'a:hover': {
      textDecoration: `none`,
    },

    h1: {
      fontFamily: `Ubuntu`,
      fontWeight: 700,
      fontSize: `40px`,
    },

    h2: {
      fontFamily: `Ubuntu`,
      fontWeight: 600,
      fontSize: `30px`,
    },

    h3: {
      fontFamily: `Ubuntu`,
    },

    p: {
      fontFamily: `Ubuntu`,
    },

    span: {
      fontFamily: `Ubuntu`,
    },

    button: {
      fontFamily: `Ubuntu`,
      border: 0,
      outline: 0,
    },

    div: {
      fontFamily: `Ubuntu`,
    }
  }
}

const typography = new Typography(githubTheme)

export default typography
export const rhythm = typography.rhythm
