import logo_img from '../../images/on-broadway.svg';
import './style.css';
import '../../index.css';

function Logo() {
    return (
        <div className='logo-container'>
          <img id='logo-picture' src={logo_img} alt='On Broadway Logo'/>
          <p id='tag'>Your musical vault</p>
        </div>
    );
}

export default Logo;