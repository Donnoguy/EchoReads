import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const AudiobookList = ({ onAudiobookSelect }) => {
  const audiobooks = [
    { title: 'Audiobook 1', src: '/assets/sample-audio1.mp3' },
    { title: 'Audiobook 2', src: '/assets/sample-audio2.mp3' },
  ];

  return (
    <List>
      {audiobooks.map((audiobook, index) => (
        <ListItem button key={index} onClick={() => onAudiobookSelect(audiobook)}>
          <ListItemText primary={audiobook.title} />
        </ListItem>
      ))}
    </List>
  );
};

export default AudiobookList;
