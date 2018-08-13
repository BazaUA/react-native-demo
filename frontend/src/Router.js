import React from 'react';
import { StyleSheet } from 'react-native';
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
            // navigationBarStyle={styles.navBar}
            // titleStyle={{ alignSelf: 'center' }}
            initial
          />
        </Scene>
      </Scene>
    </Router>
  );
};

const styles = {
  navBar: {
    backgroundColor: 'grey',
  },
  titleStyle: {
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center',
  }
};

export default RouterComponent;
