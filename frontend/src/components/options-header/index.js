import styled from 'styled-components';

const headerOptions = ['CATEGORIES', 'WATCH LIST', 'MY FAVORITES'];

const OptionsContainer = styled.ul`
    display: flex;
    margin: 0 auto;
    flex: 1;
`;

const OptionContainer = styled.li`
    letter-spacing: 1px;
    font-weight: 500;
    font-family: "Poppins";
    text-transform: uppercase;
    display: flex;
    font-size: 0.7em;
    justify-content: center;
    align-items: center;
    min-width: 9em;
    text-align: center;
    cursor: pointer;
`;

function Option() {
    return (
        <OptionsContainer>
            { headerOptions.map( (option) => (
            <OptionContainer><p>{option}</p></OptionContainer>
            ) ) }
        </OptionsContainer>
    );
}

export default Option;