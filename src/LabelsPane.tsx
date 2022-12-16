import React,{ useState,useEffect } from 'react';
import './App.css';
import CardViewer from './CardViewer';
import Labels from './Labels';
import CardHolder from './CardHolder';
import AjaxService from "./AjaxService";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

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
function LabelsPane({ docName }: { docName: string }){

    const [labelIndex, setlabelIndex] = useState(0);
    const [cardInfo, setCardInfo] = useState<CardHolderProps[]>([]);
    const [isCardLoading, setIsCardLoading] = useState<boolean>(false);


    const LoadCardInfo = async ()=>{
        setIsCardLoading(true);
        const cardData :CardHolderProps = await AjaxService.getCardInfo(docName, labelIndex);
        cardInfo.push(cardData);
        setCardInfo(cardInfo);
        setIsCardLoading(false);
    }

    const ButtonOnclick = () =>{
        setlabelIndex(labelIndex+1);
        LoadCardInfo();
    }

    
    useEffect(()=>{
        if(docName){
            setlabelIndex(0);
            LoadCardInfo();
        }
    },[docName]);

    const OnCheckBoxClicked = (e:any,card:CardHolderProps, choice:Choice, index:number)=>{
        setlabelIndex(labelIndex+1);
        LoadCardInfo();
        
    }
    return (
    <div>
        <div>
            <CardHolder cards={cardInfo} OnCheckBoxClicked={OnCheckBoxClicked}/>
        </div>
    </div>
    )
}
export default LabelsPane;