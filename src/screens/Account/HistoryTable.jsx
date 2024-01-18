import React from "react";
import { Table } from "antd";
import HistoryColumns from "./HistoryColumn";

const History = () => {
  // Sample data for the table
  const data = [
    {
      key: "1",
      srNo: 1,
      documentName: "National Insurance Card",
      uploadedOn: "03 Sep 23",
      status: "Rejected",
      reason: "Document is incorrect",
      action: "06 Sep 23",
    },
    {
      key: "2",
      srNo: 2,
      documentName: "National Insurance Card",
      uploadedOn: "03 Sep 23",
      status: "Rejected",
      reason: "Document is corrupted",
      action: "06 Sep 23",
    },
    {
      key: "3",
      srNo: 3,
      documentName: "National Insurance Card",
      uploadedOn: "03 Sep 23",
      status: "Rejected",
      reason: "Document is corrupted",
      action: "06 Sep 23",
    },
    {
      key: "4",
      srNo: 4,
      documentName: "National Insurance Card",
      uploadedOn: "03 Sep 23",
      status: "Approved",
      reason: "Document is corrupted",
      action: "06 Sep 23",
    },
    // Add more data as needed
  ];

  return (
    <Table dataSource={data} columns={HistoryColumns} pagination={false} />
  );
};

export default History;
