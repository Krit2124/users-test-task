import React, { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { fetchUsers } from '../../entities/user/slices/userSlice';

const UsersPage: FC = () => {
    const dispatch = useAppDispatch();
    const { users, isLoading, error } = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            {users.map((user, index) => (
                <React.Fragment key={index}>
                    <p>{user.name}</p>
                </React.Fragment>
            ))}
        </div>
    );
};

export default UsersPage;