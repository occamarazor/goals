import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import reportWebVitals from 'reportWebVitals';
import store from 'store';
import { injectStore } from 'configs/api/api';
import history from 'configs/routing/routingHistory';
import App from 'features/application/App';
import 'index.css';

const container = document.getElementById('root');
const root = createRoot(container);

injectStore(store);

root.render(
  <StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </Provider>
  </StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
