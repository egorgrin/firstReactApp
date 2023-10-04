import React from 'react';
import withRouter from '../../../../api/WithRouter';
import axios from 'axios';
import {connect} from 'react-redux';

import Profile from './Profile';
import {updateCurrentUser} from '../../../../redux/reducers/currentUser';

class ProfileContainer extends React.Component {
  componentDidMount() {
        axios.get(`http://localhost:5000/users/${this.props.params.userId}`)
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
    user: state.currentUser,
    friends: state.friends,
  };
};

export default connect(mapStateToProps, {updateCurrentUser})(withRouter(ProfileContainer));