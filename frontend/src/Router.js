import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import TestComponent from './components/TestComponent';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="main">
          <Scene
            key="testComponent"
            component={TestComponent}
            title="TestComponent"
            initial
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
