import React, { useState } from "react";
import { Button, Modal, Radio, List, Input } from "antd"; // Added Input

export const RejectModal = ({ visible, onCancel, data }) => {
  const [selectedReason, setSelectedReason] = useState(""); // Changed to hold a single value
  const [customReason, setCustomReason] = useState("");
  console.log("first", selectedReason);
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
        <p className="rejectHeadline1">Do you want to Reject this user?</p>

        <p className="rejectModalName">
          Name:{" "}
          <span className="approveMainContentFont">
            {data.firstname}&nbsp;{data.lastname} | NI#:{" "}
            <span className="approveMainContentFont">{data.ni}</span>
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
                style={{ marginRight: "8px" }}
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
            style={{ marginLeft: "10px" }}
          />
        </div>

        <p
          style={{
            marginTop: "0px",
            marginBottom: "0",
            textAlign: "right",
            marginRight: "20px",
            color: "gray",
          }}
        >
          Minimum 100 words
        </p>
      </div>
    </Modal>
  );
};
