import React, {useState} from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
  ).toString();

const options = {
  cMapUrl: 'cmaps/',
  standardFontDataUrl: 'standard_fonts/',
};

export default function PdfViewer({file, isPreview}) {
  const [numPages, setNumPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div className='pdf-container'>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
            {isPreview ?
              (
              <>
              <Page renderTextLayer={false} pageNumber={currentPage} />
              <div className='pdf-controls-container'>

              </div>
              </>) :  <Page renderTextLayer={false}  pageNumber={1} />}
          </Document>
    </div>
  );
}