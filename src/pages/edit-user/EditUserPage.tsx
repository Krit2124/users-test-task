import React from 'react';

import './EditUserPage.scss';
import TextField from '../../shared/ui/textField';

import goBackImage from '../../shared/assets/backarrow.png'
import avatarImage from '../../shared/assets/avatarActive.png';
import Category from '../../shared/ui/category';
import ButtonDefault from '../../shared/ui/button';

const EditUserPage = () => {
    const [name, setName] = React.useState('Иван');
    const [username, setUsername] = React.useState('Иван');
    const [email, setEmail] = React.useState('Иван@gmail.com');
    const [city, setCity] = React.useState('Санкт-Петербург');
    const [phone, setPhone] = React.useState('8-800-000-000');
    const [company, setCompany] = React.useState('AT-WORK');

    return (
        <div className='container'>
            <div className='goBack'>
                <button className='goBack-button'>
                    <img src={goBackImage} alt="go back" className='goBack-button-image'/>
                    <p className='goBack-button-text'>Назад</p>
                </button>
            </div>

            <div className='content'>
                <div className='category-panel'>
                    <img src={avatarImage} alt="avatar" className='category-panel-image' />

                    <div className='category-panel-list'>
                        <Category title="Данные профиля" isActive={true} />
                        <Category title="Рабочее пространство" isActive={false} />
                        <Category title="Приватность" isActive={false} />
                        <Category title="Безопасность" isActive={false} />
                    </div>
                </div>

                <div className='userData'>
                    <div className='userData-content'>
                        <h1 className='userData-content-title'>Данные профиля</h1>

                        <TextField fieldName='Имя' value={name} setValue={setName} />
                        <TextField fieldName='Никнейм' value={username} setValue={setUsername} />
                        <TextField fieldName='Почта' value={email} setValue={setEmail} />
                        <TextField fieldName='Город' value={city} setValue={setCity} />
                        <TextField fieldName='Телефон' value={phone} setValue={setPhone} />
                        <TextField fieldName='Название компании' value={company} setValue={setCompany} />
                    </div>
                    
                    <ButtonDefault text="Сохранить" action={() => {}}/>
                </div>
            </div>
            
        </div>
    );
};

export default EditUserPage;