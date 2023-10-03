import {connect} from 'react-redux';
import UsersList from './UsersList';

const mapStateToProps = (state) => {
    return {
        users: state.users,
        user: state.user,
    };
};

const UsersListContainer = connect(mapStateToProps)(UsersList);

export default UsersListContainer