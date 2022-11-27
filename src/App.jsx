import React from "react";
import MarkdownEditor from "./MarkdownEditor";
class App extends React.Component {
    render() {
        return (
            <React.StrictMode>
                <h1>Markdown Editor (React JSX)</h1>
                <MarkdownEditor />
            </React.StrictMode>
        );
    }
}
export default App;