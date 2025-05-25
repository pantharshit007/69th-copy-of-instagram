import type { Story } from "@/types/type";
import { createStore } from "zustand";

interface StoriesStore {
  stories: Story[];
  currentStoryIndex: number;
  currImg: number;
  allStories: Story[];
  isViewerOpen: boolean;
  openViewer: (index: number) => void;
  closeViewer: () => void;
  goToNextStory: () => void;
  goToPrevStory: () => void;
  setAllStories: (stories: Story[]) => void;
}

export const useStoriesStore = createStore<StoriesStore>((set, get) => ({
  stories: [],
  currentStoryIndex: 0,
  currImg: 0,
  allStories: [],
  isViewerOpen: false,
  openViewer: (index: number) => set({ isViewerOpen: true, currentStoryIndex: index }),
  closeViewer: () => set({ isViewerOpen: false }),
  goToNextStory: () =>
    set((state) => {
      const currentStory = state.allStories[state.currentStoryIndex];
      if (state.currImg < currentStory.image.length - 1) {
        return { currImg: state.currImg + 1 };
      } else if (state.currentStoryIndex < state.allStories.length - 1) {
        return { currentStoryIndex: state.currentStoryIndex + 1, currImg: 0 };
      } else {
        state.closeViewer();
        return {};
      }
    }),
  goToPrevStory: () =>
    set((state) => {
      if (state.currImg > 0) {
        return { currImg: state.currImg - 1 };
      } else if (state.currentStoryIndex > 0) {
        return {
          currentStoryIndex: state.currentStoryIndex - 1,
          currImg: get().allStories[state.currentStoryIndex - 1].image.length - 1,
        };
      } else {
        state.closeViewer();
        return {};
      }
    }),
  setAllStories: (stories: Story[]) => set({ allStories: stories }),
}));
