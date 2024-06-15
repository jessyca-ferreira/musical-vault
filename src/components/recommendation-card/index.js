import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2em;
    border: 1px solid #73c72a;
    width: 70%;
    height: 30%;
    justify-content: center;
    align-items: center;
    margin: 2em auto;
`
const ImageContainer = styled.img`
    width: 100%;
    margin: 0;
`;

const Button = styled.button`
    display: block;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    background-color: #73c72a;
    border: none;
    width: 100%;
    height: 4em;
    margin: 0;
`
const ImageButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50vh;
`;
const TextContainer = styled.div`
    padding: 1em;
    text-align: justify;
`;

const DescriptionContainer = styled.p`
    max-width: 800px;
    font-family: 'Poppins', sans-serif;
`;

const TitleContainer = styled.h3`
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 0;
`;

const SubtitleContainer = styled.h4`
    font-family: 'Poppins', sans-serif;
    font-style: italic;
    margin: 0;
    color: #73c72a;
`;

function RecommendationCard({title, subtitle, description, img}) {
    return (
        <CardContainer>
            <TextContainer>
                <TitleContainer>{title}</TitleContainer>
                <SubtitleContainer>{subtitle}</SubtitleContainer>
                <DescriptionContainer>{description}</DescriptionContainer>
            </TextContainer>
            <ImageButton>
                <ImageContainer src={img} alt=""/>
                <Button>Learn more</Button>
            </ImageButton>
        </CardContainer>
    );
}

export default RecommendationCard;