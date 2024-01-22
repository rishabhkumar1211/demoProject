import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
import CustomPopover from "./CustomPopover";
import { RejectModal } from "./RejectModal";
import { ApproveModal } from "./ApproveModal";
import { ApproveErrorModal } from "./ApprovedErrorModal";
import arrow from "../../assets/images/reload.svg";
import { Link } from "react-router-dom";
import "../css/column.css";
const ActionColumn = ({ actionData }) => {
  const [selectedAction, setSelectedAction] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleMenuClick = (e) => {
    setSelectedAction(e.key);
    setModalVisible(true);
  };

  const handleModalCancel = () => {
    setModalVisible(false);
  };

  const menu = (
    <Menu className="menuleft" onClick={handleMenuClick}>
      <Menu.Item key="Approve">Approve</Menu.Item>
      <Menu.Divider className="menu-divider" />
      <Menu.Item key="Reject">Reject</Menu.Item>
      <Menu.Divider className="menu-divider" />
      <Menu.Item key="SendPin">Send pin</Menu.Item>
      <Menu.Divider className="menu-divider" />
      <Menu.Item key="ApprovedInError">Approved in error</Menu.Item>
      <Menu.Divider className="menu-divider" />
      <Menu.Item key="ViewDocument">View document</Menu.Item>
    </Menu>
  );

  return (
    <div>
      <Dropdown overlay={menu} trigger={["click"]}>
        <div className="dropdown">
          <img alt="drop" src={arrow}></img>
          <DownOutlined className="constDown" />
        </div>
      </Dropdown>

      {/* Render modal components based on selected action */}
      {selectedAction === "Approve" && (
        <ApproveModal
          data={actionData}
          visible={modalVisible}
          onCancel={handleModalCancel}
        />
      )}
      {selectedAction === "Reject" && (
        <RejectModal
          data={actionData}
          visible={modalVisible}
          onCancel={handleModalCancel}
        />
      )}
      {selectedAction === "ApprovedInError" && (
        <ApproveErrorModal
          data={actionData}
          visible={modalVisible}
          onCancel={handleModalCancel}
        />
      )}
    </div>
  );
};

const EmailColumn = ({ emailText, emailData }) => {
  // console.log("doc", emailData);

  return (
    <>
      <span>{emailText}</span>
    </>
  );
};

const columns = [
  {
    title: "Sr.",
    dataIndex: "sr",
    key: "sr",
    render: (text) => (
      <span style={{ color: "#1E40AF", textDecoration: "underline" }}>
        {text}
      </span>
    ),
  },
  {
    title: "NI#",
    dataIndex: "ni",
    key: "ni",
    render: (text, data) => (
      <Link
        to={{ pathname: "/user-request/Account" }}
        state={{ data }}
        className="linkacc"
      >
        {text}
      </Link>
    ),
  },
  { title: "First name", dataIndex: "firstname", key: "firstname" },
  { title: "Last name", dataIndex: "lastname", key: "lastname" },
  { title: "Employer NI#", dataIndex: "employerni", key: "employerni" },
  { title: "RSS access", dataIndex: "rssaccess", key: "rssaccess" },
  { title: "ESS access", dataIndex: "essaccess", key: "essaccess" },
  { title: "Contact Role", dataIndex: "contactrole", key: "contactrole" },
  { title: "Request on", dataIndex: "requeston", key: "requeston" },
  {
    title: "Email address",
    dataIndex: "emailaddress",
    key: "emailaddress",
    render: (text, data) => <EmailColumn emailText={text} emailData={data} />,
  },

  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    render: (text, data) => {
      const fontColor =
        data.status === "Approved"
          ? "#69CF9D"
          : data.status === "Rejected"
          ? "red"
          : "#000";

      const showInfo = data.status === "Rejected";
      return (
        <div>
          <span className="info" style={{ color: fontColor }}>
            {text}
          </span>
          {showInfo && <CustomPopover />}
        </div>
      );
    },
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text, data) => <ActionColumn actionData={data} />,
  },
];

export default columns;
