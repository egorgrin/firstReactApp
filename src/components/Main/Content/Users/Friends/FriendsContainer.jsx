import {connect} from 'react-redux';
import Users from '../Users';

const mapStateToProps = (state) => {
  return {
    users: state.users,
    currentUser: state.currentUser,
  };
};

const FriendsContainer = connect(mapStateToProps)(Users);

export default FriendsContainer