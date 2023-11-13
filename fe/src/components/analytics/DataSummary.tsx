import React from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getSummary } from '../../APIs/api';

const DataSummaryWrapper = styled.div``;

function DataSummary() {
  const { isLoading, data } = useQuery('summary', getSummary);
  console.log(data);
  return (
    <DataSummaryWrapper>
      <p>This is data summary</p>
    </DataSummaryWrapper>
  );
}

export default DataSummary;
