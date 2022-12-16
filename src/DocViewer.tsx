import React,{ useState,useEffect } from 'react';
import './App.css';
import AjaxService from "./AjaxService";

function DocViewer({ docName,isDocLoading,setIsDocLoading }: { docName: string,isDocLoading:boolean,setIsDocLoading:any }){

    const [images, setImages] = useState<string[]>([]);

    const LoadImages = async () =>{
        setIsDocLoading(true);
        const imagesArr = await AjaxService.getImages(docName);
        setImages(imagesArr || []);
        setIsDocLoading(false);
    }
    useEffect(()=>{
        if(docName){
            LoadImages();
        }
    },[docName])
    return (
        <div>
            <React.Fragment>
                {!isDocLoading && images && images.map( (image, index) =>(
                    <img key={index} src={image} alt="Red dot" />
                ))}
                {images.length == 0 && !isDocLoading &&
                    <div className="empty-doc-msg">
                        <div>No Documents Loaded</div>
                        <div>Please choose any documents from the above dropdown</div>
                    </div>
                }
                {isDocLoading && 
                    <div className="image-loader">
                        Loading images.......
                    </div>
                }
            </React.Fragment>
            
        </div>
    )
}
export default DocViewer;