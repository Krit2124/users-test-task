import React, { FC } from 'react';

import './TextField.scss';

interface TextFieldProps {
    fieldName: string;
    value: string | undefined;
    setValue: (value: string) => void;
}

const TextField: FC<TextFieldProps> = ({ fieldName, value, setValue }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleClear = () => {
        setValue('');
    };

    return (
        <div className="input-field-container">
            <label className="input-label">{fieldName}</label>
            <div className="input-wrapper">
                <input
                    type="text"
                    value={value}
                    onChange={handleInputChange}
                    placeholder={fieldName}
                    className="input-field"
                />

                {value && <button className="clear-btn" onClick={handleClear}>×</button>}
            </div>
        </div>
    );
};

export default TextField;