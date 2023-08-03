import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from './app/store.ts';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <App />
      </PersistGate>
    </ReduxProvider>
  </React.StrictMode>,
)
