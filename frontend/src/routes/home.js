import styled from 'styled-components';
import Search from '../components/search';
import NewRelease from '../components/new-release';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function Home() {
  return (
    <AppContainer>
      <Search/>
      <NewRelease/>
    </AppContainer>
  );
}

export default Home;
