import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "./Documents.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
    pdfjs.version
}/pdf.worker.js`;
class Documents extends Component {
    state = {
        numPages: null,
        pageNumber: 1
    };

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    };

    render() {
        const { pageNumber, numPages } = this.state;

        return (
            <div className="DocumentBody">
                <Document
                    file="/pdf-test.pdf"
                    onLoadSuccess={this.onDocumentLoadSuccess}
                >
                    <Page pageNumber={pageNumber} />
                </Document>
                <p>
                    Page {pageNumber} of {numPages}
                </p>
            </div>
        );
    }
}

export default Documents;
