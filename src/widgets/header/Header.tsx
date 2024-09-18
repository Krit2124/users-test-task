import React, { FC } from 'react';

import './Header.scss';

import logoImage from '../../shared/assets/logo.png';
import favoriteImage from '../../shared/assets/favorite.png';
import notificationImage from '../../shared/assets/notification.png';
import placeholderAvatarImage from '../../shared/assets/avatarActive.png'

const Header: FC = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <img src={logoImage} alt="logo" />
                </div>

                <div className="header-actions">
                    <div className='header-icons'>
                        <button className="header-icon-button">
                            <img src={favoriteImage} alt="favorite" />
                        </button>

                        <button className="header-icon-button">
                            <img src={notificationImage} alt="notification" />
                        </button>
                    </div>
                    

                    <div className="header-user">
                        <img src={placeholderAvatarImage} alt="User Avatar" className="header-user-avatar"/>
                        <p className="header-user-name">Ivan1234</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;