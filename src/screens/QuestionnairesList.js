import React from 'react';
import { Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import { Table, Loading } from '../common';
import { Questionnaire } from '../components';

class QuestionnairesList extends React.Component {
  state = { adding: false, editing: null, questionnaires: [], loading: true };

  componentWillMount() {
    setTimeout(() => this.setState({
      questionnaires: [
        {
          question: 'Are you ok?'
        },
        {
          question: "Why not?"
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
            { displayName: 'Question', normalName: 'question' }
          ]}
          data={this.state.questionnaires}
          onSelect={(questionnaire) => this.setState({ editing: questionnaire })}
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
        <Questionnaire questionnaireData={this.state.editing} handleCancel={this.handleClose} handleSubmit={this.handleSubmit} />
        }
      </div>
    )
      ;
  }
}

export default QuestionnairesList;
