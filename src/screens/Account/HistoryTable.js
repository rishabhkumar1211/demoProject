import React from "react";
import { Table, Breadcrumb } from "antd";
import HistoryColumns from "../../components/element/HistoryColumn";
import { Link, useLocation } from "react-router-dom";
import Layout from "../../components/element/CustomLayout";

const History = () => {
  const location = useLocation();

  const dataObj = location?.state?.data;
  // Sample data for the table
  const data = [
    {
      key: "1",
      srNo: 1,
      documentName: "National Insurance Card",
      uploadedOn: {
        date: "03 Sep 23",
        time: "14:35PM",
      },
      status: "Rejected",
      reason: "Document is incorrect",
      action: {
        date: "06 Sep 23",
        time: "12:30AM",
      },
    },
    {
      key: "2",
      srNo: 2,
      documentName: "National Insurance Card",
      uploadedOn: {
        date: "03 Sep 23",
        time: "14:35PM",
      },
      status: "Rejected",
      reason: "Document is corrupted",
      action: {
        date: "06 Sep 23",
        time: "12:30AM",
      },
    },
    {
      key: "3",
      srNo: 3,
      documentName: "National Insurance Card",
      uploadedOn: {
        date: "03 Sep 23",
        time: "14:35PM",
      },
      status: "Rejected",
      reason: "Document is corrupted",
      action: {
        date: "06 Sep 23",
        time: "12:30AM",
      },
    },
    {
      key: "4",
      srNo: 4,
      documentName: "National Insurance Card",
      uploadedOn: {
        date: "03 Sep 23",
        time: "14:35PM",
      },
      status: "Approved",
      reason: "Document is corrupted",
      action: {
        date: "06 Sep 23",
        time: "12:30AM",
      },
    },
    // Add more data as needed
  ];
  let document = true;
  return (
    <Layout>
      <div className="user-content">
        <Link
          to="/user-request/Account"
          state={{ document, dataObj }}
          className="back-link"
        >
          {"< Back"}
        </Link>

        <Breadcrumb
          className="breadcrumb"
          separator=">"
          items={[
            {
              title: "John Doe - NI#234267",
            },
            {
              title: "Documents",
              href: "",
            },

            {
              title: "History",
            },
          ]}
        />
        <Table dataSource={data} columns={HistoryColumns} pagination={false} />
      </div>
    </Layout>
  );
};

export default History;
