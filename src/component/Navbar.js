import styled from "styled-components"
import { Link } from "react-router-dom"
import royceLogo from "../images/royce.PNG"

const Container = styled.div`
    background-color: #131315;
    color: #0d1d2c;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 130px;
    position: fixed;
    z-index: 100;
`

const StyledLink = styled(Link)`
    color: rgb(122, 115, 115);
    background-color: #131315;
    font-size: 16px;
    text-decoration: none;
    padding: 12px;
    border-top: 1px solid rgb(122, 115, 115);
    display: flex;
    justify-content: center;
    transition: 0.3s;

    &:hover {
        color: #D81E5B;
    }
    `

const Navbar = () => {
    return ( 
        <Container>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center",
            paddingBottom: "20px", backgroundColor: "#131315"}}>
                <img src={royceLogo} style={{width: "120px"}}/>
                <span style={{color: "rgb(197, 197, 197)", backgroundColor: "#131315"}}>Web Dev</span>
            </div>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
        </Container>
     );
}
 
export default Navbar;