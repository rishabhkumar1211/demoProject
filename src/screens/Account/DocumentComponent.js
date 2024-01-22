import React, { useState } from "react";
import { Row, Col, Card, Button, Dropdown, Menu, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import "./Account.css";
import { RejectModal } from "../../components/element/RejectModal";
import ViewModal from "../../components/element/ViewModal";
import { Link } from "react-router-dom";
import { DocumentApproval } from "../../components/element/DocumentApproval";

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

  const dataForEmployee = [
    {
      title: "Employer document",
      items: [
        {
          name: "Rib Document",
          date: "Uploaded on 02 Sep 23, 14:30 PM",
          imageSrc: "https://source.unsplash.com/x8i6FfaZAbs",
          actions: menu,
          viewButtonHandler: () =>
            handleViewButtonClick("https://source.unsplash.com/x8i6FfaZAbs"),
        },
        {
          name: "Passport*",
          date: "Uploaded on 02 Sep 23, 14:30 PM",
          imageSrc: "https://source.unsplash.com/x8i6FfaZAbs",
          actions: menu,
          viewButtonHandler: () =>
            handleViewButtonClick("https://source.unsplash.com/x8i6FfaZAbs"),
        },

        // Add other items as needed
      ],
    },
    // Add more sections for Employee as needed
  ];

  const dataForUser = [
    {
      title: "User document",
      items: [
        {
          name: "Passport*",
          date: "Uploaded on 02 Sep 23, 14:30 PM",
          imageSrc: "https://source.unsplash.com/0QcSnCM0aMc",
          actions: menu,
          viewButtonHandler: () =>
            handleViewButtonClick("https://source.unsplash.com/0QcSnCM0aMc"),
        },
        {
          name: "Current Photo(e.g Selfie)",
          date: "Uploaded on 02 Sep 23, 14:30 PM",
          imageSrc: "https://source.unsplash.com/rDEOVtE7vOs",
          actions: menu,
          viewButtonHandler: () =>
            handleViewButtonClick("https://source.unsplash.com/rDEOVtE7vOs"),
        },

        // Add other items as needed
      ],
    },
    // Add more sections for User as needed
  ];

  return (
    <div className="component-container">
      <Row gutter={16}>
        <Col span={12}>
          {dataForEmployee.map((section) => (
            <div key={section.title}>
              <p className="title">{section.title}</p>
              <Row gutter={16}>
                {section.items.map((item, index) => (
                  <Col key={index} span={12}>
                    <p className="date-label">{item.date}</p>
                    <Card className="card">
                      <img
                        alt={item.name}
                        src={item.imageSrc}
                        className="modalImage"
                      />
                    </Card>
                    <p className="image-container">{item.name}</p>

                    {item.name === "Passport*" ? (
                      <div className="image-container">
                        <Button
                          className="combo"
                          onClick={item.viewButtonHandler}
                        >
                          View
                        </Button>
                        <Link
                          to="/user-request/Account/documents/history"
                          state={{ data }}
                        >
                          <Button className="button secondary-button">
                            History
                          </Button>
                        </Link>
                      </div>
                    ) : (
                      <div className="image-container">
                        <Button
                          className="button"
                          onClick={item.viewButtonHandler}
                        >
                          View
                        </Button>
                      </div>
                    )}
                    <div className="image-container">
                      <Dropdown overlay={item.actions} trigger={["click"]}>
                        <Button className="menu-button2">
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
                ))}
              </Row>
            </div>
          ))}
        </Col>

        <Col span={12}>
          {dataForUser.map((section) => (
            <div key={section.title}>
              <p className="title">{section.title}</p>
              <Row gutter={16}>
                {section.items.map((item, index) => (
                  <Col key={index} span={12}>
                    <p className="date-label">{item.date}</p>
                    <Card className="card">
                      <img
                        alt={item.name}
                        src={item.imageSrc}
                        className="modalImage"
                      />
                    </Card>
                    <p className="image-container">{item.name}</p>

                    <div className="image-container">
                      <Button
                        className="combo"
                        onClick={item.viewButtonHandler}
                      >
                        View
                      </Button>
                      <Link
                        to="/user-request/Account/documents/history"
                        state={{ data }}
                      >
                        <Button className="button secondary-button">
                          History
                        </Button>
                      </Link>
                    </div>
                    <div className="image-container">
                      <Dropdown overlay={item.actions} trigger={["click"]}>
                        <Button className="menu-button2">
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
                ))}
              </Row>
            </div>
          ))}
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
