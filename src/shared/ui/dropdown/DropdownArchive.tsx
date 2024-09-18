import React, { FC, useState } from 'react';
import './Dropdown.scss';

interface DropdownProps {
  actionToActivate: () => void;
}

const Dropdown: FC<DropdownProps> = ({ actionToActivate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={toggleDropdown}>
        ⋮
      </button>
      <div className={`dropdown-menu ${isOpen ? 'show' : ''}`}>
        <button className="dropdown-item" onClick={actionToActivate}>Активировать</button>
      </div>
    </div>
  );
};

export default Dropdown;