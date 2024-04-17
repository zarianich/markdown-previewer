document.documentElement.setAttribute('data-bs-theme', 'dark');

marked.setOptions({
  breaks: true,
  highlight: code => {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  } });


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { class: "container-fluid py-5 px-4" }, /*#__PURE__*/
      React.createElement("div", { class: "accordion accordion-flush" }, /*#__PURE__*/
      React.createElement("div", { class: "accordion-item border-0" }, /*#__PURE__*/
      React.createElement("h2", { class: "accordion-header" }, /*#__PURE__*/
      React.createElement("button", { class: "accordion-button", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#editor-panel", "aria-expanded": "true", "aria-controls": "editor-panel" }, "Editor")), /*#__PURE__*/



      React.createElement("div", { id: "editor-panel", class: "accordion-collapse collapse show" }, /*#__PURE__*/
      React.createElement("div", { class: "accordion-body" }, /*#__PURE__*/
      React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })))), /*#__PURE__*/



      React.createElement("div", { class: "accordion-item border-0" }, /*#__PURE__*/
      React.createElement("h2", { class: "accordion-header" }, /*#__PURE__*/
      React.createElement("button", { class: "accordion-button", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#preview-panel", "aria-expanded": "true", "aria-controls": "preview-panel" }, "Previewer")), /*#__PURE__*/



      React.createElement("div", { id: "preview-panel", class: "accordion-collapse collapse show" }, /*#__PURE__*/
      React.createElement("div", { class: "accordion-body bg-body-tertiary" }, /*#__PURE__*/
      React.createElement(Previewer, { markdown: this.state.markdown })))))));






  }}


const Editor = props => {
  return /*#__PURE__*/(
    React.createElement("textarea", {
      id: "editor",
      onChange: props.onChange,
      type: "text",
      value: props.markdown,
      class: "w-100 border-0 px-4 py-3",
      rows: "10" }));


};

const Previewer = props => {
  return /*#__PURE__*/(
    React.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: DOMPurify.sanitize(marked(props.markdown, { renderer: renderer })) },

      id: "preview" }));


};

//credit for placeholder: https://codepen.io/freeCodeCamp/pen/GrZVVO?editors=1010
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));