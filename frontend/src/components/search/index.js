import styled from "styled-components";
import { useState } from "react";
import { musicals } from "./database";

const SearchContainer = styled.section`
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

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SearchResultsContainer = styled.div`
    display: flex;
    width: 50vw;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    margin: 0 auto;
`;

const ImageContainer = styled.img`
    width: 15vw;
    margin-top: 1rem;
`;

const TitleContainer = styled.h2`
    max-width: 10em;
    letter-spacing: 1px;
    font-size: 0.7em;
    font-family: "Poppins";
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const SearchResults = styled.div`
    flex: 0 0 calc(33.333% - 1rem);
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

function Search() {
    const [searchValue, setSearchValue] = useState([]); 

    return (
        <SearchContainer>
            <SearchBarContainer>
                <TaglineContainer>Did you find your next musical?</TaglineContainer>    
                <InputContainer type="text"
                    placeholder="Search for your next listen here"
                    onBlur={(event) => {
                        const text = event.target.value;
                        const filteredMusicals = musicals.filter((musical) => musical.name.includes(text));
                        setSearchValue(filteredMusicals);
                    }}    
                />
            </SearchBarContainer>
            <SearchResultsContainer>
                {
                    searchValue.map(piece => (
                        <SearchResults>
                            <ImageContainer src={piece.src} alt={piece.name} />
                            <TitleContainer>{piece.name}</TitleContainer>
                        </SearchResults>
                    ))
                }
            </SearchResultsContainer>
        </SearchContainer>
    );
}

export default Search;