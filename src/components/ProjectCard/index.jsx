import React, { useState } from 'react';
import { Button, Col, Modal } from "react-bootstrap"

export const ProjectCard = ({title, description, imgUrl}) => {

    const [displayModal, setDisplayModal] = useState(false);
    const handleClose = () => setDisplayModal(false);
    const handleShow = () => setDisplayModal(true);
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx" onClick={handleShow}>
                <img src={imgUrl} alt={title}/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
            </div>
            <Modal show={displayModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{color: '#000'}}>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img src={imgUrl} alt={title} />
                </Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
      </Modal>
        </Col>
    )
}