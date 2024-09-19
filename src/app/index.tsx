import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.scss';
import App from './App';
import { setupStore } from '../shared/store/store';
import { UsersPage } from '../pages/users';
import EditUserPage from '../pages/edit-user';

const store = setupStore();

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <UsersPage />
      },
      {
        path: "user/edit/:id",
        element: <EditUserPage />
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
      <RouterProvider router={router} />
  </Provider>
);