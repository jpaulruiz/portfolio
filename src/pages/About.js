import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5,faCss3Alt,faJs,faPhp,faReact,faGit,faSourcetree } from '@fortawesome/free-brands-svg-icons'

import "./About.css"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    `

const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1.4;
    position: relative;
    margin-top: 8rem;
    margin-left: 6.3rem;
    background-color: transparent;
    `

const StackContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 400px;
    height: 400px;
    background-color: transparent;
    `

const FontAwesomeStyled = styled(FontAwesomeIcon)`
    color: #646464;
    width: 50px;
    height: 50px;
    background-color: transparent;
    padding: 4px;
    `

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
            <AboutMe style={{flex: "1.3"}}>
                <h2 className="about-me">Tech-Stack</h2>
                <StackContainer>
                    <FontAwesomeStyled icon={faHtml5} />
                    <FontAwesomeStyled icon={faCss3Alt} />
                    <FontAwesomeStyled icon={faJs}/>
                    <FontAwesomeStyled icon={faReact} />
                    <FontAwesomeStyled icon={faPhp}/>
                    <FontAwesomeStyled icon={faGit}/>
                    <FontAwesomeStyled icon={faSourcetree}/>
                </StackContainer>
            </AboutMe>
        </Container>
    );
}
 
export default About;