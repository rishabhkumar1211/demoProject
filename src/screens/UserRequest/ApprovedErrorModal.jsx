import React from "react";
import { Button, Modal } from "antd";

export const ApproveErrorModal = ({ visible, onCancel, data }) => {
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
        <p className="approveHeadline1">Have you Approved</p>
        <p className="approveHeadline1">in error?</p>
        <p className="approveErrModalName">
          Name:{" "}
          <span>
            {data.firstname}&nbsp;{data.lastname}
          </span>
        </p>
        <p className="approveErrModalNI">
          NI#: <span className="approveMainContentFont">{data.ni}</span>
        </p>
        <p className="approveErrModaldate">Stop date</p>

        <div className="input-container">
          <input type="date" id="myDateInput" name="myDateInput" />
        </div>
      </div>
    </Modal>
  );
};
