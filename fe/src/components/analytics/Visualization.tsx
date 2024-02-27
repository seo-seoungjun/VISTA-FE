import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { IVisualizationData, visualizationDatas } from '../../atoms/atom';
import Chart from './chart/Chart';

const VisualHeader = styled.h1`
  font-weight: bold;
`;

const SummaryWrapper = styled.div``;

const TapBtn = styled.button``;

function Visualization() {
  const visualData = useRecoilValue(visualizationDatas);
  console.log(visualData);

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div>
      <VisualHeader>visualization</VisualHeader>
      <SummaryWrapper>
        {visualData?.map((data: IVisualizationData, index: number) => (
          <TapBtn
            key={index}
            onClick={() => handleTabClick(index)}
            style={{
              backgroundColor: index === activeTab ? 'lightblue' : 'white',
            }}
          >
            {index + 1}
          </TapBtn>
        ))}
      </SummaryWrapper>
      {
        <Chart
          image_file={visualData[activeTab]?.content[0].image_file.file_id}
          key={visualData[activeTab]?.id}
          value={visualData[activeTab]?.content[1].text.value}
        />
      }
    </div>
  );
}

export default Visualization;
