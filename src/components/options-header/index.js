import './styles.css';

const headerOptions = ['CATEGORIES', 'WATCH LIST', 'MY FAVORITES'];

function Option() {
    return (
        <ul className='options'>
            { headerOptions.map( (option) => (
            <li className='option'><p>{option}</p></li>
            ) ) }
        </ul>
    );
}

export default Option;