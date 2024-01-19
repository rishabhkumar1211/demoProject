// HistoryColumns.js
import React from "react";
import { Tag, Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const HistoryColumns = [
  { title: "Sr.No", dataIndex: "srNo", key: "srNo" },
  { title: "Document Name", dataIndex: "documentName", key: "documentName" },
  {
    title: "Uploaded On",
    dataIndex: "uploadedOn",
    key: "uploadedOn",
    render: (uploadedOn) => (
      <div>
        <div>{uploadedOn.date}</div>
        <div style={{ fontSize: "10px", color: "#ccc" }}>{uploadedOn.time}</div>
      </div>
    ),
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (status) => (
      <Tag
        className="statusTag"
        color={status === "Rejected" ? "red" : "green"}
      >
        {status}
      </Tag>
    ),
  },
  { title: "Reason", dataIndex: "reason", key: "reason" },
  {
    title: "Action Date and Time",
    dataIndex: "action",
    key: "action",
    render: (action) => (
      <div>
        <div>{action.date}</div>
        <div style={{ fontSize: "10px", color: "#ccc" }}>{action.time}</div>
      </div>
    ),
  },
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
