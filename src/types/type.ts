export interface Story {
  id: string;
  username: string;
  avatar: string;
  image: string[];
  viewed: boolean;
}

// lets see
export interface StoriesType {
  stories: Story[];
  currentStoryIndex: number;
  isViewerOpen: boolean;
  openViewer: (index: number) => void;
  closeViewer: () => void;
  goToNextStory: () => void;
  goToPrevStory: () => void;
  markAsViewed: (id: string) => void;
}
