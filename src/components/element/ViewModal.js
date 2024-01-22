import React from "react";
import { Modal, Card } from "antd";

const ViewModal = ({ visible, onCancel, imageSrc }) => {
  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      width={600}
      title="Image View"
      centered
      className="modalContainer" // Apply the class here
    >
      {imageSrc && (
        <Card className="cardContainer">
          {" "}
          <img alt="Modal View" src={imageSrc} className="modalImage" />
          {/* Other Card content */}
        </Card>
      )}
    </Modal>
  );
};

export default ViewModal;
