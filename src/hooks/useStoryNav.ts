import type { Story } from "@/types/type";
import { useState } from "react";

interface StoryNavProp {
  currStory: Story;
  allStories: Story[];
}

export function useStoryNav({ currStory, allStories }: StoryNavProp) {
  const [currStoryIdx, setCurrStoryIdx] = useState(0);
  const goToNextStory = () => {
    if (currStory.id === allStories[allStories.length - 1].id) {
      return;
    }
    if (currStory.id === allStories[currStoryIdx + 1].id) {
      const nextStory = allStories[currStoryIdx + 1];
      console.log(nextStory);
    }

    const goToPrevStory = () => {
      const prevStory = allStories[currStoryIdx - 1];
      console.log(prevStory);
    };

    return {
      goToNextStory,
      goToPrevStory,
      setCurrStoryIdx,
    };
  };
}
