import React, { FC } from 'react';
import './ButtonDefault.scss';

interface ButtonProps {
    text: string;
    action: () => void;
}

const ButtonDefault: FC<ButtonProps> = ({ text, action }) => {
    return (
        <button className="button-default" onClick={action}>{text}</button>
    );
};

export default ButtonDefault;