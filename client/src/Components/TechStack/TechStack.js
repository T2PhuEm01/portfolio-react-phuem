import React, {useState} from 'react'
import "./TechStack.css"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const TechStack = () => {

    const data = [
        {
            name: "Full Stack Developer"
        },
        {
            name: "UI/UX Designer"
        },
        {
            name: "Javascript"
        },
        {
            name: "Node JS"
        },
        {
            name: "Nuxt JS"
        },
        {
            name: "Next JS"
        },
        {
            name: "React JS"
        },
        {
            name: "Vue JS"
        },
        {
            name: "Express JS"
        },
        {
            name: "Python"
        },
        {
            name: "Bootstrap"
        },
        {
            name: "CSS"
        },
        {
            name: "React JS Developer"
        },
        {
            name: "Vue JS Developer"
        },
        {
            name: "Node JS Developer"
        },
        {
            name: "Nuxt JS Developer"
        },
        {
            name: "Next JS Developer"
        },
    ]

    const colors = [
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#001CCE",
        "#00C79F",
        "#FFBB24",
        "#FF1042",
        "#F1C40F",
        "#DFFF00",
        "#00FF00",
        "#800000",
        "#0088FE",
        "#00C49F",
        "#FFBB28",
        "#FF8042",
        "#001CCE",
    ]

    const [showMoreTechStack, setshowMoreTechStack] = useState(9);

    const loadMore = () =>{
        setshowMoreTechStack((prev)=>prev+3);
    }
  return (
    <div className='container techstack-section' id='techstack'>

        <div className='section-title'>
            <h5>Tech Stack</h5>
            <span className="line"></span>
        </div>

        <div className='row'>
            {data.slice(0, showMoreTechStack).map((item,index) =>(
                <Fade right>
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                    <div className={index===0?"tech-content-marked tech-content":'tech-content'}>
                        <span className='tech-number' style={{backgroundColor: colors[index]}}>
                            {index+1}
                        </span>
                        <p>{item.name}</p>

                    </div>
                </div>
                </Fade>
            ))}
        </div>

        
            {showMoreTechStack >= data.length ? null: (
            <Zoom>
                <span className='load-more-tech-stack' onClick={loadMore}>
                    Load More
                </span>
            </Zoom>
            )}
        
    </div>
  )
}

export default TechStack