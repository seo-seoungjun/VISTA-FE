import React from 'react';
import styled from 'styled-components';
import Goal from './Goal';
import { useQuery } from 'react-query';
import { getGoalExplorer } from '../../APIs/api';

const Section = styled.section``;
const GoalWrapper = styled.div``;

function GoalExporation() {
  const { isLoading, data } = useQuery('summary', getGoalExplorer);
  console.log(data);
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
