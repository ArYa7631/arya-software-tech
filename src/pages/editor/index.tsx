import React from "react"
import { CustomEditor } from "@/components/custom-editor";
import { dummy_editor_data } from "@/constants/dummyData";

const Editor = () => {
  const editorSubmitHandler=(res:any)=>{
    debugger

  }
  return (
    <div>
     <CustomEditor onSubmit={editorSubmitHandler} readOnly={false} editorData={dummy_editor_data}/>
    </div>
  )
};

export default Editor;
