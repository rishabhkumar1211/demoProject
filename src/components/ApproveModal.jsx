import React from "react";
import { Button, Modal } from "antd";
import "./modal.css";

export const ApproveModal = ({ visible, onCancel, data }) => {
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
        <p className="approveHeadline1">Do you want to</p>
        <p className="approveHeadline1">Approve this user?</p>
        <div className="approveMainContentFont">
          <p>
            Name:{" "}
            <span>
              {data.firstname}&nbsp;{data.lastname}
            </span>
          </p>
          <p>
            NI#: <span>{data.ni}</span>
          </p>
        </div>
      </div>
    </Modal>
  );
};
