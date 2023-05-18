import React from 'react'
import { Box,Center,Container,SimpleGrid,Text } from '@chakra-ui/react'
import {DiMongodb, DiHtml5} from 'react-icons/di'
import {SiExpress,SiCss3, SiRedux, SiTailwindcss,SiJavascript,SiReact} from 'react-icons/si'
import {FaNodeJs , FaJava} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs'
import Github from './Github'

import './skills.css';

const Skills = () => {
  return (
    <Box width={'80%'}  margin={'auto'} bg={'rgb(44,45,55)'} className='nav-link skills' id='skills'>
        <SimpleGrid columns={3} spacing={'50px'}>
        <Box><Box><DiHtml5 className='skills-card-img' color='rgb(233,98,40)'/></Box>
         <Text color='rgb(197,246,247)' fontSize='2xl' ml={'20px'} className='skills-card-name'> HTML</Text>
        </Box>
        <Box><SiCss3 className='skills-card-img' color='rgb(42,98,233)'/>
        <Text color='rgb(197,246,247)' fontSize='2xl' ml={'20px'} className='skills-card-name'>CSS</Text></Box>
        <Box><SiJavascript className='skills-card-img' color='rgb(238,215,31)'/>
        <Text color='rgb(197,246,247)' fontSize='2xl' className='skills-card-name'>JavaScript</Text></Box>
        <Box><SiReact className='skills-card-img' color='rgb(3,209,247)'/>
        <Text color='rgb(197,246,247)' fontSize='2xl' ml={'20px'} className='skills-card-name'>React</Text></Box>
        <Box><FaJava className='skills-card-img' color='red' margin='50px'/>
        <Text color='rgb(197,246,247)' fontSize='2xl' ml={'20px'} className='skills-card-name'>Java</Text></Box>
        <Box><DiMongodb className='skills-card-img' color='green'/>
        <Text color='rgb(197,246,247)' fontSize='2xl' className='skills-card-name'>MondoDB</Text></Box>
        <Box><SiExpress className='skills-card-img' color='rgb(232,247,247)'/>
        <Text color='rgb(197,246,247)' fontSize='2xl' className='skills-card-name'>Express JS</Text></Box>
        <Box><SiRedux className='skills-card-img' color='purple'/>
        <Text color='rgb(197,246,247)' fontSize='2xl' ml={'20px'} className='skills-card-name'> Redux</Text></Box>
        <Box><SiTailwindcss className='skills-card-img' color='rgb(3,209,247)'/>
        <Text color='rgb(197,246,247)' fontSize='2xl' className='skills-card-name'>Tailwind</Text></Box>
        <Box><FaNodeJs className='skills-card-img' color='rgb(34,174,90)'/>
        <Text color='rgb(197,246,247)' fontSize='2xl' ml={'10px'} className='skills-card-name'>Node JS</Text></Box>
        <Box><BsGithub className='skills-card-img' color='black'/>
        <Text color='rgb(197,246,247)' fontSize='2xl' ml={'20px'} className='skills-card-name'>Github</Text></Box>
    </SimpleGrid>
    {/* <Github/> */}
    </Box>

    
//       <section class="services" id="services">
//     <h2 class="heading"><span>S</span>kills</h2>
//     <div class="services-container">
//         <div class="services-box" >
//             <!-- <i class="fa-brands fa-html5  " style="color: #03e4f5;"></i> -->
//             <img src="https://abhishek07788.github.io/static/media/html.8664168d5bc90b1a24396f85aadbf623.svg" width="28%" alt=""/>
           
//             <h3>HTML</h3>
//         </div>
        
//         <div class="services-box">
//             <!-- <i class="fa-brands fa-css3-alt " style="color: #03e4f5;"></i> -->
//             <img src="https://abhishek07788.github.io/static/media/css.39769a8bd378bf410d6b381a8d88fa35.svg" width="28%" alt=""/>
//             <h3>CSS</h3>
//         </div>
        
        
//         <div class="services-box">
//             <!-- <i class="fa-brands fa-js fa-css3-alt " style="color: #03e4f5;"></i> -->
//             <img src="https://abhishek07788.github.io/static/media/javascript.4c1b5332c1b1057928f6f06cf972c91c.svg" width="28%" alt=""/>
//             <h3>JavaScript</h3>
//         </div>
//         <div class="services-box">
//             <i class="fa-brands fa-react fa-css3-alt " style="color: #03e4f5;"></i>
//             <h3>React</h3>
//         </div>
//         <div class="services-box">
//             <!-- <i class="fa-solid fa-bolt fa-css3-alt fa-beat" style="color: #03e4f5;"></i> -->
//             <img src="https://abhishek07788.github.io/static/media/chakraui.15320604467d004df871.png" width="28%" >alt=""</img>>
//             <!-- <i class="fa-solid fa-bolt "></i> -->
//             <h3>Chakra UI</h3>
//         </div>
//         <div class="services-box">
//             <!-- <i class="fa-brands fa-java "></i> <h3>Java</h3> -->
//             <img src="https://www.svgrepo.com/show/184143/java.svg" width="28%" alt=""/>
//             <h3>Java</h3>
//         </div>
//         <div class="services-box">
//             <!-- <i class="fa-brands fa-node-js "></i> -->
//             <img src="https://abhishek07788.github.io/static/media/nodejs.10c9e2aa0ca7edf36fceae25fec038a1.svg" width="28%" alt=""/>
//             <h3>Node JS</h3>
//         </div>
//         <div class="services-box">
//             <img src="./svgs/express.svg" width="30%"/>
//             <h3>Express JS</h3>
//         </div>
//         <div class="services-box">
//             <!-- <i class="fa-solid fa-database "></i> -->
//             <img src="https://abhishek07788.github.io/static/media/mongodb.6835c61a518a732eb8318d43dfe8f700.svg" width="28%" alt=""/>
//             <h3>MongoDB</h3>
//         </div>
//         <div class="services-box">
//            <img src="./svgs/redux.svg" width="30%"/>
//             <h3>Redux</h3>
//         </div>
//         <div class="services-box">
//             <i class="fa-brands fa-github"></i>
//             <h3>Git</h3>
//         </div>
//         <div class="services-box">
//             <img src="./svgs/mern.svg"  width="50%"/>
//             <h3>MERN</h3>
//         </div>
//         <div class="blob"></div>
//     </div>
    
// </section>
  )
}

export default Skills