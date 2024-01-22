import React, { useState } from "react";
import { Button, Modal, Radio, List, Input } from "antd"; // Added Input
import "../css/modal.css";
export const RejectModal = ({ visible, onCancel, documentReject, data }) => {
  const [selectedReason, setSelectedReason] = useState(""); // Changed to hold a single value
  const [customReason, setCustomReason] = useState("");

  const reasonsData = [
    "Document expired",
    "Documents illegal/damaged/obscured",
    "Documents not properly authorized",
    "Documents may be forged",
    "Documents are not originals",
    "Incorrect information",
    "Inactive employer",
    "Registrant marked as deceased",
    "Required document is missing",
    "Other",
  ];

  const handleRadioChange = (e) => {
    setSelectedReason(e.target.value);
  };

  const handleCustomReasonChange = (e) => {
    setCustomReason(e.target.value);
  };

  return (
    <Modal
      centered
      closable={false}
      open={visible} // Changed from open to visible
      className="reject"
      footer={[
        <div key="footer" className="rejectModalFooter">
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
            className="rejectModalFooterYes"
          >
            Yes
          </Button>
        </div>,
      ]}
    >
      <div className="rejectModalContent">
        {documentReject ? (
          <p className="rejectHeadline1">Select a reason to reject</p>
        ) : (
          <p className="rejectHeadline1">Do you want to Reject this user?</p>
        )}

        <p className="rejectModalName">
          Name:{" "}
          <span className="approveMainContentFont">
            John Doe | NI#:{" "}
            <span className="approveMainContentFont">123456789</span>
          </span>
        </p>

        <List
          dataSource={reasonsData}
          size="small"
          renderItem={(reason) => (
            <List.Item className="rejectList">
              <Radio
                value={reason}
                onChange={handleRadioChange}
                checked={selectedReason === reason}
                className="rejectradio"
              >
                {reason}
              </Radio>
            </List.Item>
          )}
        />

        <div>
          <Input
            value={customReason}
            onChange={handleCustomReasonChange}
            className="custReason"
          />
        </div>

        <p className="minWord">Minimum 100 words</p>
      </div>
    </Modal>
  );
};
