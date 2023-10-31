import { create } from "zustand";

type VideoState = {
  videos: any;
  ApiKey: string | any;
  fetchingVideos: any;
  addApiKey: any;
};

export const useVideoStore = create<VideoState>((set) => ({
  videos: null,
  ApiKey: "",
  fetchingVideos: async (api: any) => {
    const res = await fetch(api);
    if (!res.ok) console.error("Server Internal Error :(");
    else {
      const videos = await res.json();
      const getVideoItems = videos.items;
      set({ videos: getVideoItems });
    }
  },
  addApiKey: (key: string | any) => set(() => ({ ApiKey: key })),
}));
