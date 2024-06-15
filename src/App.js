import Header from './components/header';
import styled from 'styled-components';
import Search from './components/search';
import NewRelease from './components/new-release';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Header/>
      <Search/>
      <NewRelease/>
    </AppContainer>
  );
}

export default App;
