import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@material-ui/core';

export default class Questionnaire extends React.Component {
  constructor(props) {
    super(props);

    if (props.questionnaireData) {
      this.state = { ...props.questionnaireData };
    } else {
      this.state = {
        question: ''
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
        <DialogTitle id="form-dialog-title">Questionnaire details</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            multiLine
            margin="dense"
            id="question"
            label="Question"
            type="text"
            fullWidth
            onChange={e => this.setState({ question: e.target.value })}
            value={this.state.question}
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