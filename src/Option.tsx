import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './App.css';

type Choices = {
    label: string,
    checked: boolean,
}
const OptionComponent = ({ choices,onNextButtonClick }: { choices: Choices[],onNextButtonClick:any }) => {

    const handleChange = ()=>{

    }
    return (
        <React.Fragment>
            <div>
            <FormGroup>
                {choices && choices.map( (row,index) => (
                    <FormControlLabel key={index} control={<Checkbox/>} label={row.label} />
                ))}
            
            </FormGroup>
                
            </div>
        </React.Fragment>
    );
};
export default OptionComponent;
