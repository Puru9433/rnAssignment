/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaProvider
} from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { getStore, getPersistor } from './src/store/index.js';
import RootNavigator from './src/navigation/index.js';
import FlashMessage from "react-native-flash-message";

function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const store = getStore();
  const persistor = getPersistor();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
        <FlashMessage position="top" style={{paddingTop : 30}}/>
      </PersistGate>
    </Provider>
  );
}

export default App;
