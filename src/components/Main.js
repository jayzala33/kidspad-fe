import React, { useState } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import ProductList from "./ProductList";
import AddProduct from "./AddProduct";

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
      {login ? (
        <div>
          <div className="logout">
            <Button type="primary" danger onClick={logout}>
              Log Out
            </Button>
          </div>
          <h1>Product Details</h1>
          <div className="addProduct">
            <Button type="primary" onClick={toggleAddUserModal}>
              Add Product
            </Button>
          </div>
          <ProductList />
          {isModalVisible && <AddProduct visible={isModalVisible} toggleAddUserModal={toggleAddUserModal} />}
          
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
