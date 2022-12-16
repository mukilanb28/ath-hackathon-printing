import React from 'react';
import './App.css';
function CardViewer({ cardInfo,isCardLoading }: { cardInfo: string,isCardLoading:boolean }) {
    return (
        <React.Fragment>
            {!isCardLoading &&
                <div className="cardview-layer">
                    <span>{cardInfo}</span>
                </div>}
            {isCardLoading && 
                <div>CardInfo are Loading....</div> 
            }
        </React.Fragment>
    )
}
export default CardViewer;