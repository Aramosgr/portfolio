import { useQuery } from '@tanstack/react-query';
import { getData } from '../../services/portfolioService';
import { useDataStore } from './portfolioStore';
import { isSuccess } from '../../common/serviceUtil';

export const useGetData = (userId: number | undefined) => {
  console.log('userId', userId);
  const setEvents = useDataStore((d) => d.setData);
  //use react-query to fetch events
  return useQuery(['data', userId], ({ signal }) => getData(userId ?? 1, signal), {
    enabled: userId !== undefined,
    onSettled: (data, error) => {
      if (data && isSuccess(data)) {
        setEvents(data.value);
      }
    },
  });
};
