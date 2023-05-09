import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5,faCss3Alt,faJs,faPhp,faReact,faGit,faSourcetree} from '@fortawesome/free-brands-svg-icons'
import actionScript from "../images/as3.png"
import "./About.css"

const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    margin-left: 130px;
    `

const AboutMe = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1.4;
    position: relative;
    padding-top: 100px;
    padding-left: 30px;
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

const ImageHolder = styled.img`
    color: #646464;
    width: 50px;
    height: 50px;
    background-color: transparent;
    padding: 4px;
    filter: grayscale(100%) brightness(20%);
    `
const About = () => {
    return ( 
        <Container>
            <AboutMe>
                <h2 className="about-me">About Me</h2>
                <section>
                    <p style={{wordWrap: "break-word"}}>Hi! I'm Royce and I enjoy coding. I graduated in University of San Carlos
                    in BS Computer Engineering. I started my professional experience in
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
                    {/* <ImageHolder src={actionScript}/> */}
                </StackContainer>
            </AboutMe>
        </Container>
    );
}
 
export default About;