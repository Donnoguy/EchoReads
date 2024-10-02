import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const AudiobookPlayer = ({ audiobook }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{audiobook.title}</Typography>
        <audio controls src={audiobook.src} style={{ width: '100%' }} />
      </CardContent>
    </Card>
  );
};

export default AudiobookPlayer;
