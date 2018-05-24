import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

export default class Donor extends React.Component {
  constructor(props) {
    super(props);

    if (props.userData) {
      this.state = { ...props.userData };
    } else {
      this.state = {
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        dob: '',
        sex: '',
        address: '',
        bloodType: ''
      };
    }
  }

  handleSubmit = () => this.props.handleSubmit(this.state);

  render() {
    return (
      <Dialog
        modal
        open={true}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Donor details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            label="First name"
            type="text"
            fullWidth
            onChange={e => this.setState({ firstName: e.target.value })}
            value={this.state.firstName}
          />
          <TextField
            margin="dense"
            id="lastName"
            label="Last name"
            type="text"
            fullWidth
            onChange={e => this.setState({ lastName: e.target.value })}
            value={this.state.lastName}
          />
          <TextField
            margin="dense"
            id="email"
            label="Email"
            type="email"
            fullWidth
            onChange={e => this.setState({ email: e.target.value })}
            value={this.state.email}
          />
          <TextField
            margin="dense"
            id="phone"
            label="Phone"
            type="number"
            fullWidth
            onChange={e => this.setState({ phone: e.target.value })}
            value={this.state.phone}
          />
          <TextField
            margin="dense"
            id="dob"
            label="Date of birth"
            type="date"
            fullWidth
            onChange={e => this.setState({ dob: e.target.value })}
            value={this.state.dob}
          />
          <TextField
            margin="dense"
            id="sex"
            label="Sex"
            type="text"
            fullWidth
            onChange={e => this.setState({ sex: e.target.value })}
            value={this.state.sex}
          />
          <TextField
            margin="dense"
            id="address"
            label="Address"
            type="text"
            fullWidth
            onChange={e => this.setState({ address: e.target.value })}
            value={this.state.address}
          />
          <TextField
            margin="dense"
            id="bloodType"
            label="Blood type"
            type="text"
            fullWidth
            onChange={e => this.setState({ bloodType: e.target.value })}
            value={this.state.bloodType}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.props.handleCancel} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}