import { storiesData } from "@/data/stories";
import React, { useState } from "react";
import StoryViewer from "./StoryViewer";
import type { Story } from "@/types/type";
import { useStoryNav } from "@/hooks/useStoryNav";
import { useStoriesStore } from "@/store/sotries-store";

function StoryList() {
  const [open, setOpen] = useState(false);
  const [currentStory, setCurrentStory] = useState<Story | null>(null);

  const openViewer = (story: Story, idx: number) => {
    setOpen(true);
    setCurrentStory(story);
  };
  return (
    <div className="py-4 px-2 bg-black">
      {!open && (
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
          {storiesData.map((story, idx) => (
            <div
              key={story.id}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => openViewer(story, idx)}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-[2px] flex items-center justify-center">
                <div className="bg-black rounded-full">
                  <img
                    src={story.avatar}
                    alt={story.username}
                    className="h-14 w-14 object-cover rounded-full"
                  />
                </div>
              </div>
              <span className="text-white text-xs mt-1 max-w-16 truncate">{story.username}</span>
            </div>
          ))}
        </div>
      )}

      {open && <StoryViewer story={currentStory!} setOpen={setOpen} allStories={storiesData} />}
    </div>
  );
}

export default StoryList;
