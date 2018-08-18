import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import HomePage from './components/HomePage';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar >
        <Scene key="main" titleStyle={styles.titleStyle} hideNavBar >
          <Scene 
            key="homePage"
            component={HomePage}
            title="My TODO list"
            initial
          />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  titleStyle: {
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center',
  }
};

export default RouterComponent;
