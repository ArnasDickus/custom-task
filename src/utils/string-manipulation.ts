import { truncate } from "lodash";

/** Limits strings without cutting words */
export const limitStringsWithWords = (str: string, length: number) => {
  return truncate(str, {
    length: length,
    separator: /,?\.* +/,
  });
};
