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
import { useMutation } from 'react-query';
import { submitFormApi } from '../../APIs/api';

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
  const [isSubmitSuccess, setIsSubmitsuccess] = useState(false);

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

  const { mutate } = useMutation(submitFormApi, {
    onSuccess: (res) => {
      console.log(res);
      setIsSubmitsuccess(true);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const SubmitOnValid = (data: ISettings) => {
    setDefaultSettings(data);
    mutate(data);
    //post 요청
  };

  console.log(defaultSettings);

  const onSettingsClick = () => {
    setShowGenerateSettings(true);
  };

  return (
    <>
      {isSubmitSuccess ? (
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
              {...register('file', {
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
            <Chat register={register}></Chat>
            <h1 style={{ color: 'red' }}>{errors?.file?.message as any}</h1>
          </DataForm>
        </Section>
      )}
    </>
  );
}

export default FileUpLoad;
