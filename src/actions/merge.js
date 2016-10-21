export const MERGE_INIT = 'MERGE_INIT';

export function mergeApp(data) {
  return {
    type: MERGE_INIT,
    data
  };
}
