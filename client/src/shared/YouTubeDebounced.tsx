import React from 'react';
import YouTube from 'react-youtube';
import debounceRender from 'react-debounce-render';

interface YouTubeDebouncedProps {
  videoId: string;
  width: number;
  height: number;
}

export const YouTubeDebounced: React.FC<YouTubeDebouncedProps> = debounceRender(({ videoId, width, height }) => (
  <YouTube
    videoId={videoId}
    opts={{
      width,
      height,
    }}
  />
), 800);