import React, {Component} from 'react';
import {Card, CardHeader, CardBody, Badge, Button} from 'reactstrap';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ModalComp from '../../Notifications/Modals/Modalss.js';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit.min.css';
import '../DataTable/DataTable.css';

const users = [{
  'name': 'Alyssa Durante',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Engineer',
  'status': false,
  'actions': true
},
{
  'name': 'Reian Thomas',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Engineer',
  'status': true,
  'actions': true
},
{
  'name': 'Nick Springsteen',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Analyst',
  'status': true,
  'actions': true
},
{
  'name': 'Danny Regenstein',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Admin',
  'status': false,
  'actions': true
},
{
  'name': 'Holden Collick',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Analyst',
  'status': false,
  'actions': true
},
{
  'name': 'Rachel Miller',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Analyst',
  'status': true,
  'actions': true
},
{
  'name': 'Ryan Anders',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Analyst',
  'status': true,
  'actions': true
},
{
  'name': 'Eric Ewing',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Admin',
  'status': false,
  'actions': true
},
{
  'name': 'Brian Schwartz',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Analyst',
  'status': false,
  'actions': true
},
{
  'name': 'Andrew Klayman',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Analyst',
  'status': true,
  'actions': true
},
{
  'name': 'Greg Elbaum',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Analyst',
  'status': true,
  'actions': true
},
{
  'name': 'Kat Herskovits',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Analyst',
  'status': true,
  'actions': true
},
{
  'name': 'Anthony Zaloom',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Analyst',
  'status': true,
  'actions': true
},
{
  'name': 'Paul Curwin',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Engineer',
  'status': false,
  'actions': true
},
{
  'name': 'Ben',
  'email': 'tellus.eu.augue@arcu.com',
  'lastLogin': '2016-01-09T14:48:34-08:00',
  'role': 'Engineer',
  'status': true,
  'actions': true
}
]

function actions() {
  return (
    <span text-center>
      <Button color="success" className="btn-pill">
        <i className="fa fa-edit fa-lg"></i>
      </Button>
      <ModalComp/>
        &nbsp;
        &nbsp;
      <Button color="danger" className="btn-pill">
        <i className="fa fa-close fa-lg"></i>
      </Button>    
      </span>
    
  );
}
const { SearchBar } = Search;
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
    },
    {
      dataField: 'actions',
      isDummyField: true,
      text: 'Actions',
      formatter: actions, 
      align: 'center',
      headerAlign: 'center'
    }
];



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
            <i className="icon-menu"></i>Users and Permissions{' '}
          </CardHeader>
          <CardBody>
            <ToolkitProvider
              keyField="name"
              data={ users }
              columns={ columns }
              search
            >
              {
                props => (
                  <div>
                    <SearchBar { ...props.searchProps }/>
                    <hr />
                    <BootstrapTable
                      { ...props.baseProps } pagination={ paginationFactory() }
                    />
                  </div>
                )
              }
            </ToolkitProvider>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DataTable;
