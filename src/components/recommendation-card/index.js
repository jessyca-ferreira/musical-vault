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
    width: 60%;
    display: block;
`;

const Button = styled.button`
    display: block;
    font-family: 'Poppins', sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    background-color: #73c72a;
    width: 60%;
    height: 4em;
`
const ImageButton = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
`;
const TextContainer = styled.div`

`;

function RecommendationCard({title, subtitle, description, img}) {
    return (
        <CardContainer>
            <TextContainer>
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <p>{description}</p>
            </TextContainer>
            <ImageButton>
                <ImageContainer src={img} alt=""/>
                <Button>Learn more</Button>
            </ImageButton>
        </CardContainer>
    );
}

export default RecommendationCard;