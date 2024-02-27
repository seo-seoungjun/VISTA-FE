import React, { useEffect } from 'react';
import styled from 'styled-components';
import Visualization from '../components/analytics/Visualization';
import GoalExporation from '../components/analytics/GoalExporation';
import { useRecoilState, useSetRecoilState } from 'recoil';
import {
  ILocation,
  IVisualizationData,
  fileId,
  isDataExist,
  resultDatas,
} from '../atoms/atom';
import SideBar from '../components/navbar/SideBar';
import { useLocation, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Chat from '../components/footer/Chat';

const DATA_KEY_LIST = 'data_list';

const Section = styled.div`
  display: flex;
`;

const AnalyticsWrapper = styled.section`
  width: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.bgColor};
`;

function Analytics() {
  const [resultData, setResultData] = useRecoilState(resultDatas);
  const [isData, setIsData] = useRecoilState(isDataExist);

  const setDataList = useSetRecoilState(fileId);
  const params = useParams<{ fileId: string }>();

  const { register } = useForm();

  const { state } = useLocation<ILocation>();

  const DATA_KEY = params.fileId;

  useEffect(() => {
    const localDataList = localStorage.getItem(DATA_KEY_LIST);

    if (localDataList === null) {
      localStorage.setItem(DATA_KEY_LIST, JSON.stringify([DATA_KEY]));
    } else {
      const getDataList: string[] = [
        ...JSON.parse(localDataList || ''),
        DATA_KEY,
      ];
      const deleteDistinctData = [...new Set(getDataList)];

      setDataList(deleteDistinctData);
      localStorage.setItem(DATA_KEY_LIST, JSON.stringify(deleteDistinctData));
    }

    if (state?.data !== undefined) {
      setResultData(state.data);
      localStorage.setItem(DATA_KEY, JSON.stringify(state.data));
      setIsData(true);
    } else {
      if (localStorage.getItem(DATA_KEY) !== null) {
        const localData = JSON.parse(localStorage.getItem(DATA_KEY) || '');
        setResultData(localData);
        setIsData(true);
      }
    }
  }, [DATA_KEY]);

  console.log(resultData);

  return (
    <>
      {isData ? (
        <>
          <Section>
            <SideBar />
            <AnalyticsWrapper>
              <Visualization />
              <GoalExporation></GoalExporation>
              <form>
                <Chat register={register}></Chat>
              </form>
            </AnalyticsWrapper>
          </Section>
        </>
      ) : (
        '파일을 제출해 주세요'
      )}
    </>
  );
}

export default Analytics;
