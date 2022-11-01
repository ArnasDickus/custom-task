import { truncate } from "lodash";

/** Limits strings without cutting words */
export const limitStringsWithWords = (str: string, length: number) => {
  return truncate(str, {
    length: length,
    separator: /,?\.* +/,
  });
};

/** Get's first id works with multiple paths website/1/2/3 = 1 */
export const getIdFromUrl = (url: string) => {
  return url.match(/\d+/)?.[0];
};
