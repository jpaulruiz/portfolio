import styled from "styled-components"
import { useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5,faCss3Alt,faJs,faPhp,faReact,faGit,faSourcetree,faFigma } from '@fortawesome/free-brands-svg-icons'

import "./About.css"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media only screen and (max-width: 1100px) {
        flex-direction: column;
        align-items: center;
    }
    `

const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    margin-top: 8rem;
    margin-left: 6.3rem;
    background-color: transparent;

    @media only screen and (min-width: 1400px) {
        flex: none;
        width: 600px;
    }

    @media only screen and (max-width: 1100px) {
        flex: none;
        font-size: 1rem;
        width: 75vw;
        margin-left: 0;

        section {
            line-height: 2rem;
        }
    }
    `

const StackContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 75%;
    background-color: transparent;

    @media only screen and (max-width: 1100px) {
        margin-bottom: 4rem;
    }
    `

const FontAwesomeStyled = styled(FontAwesomeIcon)`
    color: #646464;
    width: 50px;
    height: 50px;
    background-color: transparent;
    padding: 4px;
    `

const styledDiv = {
    display: "flex",
    alignItems: "center",
    color: "#646464",
    height: "50px",
    backgroundColor: "transparent",
    padding: "4px",
    fontSize: "1.5rem",
    fontWeight: "bold",
}

const About = () => {
    return ( 
        <Container>
            <AboutMe>
                <h2 className="about-me">About Me</h2>
                <section>
                    <p style={{wordWrap: "break-word"}}>Hi! I'm Royce and I enjoy coding. I graduated in BS Computer Engineering
                    at University of San Carlos. I started my professional experience in
                    AWS (Advanced World Solutions) as OJT for 3 months. Then, I became Technical
                    Specialist II in ASI (Alliance Software Inc.) and stayed there for 2 years.
                    </p>
                </section>
                <section>
                    <p>
                    In that 2 years, I was a maintenance engineer on both front-end and back-end (Full-stack).
                    Later on, I became a tech-lead providing consultations and mentorship.
                    </p>
                </section>
            </AboutMe>
            <AboutMe>
                <h2 className="about-me">Tech Stack</h2>
                <StackContainer>
                    <FontAwesomeStyled icon={faHtml5} />
                    <FontAwesomeStyled icon={faCss3Alt} />
                    <FontAwesomeStyled icon={faJs}/>
                    <FontAwesomeStyled icon={faReact} />
                    <FontAwesomeStyled icon={faPhp}/>
                    <FontAwesomeStyled icon={faGit}/>
                    <FontAwesomeStyled icon={faSourcetree}/>
                    <FontAwesomeStyled icon={faFigma}/>
                    <div style={styledDiv}>ActionScript3.0</div>
                    <div style={styledDiv}>MySQL</div>
                </StackContainer>
            </AboutMe>
        </Container>
    );
}
 
export default About;