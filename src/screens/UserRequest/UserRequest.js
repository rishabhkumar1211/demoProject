// App.js

import React, { useState } from "react";
import Layout from "../../components/element/CustomLayout";
import UserTable from "../../components/element/UserTable";
import { Button } from "antd";
import "./UserRequest.css";

const UserRequest = () => {
  const [searchText, setSearchText] = useState("");
  const onSearchStart = (value) => {
    setSearchText(value);
  };
  return (
    <Layout onSearchStart={onSearchStart}>
      <div className="user-content">
        {searchText.length < 4 && (
          <div style={{ marginBottom: 20 }}>
            <span className="headinglabel">Requests</span>
            <div className="userTab">
              <Button
                type="primary"
                disabled={false}
                onClick={null}
                className="custom-btn custom-btn-width"
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
        )}
        <UserTable />
      </div>
    </Layout>
  );
};

export default UserRequest;
