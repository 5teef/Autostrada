import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from 'prop-types';

export default function UtrustningModal(props) {
  // Dela upp utrustningen till en array
  const utrustningArray = props.utrustning.split(",");
  const columnCount = 3; // Antal kolumner
  const itemsPerColumn = Math.ceil(utrustningArray.length / columnCount); // Hur många objekt per kolumn

  // Dela upp utrustningArray i flera kolumner
  const columns = Array.from({ length: columnCount }, (_, colIndex) =>
    utrustningArray.slice(colIndex * itemsPerColumn, (colIndex + 1) * itemsPerColumn)
  );

  // Funktion för att skapa varje kolumn
  const renderColumn = (items, index) => (
    <ul key={index} style={{ flex: '1 1 0', margin: '0', padding: '0', listStyle: 'none' }}>
      {items.map((item, idx) => (
        <li key={idx} style={{ marginBottom: '5px' }}>{item.trim()}</li>
      ))}
    </ul>
  );

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
      <Modal.Body style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {columns.map(renderColumn)}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={props.onHide}
          style={{ fontWeight: '700', backgroundColor: 'rgb(255, 255, 255)', borderColor: 'rgb(255, 255, 255)', color: 'black' }}
        >
          Stäng
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

UtrustningModal.propTypes = {
  utrustning: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired
};
