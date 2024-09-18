import React, { FC } from 'react';

import './UsersPage.scss';
import { useAppSelector } from '../../shared/hooks/redux';
import { UserCard, UserCardArchive } from '../../widgets/userCard';
import SectionTitle from '../../shared/ui/sectionTitle';

import placeholderImage from '../../shared/assets/avatarActive.png'
import placeholderArchiveImage from '../../shared/assets/avatarArchived.png'


const UsersPage: FC = () => {
    const { users, isLoading, error } = useAppSelector(state => state.userReducer);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className='container'>
            <SectionTitle title="Активные"/>
            <div className='users-list'>
                {users.map((user, index) => (
                    <React.Fragment key={index}>
                        <UserCard id={user.id} username={user.username} city={user.city} company={user.company} img={placeholderImage}/>
                    </React.Fragment>
                ))}
            </div>
            
            <SectionTitle title="Архив"/>
            <div className='users-list'>
                {users.map((user, index) => (
                    <React.Fragment key={index}>
                        <UserCardArchive id={user.id} username={user.username} city={user.city} company={user.company} img={placeholderArchiveImage}/>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default UsersPage;