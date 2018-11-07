import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  colorBar: {
		background: "transparent"
  },
  buttons: {
		fontSize: "18px",
		fontWeight: "300",

		color: "rgba(0, 0, 0, 0.75)",

		textTransform: "capitalize",
		"&:hover": {
			color: "#96ad32",
			fontWeight: "600"
		},
		[theme.breakpoints.down("md")]: {
			display: "none"
		}
	},
});

function NavigationBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.colorBar}>
        <Toolbar>
        <IconButton
						href='/index'
						className={classes.menuButton}
						color='inherit'
						aria-label='Menu'
					>
				
						<img
							src='static/Artboard1.png'
							alt='Smiley face'
							height='60'
							width='70'
						/>

			
          
          </IconButton>
       
          <Button color='inherit' className={classes.buttons} href='/index'>
            Inicio
					</Button>
					<Button color='inherit' className={classes.buttons} href='/nosotros'>
            Nosotros
					</Button>

					<Button color='inherit' className={classes.buttons} href='/contacto'>
            Contacto
					</Button>
  
        </Toolbar>
      </AppBar>
    </div>
  );
}

NavigationBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavigationBar);