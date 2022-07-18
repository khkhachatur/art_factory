import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root:{
        width:'100%',
        display:'flex',
        flexDirection:'column',
        gap:'35px'
    },
    
})

const Search = ({value, searchToggle}) => {

    const classes = useStyles()

    return  <div className={classes.root}>
                <div className={classes.searchSection}>
                    <input 
                    value={value}
                    type="text" 
                    placeholder="Search by name" 
                    onChange={searchToggle} 
                    style={
                        {opacity:'0.7',
                        width:'350px',
                        height:'40px', 
                        fontSize:'24px',
                        fontWeight:'400'
                    }}/>
                </div>
    </div>
 
}

export default Search;


