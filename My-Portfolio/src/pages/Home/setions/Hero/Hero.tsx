import { styled } from "@mui/material"
import Avatar from "../../../../assets/images/avatar.jpg"

const Hero = () => {

    const StyledHero =styled ("div")(()=> ({
        backgroubdColor: "black"
    
    }))

    const StyledImg =styled ("img")(()=> ({
     width "30%",
     borderRadius: "50%"   

   }))

   return (
      <>
        <StyledHero>  
        ola
        <img src={ Avatar}/>
         </StyledHero>
      </>
      
    )
  }
  
  export default Hero