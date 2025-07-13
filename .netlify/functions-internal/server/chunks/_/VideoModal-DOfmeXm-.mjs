import { useRef, useEffect } from 'react';

function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title
}) {
  useRef(null);
  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match == null ? void 0 : match[2]) && match[2].length === 11 ? match[2] : null;
  };
  getYouTubeVideoId(videoUrl);
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);
  {
    return null;
  }
}

export { VideoModal };
//# sourceMappingURL=VideoModal-DOfmeXm-.mjs.map
