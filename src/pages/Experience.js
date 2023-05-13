import styled from "styled-components";
import { useEffect } from "react";
import "./Experience.css"


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    @media only screen and (max-width: 950px) {
        flex-direction: column;
        width: 75vw;
    }

    
    `

const companyName = [
    "Alliance Software Inc.",
    "Advanced World Solution Inc."
]

const companyDetail = [
    {
      title: "Lead Maintenance Engineer",
      duration: "April 2021 - April 2023",
      description: [
        "Worked on enterprise retail system. A web-based POS application using SaaS architecture.",
        {
          descriptionTitle:
            "Developed customizations on the POS application based on clients' individual requests.",
          descriptionDetail: [
            "Integrated QR code from the device's scanner to the POS application.",
            "Added custom feature to add order limit per product on registered customer.",
            "Developed a feature to automate sending of generated reports from POS to client's server.",
            "Developed custom reports according to business requirements.",
          ],
        },
        "Investigate or troubleshoot to determine the root cause of application and data issue.",
        "Refactored system logical operations to optimize application processes in POS.",
        "Optimized SQL queries to prevent heavy consumption of server's resources.",
      ],
    },
    {
      title: "On-the-job Trainee",
      duration: "June - August 2019",
      description: [
        "Worked along with Research & Development developers with the task to do unit testing on their deliverables.",
        "Created software documentation for unit testing.",
      ],
    },
  ]

const handleClick = (e) => {
    //change style when clicked
    //clean up first before set
    const companyDiv = document.querySelectorAll("[id^='company-']")
    companyDiv.forEach( (company) => {
            company.style.color = ""
            company.style.backgroundColor = ""
            company.style.borderLeft = ""
        }
    )

    //get selected company
    const buttonId = document.getElementById(e.target.id)
    //set style
    buttonId.style.color = "white"
    buttonId.style.backgroundColor = "#2B2B2D"
    buttonId.style.borderLeft = "0.2rem solid white"

    //get selected panel
    const suffixId = buttonId.id.match(/\d+/)[0]
    const panelId = document.getElementById("panel-"+suffixId)

    //set hidden to false on selected company only
    const panelDivs = document.querySelectorAll("[id^='panel-']")
    panelDivs.forEach( (divs) => {
            divs.hidden = true
            if (panelId.id === divs.id) panelId.hidden = false
        }
    )
}

const setCompany = () => {
    return companyName.map( (company,i) => {
        return <button id={"company-"+i} onClick={handleClick}>{company}</button>
    })
}

const setDetailJSX = ({title, duration, description},i) => {
    return (
        <div id={"panel-"+i} hidden={true}>
            <h2>{title}</h2>
            <span>{duration}</span>
            <ul>
                {description.map((desc) =>
                    typeof desc === "object" ? (
                        <li key={desc.descriptionTitle}>
                            {desc.descriptionTitle}
                            <ul>
                                {desc.descriptionDetail.map((subDesc, index) => (
                                <li key={index}>{subDesc}</li>
                                ))}
                            </ul>
                        </li>
                    ) : (
                        <li key={desc}>{desc}</li>
                    )
                )}
            </ul>
        </div>
    )
}

const setDetail = (list) => {
    return (
        list.map((detail,i) => {
            return setDetailJSX(detail,i)
        })
    )
}

const Experience = () => {

    useEffect( () => {
        const buttonId = document.getElementById("company-0")
        buttonId.style.color = "white"
        buttonId.style.backgroundColor = "#2B2B2D"
        buttonId.style.borderLeft = "0.2rem solid white"
        document.getElementById("panel-0").hidden = false
    },[])

    return ( 
        <Container>
            <section className="tab-choices">
                {setCompany()}
            </section>
            <section className="tab-panel">
                {setDetail(companyDetail)}
            </section>
        </Container>
    )
}
 
export default Experience;