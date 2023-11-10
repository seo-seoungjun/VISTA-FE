import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SampleData from './SampleData';
import Chat from './Chat';
import Evaluate from './evaluate';
import PromptTemplete from './PromptTemplete';

const Section = styled.section`
  width: 70%;
`;

const DataForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const SettingsWrapper = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
`;
const GrammerList = styled.select``;
const GrammerSettingsBtn = styled.button``;
const GenerationSettingsWrapper = styled.div``;
const GrammerSettings = styled.input``;
const FileUploadInput = styled.input``;

interface Isettings {
  grammer: string;
}

function FileUpLoad() {
  const grammerList = ['Seaborn', 'Altair', 'MatPlotlib', 'GGPlot'];

  const [settings, setSettings] = useState<Isettings>({
    grammer: 'Seaborn',
  });

  const onChangeGrammer = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSettings({
      grammer: value,
    });
  };

  const onDataSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submit');
  };

  useEffect(() => {
    console.log(settings);
  }, [settings]);

  return (
    <>
      <Section>
        <DataForm onSubmit={onDataSubmit}>
          <SettingsWrapper>
            <GrammerList
              id="grammer"
              onChange={onChangeGrammer}
              value={settings.grammer}
            >
              {grammerList.map((grammer) => (
                <option value={grammer} key={grammer}>
                  {grammer}
                </option>
              ))}
            </GrammerList>
            <GrammerSettingsBtn>세팅</GrammerSettingsBtn>
          </SettingsWrapper>
          <GenerationSettingsWrapper></GenerationSettingsWrapper>
          <FileUploadInput type="file" />
          <SampleData />
          <Evaluate />
          <PromptTemplete />
          <Chat></Chat>
        </DataForm>
      </Section>
    </>
  );
}

export default FileUpLoad;
