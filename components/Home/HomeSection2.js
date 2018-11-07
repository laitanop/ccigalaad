import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

import Grid from '@material-ui/core/Grid'
import VideoCard from './VideoCard'
import Belive from './Belive'
import GrowImage from './GrowImage'
import VideoCardResponsivo from './VideoCardResponsivo'

const styles = theme => ({
  root: {
    flexGrow: 1,

    padding: '100px',
    margin: '100px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '20px',
      marginRight: '20px',
      padding: '10px'
    }
  },

  paper: {
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 12,
      marginLeft: '150px',
      marginRight: '150px',
      backgroundColor: '#fff'
    },
    [theme.breakpoints.down('sm')]: {
      marginLeft: '15px',
      marginRight: '15px'
    }
  },

  paper1: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    fontSize: '20px'
  },
  scroll: {
    overflow: 'scroll',

    height: '600px',
    [theme.breakpoints.down('md')]: {
      display: 'none',
      visibility: 'hidden'
    }
  },
  VideoCardResponsivo: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
      visibility: 'hidden'
    }
  }
})

function HomeSection2 (props) {
  const { classes } = props

  return (
    <div>
      <Paper className={classes.root} elevation={24}>
        <Grid container spacing={24}>

          <Grid item xs={12} sm={6}>
            <div className={classes.paper1}>Creer</div>
            <div className={classes.paper1}>
              <img
                src='../static/join.png'
                alt='CCI'
                height='100'
                width='100'
              />
              {' '}
            </div>
            <div className={classes.paper1}>Crecer</div>
            <div className={classes.paper1}> <GrowImage /> </div>
            <div className={classes.paper1}>Servir</div>
            <div className={classes.paper1}>
              <img
                src='../static/serve.png'
                alt='CCI'
                height='100'
                width='100'
              />
              {' '}
            </div>

          </Grid>
          <Grid item xs={12} sm={6}>

            <div className={classes.paper1}>Sermones </div>
            <div className={classes.scroll}>
              <VideoCard />
            </div>
            <div className={classes.VideoCardResponsivo}>
              {/* <VideoCardResponsivo /> */}
              <VideoCardResponsivo />
            </div>

          </Grid>

        </Grid>

      </Paper>
    </div>
  )
}

HomeSection2.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomeSection2)
