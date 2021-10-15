import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
  createStyles({
    '@global': {
      '.page-title': {
        backgroundColor: '#fff',
        padding: '0.45rem',
        margin: '1rem 1.5rem',
        borderRadius: '0.25rem',
        height: '2.6rem'
      },
      '.page-container': {
        flexGrow: 1,
        padding: theme.spacing(3)
      },
      '.card-form': {
        width: '60%'
      },
      html: {
        '-webkit-font-smoothing': 'antialiased',
        '-moz-osx-font-smoothing': 'grayscale',
        height: '100%',
        width: '100%'
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      body: {
        height: '100%',
        width: '100%',
        backgroundColor: '#dedede'
      },
      // '#root': {
      //   height: '100%',
      //   width: '100%'
      // }
    }
  })
);

const GlobalStyles = () => {
  useStyles();

  return null;
};

export default GlobalStyles;
