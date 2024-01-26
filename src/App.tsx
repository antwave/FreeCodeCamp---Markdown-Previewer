import { useState } from "react";
import "./App.css";
import markdownSample from "./assets/sampleMarkdown.json";
import Markdown from "react-markdown";

function App() {
  const sample = markdownSample[0].md;
  const [md, setMD] = useState<string>(sample);
  return (
    <>
      <div id="background">
        <h1>ANT.WAV's Markdown Previewer</h1>
        <div className="window">
          <label htmlFor="editor">Type your Makrdown here!</label>
          <textarea
            name="Editor"
            id="editor"
            value={md}
            onChange={(e) => setMD(e.target.value)}
          ></textarea>
        </div>
        <div className="window">
          <label htmlFor="preview">Rendered Markdown</label>
          <div id="preview">
            <Markdown>{md}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
