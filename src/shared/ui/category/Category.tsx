import React, { FC } from 'react';

import './Category.scss';

interface CategoryProps {
    title: string;
    isActive: boolean;
}

const Category: FC<CategoryProps> = ({ title, isActive }) => {
    return (
        <div className='category'>
            <h1 className={`category-text ${isActive ? 'active' : 'default'}`}>{title}</h1>
            <hr className='category-line'/>
        </div>
    );
};

export default Category;