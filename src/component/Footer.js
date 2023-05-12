import styled from "styled-components"
import { useEffect } from "react"
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

    &::after {
        content: "Designed in Figma. Built in Visual Studio Code with HTML, CSS, and ReactJS.";
        font-size: 0.8rem;
        padding-left: 4rem;
    }
`

const FontAwesomeStyled = styled(FontAwesomeIcon)`
    color: #646464;
    width: 2rem;
    height: 2rem;
    padding-left: 0.4rem;
    background-color: transparent;

    &:hover {
        color: #D81E5B;
    }
    `

const LinkStyled = styled.a`
    background-color: transparent;
`

const Footer = () => {

    useEffect(() => {
        const getLinks = Array.from(document.querySelectorAll('a'))
        if (getLinks.length > 0) {
            getLinks.forEach( (link) => {
                    if (link.host !== window.location.host) {
                        link.setAttribute('target','_blank')
                        link.setAttribute('rel','noopener noreferrer')
                    }
                }
            )
        }
    },[])

    return ( 
        <Container>
            <FooterDetail>
                <LinkStyled href="https://www.linkedin.com/in/john-paul-ruiz-5310bb127/">
                    <FontAwesomeStyled icon={faLinkedin} />
                </LinkStyled>
                <LinkStyled href="https://github.com/jpaulruiz">
                    <FontAwesomeStyled icon={faGithub} />
                </LinkStyled>
            </FooterDetail>
        </Container>
    );
}
 
export default Footer;