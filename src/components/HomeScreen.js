import React from "react";
import { Box, Container, Heading } from "@chakra-ui/react";
import MediaPlayer from "./MediaPlayer";
import TextEditorPanel from "./TextEditorPanel";
import MenuPanel from "./MenuPanel";

const HomeScreen = () => {
  return (
    <>
      <Heading>Transcribe Tayo</Heading>
      <MenuPanel />
      <Container>
        <Box>
          <MediaPlayer />
        </Box>
        <Box>
          <TextEditorPanel />
        </Box>
      </Container>
    </>
  );
};

export default HomeScreen;
