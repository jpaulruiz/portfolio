import styled from "styled-components"
import { faLinkedin,faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Container = styled.div`
    color: rgb(122, 115, 115);
    display: flex;
    flex-direction: row;
    z-index: 100;
    background-color: transparent;
    position: relative;
    flex: 1;
    align-items: flex-end;
`

const FooterDetail = styled.div`
    display: flex;
    flex-direction: row;
    background-color: transparent;
    position: relative;
    margin-bottom: 2rem;
    align-items: center;

    &::before {
        content: "";
        position: relative;
        width: 10rem;
        border-top: 1px solid rgb(83, 83, 83);
    }
`

const FontAwesomeStyled = styled(FontAwesomeIcon)`
    color: #646464;
    width: 2rem;
    height: 2rem;
    padding-left: 0.4rem;
    background-color: transparent;
    `

const Footer = () => {
    const imageStyle = {
        backgroundColor: "transparent"
    }

    return ( 
        <Container>
            <FooterDetail>
                {/* <FontAwesomeStyled icon={faLinkedin} />
                <FontAwesomeStyled icon={faGithub} /> */}
                <a href="https://www.linkedin.com/in/john-paul-ruiz-5310bb127/" target="_blank" rel="noopener noreferrer" style={imageStyle}>
                    <FontAwesomeStyled icon={faLinkedin} />
                </a>
                <a href="https://github.com/jpaulruiz" target="_blank" rel="noopener noreferrer" style={imageStyle}>
                    <FontAwesomeStyled icon={faGithub} />
                </a>
            </FooterDetail>
        </Container>
    );
}
 
export default Footer;