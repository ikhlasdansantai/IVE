"use client";

interface useFetchProps {
  url: string | any;
  method: string | "POST" | "GET";
  requestBody?: string;
}

export const useInternalFetch = async ({ url, method, requestBody }: useFetchProps) => {
  try {
    const response =
      method === "GET"
        ? await fetch(url, { method: "GET" })
        : await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: "clrfssjko0000dcegq1hdm1lq",
              title: requestBody,
            }),
          });
    if (!response.ok) throw new Error(response.statusText);
    const result = response.json();
    return result;
  } catch (e) {
    return console.error(e);
  }
};
