import React, { useState } from "react";
import { Table, Dropdown, Menu, Pagination } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import columns from "./column";
import "./table.css";

const data = [
  {
    key: "1",
    sr: "01",
    ni: "xxxxxxxxxxx",
    firstname: "John",
    lastname: "Doe",
    employerni: "xxxxxxxx",
    rssaccess: "No",
    essaccess: "No",
    contactrole: "admin",
    requeston: "30 Sep 23",
    emailaddress: "abc@gmail.com",
    status: "Pending",
    action: "123",
  },
  {
    key: "2",
    sr: "02",
    ni: "xxxxxxxxxxx",
    firstname: "John",
    lastname: "Doe",
    employerni: "xxxxxxxx",
    rssaccess: "No",
    essaccess: "No",
    contactrole: "admin",
    requeston: "30 Sep 23",
    emailaddress: "abc@gmail.com",
    status: "Pending",
    action: "123",
  },
  {
    key: "3",
    sr: "03",
    ni: "xxxxxxxxxxx",
    firstname: "John",
    lastname: "Doe",
    employerni: "xxxxxxxx",
    rssaccess: "No",
    essaccess: "No",
    contactrole: "admin",
    requeston: "30 Sep 23",
    emailaddress: "abc@gmail.com",
    status: "Rejected",
    action: "123",
  },
  {
    key: "4",
    sr: "04",
    ni: "xxxxxxxxxxx",
    firstname: "John",
    lastname: "Doe",
    employerni: "xxxxxxxx",
    rssaccess: "No",
    essaccess: "No",
    contactrole: "admin",
    requeston: "30 Sep 23",
    emailaddress: "abc@gmail.com",
    status: "Pending",
    action: "123",
  },
  {
    key: "5",
    sr: "05",
    ni: "xxxxxxxxxxx",
    firstname: "John",
    lastname: "Doe",
    employerni: "xxxxxxxx",
    rssaccess: "No",
    essaccess: "No",
    contactrole: "admin",
    requeston: "30 Sep 23",
    emailaddress: "abc@gmail.com",
    status: "Approved",
    action: "123",
  },
  {
    key: "6",
    sr: "06",
    ni: "xxxxxxxxxxx",
    firstname: "Rohan",
    lastname: "wick",
    employerni: "xxxxxxxx",
    rssaccess: "No",
    essaccess: "No",
    contactrole: "admin",
    requeston: "30 Sep 23",
    emailaddress: "abc@gmail.com",
    status: "Approved",
    action: "123",
  },
  {
    key: "7",
    sr: "07",
    ni: "xxxxxxxxxxx",
    firstname: "Devil",
    lastname: "Dark",
    employerni: "xxxxxxxx",
    rssaccess: "No",
    essaccess: "No",
    contactrole: "admin",
    requeston: "30 Sep 23",
    emailaddress: "abc@gmail.com",
    status: "Approved",
    action: "123",
  },
  {
    key: "8",
    sr: "08",
    ni: "xxxxxxxxxxx",
    firstname: "Luffy",
    lastname: "King",
    employerni: "xxxxxxxx",
    rssaccess: "No",
    essaccess: "No",
    contactrole: "admin",
    requeston: "30 Sep 23",
    emailaddress: "abc@gmail.com",
    status: "Approved",
    action: "123",
  },
  {
    key: "9",
    sr: "09",
    ni: "xxxxxxxxxxx",
    firstname: "Raj",
    lastname: "Kapoor",
    employerni: "xxxxxxxx",
    rssaccess: "No",
    essaccess: "No",
    contactrole: "admin",
    requeston: "30 Sep 23",
    emailaddress: "abc@gmail.com",
    status: "Approved",
    action: "123",
  },
  {
    key: "10",
    sr: "10",
    ni: "xxxxxxxxxxx",
    firstname: "Hnuman",
    lastname: "Jai",
    employerni: "xxxxxxxx",
    rssaccess: "No",
    essaccess: "No",
    contactrole: "admin",
    requeston: "30 Sep 23",
    emailaddress: "abc@gmail.com",
    status: "Approved",
    action: "123",
  },
  {
    key: "11",
    sr: "11",
    ni: "xxxxxxxxxxx",
    firstname: "Mayank",
    lastname: "wick",
    employerni: "xxxxxxxx",
    rssaccess: "No",
    essaccess: "No",
    contactrole: "admin",
    requeston: "30 Sep 23",
    emailaddress: "abc@gmail.com",
    status: "Approved",
    action: "123",
  },
];

const UserTable = () => {
  const [selectedValue, setSelectedValue] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleMenuClick = (e) => {
    setSelectedValue(e.key);
    setCurrentPage(1); // Reset to the first page when changing the page size
  };

  const getColumnClassName = (record, index) => {
    return index === 0 || index === 1 ? "number-row" : "odd-row";
  };

  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page);
    setSelectedValue(pageSize);
  };

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="10">10</Menu.Item>
      <Menu.Item key="20">20</Menu.Item>
      <Menu.Item key="30">30</Menu.Item>
    </Menu>
  );

  const tableData = data.slice(
    (currentPage - 1) * selectedValue,
    currentPage * selectedValue
  );

  return (
    <div>
      <Table
        className="tableBg"
        columns={columns}
        dataSource={tableData}
        columnClassName={getColumnClassName}
        pagination={false} // Disable default pagination
      />
      <div className="custom-pagination">
        <span className="items-per-page">Items per page</span>
        <Dropdown overlay={menu} trigger={["click"]}>
          <div className="tableDrop">
            <span className="selectVal">{selectedValue}</span>
            <span className="ant-dropdown-link">
              <CaretDownOutlined className="caret" />
            </span>
          </div>
        </Dropdown>

        <div className="arrow-part">
          <span className="page-info">{` ${currentPage} of ${Math.ceil(
            data.length / selectedValue
          )}`}</span>
          <Pagination
            className="paginationComp"
            current={currentPage}
            pageSize={selectedValue}
            total={data.length}
            onChange={handlePageChange}
            showSizeChanger={false}
            showQuickJumper={false}
            showTotal={(total, range) => ""}
          />
        </div>
      </div>
    </div>
  );
};

export default UserTable;
