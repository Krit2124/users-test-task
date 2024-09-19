import React, { FC } from 'react';
import { DropdownActive } from '../../shared/ui/dropdown';

import './UserCard.scss';
import { useAppDispatch } from '../../shared/hooks/redux';
import { hideUser, moveToArchive } from '../../entities/user/slices/userSlice';

interface UserCardProps {
    id: number;
    username: string;
    city: string;
    company: string;
    img: string;
}

const UserCard: FC<UserCardProps> = ({ id, username, city, company, img }) => {
    const dispatch = useAppDispatch();

    return (
        <div className="userCard">
            <img src={img} alt="Avatar" className="userCard-avatar" />
            <div className="userCard-info">
                <div className="userCard-info-top">
                    <div className="userCard-info-top-content">
                        <p className="userCard-name">{username}</p>
                        <p className="userCard-company">{company}</p>
                    </div>
                    
                    <div className="userCard-menu">
                        <DropdownActive actionToArchive={() => {dispatch(moveToArchive(id))}} actionToEdit={() => {}} actionToHide={() => {dispatch(hideUser(id))}}/>
                    </div>
                </div>

                <div className="userCard-info-bottom">
                    <p className="userCard-city">{city}</p>
                </div>
            </div>
        </div>
    );
};

export default UserCard;