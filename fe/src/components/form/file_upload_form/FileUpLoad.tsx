import React, { useState } from 'react';
import styled from 'styled-components';
import Chat from '../../footer/Chat';
import GenerateSettings from './GenerateSettings';
import { useRecoilState, useRecoilValue } from 'recoil';

import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { submitFormApi } from '../../../APIs/analytics/analytjcs';
import { Redirect } from 'react-router-dom';
import Loading from '../../loading/Loading';
import {
  fileUpLoadSettings,
  grammarSettings,
} from '../../../atoms/analytics/atom.settings';
import { ISettings } from '../../../interface/analytics/interface.settings';

const LoadingWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Main = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 15px 0px 0px 15px;
`;

const Section = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.textColor};
`;

const DataForm = styled.form`
  width: 60%;
  height: 100vh;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  p {
    font-weight: 400;
  }
`;

const FileUploadWrapper = styled.div`
  height: 50%;
`;

const SettingsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const GrammerList = styled.select`
  color: ${(props) => props.theme.textColor};
  background-color: transparent;
`;

const GrammerSettingsBtn = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const SettingBtnImg = styled.img`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
`;

const FileUploadInput = styled.input`
  display: none;
`;

const FileUploadLabel = styled.label`
  padding: 25% 20%;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    margin-top: 10px;
  }
`;

const FileUploadIcon = styled.img``;

const SampleDataWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SampleData = styled.div`
  cursor: pointer;
  border: 1px solid ${(props) => props.theme.borderColor};
  border-radius: 10px;
  padding: 5px 10px;
  margin: 10px 5px;
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
  } = useForm({
    defaultValues: defaultSettings,
  });

  const { data, mutate, isLoading } = useMutation(submitFormApi, {
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
        <LoadingWrapper>
          {' '}
          <Loading />
        </LoadingWrapper>
      ) : (
        <Main>
          <Section>
            <DataForm
              encType="multipart/form-data"
              onSubmit={handleSubmit(SubmitOnValid)}
            >
              <FileUploadWrapper>
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
                  id="file"
                />
                <FileUploadLabel htmlFor="file">
                  <FileUploadIcon src="http://localhost:3000/Images/fileUpload.svg" />
                  <p>upload your own file</p>
                  <p>Only .json and .csv files can be accepted</p>
                </FileUploadLabel>
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
              </FileUploadWrapper>
              <Chat register={register}></Chat>
              <h1 style={{ color: 'red' }}>{errors?.file?.message as any}</h1>
            </DataForm>
          </Section>
        </Main>
      )}
    </>
  );
}

export default FileUpLoad;
