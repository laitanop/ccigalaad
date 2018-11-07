import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MenuIcon from '@material-ui/icons/Menu'

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
}

class ResponsiveBar extends React.Component {
  state = {
    right: false
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render () {
    const { classes } = this.props

    return (
      <div>

        <Button onClick={this.toggleDrawer('right', true)}>
          {' '}<MenuIcon />
        </Button>

        <Drawer
          anchor='right'
          open={this.state.right}
          onClose={this.toggleDrawer('right', false)}
        >
          <div
            tabIndex={0}
            role='button'
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}
          >

            <List>

              <ListItem button>
                <Button href='index'>
                  <ListItemIcon>
                    <i className='material-icons'>
                      home
                    </i>
                  </ListItemIcon>
                  <ListItemText primary='Inicio' />
                </Button>
              </ListItem>
              <ListItem button>
                <Button href='nosotros'>
                  <ListItemIcon>
                    <i className='material-icons'>
                      language
                    </i>
                  </ListItemIcon>
                  <ListItemText primary='Nosotros' />
                </Button>
              </ListItem>
              <ListItem button>
                <Button href='contacto'>
                  <ListItemIcon>
                    <i className='material-icons'>
                      place
                    </i>
                  </ListItemIcon>
                  <ListItemText primary='Contacto' />
                </Button>
              </ListItem>

            </List>
            <Divider />
          </div>
        </Drawer>
      </div>
    )
  }
}

ResponsiveBar.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ResponsiveBar)
