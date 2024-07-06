import React from 'react';
import styled from 'styled-components';
import Summary from '../img/Summary';
import Infograpic from '../img/Infograpic';
import Repair from '../img/Repair';

const FeatuersGridContainer = styled.div`
  @media ${(props) => props.theme.device.laptop} {
    &.features_grid__4rdKV[data-colums='3'] {
      display: grid;
    }
  }
  @media ${(props) => props.theme.device.tablet} {
    &.features_grid__4rdKV[data-colums='2'] {
      display: grid;
    }
  }
  @media ${(props) => props.theme.device.mobile} {
    &.features_grid__4rdKV[data-colums='1'] {
      display: grid;
    }
  }

  margin-top: 30px;
  width: 80%;
  grid-gap: 20px;
  display: none;

  &[data-colums='3'] {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  &[data-colums='2'] {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  &[data-colums='1'] {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const GridContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  box-shadow: rgba(255, 255, 255, 0.14) 0px 0px 0px 1px;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.07);
  }
  &:hover .mobile {
    display: block;
    opacity: 1;
  }
`;

const ImgWrapper = styled.div`
  display: flex;
  padding: 25px 0;
  /* justify-content: center; */
  svg {
    width: 60%;
  }
`;

const FeatureTitle = styled.div`
  color: ${(props) => props.theme.mainPage.mostHighlightColor};
  font-size: 22px;
  font-weight: 800;
  line-height: 40px;
`;

const FeatureDiscription = styled.div`
  color: ${(props) => props.theme.mainPage.textColor};
  font-size: 17px;
  line-height: 24px;

  &.mobile {
    display: none;
    opacity: 0;
  }
`;

function FeatureGrid() {
  return (
    <>
      <FeatuersGridContainer className="features_grid__4rdKV" data-colums="3">
        <GridColumn>
          <GridContent>
            <ImgWrapper>
              <Summary />
            </ImgWrapper>
            <FeatureTitle>
              <span>Data Summarization</span>
            </FeatureTitle>
            <FeatureDiscription>
              Datasets can be massive. LIDA summarizes data into a compact but
              information dense natural language representation used as
              grounding context for all subsequent operations.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Automated Data Exploration</span>
            </FeatureTitle>
            <FeatureDiscription>
              Unfamiliar with a dataset? LIDA provides a fully automated mode
              that generates meaningful visualization goals based on the
              dataset. EDA for free.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Grammar-Agnostic Visualizations</span>
            </FeatureTitle>
            <FeatureDiscription>
              Want visualizations created in python in Altair, Matplotlib,
              Seaborn etc? How about R, C++ ? LIDA is grammar agnostic i.e., can
              generate visualizations in any grammar represented as code.
            </FeatureDiscription>
          </GridContent>
        </GridColumn>
        <GridColumn>
          <GridContent>
            <ImgWrapper>
              <Infograpic />
            </ImgWrapper>
            <FeatureTitle>
              <span>Infographics Generation</span>
            </FeatureTitle>
            <FeatureDiscription>
              Convert data into rich, embellished, engaging stylized
              infographics using image generation models. Think data stories,
              personalization, brand, style, marketing etc.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Visualization Explanation</span>
            </FeatureTitle>
            <FeatureDiscription>
              Get detailed descriptions of visualization code. This has
              applications in accessibility, data literacy, education, and
              debugging/sensemaking of visualizations.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Self-Evaluation</span>
            </FeatureTitle>
            <FeatureDiscription>
              LLMs like GPT-3.5 and GPT-4 encode visualization best practices.
              LIDA applies these capabilities in generating multi-dimensional
              evaluation scores for visualizations represented as code.
            </FeatureDiscription>
          </GridContent>
        </GridColumn>
        <GridColumn>
          <GridContent>
            <ImgWrapper>
              <Repair />
            </ImgWrapper>
            <FeatureTitle>
              <span>Visualization Repair</span>
            </FeatureTitle>
            <FeatureDiscription>
              LIDA provides methods to automatically improve visualizations via
              self-evaluation feedback or repair visualizations based on user
              provided or compile feedback.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Visualization Recommendations</span>
            </FeatureTitle>
            <FeatureDiscription>
              Given some context goals, or an existing visualization, LIDA can
              recommend additional visualizations that may be useful to the user
              e.g, for comparison, or to provide additional perspectives.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Lorem ipsum dolor</span>
            </FeatureTitle>
            <FeatureDiscription>
              sit amet consectetur adipisicing elit. Similique harum eius
              debitis nihil delectus consectetur ducimus voluptate repellendus,
              inventore voluptatem asperiores excepturi, adipisci eum saepe
              consequuntur repudiandae cum quis! Quos?
            </FeatureDiscription>
          </GridContent>
        </GridColumn>
      </FeatuersGridContainer>
      <FeatuersGridContainer className="features_grid__4rdKV" data-colums="2">
        <GridColumn>
          <GridContent>
            <ImgWrapper>
              <Summary />
            </ImgWrapper>
            <FeatureTitle>
              <span>Data Summarization</span>
            </FeatureTitle>
            <FeatureDiscription>
              Datasets can be massive. LIDA summarizes data into a compact but
              information dense natural language representation used as
              grounding context for all subsequent operations.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <ImgWrapper>
              <Infograpic />
            </ImgWrapper>
            <FeatureTitle>
              <span>Infographics Generation</span>
            </FeatureTitle>
            <FeatureDiscription>
              Convert data into rich, embellished, engaging stylized
              infographics using image generation models. Think data stories,
              personalization, brand, style, marketing etc.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Automated Data Exploration</span>
            </FeatureTitle>
            <FeatureDiscription>
              Unfamiliar with a dataset? LIDA provides a fully automated mode
              that generates meaningful visualization goals based on the
              dataset. EDA for free.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Grammar-Agnostic Visualizations</span>
            </FeatureTitle>
            <FeatureDiscription>
              Want visualizations created in python in Altair, Matplotlib,
              Seaborn etc? How about R, C++ ? LIDA is grammar agnostic i.e., can
              generate visualizations in any grammar represented as code.
            </FeatureDiscription>
          </GridContent>
        </GridColumn>
        <GridColumn>
          <GridContent>
            <ImgWrapper>
              <Repair />
            </ImgWrapper>
            <FeatureTitle>
              <span>Visualization Repair</span>
            </FeatureTitle>
            <FeatureDiscription>
              LIDA provides methods to automatically improve visualizations via
              self-evaluation feedback or repair visualizations based on user
              provided or compile feedback.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Visualization Recommendations</span>
            </FeatureTitle>
            <FeatureDiscription>
              Given some context goals, or an existing visualization, LIDA can
              recommend additional visualizations that may be useful to the user
              e.g, for comparison, or to provide additional perspectives.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Visualization Explanation</span>
            </FeatureTitle>
            <FeatureDiscription>
              Get detailed descriptions of visualization code. This has
              applications in accessibility, data literacy, education, and
              debugging/sensemaking of visualizations.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Self-Evaluation</span>
            </FeatureTitle>
            <FeatureDiscription>
              LLMs like GPT-3.5 and GPT-4 encode visualization best practices.
              LIDA applies these capabilities in generating multi-dimensional
              evaluation scores for visualizations represented as code.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Lorem ipsum dolor</span>
            </FeatureTitle>
            <FeatureDiscription>
              sit amet consectetur adipisicing elit. Similique harum eius
              debitis nihil delectus consectetur ducimus voluptate repellendus,
              inventore voluptatem asperiores excepturi, adipisci eum saepe
              consequuntur repudiandae cum quis! Quos?
            </FeatureDiscription>
          </GridContent>
        </GridColumn>
      </FeatuersGridContainer>
      <FeatuersGridContainer className="features_grid__4rdKV" data-colums="1">
        <GridColumn>
          <GridContent>
            <ImgWrapper>
              <Summary />
            </ImgWrapper>
            <FeatureTitle>
              <span>Data Summarization</span>
            </FeatureTitle>
            <FeatureDiscription>
              Datasets can be massive. LIDA summarizes data into a compact but
              information dense natural language representation used as
              grounding context for all subsequent operations.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <ImgWrapper>
              <Infograpic />
            </ImgWrapper>
            <FeatureTitle>
              <span>Infographics Generation</span>
            </FeatureTitle>
            <FeatureDiscription>
              Convert data into rich, embellished, engaging stylized
              infographics using image generation models. Think data stories,
              personalization, brand, style, marketing etc.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <ImgWrapper>
              <Repair />
            </ImgWrapper>
            <FeatureTitle>
              <span>Visualization Repair</span>
            </FeatureTitle>
            <FeatureDiscription>
              LIDA provides methods to automatically improve visualizations via
              self-evaluation feedback or repair visualizations based on user
              provided or compile feedback.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Automated Data Exploration</span>
            </FeatureTitle>
            <FeatureDiscription className="mobile">
              Unfamiliar with a dataset? LIDA provides a fully automated mode
              that generates meaningful visualization goals based on the
              dataset. EDA for free.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Grammar-Agnostic Visualizations</span>
            </FeatureTitle>
            <FeatureDiscription className="mobile">
              Want visualizations created in python in Altair, Matplotlib,
              Seaborn etc? How about R, C++ ? LIDA is grammar agnostic i.e., can
              generate visualizations in any grammar represented as code.
            </FeatureDiscription>
          </GridContent>

          <GridContent>
            <FeatureTitle>
              <span>Visualization Explanation</span>
            </FeatureTitle>
            <FeatureDiscription className="mobile">
              Get detailed descriptions of visualization code. This has
              applications in accessibility, data literacy, education, and
              debugging/sensemaking of visualizations.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Self-Evaluation</span>
            </FeatureTitle>
            <FeatureDiscription className="mobile">
              LLMs like GPT-3.5 and GPT-4 encode visualization best practices.
              LIDA applies these capabilities in generating multi-dimensional
              evaluation scores for visualizations represented as code.
            </FeatureDiscription>
          </GridContent>

          <GridContent>
            <FeatureTitle>
              <span>Visualization Recommendations</span>
            </FeatureTitle>
            <FeatureDiscription className="mobile">
              Given some context goals, or an existing visualization, LIDA can
              recommend additional visualizations that may be useful to the user
              e.g, for comparison, or to provide additional perspectives.
            </FeatureDiscription>
          </GridContent>
          <GridContent>
            <FeatureTitle>
              <span>Lorem ipsum dolor</span>
            </FeatureTitle>
            <FeatureDiscription className="mobile">
              sit amet consectetur adipisicing elit. Similique harum eius
              debitis nihil delectus consectetur ducimus voluptate repellendus,
              inventore voluptatem asperiores excepturi, adipisci eum saepe
              consequuntur repudiandae cum quis! Quos?
            </FeatureDiscription>
          </GridContent>
        </GridColumn>
      </FeatuersGridContainer>
    </>
  );
}

export default FeatureGrid;
