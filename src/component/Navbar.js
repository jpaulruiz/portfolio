import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { useState, useEffect  } from "react";

const Container = styled.div`
    background-color: #131315;
    display: flex;
    flex-direction: row;
    height: 5%;
    position: relative;
    z-index: 100;
    top: 2rem;
    left: 2rem;
    background-color: transparent;
`

const StyledLink = styled(Link)`
    color: rgb(122, 115, 115);
    background-color: transparent;
    font-size: 1.2rem;
    text-decoration: none;
    padding: 12px;
    // border-top: 1px solid rgb(122, 115, 115);
    display: flex;
    justify-content: center;
    transition: 0.3s;
    position: relative;

    &:hover {
        color: #D81E5B;
        font-size: 2rem;
        font-weight: bold;
    }

    ${({active}) => {
        return (
            active ? `color: #D81E5B;
                font-size: 1.5rem;
                font-weight: bold;` : '')
    }}

    @media only screen and (max-width: 950px) {
        padding: 5px;
        font-size: 1.1rem;

        &:hover {
            color: #D81E5B;
            font-size: 1.5rem;
            font-weight: bold;
        }

        ${({active}) => {
            return (
                active ? `color: #D81E5B;
                    font-size: 1.3rem;
                    font-weight: bold;` : '')
        }}
    }
`


const Navbar = () => {

    const [activeLink, setActiveLink] = useState("")
    const location = useLocation()

    useEffect ( () => {
        setActiveLink(location.pathname)
    }, [activeLink])

    return ( 
        <Container>
            <StyledLink to="/" active={activeLink === "/"} onClick={() => setActiveLink("/")}>Home</StyledLink>
            <StyledLink to="/about" active={activeLink === "/about"} onClick={() => setActiveLink("/about")}>About</StyledLink>
            <StyledLink to="/experience" active={activeLink === "/experience"} onClick={() => setActiveLink("/experience")}>Experience</StyledLink>
            <StyledLink to="/contact" active={activeLink === "/contact"} onClick={() => setActiveLink("/contact")}>Contact</StyledLink>
        </Container>
     );
}
 
export default Navbar;