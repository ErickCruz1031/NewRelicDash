import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Iframe from 'react-iframe';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MenuItem from './MenuItem'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        PowerSchool
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 600,
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Dashboard = () => {

  //State variables
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [NR_Link, setLink] = React.useState("https://chart-embed.service.newrelic.com/herald/f1ba1d2d-30c6-4aeb-ae32-ef37c076f61f?height=400px&timepicker=true") //Link to the first chart
  //const [NR_Second, setLinkTwo] = React.useState("https://chart-embed.service.newrelic.com/herald/bccf6eee-2755-4f1f-bfe5-12d31c161c9c?height=400px&timepicker=true")//Link to the second chart



  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  //const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeightPaper = clsx(classes.paper);

  const appFunc = () =>{
    console.log("We pressed the button");
  }

  const compCall = () =>{
    console.log("We pressed the new Component");
  }


  const networkCall = () =>{
    console.log("Changing link to server network chart");
    setLink("https://chart-embed.service.newrelic.com/herald/f1ba1d2d-30c6-4aeb-ae32-ef37c076f61f?height=400px&timepicker=true")//Chart to showcase VM network Mbps

  }

  const cpuCall = () =>{
    console.log("Changing link to server CPU utilization chart");
    setLink("https://chart-embed.service.newrelic.com/herald/566edd87-deef-49d3-a31f-2d6985a8e2b0?height=400px&timepicker=true")//Chart to showcase VM network Mbps

  }

  const databaseDurationCall = () =>{
    console.log("Changing link to database task chart");
    setLink("https://chart-embed.service.newrelic.com/herald/7c55f3b6-337f-4b1a-89fe-7e9e00a34c2a?height=400px&timepicker=true")//Chart to showcase VM network Mbps

  }

  const apmCall = () =>{
    console.log("Changing link to APM Duration chart");
    setLink("https://chart-embed.service.newrelic.com/herald/c3770367-8e63-4275-9348-ea1b69a16a8f?height=400px&timepicker=true")//Chart to showcase VM network Mbps

  }

  const ramUtilCall = () =>{
    console.log("Changing link to RAM Utilization chart");
    setLink("https://chart-embed.service.newrelic.com/herald/2562e893-6271-4711-bca9-da4abc24cdc3?height=400px&timepicker=true")//Chart to showcase VM network Mbps

  }





  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Leander ISD Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <>
            <MenuItem  callback={networkCall} text="Server Network"/>

            <MenuItem callback={cpuCall} text="Server CPU" />

            <MenuItem callback={databaseDurationCall} text="DB Task Duration" />

            <MenuItem callback={apmCall} text="APM Duration" />

            <MenuItem callback={ramUtilCall} text="Ram Utilization" />

          </>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart  ->  Pass the link to the chart as the props of the component */}
            <Grid item xs={12}>
              <Chart link={NR_Link}/>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}

export default Dashboard;
