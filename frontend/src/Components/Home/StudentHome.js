import { useState } from "react";
import { Button, Modal } from "antd";
import "./Home.css";

import AddNote from "../NoteList/AddNote";

const StudentHome = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleLogOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("name");
    localStorage.removeItem("accountType");
    window.location = `/SignIn`;
  };

  return (
    <div className="container-fluid welcome p-0">
      <nav className="welcome-nav">
        <p>my intern first work</p>
      </nav>
      <header>
        <div className="row ">
          <div className="row">
            <ul className="nav-info">
              <li className="logo">
                <img className="logo-img" src="/images/S.png"></img>urge Globle
              </li>

              <>
                <li className="quote">
                  Have a nice day ! {localStorage.getItem("name")}
                </li>
                <li>
                  <a href="/NoteList" className="btn signin">
                    NoteList
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => {
                      handleLogOut();
                    }}
                    className="btn btn-dark"
                  >
                    {" "}
                    Logout
                  </button>
                </li>
              </>
            </ul>
          </div>
          <hr />
          <div className="col-sm-6 mid-text">
            <p>
              Build your brand, expand your footprint and understand the quick
              wins as well as the longer term plan. Surge’s offerings have been
              designed to cater to both those starting from the very beginning
              and the more experienced brands looking for new ways to grow their
              business.
            </p>
          </div>
          <div>
            <div className="arrow arrow-first"></div>
            <div className="arrow arrow-second"></div>
          </div>
          <div className="register">
            <Button type="primary" onClick={showModal} className="signup">
              Add Note
            </Button>
            <Modal
              title="Add Note"
              visible={isModalVisible}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            >
              <AddNote />
            </Modal>
          </div>
        </div>
      </header>

      <div className="footer">
        <ul className="list-group footer-text">
          <li>&copy; Copyright 2022 </li>
        </ul>
      </div>
    </div>
  );
};
export default StudentHome;
