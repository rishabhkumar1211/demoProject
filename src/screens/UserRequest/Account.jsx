import React, { useState } from "react";
import { Button, Col, Row } from "antd";
import { Link } from "react-router-dom";
import Layout from "../../components/customLayout";
import BasicInfoComponent from "./BasicInfoComponent";
import DocumentsComponent from "./DocumentComponent";

const Account = () => {
  const [showDocuments, setShowDocuments] = useState(false);

  return (
    <Layout>
      <div className="user-content">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col span={6}>
            <div>
              <Link to="/user-request" className="back-link">
                {"< Back"}
              </Link>
            </div>
          </Col>
          <Col span={6}>
            <div className="boldFont">
              Account Status:
              <span className="lightFont">Rejected</span>
            </div>
          </Col>
          <Col span={7}>
            <div className="boldFont">
              Reason:
              <span className="lightFont">
                User does not match the criteria
              </span>
            </div>
          </Col>
          <Col span={5}>
            <div>John Doe -NI#</div>
          </Col>
        </Row>

        <div className="button-container">
          <Button
            type={showDocuments ? "default" : "primary"}
            onClick={() => {
              setShowDocuments(false);
            }}
          >
            Basic Info
          </Button>
          <Button
            type={showDocuments ? "primary" : "default"}
            onClick={() => {
              setShowDocuments(true);
            }}
          >
            Documents
          </Button>
        </div>

        {showDocuments ? <DocumentsComponent /> : <BasicInfoComponent />}
      </div>
    </Layout>
  );
};

export default Account;
