import React from 'react';
import './App.css';
import Dropdown from './Dropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ setDocName,setShowLeftPane,showLeftPane,docName }: { setDocName: any,setShowLeftPane:any,showLeftPane:boolean,docName:string }) => {
    const ToggelLeftPane = () =>{
        setShowLeftPane(!showLeftPane);
    }
    return (
        <div>
            <div className="dropdown-content">
                <div>
                    <div>
                    <div>Select Document to Load</div>
                    <div className="header-dropdown-pane">
                        <Dropdown setDocName={setDocName}/>
                    </div>
                    </div>
                    {docName && 
                        <div className="bulb-icon">
                            <div onClick={ToggelLeftPane}>
                                <FontAwesomeIcon icon="lightbulb" />
                            </div>
                        </div>
                    }
                    
                </div>
            </div>
        </div>
    )
};
export default Header;