// HistoryColumns.js
import React from "react";
import { Tag, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const HistoryColumns = [
  { title: "Sr.No", dataIndex: "srNo", key: "srNo" },
  { title: "Document Name", dataIndex: "documentName", key: "documentName" },
  { title: "Uploaded On", dataIndex: "uploadedOn", key: "uploadedOn" },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag
        style={{ border: 0, background: "none" }}
        color={status === "Rejected" ? "red" : "green"}
      >
        {status}
      </Tag>
    ),
  },
  { title: "Reason", dataIndex: "reason", key: "reason" },
  { title: "Action Date and Time", dataIndex: "action", key: "action" },
  {
    title: "View",
    key: "view",
    render: () => (
      <Button className="hiscombo" icon={<EyeOutlined />}>
        View
      </Button>
    ),
  },
];

export default HistoryColumns;
