import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { AspectRatio, Box, Center } from "@chakra-ui/react";

const MediaPlayer = () => {
  const [mediaUrl, setMediaUrl] = useState(
    "https://www.youtube.com/watch?v=-mIA1r2ZELU"
  );

  // useEffect(() => {
  //   setMediaUrl("https://www.youtube.com/watch?v=-mIA1r2ZELU");
  // }, []);

  return (
    <Box w="450px" margin="0 auto">
      <Center>
        <Box w="450px">
          <AspectRatio ratio={16 / 9}>
            <ReactPlayer height="100%" url={mediaUrl} width="100%" />
          </AspectRatio>
        </Box>
      </Center>
    </Box>
  );
};

export default MediaPlayer;
