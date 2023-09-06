import {connect} from 'react-redux';
import Messages from './Messages';

const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};

const MessagesContainer = connect(mapStateToProps)(Messages);


export default MessagesContainer;
