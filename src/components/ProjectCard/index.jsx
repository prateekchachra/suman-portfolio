import React, { useState } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import PdfViewer from "../PdfViewer";

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [displayModal, setDisplayModal] = useState(false);
  const handleClose = () => setDisplayModal(false);
  const handleShow = () => setDisplayModal(true);
  const renderPreview = (isPreview) =>
    imgUrl.includes("pdf") ? (
      <PdfViewer file={imgUrl} isPreview={isPreview} />
    ) : (
      <img src={imgUrl} alt={title} />
    );
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx" onClick={handleShow}>
        {renderPreview(false)}
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      <Modal show={displayModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#000" }}>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderPreview(true)}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Col>
  );
};
