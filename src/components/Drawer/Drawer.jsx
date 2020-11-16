import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  classes: {
    zIndex: 3,
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});
const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));

export default function SwipeableTemporaryDrawer(props) {

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div  className={classes.root}
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {props.pages.map((d, index) => (
          <ListItem button key={d.label} component={RouterLink} to={d.link}>
            <ListItemIcon>{d.icon}</ListItemIcon>
            <ListItemText primary={d.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {props.links.map((d, index) => (
          <ListItem button key={d.label} href='' onClick={()=> window.open(`${d.link}`, "_blank")}>
            <ListItemIcon>{d.icon}</ListItemIcon>
            <ListItemText primary={d.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const anchor = 'left';
  return (
    <div>
        <React.Fragment key={anchor}>

          <IconButton edge="center" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
