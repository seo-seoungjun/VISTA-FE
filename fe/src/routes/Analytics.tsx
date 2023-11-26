import React, { useEffect } from 'react';
import styled from 'styled-components';
import Visualization from '../components/analytics/Visualization';
import GoalExporation from '../components/analytics/GoalExporation';
import { useRecoilState } from 'recoil';
import { resultDatas } from '../atoms/atom';
import SideBar from '../components/navbar/SideBar';

const Section = styled.section`
  width: 70%;
`;

function Analytics(props: any) {
  const [resultData, setResultData] = useRecoilState(resultDatas);

  useEffect(() => {
    setResultData(props.location.state.data);
  }, []);

  console.log(resultData);

  return (
    <>
      <SideBar />
      <Section>
        <Visualization></Visualization>
        <GoalExporation></GoalExporation>
      </Section>
    </>
  );
}

export default Analytics;
