import React, { useState } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import Game from "./Game/Game";
import "./Game/Game.scss";
import { erLocalStorage } from "../store/erLocalStorage";
import { useHistory } from "react-router-dom";
// import "./styles/index.scss";

const Main = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();
  const isTeacher = erLocalStorage?.getJSONItem("useInfo");

  const toggleAddUserModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const logout = () => {};

  const allowsLogin = (login) => {};

  return (
    <div className="main">
      {isTeacher?.role ? (
        <div className="loginScreen" style={{ backgroundImage: `url("/images/background.jpg")`, display: "flex" }}>
          <Button
            type="primary"
            onClick={() => {
              history.push("/userInfo");
            }}
          >
            User Info
          </Button>
          <div
            style={{ maxWidth: "800px", margin: "auto", background: "white", padding: "2rem", borderRadius: "1rem" }}
          >
            <Game />
          </div>
          <Button
            type="primary"
            onClick={() => {
              erLocalStorage.removeItem("useInfo");
              history.push("/login");
            }}
          >
            Log Out
          </Button>
        </div>
      ) : (
        <h2>Login required</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
