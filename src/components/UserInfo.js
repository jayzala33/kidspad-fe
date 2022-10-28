import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import { Typography, Row, Col, Card } from 'antd';
import axios from 'axios';
import { erLocalStorage } from '../store/erLocalStorage';

const { Text, Title } = Typography;
const UserInfo = (props) => {
  const isTeacher = erLocalStorage?.getJSONItem('useInfo');
  console.log('isTeacher: ', isTeacher);
  const [userData, setUserData] = useState([
    {
      name: 'jason',
      email: 'jason@gmail.com',
      phone: '65431244',
      score: '6',
    },
    {
      name: 'roy',
      email: 'roy@gmail.com',
      phone: '654312313',
      score: '9',
    },
    {
      name: 'todd',
      email: 'todd@gmail.com',
      phone: '6543123123',
      score: '5',
    },
    {
      name: 'toby',
      email: 'toby@gmail.com',
      phone: '654312321',
      score: '7',
    },
    {
      name: 'hiren',
      email: 'hiren@gmail.com',
      phone: '65431223123',
      score: '9',
    },
    {
      name: 'jack',
      email: 'jack@gmail.com',
      phone: '6543124523',
      score: '4',
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:3001/users', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        const hello = await response.json();
        console.log('hello: ', hello);
        setUserData(hello?.users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div
      className='loginScreen'
      style={{
        backgroundImage: `url("/images/background.jpg")`,
        display: 'flex',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          margin: 'auto',
          background: 'white',
          padding: '2rem',
          borderRadius: '1rem',
        }}
      >
        {isTeacher?.role === 'teacher' ? (
          <>
            <h2 style={{ textAlign: 'center' }}>Students Info</h2>
            <Row gutter={[8, 8]}>
              {userData?.map((data, index) => {
                return (
                  <Col key={index} lg={12} sm={24}>
                    <div>
                      <Card title={data?.name} style={{ width: 300 }}>
                        <p>Email: {data?.email}</p>
                        <p>Phone: {data?.phone}</p>
                        <p>Score: {data?.score || '9'}/10</p>
                      </Card>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </>
        ) : (
          <h2 style={{ textAlign: 'center' }}>No data to show</h2>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
