import { create } from 'zustand';

interface Data {
  name: string;
}

export interface DataResponseBody {
  data: Data;
}

interface DataState {
  data: undefined | DataResponseBody;
  setData: (data: DataResponseBody | undefined) => void;
}

export const useDataStore = create<DataState>()((set: any) => ({
  data: undefined,
  setData: (data: any) => set(() => ({ data })),
}));
