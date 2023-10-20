import React from 'react';
import {withRouterHOC} from '../../../../api/WithRouterHOC';
import {connect} from 'react-redux';

import Profile from './Profile';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
  render = () => <Profile {...this.props} />;
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    auth: state.auth.data,
    friends: state.friends,
  };
};

export default compose(
    connect(mapStateToProps),
    withRouterHOC,
)(ProfileContainer);

// export default connect(mapStateToProps)(withRouterHOC(ProfileContainer));