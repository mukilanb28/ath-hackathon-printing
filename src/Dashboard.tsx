import React,{ useState,useEffect } from 'react';
import './App.css';
import DocViewer from './DocViewer';
import LabelsPane from './LabelsPane';
import Header from './Header';

function Dashboard(){
    const [docName, setDocName] = useState("");
    const [showLeftPane, setShowLeftPane] = useState(false);
    const [isDocLoading, setIsDocLoading] = useState(false);

    return (
    <div className="dashboard-layer container container-flex-column">
        <div className="flex-row header">
            <Header setDocName={setDocName} docName={docName} setShowLeftPane={setShowLeftPane} showLeftPane={showLeftPane}/>
        </div>

        <div className={"flex-row content-pane " + (docName ? "dashboard-view " : "empty-doc ") + (isDocLoading ? "loader-enabled" : "loader-disabled")}>

            <div className="container container-flex-row">
                <div className="flex-column docview">
                    <DocViewer 
                        docName={docName}
                        isDocLoading = {isDocLoading}
                        setIsDocLoading = {setIsDocLoading}
                    />
                </div>
                {docName && showLeftPane &&
                    <div className="flex-column labelview">
                        <LabelsPane docName={docName}/>
                    </div>
                }
            </div>

        </div>

        
    </div>
    )
}
export default Dashboard;