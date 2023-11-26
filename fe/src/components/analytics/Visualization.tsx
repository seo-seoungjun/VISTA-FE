import React from 'react';
import styled from 'styled-components';
import DataSummary from './DataSummary';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 150px;
  &:nth-child(2) {
    display: flex;
  }
`;
const SummaryWrapper = styled.div``;
const GraphWrapper = styled.div``;

function Visualization() {
  // const { isLoading, data } = useQuery('visualization', getVisialization);
  // console.log(data);

  return (
    <Section>
      <h1>visualization</h1>
      <SummaryWrapper></SummaryWrapper>
      <div>
        <GraphWrapper></GraphWrapper>
        <DataSummary></DataSummary>
      </div>
    </Section>
  );
}

export default Visualization;
