import React from 'react';

import Slider from '@mui/material/Slider';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        gap:'35px'
    },
    thumb:{
        color:"#E26B00"
    },
    rail:{
        color:'rgba(226, 107, 0, 0.45)'
    },
    track:{
        color:"#E26B00"
    },
    option:{
        fontFamily:'Open Sans',
        fontSize:'20px',
        fontWeight:'400'
    },
    optionPrime:{
        color:'rgba(0, 0, 0, 0.45)',
        fontFamily:'Open Sans',
        fontSize:'20px',
        fontWeight:'400'
    },
    Price:{
        listStyleType:'none',
        padding:'0',
        margin:'0',
        display:'flex',
        gap:'20px',
        alignItems: 'centre'
      },
})

const PriceSlider = ({value, changedPrice}) => {
    const classes = useStyles()
    return  <div className={classes.root}>
            <ul className={classes.Price}>
                <li className={classes.option}>Price</li>
                <li className={classes.optionPrime}>0-40,000 USA</li>
            </ul>
            <Slider
                value = {value}
                onChange = {changedPrice}
                valueLabelDisplay='on'
                min={0}
                max={40000}
                classes={{
                    thumb: classes.thumb,
                    rail: classes.rail,
                    track: classes.track
                }}
            />
    </div>
 
}

export default PriceSlider;