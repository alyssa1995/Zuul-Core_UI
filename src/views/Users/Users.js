import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';

import usersData from './UsersData'

function UserRow(props) {
  const user = props.user
  const userLink = `#/users/${user.id}`

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
            'primary'
  }
  

  return (
    <tr key={user.id.toString()}>
        <td><a href={userLink}>{user.name}</a></td>
        <td>{user.lastLogin}</td>
        <td>{user.role}</td>
        <td><Badge href={userLink} color={getBadge(user.status)}>{user.status}</Badge></td>
        <td><i className="fa fa-edit fa-lg" circular></i></td>
    </tr>
  )
}

class Users extends Component {

  render() {

    const userList = usersData.filter((user) => user.id < 10)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">name</th>
                      <th scope="col">last login</th>
                      <th scope="col">role</th>
                      <th scope="col">status</th>
                      <th scope="col">actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userList.map((user, index) =>
                      <UserRow key={index} user={user}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
