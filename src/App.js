import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Invoices from './Pages/Invoices';
import Receipt from './Pages/Receipt';
import Error from './Pages/Error';
import { GlobalStyle, lightTheme, darkTheme } from './Pages/Styles/themeStyles';
import { useThemeMode } from './Pages/Styles/useThemeMode';
import { ThemeProvider } from 'styled-components';
import NavBar from './Components/NavBar Component/NavBar';

function App() {
  const [colorTheme, toggleTheme, move] = useThemeMode();
  const themeMode = colorTheme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <BrowserRouter>
        <GlobalStyle />
        <NavBar colorTheme={colorTheme} toggleTheme={toggleTheme} move={move} />
        <Routes>
          <Route path='/' element={<Invoices />}></Route>
          <Route path='receipt/:receiptId' element={<Receipt />}></Route>
          <Route path='*' element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
