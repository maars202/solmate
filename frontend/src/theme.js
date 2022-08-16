import { createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors'; // https://mui.com/material-ui/customization/color/

const Theme = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h1: {
      fontFamily: [
        'Berkshire Swash',
        'cursive'
      ].join(',')
    },
    h2: {
      fontFamily: [
        'Berkshire Swash',
        'cursive'
      ].join(',')
    },
    h3: {
      fontFamily: [
        'Berkshire Swash',
        'cursive'
      ].join(',')
    },
    h6: {
      fontFamily: [
        'Berkshire Swash',
        'cursive'
      ].join(',')
    },
  },

  palette: {
    background: {
      default: '#111827'
    },
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.65)'
    },
    primary: {
      main: deepPurple[300],
    },
    divider: 'rgba(255, 255, 255, 0.65)'
  }
  
});

export default Theme;