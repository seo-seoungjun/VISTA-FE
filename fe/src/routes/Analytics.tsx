import React, { useEffect } from 'react';
import styled from 'styled-components';
import Visualization from '../components/analytics/Visualization';
import GoalExporation from '../components/analytics/GoalExporation';
import { useRecoilState } from 'recoil';
import { isDataExist, resultDatas } from '../atoms/atom';
import SideBar from '../components/navbar/SideBar';
import { useLocation } from 'react-router-dom';

const DATA_KEY = 'data';

const Section = styled.section`
  width: 70%;
`;

function Analytics() {
  const [resultData, setResultData] = useRecoilState(resultDatas);
  const [isData, setIsData] = useRecoilState(isDataExist);

  const { state } = useLocation<any>();

  useEffect(() => {
    if (state.data !== undefined) {
      setResultData(state.data);
      localStorage.setItem(DATA_KEY, JSON.stringify(resultData));
      setIsData(true);
    } else {
      if (localStorage.getItem(DATA_KEY) !== null) {
        setResultData(JSON.parse(localStorage.getItem(DATA_KEY) || ''));
        setIsData(true);
      }
    }
  }, [resultData]);

  console.log(resultData);

  return (
    <>
      {isData ? (
        <>
          <SideBar />
          <Section>
            <Visualization></Visualization>
            <GoalExporation></GoalExporation>
          </Section>
        </>
      ) : (
        '파일을 제출해 주세요'
      )}
    </>
  );
}

export default Analytics;
