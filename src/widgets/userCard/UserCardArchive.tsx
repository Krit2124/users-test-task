import React, { FC } from 'react';
import { DropdownArchive } from '../../shared/ui/dropdown';

import './UserCard.scss';
import { useAppDispatch } from '../../shared/hooks/redux';
import { moveToActive } from '../../entities/user/slices/userSlice';

interface UserCardProps {
    id: number;
    username: string;
    city: string;
    company: string;
    img: string;
}

const UserCardArchive: FC<UserCardProps> = ({ id, username, city, company, img }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="userCard">
            <img src={img} alt="Avatar" className="userCard-avatar" />
            <div className="userCard-info">
                <div className="userCard-info-top">
                    <div className="userCard-info-top-content">
                        <p className="userCard-name-archive">{username}</p>
                        <p className="userCard-company-archive">{company}</p>
                    </div>
                    
                    <div className="userCard-menu">
                        <DropdownArchive actionToActivate={() => {dispatch(moveToActive(id))}}/>
                    </div>
                </div>

                <div className="userCard-info-bottom">
                    <p className="userCard-city">{city}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCardArchive;