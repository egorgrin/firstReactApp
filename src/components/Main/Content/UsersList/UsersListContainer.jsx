import {connect} from 'react-redux';
import UsersList from './UsersList';

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
        users: state.users,
    };
};

const UsersListContainer = connect(mapStateToProps)(UsersList);

export default UsersListContainer