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
  visualizationDatas,
} from '../atoms/atom';
import SideBar from '../components/navbar/SideBar';
import { useLocation, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Chat from '../components/footer/Chat';

const DATA_KEY_LIST = 'data_list';

const Section = styled.section`
  width: 70%;
`;

function Analytics() {
  const [resultData, setResultData] = useRecoilState(resultDatas);
  const [isData, setIsData] = useRecoilState(isDataExist);
  const [visualizationData, setVisualizationData] =
    useRecoilState(visualizationDatas);
  const setDataList = useSetRecoilState(fileId);
  const params = useParams<{ fileId: string }>();

  const { register } = useForm();

  const { state } = useLocation<ILocation>();

  const DATA_KEY = params.fileId;

  const fillterAndSetData = (data: IVisualizationData[]) => {
    const imgData = data.filter(
      (data: IVisualizationData) => data.content[0].type === 'image_file'
    );
    setVisualizationData(imgData);
    setIsData(true);
  };

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
      fillterAndSetData(state.data);
    } else {
      if (localStorage.getItem(DATA_KEY) !== null) {
        const localData = JSON.parse(localStorage.getItem(DATA_KEY) || '');
        setResultData(localData);
        fillterAndSetData(localData);
      }
    }
  }, [DATA_KEY]);

  console.log(resultData);
  console.log(visualizationData);

  return (
    <>
      {isData ? (
        <>
          <SideBar />
          <Section>
            <Visualization />
            <GoalExporation></GoalExporation>
            <form>
              <Chat register={register}></Chat>
            </form>
          </Section>
        </>
      ) : (
        '파일을 제출해 주세요'
      )}
    </>
  );
}

export default Analytics;
