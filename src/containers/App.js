import { connect } from 'react-redux';
import App from '../App';
import * as actions from '../action';
import { getUserApi } from '../api';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    signInUser: state.signInUser,
    streaming: state.streaming,
    selectedDay: state.day,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    async authorizeToken() {
      const token = localStorage.getItem('token');
      const headers = { headers: { authorization: `Bearer ${token}` } };
      const result = await getUserApi(headers);

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
    setStreaming(streaming) {
      dispatch(actions.setStreaming(streaming));
    },
    selectDay(day) {
      dispatch(actions.setDay(day));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
