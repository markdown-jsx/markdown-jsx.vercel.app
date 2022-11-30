"use strict";
import React from "react";
import MarkdownEditor from "./MarkdownEditor";
class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.props.attribs.type = String;
    }
    static getDerivedStateFromError(error) {
        this.state.hasError = true;
        return this.state.hasError;
    }
    sendErrorStatistics() {
        window.opener = null;
        window.open("https://github.com/yoyomonem/jsx-md-edit/issues/new?assignees=yoyomonem&labels=bug&template=bug_report.md&title=%5BREACT+BUG%5D+The+React+app+itself");
    }
    componentDidCatch(error, errorInfo) {
        sendErrorStatistics();
    }
    render() {
        if (this.state.hasError) {
                return (
                    <div>
                        <h2>Something went wrong.</h2>
                        <div id="actualResult">
                            <h1>Actual result:</h1>
                            <h2>Markdown Editor (React JSX)</h2>
                            <MarkdownEditor />
                            <p>Type: {this.props.type}</p>
                        </div>
                    </div>
                );
        }
        return (
            <div>
                <h1>Markdown Editor (React JSX)</h1>
                <MarkdownEditor />
                <p>Type: {this.props.type}</p>
            </div>
        );
    }
}
export default App;