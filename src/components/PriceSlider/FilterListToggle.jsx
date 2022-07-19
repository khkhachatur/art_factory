import React from 'react';

import  Select  from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import  ToggleButtonGroup  from '@mui/material/ToggleButtonGroup';

const useStyles = makeStyles({
    root:{
        width:'100%'
    },
    sortBy:{
        width:'185px',
        height:'40px',
        padding:'4px 8px',
        fontFamily:'Open Sans',
        fontSize:'20px',
        fontWeight:'400',
        border:'1px solid rgba(196, 196, 196, 0.7)',
    },
}) 

const FilterListToggle = ({ options, value, selectToggle}) => {
    const classes = useStyles()
    return (
        <ToggleButtonGroup
            value={value}
            onChange={selectToggle}
            className={classes.root}
            exclusive
        >
                <Select className={classes.sortBy}  >
                    {options.map(({label, id, value}) => (
                        <MenuItem key={id} value={value}>{label}</MenuItem>
                        ))}
                </Select>
        </ToggleButtonGroup>
    );
}

export default FilterListToggle;