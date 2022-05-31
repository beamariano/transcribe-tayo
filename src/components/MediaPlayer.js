import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AspectRatio, Box } from "@chakra-ui/react";

const MediaPlayer = () => {
  const [mediaUrl, setMediaUrl] = useState("");

  useEffect(() => {
    setMediaUrl();
  }, []);

  return (
    <Box w="450px">
      <AspectRatio ratio={16 / 9}>
        <ReactPlayer height="100%" url={mediaUrl} width="100%" />
      </AspectRatio>
    </Box>
  );
};

export default MediaPlayer;
