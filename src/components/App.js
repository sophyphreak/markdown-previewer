import React from 'react';
import marked from 'marked';
import { Col, Row } from 'reactstrap';

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: "**Markdown Previewer**\n=======\n### Created by Andrew Horn\n------------\nHeading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nUnranked list:\n\n  * Zhuangzi\n  * James P. Carse\n  * Martin Buber\n\nRanked list:\n\n  1. Zhuangzi\n  2. James P. Carse\n  3. Martin Buber\n\nThe rain---not the reign---in\nSpain.\n\n *[James P. Carse](https://en.wikipedia.org/wiki/James_P._Carse)*",
    };
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false
    });
  };
  
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  output() {
    let text = this.state.text;
    let rawMarkup = marked(text);
    return (
      { __html: rawMarkup}
    );
  }
  
  render() {
    return (
      <Row>
        <Col>
          <textarea value={this.state.text} onChange={(e) => this.handleChange(e)}>
          </textarea>
        </Col>
        <Col>
          <span dangerouslySetInnerHTML={this.output()} />
        </Col>
      </Row>
    );
  }
};

export default App;
