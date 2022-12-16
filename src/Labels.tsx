import React, { useState,useEffect } from 'react';
import './App.css';
import Option from './Option';

interface LabelProps {
    question : string;
    choices : string[];
}
type Choices = {
    label: string,
    checked: boolean,
}
function Labels({ question, choices,onNextButtonClick,isQuestionLoading }: { question: string, choices: Choices[], onNextButtonClick:any,isQuestionLoading:boolean }){
    return (
        <React.Fragment>
            {!isQuestionLoading &&
                <div>
                <div className="label-layer">
                    <div>{question}</div>
                    <Option choices={choices} onNextButtonClick={onNextButtonClick}/>
                </div>
                
            </div>
            }
            {isQuestionLoading &&
                <div>
                    Labels are Loading....
                </div>
            }
        </React.Fragment>
    
    
    )
}
export default Labels;