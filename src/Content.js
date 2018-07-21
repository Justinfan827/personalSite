import React, { Component } from "react";
import { Document, Page } from "react-pdf/dist/entry.webpack";

class Content extends Component {
  state = {
    pageNumber: 1
  };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  render() {
    const { pageNumber } = this.state;

    return (
      <Document
        file="./Justin Fan resume Facebook Erik.pdf"
        onLoadSuccess={this.onDocumentLoadSuccess}
        class="col-12"
      >
        <Page pageNumber={pageNumber} />
      </Document>
    );
  }
}

export default Content;
