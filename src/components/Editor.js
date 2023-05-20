import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";

const Editorsec = () => {
  const [editorstate, setEditorstate] = useState(EditorState.createEmpty());
  const onEditorStateChange = (editorstate) => {
    setEditorstate(editorstate);
  };
  return (
    <>
      <div className="text-editor-main">
        <Editor
          editorstate={editorstate}
          onEditorStateChange={onEditorStateChange}
          toolbarClassName="d-flex justify-content-center texteditor-toolbar"
          editorClassName="mt-6 text-editor"
        />
      </div>
    </>
  );
};

export default Editorsec;
