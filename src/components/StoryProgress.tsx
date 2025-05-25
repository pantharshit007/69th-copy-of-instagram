import React, { useEffect, useState } from "react";

interface StoryProgressProps {
  count: number;
  currentIndex: number;
  duration: number;
  onComplete: () => void;
}

function StoryProgress({ count, currentIndex, duration, onComplete }: StoryProgressProps) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onComplete();
          return 0;
        }
        return prev + 100 / (duration * 10);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentIndex, onComplete, duration]);

  return (
    <div className="flex gap-1 px-2 w-full absolute top-3 z-10 -mt-2.5">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="h-1 bg-white/30 rounded-full flex-1">
          {index === currentIndex && (
            <div
              className="h-full bg-white rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          )}
          {index < currentIndex && <div className="h-full bg-white rounded-full w-full" />}
        </div>
      ))}
    </div>
  );
}

export default StoryProgress;
