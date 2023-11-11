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
  //비동기 처리

  return (
    <Section>
      <h1>visualization</h1>
      <SummaryWrapper>
        <p>
          What is the relationship between Production_Budget and US_Gross? This
          visualization will help us understand the relationship between the
          amount of money spent on producing a movie and the amount of money it
          made in the US. We can see if there is a positive correlation between
          the two variables, and if there are any outliers or patterns in the
          data.
        </p>
      </SummaryWrapper>
      <div>
        <GraphWrapper>
          <p>This is visualization Image</p>
        </GraphWrapper>
        <DataSummary></DataSummary>
      </div>
    </Section>
  );
}

export default Visualization;
