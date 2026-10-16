'use client';

import { useState, useEffect } from 'react';

// In-memory cache: videoUrl -> formatted duration string
const durationCache = {};

/**
 * Formats raw seconds into a "m:ss" string.
 * @param {number} seconds
 * @returns {string}
 */
function formatDuration(seconds) {
  if (!isFinite(seconds) || seconds <= 0) return '--:--';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

/**
 * Reads the duration of a video URL by loading it via a temporary HTMLVideoElement.
 * Results are cached per URL so subsequent calls resolve instantly.
 *
 * @param {string|null|undefined} videoUrl  Public path to the video file
 * @returns {string} Formatted duration (e.g. "3:42") or "--:--" while loading / on error
 */
export function useVideoDuration(videoUrl) {
  const [duration, setDuration] = useState(() => {
    // Return cached value synchronously if available
    return videoUrl && durationCache[videoUrl] ? durationCache[videoUrl] : '--:--';
  });

  useEffect(() => {
    if (!videoUrl) return;

    // Already cached — use it immediately
    if (durationCache[videoUrl]) {
      setDuration(durationCache[videoUrl]);
      return;
    }

    let cancelled = false;

    const video = document.createElement('video');
    video.preload = 'metadata';
    video.muted = true;

    const onLoaded = () => {
      if (cancelled) return;
      const formatted = formatDuration(video.duration);
      durationCache[videoUrl] = formatted;
      setDuration(formatted);
      cleanup();
    };

    const onError = () => {
      if (cancelled) return;
      durationCache[videoUrl] = '--:--';
      setDuration('--:--');
      cleanup();
    };

    const cleanup = () => {
      video.removeEventListener('loadedmetadata', onLoaded);
      video.removeEventListener('error', onError);
      video.src = '';
      video.load();
    };

    video.addEventListener('loadedmetadata', onLoaded);
    video.addEventListener('error', onError);
    video.src = videoUrl;

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [videoUrl]);

  return duration;
}
