import {connect} from 'react-redux';
import UsersList from './UsersList';

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
    };
};

const UsersListContainer = connect(mapStateToProps)(UsersList);

export default UsersListContainer