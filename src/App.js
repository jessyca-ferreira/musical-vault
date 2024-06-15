import Header from './components/header';
import styled from 'styled-components';
import Search from './components/search';

const AppContainer = styled.div`
  background-color: rgb(3, 1, 18);
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search/>
    </AppContainer>
  );
}

export default App;
