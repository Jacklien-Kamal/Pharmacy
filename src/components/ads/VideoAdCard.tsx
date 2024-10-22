import { useRef, useState } from "react";
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
export function VideoAdCard() {
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
      <a href={""}>
        <video
          ref={videoRef}
          className="relative w-full object-cover -z-10"
          autoPlay
          loop={true}
          src='AdVideo.mp4'></video>
      </a>
    </div>
  );
}
