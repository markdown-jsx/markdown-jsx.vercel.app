import React from "react";
import MarkdownEditor from "./MarkdownEditor";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.props.type = String;
    }
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }
    sendErrorStatistics() {
        window.opener = null;
        window.open("https://github.com/yoyomonem/jsx-md-edit/issues/new?assignees=yoyomonem&labels=bug&template=bug_report.md&title=%5BREACT+BUG%5D+The+React+app+itself");
    }
    componentDidCatch(error, errorInfo) {
        sendErrorStatistics();
    }
    render() {
        return (
            <React.StrictMode>
                <h1>Markdown Editor (React JSX)</h1>
                <MarkdownEditor />
                <p>Type: {this.props.type}</p>
            </React.StrictMode>
        );
    }
}
export default App;