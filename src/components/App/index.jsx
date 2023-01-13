import GlobalStyles from '../../assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import themeDefault from '../../assets/styles/themes/default';
import { Container } from './styles';
import Header from '../Header';
import Routes from '../../routes';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <>
      <ThemeProvider theme={themeDefault}>
        <BrowserRouter>
          <GlobalStyles />
          <Container>
            <Header />
            <Routes />
          </Container>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
