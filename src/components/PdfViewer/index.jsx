import React, {useState} from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import { ArrowLeftShort, ArrowRightShort } from 'react-bootstrap-icons';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

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
  const onClickBack = () => currentPage === 1 ? null : setCurrentPage(currentPage - 1)
  const onClickForward = () => currentPage === numPages ? null : setCurrentPage(currentPage + 1)
  return (
    <div className='pdf-container'>
          <Document file={file} onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error} options={options}>
            {isPreview ?
              (
              <>
              <Page renderTextLayer={false} pageNumber={currentPage}>
                <div className='pdf-controls-container'>
                  <ArrowLeftShort size={20} className={currentPage === 1 ? 'arrow-bar arrow-bar-disabled' : 'arrow-bar'} onClick={onClickBack}/>
                  <span className='page-text'>{currentPage} | {numPages}</span>
                  <ArrowRightShort size={20} className={currentPage === numPages ? 'arrow-bar arrow-bar-disabled' : 'arrow-bar'} onClick={onClickForward}/>
                </div>
              </Page>
              
              </>) :  <Page renderTextLayer={false}  pageNumber={1} />}
          </Document>
    </div>
  );
}