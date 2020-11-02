import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Layout from './layouts/Layout';
import Index from './pages/Index';
import SignUp from './pages/Auth/SignUp';
import SignIn from './pages/Auth/SignIn';
import Dashboard from './pages/Dashboard/';
import Review from './pages/Review';
import NewReview from './pages/NewReview';
import MyReview from './pages/MyReview';

const App = (props) => {
  const { authorizeToken, isAuthenticated } = props;

  useEffect(() => {
    const authorize = () => authorizeToken();
    if (localStorage.token) authorize();
  }, [authorizeToken]);

  return (
    <div className="App">
      <Layout {...props}>
        <Switch>
          <Route
            exact
            path="/signup"
            render={() => {
              if (isAuthenticated) {
                return <Redirect to="/" />;
              } else {
                return <SignUp />;
              }
            }}
          />
          <Route
            exact
            path="/signin"
            render={() => {
              if (isAuthenticated) {
                return <Redirect to="/" />;
              } else {
                return <SignIn authorize={authorizeToken} />;
              }
            }}
          />
          <Route
            exact
            path="/dashboard"
            render={() => <Dashboard {...props} />}
          />
          <Route
            exact
            path="/review/new"
            render={(routerProps) => <NewReview {...props} {...routerProps} />}
          />
          <Route
            exact
            path="/review/:id"
            render={(routerProps) => <MyReview {...props} {...routerProps} />}
          />
          <Route exact path="/review" render={() => <Review {...props} />} />
          <Route exact path="/" render={() => <Index />} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
