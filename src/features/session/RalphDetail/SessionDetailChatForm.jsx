import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextArea from '../../../app/common/form/TextArea';

class SessionDetailChatForm extends Component {
  handleCommentSubmit = values => {
    const { addSessionComment, reset, sessionId, closeForm, parentId } = this.props;
    addSessionComment(sessionId, values, parentId);
    reset();
    if (parentId !== 0) {
        closeForm();
    }
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.handleCommentSubmit)}>
        <Field name="comment" type="text" component={TextArea} rows={2} />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    );
  }
};

export default reduxForm({ Fields: 'comment' })(SessionDetailChatForm);