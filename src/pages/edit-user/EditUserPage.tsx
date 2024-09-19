import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import './EditUserPage.scss';
import TextField from '../../shared/ui/textField';
import goBackImage from '../../shared/assets/backarrow.png'
import avatarImage from '../../shared/assets/avatarActive.png';
import Category from '../../shared/ui/category';
import ButtonDefault from '../../shared/ui/button';
import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux';
import { saveUser } from '../../entities/user/slices/userSlice';


const EditUserPage = () => {
    const dispatch = useAppDispatch();
    const { chosenUser } = useAppSelector(state => state.userReducer);
    const navigate = useNavigate();

    const [name, setName] = useState(chosenUser ? chosenUser.name : '');
    const [username, setUsername] = useState(chosenUser ? chosenUser.username : '');
    const [email, setEmail] = useState(chosenUser ? chosenUser.email : '');
    const [city, setCity] = useState(chosenUser ? chosenUser.city : '');
    const [phone, setPhone] = useState(chosenUser ? chosenUser.phone : '');
    const [company, setCompany] = useState(chosenUser ? chosenUser.company : '');

    useEffect(() => {
        if (!chosenUser) {
            navigate('/');
        };
    }, []);

    function handleSubmit() {
        if (name === '' || username === '' || email === '' || city === '' || phone === '' || company === '') {
            toast.error('Необходимо заполнить все поля');
            return;
        }

        let updatedUser = {
            id: chosenUser ? chosenUser.id : -1,
            name: name,
            username: username,
            email: email,
            city: city,
            phone: phone,
            company: company,
        }

        dispatch(saveUser(updatedUser))
        toast.success('Изменения сохранены!');
    }

    return (
        <div className='container'>
            <div className='goBack'>
                <button className='goBack-button' onClick={() => window.history.back()}>
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
                    
                    <ButtonDefault text="Сохранить" action={handleSubmit}/>
                </div>
            </div>

            <ToastContainer
                position="bottom-right"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

export default EditUserPage;