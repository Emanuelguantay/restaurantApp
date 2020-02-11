import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
// import {Button, Icon} from 'react-native-elements';

import Navigation from './navigation/navigation';
//import {fireBaseAPP} from './utils/fireBase';
import fireBase from "firebase";
declare var global: {HermesInternal: null | {}};

const firebaseConfig = {
  apiKey: "AIzaSyD3pStF6heF7Z-RHrMHmgfs1BSTZ3p5cGI",
  authDomain: "tenedores-8cb90.firebaseapp.com",
  databaseURL: "https://tenedores-8cb90.firebaseio.com",
  projectId: "tenedores-8cb90",
  storageBucket: "tenedores-8cb90.appspot.com",
  messagingSenderId: "26239158005",
  appId: "1:26239158005:web:fa69e3c67ceb009f5127bc"
};

if(!fireBase.apps.length){
  fireBase.initializeApp(firebaseConfig);
}

// const App = () => {
//   return <Navigation/>;
//   // return (
//   //     <Navigation/>
//   // );
// };
const App = () => {
  return(<Navigation />)
};

export default App;
