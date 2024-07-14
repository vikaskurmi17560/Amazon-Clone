import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter} from "react-router-dom";
import { StateProvider } from './components/StateProvider.jsx';
import reducer, { initialState } from './components/Reducer.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateProvider initialState={initialState} reducer={reducer}>
      <App />
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

