import React, { useState } from "react";
import { Row, Col, Card, Button, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./Account.css";
import { RejectModal } from "../../components/RejectModal";
import ViewModal from "./ViewModal";
import { Link } from "react-router-dom";
import { DocumentApproval } from "./DocumentApproval";

const DocumentComponent = (data) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [secondModalVisible, setSecondModalVisible] = useState(false);
  const [selectedAction, setSelectedAction] = useState(null);

  const handleMenuClick = (e) => {
    setSelectedAction(e.key);
    setSecondModalVisible(true);
  };

  const handleViewButtonClick = (imageSrc) => {
    setModalImage(imageSrc);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleCloseSecondModal = () => {
    setSecondModalVisible(false);
  };

  const menu = (
    <Menu className="menu" onClick={handleMenuClick}>
      <Menu.Item key="Approve">Approve</Menu.Item>
      <Menu.Divider className="menu-divider" />
      <Menu.Item key="Reject">Reject</Menu.Item>
    </Menu>
  );

  return (
    <div className="component-container">
      <Row gutter={16}>
        <Col span={12}>
          <p className="title">Employer document</p>
          <Row gutter={16}>
            <Col span={12}>
              <p className="date-label">Uploaded on 02 Sep 23, 14:30 PM</p>
              <Card className="card">
                <img
                  alt="Rib Document"
                  src="https://source.unsplash.com/x8i6FfaZAbs"
                  className="modalImage"
                />
                {/* Other Card content */}
              </Card>
              <p className="image-container">Rib Document</p>
              <p className="image-container">
                <Button
                  className="button"
                  onClick={() =>
                    handleViewButtonClick(
                      "https://source.unsplash.com/x8i6FfaZAbs"
                    )
                  }
                >
                  View
                </Button>
              </p>
              <div className="image-container">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Button className="menu-button">
                    <Space>
                      Actions
                      <DownOutlined className="docDown" />
                    </Space>
                  </Button>
                </Dropdown>
              </div>
              <p className="date-label1">Provided by User</p>
              <p className="date-label1">NI#245678</p>
            </Col>

            <Col span={12}>
              <p className="date-label">Uploaded on 02 Sep 23, 14:30 PM</p>
              <Card className="card">
                <img
                  alt="EPassport*"
                  src="https://source.unsplash.com/0QcSnCM0aMc"
                  className="modalImage"
                />
                {/* Other Card content */}
              </Card>
              <p className="image-container">Passport*</p>
              <div className="image-container">
                <Button
                  className="combo"
                  onClick={() =>
                    handleViewButtonClick(
                      "https://source.unsplash.com/0QcSnCM0aMc"
                    )
                  }
                >
                  View
                </Button>
                <Link
                  to="/user-request/Account/documents/history"
                  state={{ data }}
                >
                  <Button className="button secondary-button">History</Button>
                </Link>
              </div>
              <p className="image-container">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Button className="menu-button">
                    <Space>
                      Actions
                      <DownOutlined className="docDown" />
                    </Space>
                  </Button>
                </Dropdown>
              </p>
              <p className="date-label1">Provided by User</p>
              <p className="date-label1">NI#245678</p>
            </Col>
          </Row>
        </Col>

        <Col span={12}>
          <p className="title">User document</p>
          <Row gutter={16}>
            <Col span={12}>
              <p className="date-label">Uploaded on 02 Sep 23, 14:30 PM</p>
              <Card className="card">
                <img
                  alt="EPassport*"
                  src="https://source.unsplash.com/0QcSnCM0aMc"
                  className="modalImage"
                />
                {/* Other Card content */}
              </Card>
              <p className="image-container">Passport*</p>
              <div className="image-container">
                <Button
                  className="combo"
                  onClick={() =>
                    handleViewButtonClick(
                      "https://source.unsplash.com/0QcSnCM0aMc"
                    )
                  }
                >
                  View
                </Button>
                <Link
                  to="/user-request/Account/documents/history"
                  state={{ data }}
                >
                  <Button className="button secondary-button">History</Button>
                </Link>
              </div>
              <p className="image-container">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Button className="menu-button2">
                    <Space>
                      Actions
                      <DownOutlined className="docDown" />
                    </Space>
                  </Button>
                </Dropdown>
              </p>
              <p className="date-label1">Provided by User</p>
              <p className="date-label1">NI#245678</p>
            </Col>

            <Col span={12}>
              <p className="date-label">Uploaded on 02 Sep 23, 14:30 PM</p>
              <Card className="card">
                <img
                  alt="Current"
                  src="https://source.unsplash.com/rDEOVtE7vOs"
                  className="modalImage"
                />
                {/* Other Card content */}
              </Card>
              <p className="image-container">Current photo (e.g. selfie)</p>
              <div className="image-container">
                <Button
                  className="combo"
                  onClick={() =>
                    handleViewButtonClick(
                      "https://source.unsplash.com/rDEOVtE7vOs"
                    )
                  }
                >
                  View
                </Button>
                <Link
                  to="/user-request/Account/documents/history"
                  state={{ data }}
                >
                  <Button className="button secondary-button">History</Button>
                </Link>
              </div>
              <p className="image-container">
                <Dropdown overlay={menu} trigger={["click"]}>
                  <Button className="menu-button2">
                    <Space>
                      Actions
                      <DownOutlined className="docDown" />
                    </Space>
                  </Button>
                </Dropdown>
              </p>
              <p className="date-label1">Provided by User</p>
              <p className="date-label1">NI#245678</p>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Modal */}
      <ViewModal
        visible={modalVisible}
        onCancel={handleCloseModal}
        imageSrc={modalImage}
      />
      {/* Second Modal */}
      {selectedAction === "Reject" && (
        <RejectModal
          visible={secondModalVisible}
          onCancel={handleCloseSecondModal}
          documentReject={true}
          data={data}
        />
      )}
      {selectedAction === "Approve" && (
        <DocumentApproval
          visible={secondModalVisible}
          onCancel={handleCloseSecondModal}
        />
      )}
    </div>
  );
};

export default DocumentComponent;
