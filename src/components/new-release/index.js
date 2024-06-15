import styled from "styled-components";
import { musicals } from "./database";

const NewReleaseContainer = styled.div`
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.img`
    width: 15vw;
    margin-top: 1rem;
`;

const TitleContainer = styled.h2`
    letter-spacing: 1px;
    font-size: 1em;
    font-family: "Poppins";
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    margin: 0 auto;
    justify-content: center;
    background-color: #73c72a;
`;

const ReleasesContainer = styled.div`
    box-sizing: border-box;
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
`;


function NewRelease() {
    return (
        <NewReleaseContainer>
            <TitleContainer>New releases</TitleContainer>
            <ReleasesContainer>
                {
                    musicals.map(musical => (
                        <ImageContainer src={musical.src} alt={musical.name}/>
                    ))
                }
            </ReleasesContainer>
        </NewReleaseContainer>
    );
}

export default NewRelease;