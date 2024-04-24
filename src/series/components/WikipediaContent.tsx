import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import {
  useWikipediaContext,
  DISCARD_STATUS,
  SEARCH_STATUS,
} from "./WikipediaContext";

export const WikipediaContent = () => {
  const { setStatus } = useWikipediaContext();

  const handleAccept = () => {
    console.log("Accepted");
    setStatus(SEARCH_STATUS);
  };
  const handleDiscard = () => {
    console.log("Discarded");
    setStatus(DISCARD_STATUS);
  };

  return (
    <>
      <Box>
        <Button onClick={handleAccept}>Accept</Button>
      </Box>
      <Box>
        <Button onClick={handleDiscard}>Discard</Button>
      </Box>
    </>
  );
};
