import React, { FC, useState } from 'react';
import './Dropdown.scss';

interface DropdownProps {
  actionToEdit: () => void;
  actionToArchive: () => void;
  actionToHide: () => void;
}

const Dropdown: FC<DropdownProps> = ({ actionToEdit, actionToArchive, actionToHide }) => {
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
          <button className="dropdown-item" onClick={actionToEdit}>Редактировать</button>
          <button className="dropdown-item" onClick={actionToArchive}>Архивировать</button>
          <button className="dropdown-item" onClick={actionToHide}>Скрыть</button>
      </div>
    </div>
  );
};

export default Dropdown;