import axios from 'axios';

/**
 *
 * This should probably be moved into ig frontend common
 */

export interface Fail<K> {
  readonly tag: 'fail';
  readonly value: K;
}

export interface Success<T> {
  readonly tag: 'success';
  readonly value: T;
}

export type Result<T, K> = Success<T> | Fail<K>;

export type AsyncResult<T, K> = Promise<Result<T, K>>;

export const isFail = <T, K>(result: Result<T, K>): result is Fail<K> => result.tag === 'fail';
export const isSuccess = <T, K>(result: Result<T, K>): result is Success<T> => result.tag === 'success';

export const fail = <K>(value: K): Result<never, K> => {
  return { tag: 'fail', value };
};

export const success = <T>(value: T): Result<T, never> => ({ tag: 'success', value });

export const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    // Access to config, request, and response
    return error.response?.data;
  }
  return error instanceof Error ? error.message : error;
};
