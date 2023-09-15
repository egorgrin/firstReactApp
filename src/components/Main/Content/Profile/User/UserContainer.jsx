import s from "./User.module.css";
import ava from "../../../../../assets/img/ava.png";

import Feed from "./Feed/Feed.jsx";
import FriendsWidgetItem from "./FriendsWiget/FriendsWidgetItem";
import {connect} from 'react-redux';
import Chat from '../../Messages/Chat/Chat';
import User from './User';

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
    user: state.user,
  };
};

const UserContainer = connect(mapStateToProps)(User);

export default UserContainer;
