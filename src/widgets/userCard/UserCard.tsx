import React, { FC } from 'react';
import { DropdownActive } from '../../shared/ui/dropdown';
import { useNavigate } from 'react-router-dom';

import './UserCard.scss';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { hideUser, moveToArchive, setChosenUser } from '../../entities/user/slices/userSlice';

interface UserCardProps {
    id: number;
    username: string;
    city: string;
    company: string;
    img: string;
}

const UserCard: FC<UserCardProps> = ({ id, username, city, company, img }) => {
    const dispatch = useAppDispatch();
    const { chosenUser } = useAppSelector(state => state.userReducer);
    const navigate = useNavigate();

    const handleUserEdit = () => {
        dispatch(setChosenUser(id))
        navigate('/user/edit/' + id);
    }

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
                        <DropdownActive actionToArchive={() => {dispatch(moveToArchive(id))}} actionToEdit={handleUserEdit} actionToHide={() => {dispatch(hideUser(id))}}/>
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