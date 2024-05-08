import React, { useEffect } from 'react';
import styled from 'styled-components';
import Visualization from '../components/analytics/Visualization';
import { useRecoilState, useSetRecoilState } from 'recoil';
import SideBar from '../components/navbar/SideBar';
import { useLocation, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { ILocation } from '../interface/analytics/interface.analytics';
import {
  fileId,
  isDataExist,
  resultDatas,
} from '../atoms/analytics/atom.analytics';

const DATA_KEY_LIST = 'data_list';

const Section = styled.div`
  display: flex;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 14fr 1fr;
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
`;

const AnalyticsWrapper = styled.div`
  overflow: auto;
  border-radius: 15px 15px 0px 0px;
  padding: 20px 30px 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.bgColor};
`;

const ChatFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChatForm = styled.form`
  width: 60%;
`;

const ChatWrapper = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const ChatInput = styled.input`
  transition: all 0.3s;
  text-align: center;
  width: 100%;
  height: 30px;
  border-radius: 10px;
  outline: none;
  border: 0;
  &:focus {
    background-color: #8888884e;
  }
`;
const SubmitBtn = styled.button`
  display: none;
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

  // console.log(resultData);

  return (
    <>
      {isData ? (
        <>
          <Section>
            <SideBar />
            <GridWrapper>
              <AnalyticsWrapper>
                <Visualization />
              </AnalyticsWrapper>
              <ChatFormWrapper>
                <ChatForm>
                  <ChatWrapper>
                    <ChatInput
                      {...register('user_message')}
                      placeholder="change x axis label to meter per second"
                    />
                    <SubmitBtn type="submit">제출</SubmitBtn>
                  </ChatWrapper>
                </ChatForm>
              </ChatFormWrapper>
            </GridWrapper>
          </Section>
        </>
      ) : (
        '파일을 제출해 주세요'
      )}
    </>
  );
}

export default Analytics;
