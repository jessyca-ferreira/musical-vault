import Icons from '../icons-header';
import Logo from '../logo';
import Option from '../options-header';
import './styles.css';

function Header() {
  return (
    <header className='App-header'>
        <div className='menu'>
            <Icons></Icons>
            <Option></Option>
        </div>
        <Logo></Logo>
    </header>
  );
}

export default Header;