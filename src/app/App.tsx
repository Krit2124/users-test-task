import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

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

      <Outlet />
    </div>
  );
}

export default App;
