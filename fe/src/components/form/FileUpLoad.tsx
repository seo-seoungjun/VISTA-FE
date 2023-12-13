import React, { useState } from 'react';
import styled from 'styled-components';
import Chat from '../footer/Chat';
import Evaluate from '../footer/evaluate';
import PromptTemplete from './PromptTemplete';
import GenerateSettings from './GenerateSettings';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  ISettings,
  fileUpLoadSettings,
  grammarSettings,
} from '../../atoms/atom';
import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { submitFormApi } from '../../APIs/api';
import { Redirect } from 'react-router-dom';

const Section = styled.section`
  width: 70%;
`;

const DataForm = styled.form`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* justify-content: space-between; */
  p {
    font-weight: 400;
  }
`;
const SettingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;
const GrammerList = styled.select``;

const GrammerSettingsBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SettingBtnImg = styled.img`
  border-radius: 4px;
  border: 1px solid black;
`;

const FileUploadInput = styled.input``;

const SampleDataWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const SampleData = styled.div`
  cursor: pointer;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  margin: 10px 0px;
`;

function FileUpLoad() {
  const [showGenerateSettings, setShowGenerateSettings] = useState(false);
  const [isSubmitSuccess, setIsSubmitsuccess] = useState(false);

  const [defaultSettings, setDefaultSettings] =
    useRecoilState(fileUpLoadSettings);

  const grammarList = useRecoilValue(grammarSettings);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({
    defaultValues: defaultSettings,
  });

  const { mutate, isLoading, data } = useMutation(submitFormApi, {
    onSuccess: (res) => {
      console.log(res);
      setIsSubmitsuccess(true);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const SubmitOnValid = (data: ISettings) => {
    const formData = new FormData();

    data.file = data.file[0];

    for (const [key, value] of Object.entries(data)) {
      formData.append(key, value);
      console.log(key, value);
    }

    setDefaultSettings(data);
    mutate(formData);
  };

  const onSettingsClick = () => {
    setShowGenerateSettings(true);
  };

  const onSampleDataClick = () => {};

  return (
    <>
      {isSubmitSuccess ? (
        <Redirect
          to={{
            pathname: `/analytics/${data?.data[0].id}`,
            state: data,
          }}
        />
      ) : isLoading ? (
        'Loading'
      ) : (
        <Section>
          <DataForm
            encType="multipart/form-data"
            onSubmit={handleSubmit(SubmitOnValid)}
          >
            <SettingsWrapper>
              <GrammerList {...register('grammar')}>
                {grammarList?.map((grammar) => (
                  <option value={grammar} key={grammar}>
                    {grammar}
                  </option>
                ))}
              </GrammerList>
              <GrammerSettingsBtn onClick={onSettingsClick}>
                <SettingBtnImg src="http://localhost:3000/Images/settings.svg" />
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
            <SampleDataWrapper>
              <SampleData onClick={onSampleDataClick}>
                <p>sample data</p>
              </SampleData>
              <SampleData onClick={onSampleDataClick}>
                <p>sample data</p>
              </SampleData>
              <SampleData onClick={onSampleDataClick}>
                <p>sample data</p>
              </SampleData>
              <SampleData onClick={onSampleDataClick}>
                <p>sample data</p>
              </SampleData>
              <SampleData onClick={onSampleDataClick}>
                <p>sample data</p>
              </SampleData>
            </SampleDataWrapper>
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
