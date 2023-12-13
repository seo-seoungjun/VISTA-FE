import React from 'react';
import styled from 'styled-components';
import Goal from './Goal';

const Section = styled.section``;
const GoalWrapper = styled.div``;

function GoalExporation() {
  return (
    <Section>
      <h1>Goal exporation</h1>
      <button>Goal toggleBtn</button>
      <GoalWrapper>
        {/* 받은 데이터 map으로 render */}
        <Goal />
      </GoalWrapper>
    </Section>
  );
}

export default GoalExporation;
