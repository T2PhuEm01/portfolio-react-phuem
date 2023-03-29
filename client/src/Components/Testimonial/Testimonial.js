import React from 'react'
import "./Testimonial.css"
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Zoom from 'react-reveal/Zoom';

const Testimonial = () => {
    const data = [
        {
          name: "Jon Doe",
          position: "Full stack software developer",
          des: "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    
        {
          name: "Muller",
          position: "UI/UX Designer",
          des: "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/3757004/pexels-photo-3757004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          name: "Charlotte",
          position: "Javascript developer",
          des: "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/2589409/pexels-photo-2589409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
        },
        {
          
          name: "Alexander",
          position: "Node js developer",
          des: "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/2776582/pexels-photo-2776582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
        },
        {
          
          name: "Emily",
          position: "Nuxt js developer",
          des: "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/4498876/pexels-photo-4498876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
        },
    
        {
          
          name: "Elizabeth",
          position: "Next js developer",
          des: "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/884422/pexels-photo-884422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
        },
        {
          
          name: "Jacob",
          position: "Angular js developer",
          des: "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/2962144/pexels-photo-2962144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    
        {
          
          name: "Michael",
          position: "Django developer",
          des: "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
        },
    
        {
          
          name: "Michael",
          position: "Django developer",
          des: "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    
        },
    
        {
          name: "Michael",
          position: "Django developer",
          des: "It is not every day that you come across a passionate and trustworthy financial advisor",
          img: "https://images.pexels.com/photos/11791288/pexels-photo-11791288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
    ];
    
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        adaptiveHeight: true,
        initialSlide: 0,
        autoplay: true,
        rows: 1,
        slidesPerRow: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
    };

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
  return (
    <div className='container testimonial-section' id='testimonial'>
        <div className='section-title'>
            <h5>Testimonial</h5>
            <span className="line"></span>
        </div>

        <div className="testimonial-slider">
            <Slider {...settings}>
                {data.map((item, index) => (
                  <Zoom>
                    <div className="content-slider-main">
                        <div className="content-slider" key={index} style={{backgroundColor:colors[index]}}>
                            <img src={item.img} alt="testimonial image" className="center-image"/>
                            <p>{item.des}</p>
                            <h4>{item.name}</h4>
                            <p>{item.position}</p>
                        </div>
                    </div>
                  </Zoom>
                ))}
            </Slider>
      </div>
    </div>

  )
}

export default Testimonial