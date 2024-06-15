import styled from "styled-components";
import { musicals } from "./database";
import RecommendationCard from "../recommendation-card";
import image from '../../images/hadestown.jpg'

const NewReleaseContainer = styled.div`
    margin-top: 1rem;
    justify-content: center;
    align-items: center;
`;

const ImageContainer = styled.img`
    width: 15vw;
    margin-top: 1rem;
    cursor: pointer;
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
            <RecommendationCard
                title='You may like this one'
                subtitle='A Little Night Music'
                description="Set in 1900 Sweden, A Little Night Music explores the tangled web of affairs centered around actress, Desirée Armfeldt, and the men who love her: a lawyer by the name of Fredrik Egerman and the Count Carl-Magnus Malcom. When the traveling actress performs in Fredrik's town, the estranged lovers' passion rekindles."
                img={image}
            />
        </NewReleaseContainer>
    );
}

export default NewRelease;