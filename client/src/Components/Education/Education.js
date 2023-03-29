import React from 'react'
import "./Education.css"

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { FaGraduationCap } from "react-icons/fa"
const Education = () => {

    const data = [
        {   
            name: "Oxford University",
            degree: "M.sc in Software Engineering",
            year: "2019-2020",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.",
        },
        {   
            name: "MIT University",
            degree: "B.sc in Software Engineering",
            year: "2020-2021",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.",
        },
        {   
            name: "Cambridge College",
            degree: "College Graduation",
            year: "2021-2022",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.",
        },
        {   
            name: "Queen School",
            degre: "School Graduation",
            year: "2022-2023",
            des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.",
        },
    ]

    const colors = [
        "#ffbb28",
        "#ff8042",
        "#001cce",
        "#00c79f",
    ]

  return (
    <div className='container education-section' id='education'>
        <div className='section-title'>
            <h5>Education</h5>
            <span className="line"></span>
        </div>

        <div className='timeline-section'>
            <VerticalTimeline lineColor='#ff8042'>
                {data.map((item, index ) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: colors[index], color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  #2196f3' }}
                        date={item.year}
                        dateClassName="date-class"
                        iconStyle={{ background: colors[index], color: '#fff' }}
                        icon={<FaGraduationCap />}>
                        <h3 className="vertical-timeline-element-title">
                            {item.name}
                        </h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{color: "yellow"}}>{item.degree}</h4>
                        <p>{item.des}</p>
                    </VerticalTimelineElement>
                ))}

            </VerticalTimeline>
        </div>
    </div>
  )
}

export default Education