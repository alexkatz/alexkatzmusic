import React from 'react';
import YouTube from 'react-youtube';
import debounceRender from 'react-debounce-render';

interface YouTubeDebouncedProps {
  videoId: string;
  width: number;
  height: number;
}

export const YouTubeDebounced: React.FC<YouTubeDebouncedProps> = debounceRender(({ videoId, width, height }) => (
  <div style={{ width, height, backgroundColor: 'black' }}>
    <YouTube
      videoId={videoId}
      opts={{
        width,
        height,
      }}
    />
  </div>
), 800);