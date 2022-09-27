import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import App from './App'
import store from './context/store'
// Styles
// import './styles/css/styles.css'
// import 'bootstrap-icons/font/bootstrap-icons.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
const persistor = persistStore(store)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
