import React, { Component } from 'react';
//import { Segment, Header, Comment } from 'semantic-ui-react';
//import { Link } from 'react-router-dom';

class RequestDetailedChat extends Component {
  state = {
    showReplyForm: false,
    selectedCommentId: null
  };
  handleOpenReplyForm = id => () => {
    this.setState({
      showReplyForm: true,
      selectedCommentId: id
    });
  };
  handleCloseReplyForm = () => {
    this.setState({
      selectedCommentId: null,
      showReplyForm: false
    });
  };

  render() {
    return (
      <div>
        Request Chat Detail
      </div>
    );
  }
};

export default RequestDetailedChat;
