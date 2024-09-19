import React, { useEffect } from 'react';
import { UsersPage } from '../pages/users/index';
import { useAppDispatch } from '../shared/hooks/redux';
import { fetchUsers } from '../entities/user/slices/userSlice';
import Header from '../widgets/header';
import EditUserPage from '../pages/edit-user';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <Header />

      <EditUserPage />
    </div>
  );
}

export default App;
