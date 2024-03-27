export enum Grammar {
  'Seaborn' = 'SEABORN',
  'Altair' = 'ALTAIR',
  'MatPlotlib' = 'MATPLOTLIB',
  'GGPlot' = 'GGPLOT',
}

export interface ISettings {
  grammar: Grammar;
  max_tokens: string;
  temperature: string;
  number_messages: string;
  presence_penalty: string;
  frequency_penalty: string;
  user_message?: string;
  file: any;
}

export interface IgenerateSettingsMinMaxValue {
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
