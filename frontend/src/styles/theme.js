import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#f7f7f7', // Soft light gray background for a clean, minimal feel
      paper: '#ffffff',   // White background for cards and modals
    },
    primary: {
      main: '#1e88e5',     // Cool blue for primary actions (fresh and professional)
      contrastText: '#fff' // White text for contrast
    },
    secondary: {
      main: '#fbc02d',     // Golden yellow for secondary actions (warm and inviting)
      contrastText: '#fff' // White text for contrast
    },
    error: {
      main: '#e53935',     // Red for error states (clear visibility)
    },
    text: {
      primary: '#212121',  // Dark gray for primary text (easy readability)
      secondary: '#757575', // Medium gray for secondary text
    },
    action: {
      active: '#1e88e5',    // Active state for icons in blue
    },
  },
  typography: {
    fontFamily: `'Lato', sans-serif`, // A modern sans-serif font with clean lines
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      color: '#1e88e5',   // Blue for main headings
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
      color: '#1e88e5',   // Blue for secondary headings
    },
    h3: {
      fontWeight: 500,
      fontSize: '2rem',
      color: '#fbc02d',   // Gold for tertiary headings
    },
    body1: {
      fontSize: '1rem',
      color: '#212121', // Dark gray for body text
    },
    body2: {
      fontSize: '0.875rem',
      color: '#757575', // Medium gray for smaller body text
    },
    button: {
      textTransform: 'none', // Normal case for button text
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px', // Rounded corners for a modern look
          padding: '12px 20px',
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)', // Soft shadow on hover
            transform: 'scale(1.05)', // Slight scaling effect on hover
          },
        },
        containedPrimary: {
          backgroundColor: '#1e88e5', // Cool blue for primary button
          '&:hover': {
            backgroundColor: '#1565c0', // Darker blue on hover
          },
        },
        containedSecondary: {
          backgroundColor: '#fbc02d', // Gold for secondary button
          '&:hover': {
            backgroundColor: '#f57f17', // Darker gold on hover
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '12px', // Rounded corners for cards
          boxShadow: '0px 6px 18px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
          padding: '20px',
          backgroundColor: '#ffffff', // Clean white background
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            borderRadius: '10px', // Rounded text fields
            backgroundColor: '#fafafa', // Light gray background for text fields
            color: '#212121', // Dark text inside text fields
          },
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          '& th': {
            backgroundColor: '#f7f7f7', // Soft gray for table headers
            color: '#212121', // Dark gray for header text
            fontWeight: 600,
          },
          '& td': {
            color: '#757575', // Medium gray for table data
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#1e88e5', // Cool blue for the app bar
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow for app bar
        },
      },
    },
  },
  shape: {
    borderRadius: 8, // Consistent rounded corners
  },
  shadows: [
    'none',
    '0px 6px 18px rgba(0, 0, 0, 0.1)', // Light shadow for components
    // Additional shadows as needed
  ],
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;
