import React, { useState } from 'react';
import styled from 'styled-components';
import Chat from '../../footer/Chat';

import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { Redirect } from 'react-router-dom';
import Loading from '../../loading/Loading';

import { createChat, sendSampleData } from '../../../APIs/chat/api.chat';

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
  width: 70%;
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
  justify-content: space-around;
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
  const [fileName, setFileName] = useState();
  const [threadId, setThreadId] = useState();

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
      setThreadId(res.thread_id);
      setIsSubmitsuccess(true);
    },
    onError: (err) => {
      // console.log(err);
    },
  });

  const SubmitOnValid = (data: { file: any; name: string }) => {
    const formData = new FormData();

    data.file = data.file[0];

    formData.append('name', data.name);
    formData.append('file', data.file);

    mutate(formData);
  };

  const { mutate: sendSampleDataMutate } = useMutation(sendSampleData, {
    onSuccess: (res) => {
      setThreadId(res.thread_id);
      setIsSubmitsuccess(true);
    },
    onError: (err) => {
      // console.log(err);
    },
  });

  const onSampleDataClick = (fileName: string) => {
    sendSampleDataMutate(fileName);
  };

  return (
    <>
      {isSubmitSuccess ? (
        <Redirect
          to={{
            pathname: `/chat/${threadId}`,
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
                    onChange: (e: any) => {
                      setFileName(e?.target?.files[0]?.name);
                    },
                  })}
                  type="file"
                  id="file"
                />
                <FileUploadLabel htmlFor="file">
                  <FileUploadIcon src="http://localhost:3000/Images/fileUpload.svg" />
                  {fileName ? (
                    <p>{fileName}</p>
                  ) : (
                    <>
                      <p>upload your own file</p>
                      <p>Only .json and .csv files can be accepted</p>
                    </>
                  )}
                </FileUploadLabel>
                <SampleDataWrapper>
                  <SampleData onClick={() => onSampleDataClick('cars.csv')}>
                    <p>cars.csv</p>
                  </SampleData>
                  <SampleData onClick={() => onSampleDataClick('housing.csv')}>
                    <p>housing.csv</p>
                  </SampleData>
                  <SampleData onClick={() => onSampleDataClick('Iris.csv')}>
                    <p>Iris.csv</p>
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
