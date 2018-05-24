import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

export default class Message extends React.Component {
  constructor(props) {
    super(props);

    if (props.messageData) {
      this.state = { ...props.messageData };
    } else {
      this.state = {
        type: '',
        location: '',
        text: ''
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
        <DialogTitle id="form-dialog-title">Message details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="type"
            label="Type"
            type="text"
            fullWidth
            onChange={e => this.setState({ type: e.target.value })}
            value={this.state.type}
          />
          <TextField
            autoFocus
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            onChange={e => this.setState({ location: e.target.value })}
            value={this.state.location}
          />

          <TextField
            multiLine
            margin="dense"
            id="text"
            label="Text"
            type="text"
            fullWidth
            onChange={e => this.setState({ text: e.target.value })}
            value={this.state.text}
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