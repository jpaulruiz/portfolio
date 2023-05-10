import styled from "styled-components"
import { Link } from "react-router-dom"
import { useState } from "react";

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

const StyledLink = styled(Link)(({ active }) => `
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

    ${ active ? `
        color: #D81E5B;
        font-size: 1.5rem;
        font-weight: bold;
    ` : ''}
`)


const Navbar = () => {
    
    const [activeLink, setActiveLink] = useState("/")

    return ( 
        <Container>
            <StyledLink to="/" active={activeLink === "/"} onClick={() => setActiveLink("/")}>Home</StyledLink>
            <StyledLink to="/about" active={activeLink === "/about"} onClick={() => setActiveLink("/about")}>About</StyledLink>
            <StyledLink to="/contact" active={activeLink === "/contact"} onClick={() => setActiveLink("/contact")}>Contact</StyledLink>
        </Container>
     );
}
 
export default Navbar;