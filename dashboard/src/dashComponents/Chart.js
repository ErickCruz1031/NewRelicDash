import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';
import Title from './Title';
import { CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Iframe from 'react-iframe';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 500,
    width:900, // 16:9
  },
}));
export default function Chart() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Today</Title>
      <Iframe
      url="https://chart-embed.service.newrelic.com/herald/f6364ede-7df9-4f70-8aa2-f4a5d925fe2a?height=400px&timepicker=true?"
      width="100%"
      height="500px"
      position="relative"
      />
    </React.Fragment>
  );
}
