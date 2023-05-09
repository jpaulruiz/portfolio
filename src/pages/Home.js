import styled from "styled-components";
import "./Home.css"
import imageDisplay from "../images/gradpic.JPG"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    `

const Home = () => {
    return ( 
        <Container>
            <div className="greetings">
                <span className="greet-first">Hi!</span>
                <span className="greet-second">I'm John Paul Ruiz.</span>
                <span className="greet-third">you can call me</span>
                <span className="animated-text">ROYCE</span>
                <span className="greet-fourth">
                    A software engineer who wants to build innovative software solutions efficiently.
                </span>
            </div>
            <div className="image">
                <div className="image-holder">
                    <div className="image-layout">
                        <img src={imageDisplay} className="image-ax"/>
                        <div className="image-bx"></div>
                    </div>
                    <span style={{color: "#D81E5B", fontSize: "14px"}}>johnpaulmruiz@gmail.com</span> 
                </div>
            </div>
        </Container>
    )
}
 
export default Home;