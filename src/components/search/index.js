import styled from "styled-components";

const SearchContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InputContainer = styled.input`
    background: transparent;
    padding: 0.7rem;
    border: 1px solid #73c72a;
    color: #fff;
    width: 20em;
    border-radius: 50px;

    &::placeholder {
        color: #73c72a;
    
    }
`;

const TaglineContainer = styled.h2`
    font-size: 0.6em;
    font-family: "Poppins";
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-right: 1.5em;
    margin-top: 0;
    margin-bottom: 0;
    text-align: center;
`;


function Search() {
    return (
        <SearchContainer>
            <TaglineContainer>Did you find your next musical?</TaglineContainer>    
            <InputContainer type="text" placeholder="Search for your next listen here"/>
        </SearchContainer>
    );
}

export default Search;