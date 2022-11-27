import React from "react";
import MarkdownIt from "markdown-it";
/** Markdown Editor */
class MarkdownEditor extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.md = new MarkdownIt();
        this.state = { 
            value: "Hello, __world__!"
        };
    }
    /**
     * @param {KeyboardEvent} e `KeyboardEvent` objects describe a user interaction with the keyboard; each event describes a single interaction between the user and a key (or combination of a key with modifier keys) on the keyboard.
     */
    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    getRawMarkup() {
        return { __html: this.md.render(this.state.value) };
    }

    render() {
      return (
        <div className="MarkdownEditor">
            <h2>Input</h2>
            <label htmlFor="markdown-content">Type some Markdown stuff below:</label>
            <br />
            <textarea
                id="markdown-content"
                onChange={this.handleChange}
                defaultValue={this.state.value}
            />
            <h2>Output</h2>
            <div
                className="content"
                dangerouslySetInnerHTML={this.getRawMarkup()}
            />
        </div>
      );
    }
}
export default MarkdownEditor;