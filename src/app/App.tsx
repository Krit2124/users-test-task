import React, { useEffect } from 'react';
import { UsersPage } from '../pages/users/index';
import { useAppDispatch } from '../shared/hooks/redux';
import { fetchUsers } from '../entities/user/slices/userSlice';
import Header from '../widgets/header';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <Header />
      <UsersPage />
    </div>
  );
}

export default App;
