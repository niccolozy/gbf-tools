import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleItemClick = (e, index) => {
    this.handleDrawerClose();
    this.props.onItemClicked(e, index);
  };

  render() {
    const handleDrawerOpen = this.handleDrawerOpen;
    const handleDrawerClose = this.handleDrawerClose;
    const open = this.state.open;
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <IconButton color="inherit" edge="start" onClick={handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" noWrap>
              {this.props.currentTool}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer variant="persistent" anchor="left" open={open}>
          <div>
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            {this.props.tools.map((text, index) => (
              <ListItem
                button
                key={text}
                selected={this.props.currentTool === index}
                onClick={e => this.handleItemClick(e, index)}
              >
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      </>
    );
  }
}

export default Header;
