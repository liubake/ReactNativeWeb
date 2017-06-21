import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Navigator from './src/Navigator'



AppRegistry.registerComponent('ReactNativeWeb', () => Navigator);
AppRegistry.runApplication('ReactNativeWeb', { rootTag: document.getElementById('react-app') });