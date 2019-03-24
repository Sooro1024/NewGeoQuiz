import React from 'react'
import { Paper, Typography, Divider, Avatar } from '@material-ui/core';

const AboutUs = () => {
  return (
    <Paper elevation={10} style={{margin: '0px 60px', padding: '10px', minHeight: '500px'}}>
        <Typography variant='h4'>About Us</Typography>
        <Divider variant='middle' style={{marginBottom: '25px'}} />
            <Avatar style={{margin: '10px',width: '60px', height: '60px', float: 'left'}} src={require("./GameModComp/sooro.jpg")} />
            <Typography variant='h5'>Suren Gorgoyan</Typography>
            <Divider variant='middle'/>
            <Typography style={{marginBottom: '15px'}} variant='subtitle1'>Email: soorogorgoyan@gmail.com <br/> Git: <a href='https://github.com/Sooro1024'>www.github.com/Sooro1024</a></Typography>
            <Avatar style={{margin: '10px',width: '60px', height: '60px', float: 'left'}} src={require("./GameModComp/mariam.jpg")} />
            <Typography variant='h5'>Mariam Tsaturova</Typography>
            <Divider variant='middle'/>
            <Typography style={{marginBottom: '15px'}} variant='subtitle1'>Email: gilas1987@rambler.ru <br/> Git: <a href='https://github.com/TsMariam'>www.github.com/TsMariam</a></Typography>
            <Avatar style={{margin: '10px',width: '60px', height: '60px', float: 'left'}} src={require("./GameModComp/davit.jpg")} />
            <Typography variant='h5'>Davit Nersisyan</Typography>
            <Divider variant='middle'/>
            <Typography style={{marginBottom: '15px'}} variant='subtitle1'>Email: nersisyan0001@gmail.com <br/> Git: <a href='https://github.com/nersisyan0001'>www.github.com/nersisyan0001</a></Typography>
        <div style={{maxWidth: '600px', textAlign: 'center', margin: '0px auto'}}>
            <Typography variant='h6'>We are grateful!</Typography>
            <Typography variant='subtitle1'>On behalf of our entire team, we want to thank the Armenian Code Academy and of course our tutors</Typography>
            <Typography variant='h6'>Anush Hakobyan,</Typography>
            <Typography variant='h6'>Armen Vardanyan.</Typography>
        </div>
    </Paper>
  )
}

export default AboutUs
