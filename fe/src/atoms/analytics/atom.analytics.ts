import { atom, selector } from 'recoil';
import {
  Grammar,
  ISettings,
  IVisualizationData,
  IgenerateSettingsMinMaxValue,
} from '../../interface/analytics/interface.analytics';

export const grammarSettings = atom({
  key: 'grammerList',
  default: [
    Grammar.Seaborn,
    Grammar.Altair,
    Grammar.MatPlotlib,
    Grammar.GGPlot,
  ],
});

export const fileUpLoadSettings = atom<ISettings>({
  key: 'fileUpLoadSettings',
  default: {
    grammar: Grammar.Seaborn,
    max_tokens: '6336',
    temperature: '0',
    number_messages: '1',
    presence_penalty: '-2',
    frequency_penalty: '-2',
    user_message: '',
    file: null,
  },
  dangerouslyAllowMutability: true,
});

export const generateSettingsMinMaxValue = atom<IgenerateSettingsMinMaxValue>({
  key: 'generateSettingsMinMaxValue',
  default: {
    maxToken: {
      min: 128,
      max: 8192,
    },
    temperature: {
      min: 0,
      max: 1,
    },
    numberMessages: {
      min: -2,
      max: 10,
    },
    presencePenalty: {
      min: -2,
      max: 2,
    },
    frequencyPenalty: {
      min: -2,
      max: 2,
    },
  },
});

export const resultDatas = atom<IVisualizationData[]>({
  key: 'resultData',
  default: [],
});

export const visualizationDatas = selector<IVisualizationData[]>({
  key: 'visualizationDatas',
  get: ({ get }) => {
    const resultData = get(resultDatas);
    const visualData = resultData.filter(
      (data: IVisualizationData) => data.content[0].type === 'image_file'
    );

    return visualData;
  },
});

export const isDataExist = atom({
  key: 'isExist',
  default: false,
});

export const fileId = atom<string[]>({
  key: 'firstId',
  default: [],
});
