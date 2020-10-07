import { connect } from 'react-redux';
import App from '../App';
import * as actions from '../action';
import { getUser, removeStreaming, addStreaming } from '../api';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    signInUser: state.signInUser,
    streaming: state.streaming,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    async authorizeToken() {
      const token = localStorage.getItem('token');
      const headers = { headers: { authorization: `Bearer ${token}` } };
      const result = await getUser(headers);

      if (result.status === 200) {
        dispatch(
          actions.setSignInUser(
            result.data.signInUser,
            true,
            result.data.streaming
          )
        );
      } else {
        localStorage.removeItem('token');
        dispatch(actions.setSignInUser(null, false, null));
      }
    },
    signOut() {
      localStorage.removeItem('token');
      dispatch(actions.setSignInUser(null, false, null));
    },
    async addStreaming(userId, streaming) {
      const result = await addStreaming(userId, streaming);
      if (result.status === 200) {
        dispatch(actions.setStreaming(result.data.user.streaming));
      }
    },
    async removeStreaming(userId, streamingId) {
      const result = await removeStreaming(userId, streamingId);
      if (result.status === 200) {
        dispatch(actions.setStreaming(result.data.user.streaming));
      }
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
