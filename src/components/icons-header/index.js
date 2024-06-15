import profile from '../../images/profile.svg';
import bag from '../../images/bag.svg';
import './styles.css';

const icons = [profile, bag];

function Icons() {
    return (
        <ul className='icons'> 
            { icons.map( (icon) => (
            <li className='icon'><img className='icon-img' src={icon} alt='icon'></img></li>
            ) )  }
        </ul>
    );
}

export default Icons;