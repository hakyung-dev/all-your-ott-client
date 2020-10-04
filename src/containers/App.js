import { connect } from 'react-redux';
import App from '../App';
import * as actions from '../action';
import { getUser } from '../api';

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.isAuthenticated,
    signInUser: state.signInUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    async authorizeToken() {
      const token = localStorage.getItem('token');
      const headers = { headers: { authorization: `Bearer ${token}` } };
      const result = await getUser(headers);

      if (result.status === 200) {
        dispatch(actions.setSignInUser(result.data.signInUser, true));
      } else {
        localStorage.removeItem('token');
        dispatch(actions.setSignInUser(null, false));
      }
    },
    signOut() {
      localStorage.removeItem('token');
      dispatch(actions.setSignInUser(null, false));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
