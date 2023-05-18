import React from 'react'
import styled from 'styled-components';
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi"


const Project = (props) => {
    // portfolio-yt2\src\components\Images\skinstorePic.png
    const { img, disc, github, deployed, title, techstack } = props.item;
    console.log(techstack);
    return (
        <Container className='project project-card'>

            <img src={img} alt="project" />
            <div className="disc">
                <h1 className='project-title'>{title}</h1>
                <ul style={{display:'flex', gap:'10px', marginLeft:'40px'}} className='project-tech-stack'>
                {
                    techstack.map((elem, ind) => (
                        <h4>{elem}</h4>                     
                    ))
                }
                </ul>
               
                <h2 className='project-description'>Description</h2>

                <p>{disc}
                    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>

                        <a href={deployed} target='_blank' style={{ fontSize: 'large' }} className='project-deployed-link'><BiLinkExternal /></a>
                        <a href={github} style={{ fontSize: 'large' }} className='project-github-link'><AiFillGithub /></a>
                    </div>
                </p>
            </div>
        </Container>
    )
}

export default Project;

const Container = styled.div`
    height: 15 rem;
    width: 15 rem;
    background-color: #4e5156;
    // background-color: red;
    margin: 0 0.5rem;
    padding: 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 400ms ease-in-out;
    }
    .disc{
        position: absolute;
        right: 0;
        left: 0;
        bottom: -10rem;
        text-align: center;
        padding: 0.5rem;
        background: linear-gradient(rgba(0,0,0, 0.100), rgba(0,0,0, 0.80));
        transition: all 400ms ease-in-out;
        h1{
            font-size: 1rem;
        }
        h2{
            font-size: 0.85rem;
            margin-top:10px;
            margin-bottom:-12px;
        }
    
        p{
            width: 90%;
            font-size: 10px;
            margin-bottom:-10px;
            a{
                margin-left: 0.4rem;
                color: teal;
                margin-top:5px;
                
            }
        }
    }

    :hover > img{
        transform: scale(1.3);
        opacity:0.5;
    }

    :hover > .disc{
        bottom: 0;
        text-align:center;
        color:azure;
        font-size:10px;
    }

`