import React, { Component } from 'react';
import { Segment, Header, Comment } from 'semantic-ui-react';
import SessionDetailChatForm from './SessionDetailChatForm';
import { Link } from 'react-router-dom';
import distanceInWords from 'date-fns/distance_in_words';

class SessionDetailedChat extends Component {
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
    const { addSessionComment, sessionId, sessionChat } = this.props;
    const { showReplyForm, selectedCommentId } = this.state;
    return (
      <div>
          <Comment.Group>
            {sessionChat &&
              sessionChat.map(comment => (
                <Comment key={comment.id}>
                  <Comment.Avatar src={comment.photoURL || '/assets/user.png'} />
                  <Comment.Content>
                    <Comment.Author as={Link} to={`/profile/${comment.uid}`}>
                      {comment.displayName}
                    </Comment.Author>
                    <Comment.Metadata>
                      <div>{distanceInWords(comment.date, Date.now())} ago</div>
                    </Comment.Metadata>
                    <Comment.Text>{comment.text}</Comment.Text>
                    <Comment.Actions>
                      <Comment.Action onClick={this.handleOpenReplyForm(comment.id)}>Reply</Comment.Action>
                      {showReplyForm &&
                        selectedCommentId === comment.id && (
                          <SessionDetailChatForm
                            form={`reply_${comment.id}`}
                            addSessionComment={addSessionComment}
                            sessionId={sessionId}
                            closeForm={this.handleCloseReplyForm}
                            parentId={comment.id}
                          />
                        )}
                    </Comment.Actions>
                  </Comment.Content>
                  {comment.childNodes &&
                    comment.childNodes.map(child => (
                      <Comment.Group>
                        <Comment key={child.id}>
                          <Comment.Avatar src={child.photoURL || '/assets/user.png'} />
                          <Comment.Content>
                            <Comment.Author as={Link} to={`/profile/${child.uid}`}>
                              {child.displayName}
                            </Comment.Author>
                            <Comment.Metadata>
                              <div>{distanceInWords(child.date, Date.now())} ago</div>
                            </Comment.Metadata>
                            <Comment.Text>{child.text}</Comment.Text>
                            <Comment.Actions>
                              <Comment.Action onClick={this.handleOpenReplyForm(child.id)}>Reply</Comment.Action>
                              {showReplyForm &&
                                selectedCommentId === child.id && (
                                  <SessionDetailChatForm
                                    form={`reply_${child.id}`}
                                    addSessionComment={addSessionComment}
                                    sessionId={sessionId}
                                    closeForm={this.handleCloseReplyForm}
                                    parentId={child.parentId}
                                  />
                                )}
                            </Comment.Actions>
                          </Comment.Content>
                        </Comment>
                      </Comment.Group>
                    ))}
                </Comment>
              ))}
          </Comment.Group>
          <SessionDetailChatForm parentId={0} form={'newComment'} addSessionComment={addSessionComment} sessionId={sessionId} />
      </div>
    );
  }
};

export default SessionDetailedChat;
