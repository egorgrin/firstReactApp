import Chat from './Chat';
import {connect} from 'react-redux';


const mapStateToProps = (state) => {
  return {
    friends: state.friends,
  };
};

const ChatContainer = connect(mapStateToProps)(Chat);

export default ChatContainer;
