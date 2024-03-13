import { portfolioProxy } from './proxies';
import { DataResponseBody } from '../store/data/portfolioStore';
import { Result, success, fail, handleError } from '../common/serviceUtil';

export const getData = async (
  userId: number,
  signal: AbortSignal | undefined,
): Promise<Result<DataResponseBody, unknown>> => {
  try {
    const response = await portfolioProxy.get<DataResponseBody>(`/data?userId=${userId}`, {
      signal,
    });
    return success(response.data);
  } catch (error) {
    return fail(handleError(error));
  }
};
