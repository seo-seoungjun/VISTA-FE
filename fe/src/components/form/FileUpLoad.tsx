import React, { useState } from 'react';
import styled from 'styled-components';
import SampleData from './SampleData';
import Chat from '../footer/Chat';
import Evaluate from '../footer/evaluate';
import PromptTemplete from './PromptTemplete';
import GenerateSettings from './GenerateSettings';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  ISettings,
  fileUpLoadSettings,
  grammerSettings,
} from '../../atoms/atom';
import { useForm } from 'react-hook-form';
import GoalExporation from '../analytics/GoalExporation';
import Visualization from '../analytics/Visualization';

const Section = styled.section`
  width: 70%;
`;

const DataForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const SettingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const GrammerList = styled.select``;
const GrammerSettingsBtn = styled.div`
  border-radius: 4px;
  border: 1px solid black;
  padding: 2px;
  cursor: pointer;
`;
const FileUploadInput = styled.input``;

function FileUpLoad() {
  const [showGenerateSettings, setShowGenerateSettings] = useState(false);
  const [isFileSubmit, setIsFileSubmit] = useState(false);

  const [defaultSettings, setDefaultSettings] =
    useRecoilState(fileUpLoadSettings);

  const grammerList = useRecoilValue(grammerSettings);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: defaultSettings,
  });

  const SubmitOnValid = (data: ISettings) => {
    setDefaultSettings(data);
    console.log(defaultSettings);
    //post 요청

    //요청 성공시 componenets handling
    setIsFileSubmit(true);
  };

  const onSettingsClick = () => {
    setShowGenerateSettings(true);
  };

  return (
    <>
      {isFileSubmit ? (
        <Section>
          <Visualization />
          <GoalExporation />
        </Section>
      ) : (
        <Section>
          <DataForm onSubmit={handleSubmit(SubmitOnValid)}>
            <SettingsWrapper>
              <GrammerList {...register('grammer')}>
                {grammerList.map((grammer) => (
                  <option value={grammer} key={grammer}>
                    {grammer}
                  </option>
                ))}
              </GrammerList>
              <GrammerSettingsBtn onClick={onSettingsClick}>
                세팅
              </GrammerSettingsBtn>
            </SettingsWrapper>
            <FileUploadInput
              {...register('dataFile', {
                required: 'File is Required',
                validate: (value) => {
                  const acceptedFormats = ['csv', 'json'];
                  const fileExtension = value[0]?.name
                    .split('.')
                    .pop()
                    .toLowerCase();
                  if (!acceptedFormats.includes(fileExtension)) {
                    return 'Invalid file format. Only csv or files are allowed.';
                  }
                },
              })}
              type="file"
            />
            <SampleData />
            {showGenerateSettings ? (
              <GenerateSettings
                toggle={setShowGenerateSettings}
                register={register}
              />
            ) : null}
            <PromptTemplete />
            <Evaluate />
            <Chat></Chat>
            <h1 style={{ color: 'red' }}>{errors?.dataFile?.message as any}</h1>
          </DataForm>
        </Section>
      )}
    </>
  );
}

export default FileUpLoad;
