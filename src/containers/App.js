import { connect } from 'react-redux';
import App from '../App';
import * as actions from '../action';
import { getUserApi } from '../api';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    signInUser: state.signInUser,
    streaming: state.streaming,
    review: state.review,
    day: state.day,
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
            result.data.streaming,
            result.data.review
          )
        );
      } else {
        localStorage.removeItem('token');
        dispatch(actions.setSignInUser(null, false, null, null));
      }
    },
    signOut() {
      localStorage.removeItem('token');
      dispatch(actions.setSignInUser(null, false, null));
    },
    setStreaming(streaming) {
      dispatch(actions.setStreaming(streaming));
    },
    setUserReview(review) {
      dispatch(actions.setReview(review));
    },
    changeDay(day) {
      dispatch(actions.setDay(day));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
