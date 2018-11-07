import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '220px'
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  text: {
    textAlign: 'center',
    marginTop: '20px',
    marginBottom: '20px'
  },
  button: {
    backgroundColor: '#96ad32',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
      color: '#96ad32'
    }
  }
})

class Footer extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <div>
        <Grid container className={classes.root} spacing={24}>
          <Grid item xs={12}>
            <Grid
              container
              className={classes.demo}
              justify='center'
              spacing={24}
            >

              <Grid item>
                <Tooltip title='Siguenos en Facebook' placement='top-start'>
                  <Button
                    target='_blank'
                    variant='fab'
                    aria-label='Add'
                    className={classes.button}
                    href='https://www.facebook.com/CCIGalaad/'
                  >
                    <i className='fab fa-facebook-f fa-2x' />
                  </Button>
                </Tooltip>

              </Grid>
              <Grid item>
                <Tooltip title='+506 7003-8087 oficinas' placement='top-start'>
                  <Button
                    variant='fab'
                    aria-label='Add'
                    className={classes.button}
                  >
                    <i className='fas fa-phone fa-2x' />
                  </Button>
                </Tooltip>

              </Grid>
              <Grid item>
                <Tooltip
                  title='Concepción de San Rafael de Heredia'
                  placement='top-start'
                >
                  <Button
                    variant='fab'
                    aria-label='Add'
                    className={classes.button}
                  >
                    <i className='fas fa-map-marker-alt fa-2x' />
                  </Button>
                </Tooltip>

              </Grid>
              <Grid item>
                <Tooltip
                  title='info@cciheredia.cr E-mail'
                  placement='top-start'
                >
                  <Button
                    variant='fab'
                    aria-label='Add'
                    className={classes.button}
                  >
                    <i className='fas fa-envelope fa-2x' />
                  </Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>

        </Grid>
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <div className={classes.text}>
              Copyright © 2018 CCI Gaalad. Todos los derechos reservados.
            </div>
          </Grid>
        </Grid>
      </div>
    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
