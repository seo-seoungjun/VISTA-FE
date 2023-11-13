import { atom } from 'recoil';

enum Grammer {
  'Seaborn' = 'Seaborn',
  'Altair' = 'Altair',
  'MatPlotlib' = 'MatPlotlib',
  'GGPlot' = 'GGPlot',
}

export interface ISettings {
  grammer: Grammer;
  maxTokens: number;
  temperature: number;
  numberMessages: number;
  presencePenalty: number;
  frequencyPenalty: number;
  userMessage?: string;
  file: any;
}

interface IgenerateSettingsMinMaxValue {
  maxToken: {
    min: number;
    max: number;
  };
  temperature: {
    min: number;
    max: number;
  };
  numberMessages: {
    min: number;
    max: number;
  };
  presencePenalty: {
    min: number;
    max: number;
  };
  frequencyPenalty: {
    min: number;
    max: number;
  };
}

export const grammerSettings = atom({
  key: 'grammerList',
  default: [
    Grammer.Seaborn,
    Grammer.Altair,
    Grammer.MatPlotlib,
    Grammer.GGPlot,
  ],
});

export const fileUpLoadSettings = atom<ISettings>({
  key: 'fileUpLoadSettings',
  default: {
    grammer: Grammer.Seaborn,
    maxTokens: 6336,
    temperature: 0,
    numberMessages: 1,
    presencePenalty: -2,
    frequencyPenalty: -2,
    userMessage: '',
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
