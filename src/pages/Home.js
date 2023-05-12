import styled from "styled-components";
import "./Home.css"
import imageDisplay from "../images/gradpic.JPG"

const Container = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (min-width: 1400px) {
        justify-content: center;
        
        .greetings {
            flex: 0;
            width: 710px;
            padding-right: 2rem;
        }
        .image {
            flex: 0;
            width: 500px;
        }
        .image-holder {
            padding-left: 2rem;
        }
    }

    @media only screen and (max-width: 950px) {
        flex-direction: column-reverse;

        .animated-text {
            font-size: 10vw;
            padding: 0;
        }

        .greetings {
            margin-top: 0;
            margin-bottom: 4rem;
            width: 20rem;
        }

        .image {
            margin-top: 4rem;
        }

        .image-ax {
            filter: grayscale(0%);
        }

        .image-holder {
            border-left: none;
        }

        .greet-first, .greet-second, .greet-third, .greet-fourth {
            font-size: 5vw;
            width: 75vw;
        }
    }
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
                    <span style={{color: "#D81E5B", fontSize: "1rem"}}>johnpaulmruiz@gmail.com</span> 
                </div>
            </div>
        </Container>
    )
}
 
export default Home;