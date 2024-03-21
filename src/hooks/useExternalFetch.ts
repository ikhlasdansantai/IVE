"use server";

interface useExternalFetch {
  url: string;
}
export const useExternalFetch = ({ url }: useExternalFetch) => {
  return url;
};
