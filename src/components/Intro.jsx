import peopleFishing from '../assets/people-fishing.jpg';
import Navbar from './Navbar';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';


const IntroBackground = styled(Box)({
    width: "100%",
    height: "100%",
    backgroundImage: `url(${peopleFishing})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    display: 'flex', 
    // justifyContent: 'center',
    // alignContent: 'center',
    flexDirection: 'column',
    border: 'solid',
    borderColor: 'orange'


})

const IntroText = styled(Box) ({
    width: "75%",
    display: 'flex',
    flexDirection: 'column',
    alignSelf: 'center',

    border: 'solid',
    borderColor: 'red',

})

const IntroButtons = styled(Button) ({
    width: '10rem',
    fontFamily: 'Fira Sans',
    color: '#FDF6EA',
    borderRadius: '5%'

})


function Intro() {

    return(
        <IntroBackground id='home'>
            <Navbar />
            
            <IntroText sx={{margin: { xs: '5rem', sm: '8rem', md: '15rem'}}}>
                <Typography fontFamily={'Fira Sans'} sx={{textAlign: 'center', color: '#FDF6EA', fontSize: '5rem'}} >
                    Revolutionizing The Way You Fish
                </Typography>

                <Box sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <IntroButtons variant="contained" sx={{backgroundColor: "#FF8C00"}}>
                        About Us
                    </IntroButtons>

                    <IntroButtons variant="contained" sx={{backgroundColor: "#FF8C00"}}>
                        Our Products
                    </IntroButtons>
                </Box>    

            </IntroText>

        </IntroBackground>
        
    )
}

export default Intro;