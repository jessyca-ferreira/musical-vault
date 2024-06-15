import styled from 'styled-components';
import Icons from '../icons-header';
import Logo from '../logo';
import Option from '../options-header';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
`;

const MenuContainer = styled.div
`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 2em;
`;

function Header() {
  return (
    <HeaderContainer>
      <MenuContainer>
          <Icons></Icons>
          <Option></Option>
      </MenuContainer>
      <Logo></Logo>
    </HeaderContainer>
  );
}

export default Header;