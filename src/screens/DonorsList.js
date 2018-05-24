import React from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Table, Loading } from '../common';
import { Donor } from '../components';

class DonorsList extends React.Component {
  state = { adding: false, editing: null, donors: [], loading: true };

  componentWillMount() {
    setTimeout(() => this.setState({
      donors: [
        {
          firstName: 'Leo',
          lastName: 'Brdar',
          email: 'lbrdar@gmail.com',
          phone: '3243245',
          numOfDonations: 14,
          dob: '12-12-1994',
          sex: 'M',
          bloodType: 'AB+'
        },
        {
          firstName: 'Sebastian',
          lastName: 'Glad',
          email: 'sglad@nebitno.hr',
          phone: '25515321',
          numOfDonations: 21,
          dob: '01-12-1994',
          sex: 'M',
          bloodType: 'A+'
        }
      ],
      loading: false
    }), 1000);
  }

  addNew = () => {
    this.setState({ adding: true });
    // TODO
  };

  handleClose = () => {
    this.setState({ adding: false, editing: null });
  };

  handleSubmit = () => {
    // TODO: Create or update
    this.handleClose();
  };

  render() {
    if (this.state.loading) {
      return <Loading/>
    }

    return (
      <div>
      <Table
        columns={[
          { displayName: 'First name', normalName: 'firstName' },
          { displayName: 'Last name', normalName: 'lastName' },
          { displayName: 'Email', normalName: 'email' },
          { displayName: 'Phone', normalName: 'phone' },
          { displayName: '# of donations', normalName: 'numOfDonations' },
          { displayName: 'Sex', normalName: 'sex' },
          { displayName: 'Blood type', normalName: 'bloodType' },
          ]}
        data={this.state.donors}
        onSelect={(donor) => this.setState({ editing: donor })}
      />
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          onClick={this.addNew}
          style={{ margin: 10, float: 'right' }}
        >
          <Add />
        </Button>

        { (this.state.adding || this.state.editing) &&
          <Donor userData={this.state.editing} handleCancel={this.handleClose} handleSubmit={this.handleSubmit} />
        }
      </div>
  )
    ;
  }
}

export default DonorsList;
