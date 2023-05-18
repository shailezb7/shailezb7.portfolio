import React, { useRef } from 'react'
import Slider from 'react-slick';
import Project from './Project';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from 'styled-components';
import skinstorePic from '../Images/skinstorePic.png'
import hotstar from '../Images/hotstar.png';
import expedia from '../Images/expedia.png';


let data = [
    {
      title:'Skinstore-clone',
        img : skinstorePic,
        techstack:['HTML','CSS','Javascript','Local Storage'],
        disc : "🌟  A reimagined front-end of the leading online destination for premium beauty products, featuring over 8000 products across 300+ brands.",
        deployed:"https://tubular-croissant-bbe5cb.netlify.app/",
        github:"https://github.com/saintlypioneer/skinstore-clone"
      },
      {
        title:'Hotstar-clone',
        img : hotstar,
        techstack:['React','Redux','ChakraUI','HTML','CSS'],
        disc : "Ann Indian subscription video on-demand over-the-top streaming service platform.",
        deployed:"https://hotstart-clone.vercel.app/",
        github:"https://github.com/Vishalll069/Hotstar-Clone"
      },
      {
        title:'Expedia-clone',
        img : expedia,
        techstack:['HTML','CSS','Javascript','Bootstrap'],
        disc : " An online travel agency that can be used to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages.",
        deployed:"https://effulgent-crostata-f624a5.netlify.app/",
        github:"https://github.com/seakash1204/expedia_clone"
      }
];

var settings = {
    className: "center",
    centerMode: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    arrows : false,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode : false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          centerMode : false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode : false
        }
      }
    ]
  };
const SliderComp = () => {
  const arrowRef = useRef(null);
    let sliderProject = "";
    sliderProject = data.map((item, i) => (
        <Project item = {item} key={i}/>
    ))
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
      {sliderProject}
      </Slider>
      <Buttons>
        <button 
        onClick={() => arrowRef.current.slickPrev()}
        className='back'><IoIosArrowBack/></button>
        <button 
        onClick={() => arrowRef.current.slickNext()}
        className='next'><IoIosArrowForward/></button>
      </Buttons>
    </Container>
  )
}

export default SliderComp;

const Container = styled.div`
  position: relative;
`

const Buttons = styled.div`
  button{
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.100);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back{
    left: -1rem;
  }
`