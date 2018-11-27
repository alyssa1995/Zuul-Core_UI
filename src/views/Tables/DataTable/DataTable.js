import React, {Component} from 'react';
import {Card, CardHeader, CardBody} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist//react-bootstrap-table-all.min.css';
import data from './_data';


class DataTable extends Component {
  constructor(props) {
    super(props);

    this.table = data.user;
    this.options = {
      sortIndicator: true,
      hideSizePerPage: true,
      paginationSize: 3,
      hidePageListOnlyOnePage: true,
      clearSearch: true,
      alwaysShowAllBtns: true,
      withFirstAndLast: false
    }

  }

 
  render() {

    return (
      <div className="animated">
        <Card>
          <CardHeader>
            <i className="icon-menu"></i>Data Table{' '}
            <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a>
            <div className="card-header-actions">
              <a href="https://github.com/AllenFang/react-bootstrap-table" rel="noopener noreferrer" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div>
          </CardHeader>
          <CardBody>
            <BootstrapTable data={this.table} version="4" striped hover pagination bd-dark search options={this.options}>
              <TableHeaderColumn dataField="name" dataSort>Name</TableHeaderColumn>
              <TableHeaderColumn isKey dataField="lastLogin">Last Login</TableHeaderColumn>
              <TableHeaderColumn dataField="role" dataSort>Role</TableHeaderColumn>
              <TableHeaderColumn dataField="status" dataSort>Status</TableHeaderColumn>
              <TableHeaderColumn dataField="actions">Actions</TableHeaderColumn>
            </BootstrapTable>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default DataTable;
