import { useStoryNav } from "@/hooks/useStoryNav";
import type { Story } from "@/types/type";
import { X } from "lucide-react";
import React, { useEffect, useState, type MouseEvent } from "react";
import StoryProgress from "./StoryProgress";

function StoryViewer({
  story,
  setOpen,
}: {
  story: Story;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [currImg, setCurrImg] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!story) return;

    setIsLoading(true);

    const img = new Image();
    img.src = story.image[currImg];
    img.onload = () => setIsLoading(false);
  }, [story]);

  const goToNextStory = () => {
    if (currImg < story.image.length - 1) {
      setCurrImg(currImg + 1);
    } else {
      setOpen(false);
    }
  };

  const goToPrevStory = () => {
    if (currImg > 0) {
      setCurrImg(currImg - 1);
    } else {
      setOpen(false);
    }
  };

  // will use hook here ig?
  const handleTap = (e: MouseEvent<HTMLElement>) => {
    const targetWidth = e.currentTarget.clientWidth;
    if (e.nativeEvent.offsetX > targetWidth / 2) {
      goToNextStory();
    } else {
      goToPrevStory();
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen  bg-zinc-950 flex flex-col relative">
      <StoryProgress
        count={story.image.length}
        currentIndex={currImg}
        duration={5}
        onComplete={goToNextStory}
      />

      <div className="absolute top-3.5 left-4 z-10 flex items-center">
        <div className="w-8 h-8 rounded-full overflow-hidden border border-pink-500">
          <img src={story.avatar} alt={story.username} className="w-full h-full object-cover" />
        </div>
        <span className="text-white ml-2 font-medium">{story.username}</span>
      </div>

      <div className="absolute top-3.5 right-2.5  z-10">
        <button
          onClick={() => setOpen(false)}
          className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center cursor-pointer"
        >
          <X size={20} color="white" />
        </button>
      </div>

      <div className="flex-1 w-full h-full flex items-center justify-center" onClick={handleTap}>
        {isLoading ? (
          <div className="flex items-center justify-center h-full w-full">
            <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        ) : (
          <img
            src={story.image[currImg]}
            alt={`story-${story.username}`}
            className="w-full h-full object-contain"
          />
        )}
      </div>
    </div>
  );
}

export default StoryViewer;
