import React from 'react';
import withRouter from '../../../../api/WithRouter';
import {connect} from 'react-redux';

import Profile from './Profile';

class ProfileContainer extends React.Component {
  render() {
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user,
    friends: state.friends,
  };
};

export default connect(mapStateToProps)(withRouter(ProfileContainer));