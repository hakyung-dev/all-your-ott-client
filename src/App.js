import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './layouts/Layout';
import Index from './pages/Index';

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/" render={() => <Index />} />
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
