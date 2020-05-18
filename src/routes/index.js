import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Kitchen from '../pages/Kitchen';
import Management from '../pages/Management';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Management} />
      <Route path="/kitchen" component={Kitchen} />
    </Switch>
  );
};

export default Routes;
