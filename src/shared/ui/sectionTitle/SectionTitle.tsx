import React, { FC } from 'react';

import './SectionTitle.scss';

interface SectionTitleProps {
    title: string;
}

const SectionTitle: FC<SectionTitleProps> = ({title}) => {
    return (
        <div className='section'>
            <h1 className='section-text'>{title}</h1>
            <hr className='section-line'/>
        </div>
    );
};

export default SectionTitle;