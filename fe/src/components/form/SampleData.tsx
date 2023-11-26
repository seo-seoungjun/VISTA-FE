import React from 'react';
import styled from 'styled-components';

const DataBtn = styled.div`
  cursor: pointer;
  border: 1px solid black;
  padding: 1px 2px;
  margin: 10px 0;
`;

function SampleData() {
  return (
    <>
      <DataBtn>sample Data</DataBtn>
    </>
  );
}

export default SampleData;
