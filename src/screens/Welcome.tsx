import React from 'react';
import { makeScreen } from '@brandingbrand/fsapp';
import { Welcome } from '../components/Welcome';


export const WelcomeScreen = makeScreen(
  () => {
    return <Welcome />;
  },
  {
    bottomTabs: {
      visible: false
    },
    statusBar: {
      style: 'light'
    }
  }
);
