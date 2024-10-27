'use client'

import {useState} from "react";
import MdEditor from 'react-markdown-editor-lite'
import "react-markdown-editor-lite/lib/index.css";
import ReactMarkdown from 'react-markdown'

export default function Editor({name,defaultValue}) {
    const [markdownContent,setMarkdownContent] = useState('')

    const handleEditorChange =({html, text})=>{
        setMarkdownContent(text)
    }
    return (
        <div>
            <h1>Write</h1>
            <div>
                <MdEditor
                    renderHTML={(text) => <ReactMarkdown>{text}</ReactMarkdown>}
                    value={markdownContent}
                    onChange={handleEditorChange}
                />
                <input type="hidden" name={name} value={markdownContent}/>
            </div>
        </div>
    );
}