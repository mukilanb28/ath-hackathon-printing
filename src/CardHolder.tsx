import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material';
import React,{ useState,useEffect } from 'react';
import './App.css';

interface Choice{
    id:number,
    label:string,
}
interface CardHolderProps{
    Question :string,
    choices :Choice[],
    cardInfo :string,
    isMultiChoice :boolean,
}
function CardHolder({cards,OnCheckBoxClicked} : {cards:CardHolderProps[],OnCheckBoxClicked:any}){
    const onChange = (event:any, card:CardHolderProps, choice:Choice, index:number)=>{
        OnCheckBoxClicked(event, card, choice, index);
    }
    return(
        <React.Fragment>
            {cards.map( (card,iindex) => (
                <div key={iindex} className="card-holder-layer">
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">{card.Question}</FormLabel>
                    <div>
                        <i>{card.cardInfo}</i>
                    </div>
                    {!card.isMultiChoice &&
                        <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="male"
                        name="radio-buttons-group"
                        >
                            {card.choices.map( (choice, index) => (
                                <FormControlLabel key={index} value={choice.label} control={<Radio />} label={choice.label} onChange = {(e)=>onChange(e,card,choice,iindex)}/>    
                            ))}
                      </RadioGroup>
                    }
                    {card.isMultiChoice &&
                        <FormGroup>
                            {card.choices.map( (choice, index) => (
                            <FormControlLabel key={index} control={<Checkbox />} label={choice.label} onChange = {(e)=>onChange(e,card,choice,iindex)}/>
                        ))}
                      </FormGroup>
                    }
                </FormControl>
                </div>
            ))}
                        
        </React.Fragment>
    )
}
export default CardHolder;