import React, { useState } from 'react';
import styled from 'styled-components';
import Chat from '../../footer/Chat';
import { useRecoilValue } from 'recoil';

import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router-dom';
import Loading from '../../loading/Loading';

import { userInfo } from '../../../atoms/auth/atom.auth';
import { createChat } from '../../../APIs/chat/api.chat';

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

function CreateChat() {
  const [isSubmitSuccess, setIsSubmitsuccess] = useState(false);
  const userData = useRecoilValue(userInfo);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      file: null,
      name: '',
    },
  });

  const { data, mutate, isLoading } = useMutation(createChat, {
    onSuccess: (res) => {
      console.log(res);
      setIsSubmitsuccess(true);
    },
    onError: (err) => {
      console.log(err);
    },
  });

  const SubmitOnValid = (data: { file: any; name: string }) => {
    const formData = new FormData();

    data.file = data.file[0];

    formData.append('name', data.name);
    formData.append('file', data.file);

    mutate(formData);
  };

  const onSampleDataClick = () => {};

  return (
    <>
      {isSubmitSuccess ? (
        <Redirect
          to={{
            pathname: `/chat/${data.thread_id}`,
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
                <FileUploadInput
                  {...register('file', {
                    required: 'File is Required',
                    validate: (value: any) => {
                      const acceptedFormats = ['csv', 'json'];
                      if (value) {
                        const fileExtension = value[0]?.name
                          .split('.')
                          .pop()
                          .toLowerCase();
                        if (!acceptedFormats.includes(fileExtension)) {
                          return 'Invalid file format. Only csv or files are allowed.';
                        }
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

export default CreateChat;
