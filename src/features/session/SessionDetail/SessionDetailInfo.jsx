import React, { Component } from 'react';
import { Segment, Grid, Icon, Button } from 'semantic-ui-react';
import SessionDetailMap from './SessionDetailMap'

/*const SessionDetailInfo = ({session}) => { */
class SessionDetailInfo extends Component {
  state = {
    showMap: false
  }

  showMapToggle = () => {
    this.setState(prevState => ({
      showMap: !prevState.showMap
    }))
  }

  render() {
    const { session } = this.props;
    return (
      <Segment.Group>
        <Segment attached="top">
          <Grid>
            <Grid.Column width={1}>
              <Icon size="large" color="teal" name="info" />
            </Grid.Column>
            <Grid.Column width={15}>
              <p>{session.description}</p>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="calendar" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={15}>
              <span>{session.date}</span>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment attached>
          <Grid verticalAlign="middle">
            <Grid.Column width={1}>
              <Icon name="marker" size="large" color="teal" />
            </Grid.Column>
            <Grid.Column width={11}>
              <span>{session.venue}</span>
            </Grid.Column>
            <Grid.Column width={4}>
              <Button onClick={this.showMapToggle} color="teal" size="tiny" content={this.state.showMap ? 'Hide Map' : 'Show Map'} />
            </Grid.Column>
          </Grid>
        </Segment>
        {this.state.showMap &&
        <SessionDetailMap lat={session.venueLatLng.lat} lng={session.venueLatLng.lng}/>}
      </Segment.Group>
    );
  }
}

export default SessionDetailInfo;