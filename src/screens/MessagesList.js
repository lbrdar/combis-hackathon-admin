import React from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Table, Loading } from '../common';
import { Message } from '../components';

class MessagesList extends React.Component {
  state = { adding: false, editing: null, messages: [], loading: true };

  componentWillMount() {
    setTimeout(() => this.setState({
      messages: [
        {
          type: 'info',
          text: 'ajndjqenr jnrgjnqering'
        },
        {
          type: 'info',
          text: 'ajndjqenr dsfq'
        },
        {
          type: 'invite',
          text: 'Come and donate'
        },
        {
          type: 'invite',
          text: 'Need blood pls'
        },
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
            { displayName: 'Type', normalName: 'type' },
            { displayName: 'Content', normalName: 'text' },
          ]}
          data={this.state.messages}
          onSelect={(message) => this.setState({ editing: message })}
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
        <Message messageData={this.state.editing} handleCancel={this.handleClose} handleSubmit={this.handleSubmit} />
        }
      </div>
    )
      ;
  }
}

export default MessagesList;
