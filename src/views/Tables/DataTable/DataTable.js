import React, {Component} from 'react';
import {Card, CardHeader, CardBody, Badge} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const users = [{
  'name': 'Alyssa Durante',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Engineer',
  'status': false
},

]


const columns = [
  {
    dataField: 'name',
    text: 'Name'
  },
  {
    dataField: 'lastLogin',
    text: 'Last Login'
  },
  {
    dataField: 'role',
    text: 'Role'
  },
  {
      dataField: 'dtf1',
      isDummyField: true,
      text: 'Status',
      formatter: (cellContent, row) => {
        if (row.status) {
          return (
              <span>
                <Badge className="mr-1" color="success">online</Badge> 
              </span>
          );
        }
        else {
          return (
            <span>
              <Badge className="mr-1" color="danger">offline</Badge>
              </span>
          )
        }
      }
    }
]

class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = { users };
  }

  toggleStatus = () => {
    let newUsers = [...this.state.users];
    newUsers = newUsers.map((d) => {
      if (d.status === true) {
        return {
          ...d,
          status: !d.status
        };
      }
    return d;
  });
    this.setState(curr => ({...curr, users: newUsers}));
};
  render() {

    return (
      <div className="animated">
        <Card>
          <CardHeader>
            <i className="icon-menu"></i>Data Table{' '}
            <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
          </CardHeader>
          <CardBody>
            <BootstrapTable keyField="name" data= {this.state.users} columns={ columns } striped hover />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DataTable;
