import React, { CSSProperties } from 'react';
import { CloseModalButton, CreateMenu } from './styles';

interface Props {
  show: boolean;
  onCloseModal: (e: React.MouseEvent) => void;
  style: CSSProperties;
  closeButton?: boolean;
}

const Menu: React.FC<Props> = ({ children, style, show, onCloseModal, closeButton }) => {
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  if (!show) return null;

  return (
    <CreateMenu onClick={onCloseModal}>
      <div style={style} onClick={stopPropagation}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  );
};

Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
