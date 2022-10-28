import React, { useState } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";
import Game from "./Game/Game";
import "./Game/Game.scss";
// import "./styles/index.scss";

const Main = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [login, setLogin] = useState(false);

  const toggleAddUserModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const logout = () => {
    setLogin(false);
  };

  const allowsLogin = (login) => {
    setLogin(login);
  };

  return (
    <div className="main">
      {!login ? (
        <div className="loginScreen" style={{ backgroundImage: `url("/images/background.jpg")`, display: "flex" }}>
          <div
            style={{ maxWidth: "800px", margin: "auto", background: "white", padding: "2rem", borderRadius: "1rem" }}
          >
            <Game />
          </div>
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
