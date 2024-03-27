import { atom, selector } from 'recoil';
import { IVisualizationData } from '../../interface/analytics/interface.analytics';

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
