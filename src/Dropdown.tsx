import React, { useState,useEffect } from 'react';
import AsyncSelect from 'react-select';
import AjaxService from "./AjaxService";

export type DropDownValueType  = {
  value:string;
  label: string;
}
const Checkbox = ({ children, ...props }: JSX.IntrinsicElements['input']) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);



export default ({ setDocName }: { setDocName: any }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [docNames, setDocNames] = useState<DropDownValueType[]>();

  const LoadDocumentNames = async () =>{
    const docNamesTemp :string[] = await AjaxService.getDocumentNames();
    const docNameArr :DropDownValueType[] = [];
    docNamesTemp.forEach((docName:string)=>{
      docNameArr.push({value:docName, label:docName});
    });
    setDocNames(docNameArr);
  }
  
  const onChange = (event:any) =>{
    setDocName(event.value);
  }

  useEffect(()=>{
    setIsLoading(true);
    LoadDocumentNames();
    setIsLoading(false);
  },[])
  return (
    <>
      <AsyncSelect
        className="basic-single"
        classNamePrefix="select"
        isLoading={isLoading}
        isClearable={false}
        isSearchable={true}
        name="color"
        options={docNames}
        isMulti={false}
        placeholder="--- Document Name ---"
        loadingMessage={() => "BAR"}
        noOptionsMessage={() => "No Matching found"}
        onChange={onChange}
      />

      
    </>
  );
  
}
  
