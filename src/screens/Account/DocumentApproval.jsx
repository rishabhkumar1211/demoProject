import React from "react";
import { Button, Modal } from "antd";

export const DocumentApproval = ({ visible, onCancel, data }) => {
  console.log("sad", data);

  return (
    <Modal
      centered
      closable={false}
      open={visible} // Set the visibility based on your logic
      className="approve"
      footer={[
        <div key="footer" className="approveModalFooter">
          <Button
            key="cancel"
            type="default"
            onClick={onCancel}
            className="approveModalFooterCancel"
          >
            Cancel
          </Button>
          <Button
            key="Yes"
            type="default"
            // onClick={handleOk}
            className="approveModalFooterYes"
          >
            Yes
          </Button>
        </div>,
      ]}
    >
      <div className="approveModalContent">
        <p className="approveHeadline1">Do you want to approve</p>
        <p className="approveHeadline1">the document,once</p>
        <p className="approveHeadline1">approved,document</p>
        <p className="approveHeadline1">cannot be changed.</p>
      </div>
    </Modal>
  );
};
