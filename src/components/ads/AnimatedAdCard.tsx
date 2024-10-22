"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import {
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
} from "react-icons/md";

/**
 * @brief Video Ad Card
 *
 * this component is a simple ad card with a video played locally with pulsing
 * takes the given width of the parent and the automatic hight based on that width
 * @todo ADD link to distinatsion of this card
 */
export function AnimatedAdCard() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const handleMediaButton = () => {
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="h-auto rounded-lg overflow-hidden relative animate-pulse">
      <div className="absolute right-3 top-3 text-2xl text-gray-400">
        <button
          onClick={() => {
            handleMediaButton();
          }}>
          {isPlaying ? (
            <MdOutlinePauseCircleFilled />
          ) : (
            <MdOutlinePlayCircleFilled />
          )}
        </button>
      </div>
      <Link href={""}>
        <video
          ref={videoRef}
          className="relative w-full object-cover -z-10"
          autoPlay
          loop={true}
          src="https://player.vimeo.com/progressive_redirect/playback/892046818/rendition/1080p/file.mp4?loc=external&signature=b17d4e94e2cbf913d7fa0081e248f9738d403e74496424afc2da03a6d595e339"></video>
      </Link>
    </div>
  );
}
