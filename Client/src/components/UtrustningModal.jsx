import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

export default function UtrustningModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Utrustning
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          {props.utrustning}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

UtrustningModal.propTypes = {
  utrustning: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired
};