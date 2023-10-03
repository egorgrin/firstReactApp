import React from 'react';

import {connect} from 'react-redux';
import Profile from './Profile';
import axios from 'axios';
import {updateCurrentUser} from '../../../../redux/reducers/currentUser';

let currentUserId = `ln92211akDPPc3`;

class ProfileContainer extends React.Component {
  componentDidMount() {
    axios.get(`http://localhost:5000/users/${currentUserId}`)
        .then((response) => {
          this.props.updateCurrentUser(response.data);
        });
  }

  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentUser: state.currentUser,
    friends: state.friends,
  };
};

export default connect(mapStateToProps, {updateCurrentUser})(ProfileContainer);
