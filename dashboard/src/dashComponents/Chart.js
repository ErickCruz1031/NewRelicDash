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

const Chart = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Today</Title>
        <Iframe
        url={props.link}
        width="100%"
        height="500"
        position="relative"
        scrolling="no"
        overflow="hidden"
        />
    </React.Fragment>
  );
}

export default Chart;
