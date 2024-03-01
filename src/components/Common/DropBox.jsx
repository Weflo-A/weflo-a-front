import React from 'react';
import styled from 'styled-components';

interface DropBoxProps {
  onDrop: (data: string) => void;
}

const DropBox: React.FC<DropBoxProps> = ({ onDrop, children }) => {
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    onDrop(data);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <DropContainer onDrop={handleDrop} onDragOver={handleDragOver}>
      {children}
    </DropContainer>
  );
};

export default DropBox;

const DropContainer = styled.div`
  width: 100%;
  height: 100%;
  border: 2px dashed #cccccc;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  cursor: pointer;
`;
