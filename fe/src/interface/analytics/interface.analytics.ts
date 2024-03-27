export interface IVisualizationData {
  id: string;
  assistant_id: string;
  content: any;
  created_at: number;
  file_ids: any;
  metadata: any;
  object: string;
  role: string;
  run_id: string;
  thread_id: string;
}

export interface ILocation {
  data: IVisualizationData[];
}

export interface IResponseData {
  data: IVisualizationData[];
}

export interface PostFormDataBody {
  [key: string]: any;
}
