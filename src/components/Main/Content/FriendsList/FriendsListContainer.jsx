import {connect} from 'react-redux';
import FriendsList from './FriendsList';

const mapStateToProps = (state) => {
    return {
        friends: state.friends,
    };
};

const FriendsListContainer = connect(mapStateToProps)(FriendsList);

export default FriendsListContainer