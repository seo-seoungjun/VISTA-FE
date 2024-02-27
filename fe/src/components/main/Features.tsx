import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  padding: 0 70px;
  min-height: 85vh;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const DiscriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  display: block;
  color: ${(props) => props.theme.mainPage.TitleColor};
  font-size: 32px;
  font-weight: bold;
  padding: 24px;
`;

const Discription = styled.p`
  color: ${(props) => props.theme.mainPage.textColor};
  font-size: 20px;
`;

const FeatuersGridContainer = styled.div`
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 16px;
  display: grid;
`;

const GridColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
`;

function Features() {
  return (
    <Section>
      <ContentWrapper>
        <DiscriptionWrapper>
          <Title>What's in VISTA?</Title>
          <Discription>
            Everything you need to build great project based in data analytic
          </Discription>
        </DiscriptionWrapper>
        <FeatuersGridContainer>
          <GridColumn>
            <GridContent>
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
                Seaborn etc? How about R, C++ ? LIDA is grammar agnostic i.e.,
                can generate visualizations in any grammar represented as code.
              </FeatureDiscription>
            </GridContent>
          </GridColumn>
          <GridColumn>
            <GridContent>
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
              <FeatureTitle>
                <span>Visualization Repair</span>
              </FeatureTitle>
              <FeatureDiscription>
                LIDA provides methods to automatically improve visualizations
                via self-evaluation feedback or repair visualizations based on
                user provided or compile feedback.
              </FeatureDiscription>
            </GridContent>
            <GridContent>
              <FeatureTitle>
                <span>Visualization Recommendations</span>
              </FeatureTitle>
              <FeatureDiscription>
                Given some context goals, or an existing visualization, LIDA can
                recommend additional visualizations that may be useful to the
                user e.g, for comparison, or to provide additional perspectives.
              </FeatureDiscription>
            </GridContent>
            <GridContent>
              <FeatureTitle>
                <span></span>
              </FeatureTitle>
              <FeatureDiscription></FeatureDiscription>
            </GridContent>
          </GridColumn>
        </FeatuersGridContainer>
      </ContentWrapper>
    </Section>
  );
}

export default Features;
