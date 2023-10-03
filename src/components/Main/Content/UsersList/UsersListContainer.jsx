import {connect} from 'react-redux';
import UsersList from './UsersList';

const mapStateToProps = (state) => {
    return {
        users: state.users,
        currentUser: state.currentUser,
    };
};

const UsersListContainer = connect(mapStateToProps)(UsersList);

export default UsersListContainer