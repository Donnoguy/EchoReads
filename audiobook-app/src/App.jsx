import React from 'react';
import { Container, Typography } from '@mui/material';
import AudiobookList from './components/AudiobookList';
import AudiobookPlayer from './components/AudiobookPlayer';

const App = () => {
  const [selectedAudiobook, setSelectedAudiobook] = React.useState(null);

  const handleAudiobookSelect = (audiobook) => {
    setSelectedAudiobook(audiobook);
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h3" align="center" gutterBottom>
        My Audiobook App
      </Typography>
      <AudiobookList onAudiobookSelect={handleAudiobookSelect} />
      {selectedAudiobook && <AudiobookPlayer audiobook={selectedAudiobook} />}
    </Container>
  );
};

export default App;
