import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/styles'; // <-- use @mui/styles here

const theme = createTheme({
  palette: {
    primary: { main: "#374151", light: "#6b7280", dark: "#1f2937", contrastText: "#f3f4f6" }, // Muted slate
    secondary: { main: "#64748b", light: "#a5b4fc", dark: "#334155", contrastText: "#f3f4f6" }, // Muted blue-gray
    background: { default: "#f3f4f6", paper: "#f9fafb" }, // Very light gray
    text: { primary: "#1e293b", secondary: "#475569" }
  },
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
