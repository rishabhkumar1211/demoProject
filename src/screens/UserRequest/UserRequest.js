// App.js

import React from "react";
import Layout from "../../components/customLayout";
import UserTable from "../../components/table";
import { Button } from "antd";
import "./UserRequest.css";

const UserRequest = () => {
  return (
    <Layout>
      <div className="user-content">
        <div style={{ marginBottom: 20 }}>
          <span className="headinglabel">Requests</span>
          <div className="userTab">
            <Button
              type="primary"
              disabled={false}
              onClick={null}
              className="custom-btn"
            >
              All
            </Button>
            <Button
              type="primary"
              className="custom-disabled-button"
              disabled={true}
              onClick={null}
            >
              Pending
            </Button>
            <Button
              type="primary"
              disabled={true}
              onClick={null}
              className="custom-disabled-button"
            >
              Rejected
            </Button>
            <Button
              type="primary"
              disabled={true}
              onClick={null}
              className="custom-disabled-button"
            >
              Awaiting User Action
            </Button>
            <Button
              type="primary"
              disabled={true}
              onClick={null}
              className="custom-disabled-button"
            >
              Pin Requested
            </Button>
            <Button
              type="primary"
              disabled={true}
              onClick={null}
              className="custom-disabled-button"
            >
              Approved
            </Button>
            <Button
              type="primary"
              disabled={true}
              onClick={null}
              className="custom-disabled-button"
            >
              Approved in Error
            </Button>
          </div>
          <span className="userResult">showing result 09 of 78</span>
        </div>
        <UserTable />
      </div>
    </Layout>
  );
};

export default UserRequest;
