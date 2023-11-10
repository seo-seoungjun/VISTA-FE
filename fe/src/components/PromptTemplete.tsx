import React from 'react';
import styled from 'styled-components';

const Templete = styled.div`
  width: 500px;
  height: 500px;
  border: 1px solid black;
  border-radius: 15px;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

function PromptTemplete() {
  return (
    <>
      <Templete>
        <p>PromptTemplete</p>
      </Templete>
    </>
  );
}

export default PromptTemplete;
