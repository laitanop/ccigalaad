import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

import Grid from '@material-ui/core/Grid'
import NewsCci from './NewsCci'
import HomeImage from './HomeImage'

const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 2,
    flexGrow: 1,
    marginTop: '-10px',
    marginBottom: '50px',
    [theme.breakpoints.up('sm')]: {
      marginLeft: '250px',
      marginRight: '250px'
    }
  },
  paper: {
    padding: theme.spacing.unit * 6,
    textAlign: 'center',
    color: theme.palette.text.secondary,

    [theme.breakpoints.up('md')]: {
      padding: theme.spacing.unit * 10,
      // change padding here for equal
      paddingBottom: '115px'
    },
    [theme.breakpoints.up('xl')]: {
      padding: theme.spacing.unit * 20,
      paddingBottom: '187px'
    }
  },
  paperNews: {
    padding: theme.spacing.unit * 1.5,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  icon: {
    color: '#96ad32'
  },

  Title: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: '38.4px',
    color: ' #596327',
    fontSize: '32px',

    marginTop: '50px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      lineHeight: '20.4px',
      marginTop: '-10px'
    }
  },
  paperTitle: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',

    fontSize: '26.66667px',
    fontWeight: '600',
    lineHeight: '32px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px'
    }
  },

  paperSubTitle: {
    color: 'rgb(84, 84, 84)',

    fontSize: '24px',
    fontWeight: '600',
    lineHeight: '24px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px'
    }
  },
  paperParagraph: {
    color: 'rgb(84, 84, 84)',

    fontSize: '22.2222px',
    fontWeight: '300',
    lineHeight: '26.6667px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px'
    }
  },
  img: {
    backgroundImage: 'url("/../static/Slice 1.png")',
    width: '130%',
    height: '380px',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',

    [theme.breakpoints.down('sm')]: {
      width: '95%',
      height: '400px',
      padding: theme.spacing.unit * 4
    }
  }
})

function HomeSection1 (props) {
  const { classes } = props

  return (
    <div className={classes.root}>

      <div className={classes.Title}>
        Centro Cristiano Internacional Galaad

      </div>

      <Grid container spacing={24}>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper} elevation={24}>
            <span className={classes.icon}>
              <HomeImage />

            </span>

            <div className={classes.paperTitle}>
              Horario de Reuniones
            </div>
            <div className={classes.paperSubTitle}>
              Sábados 3:00 PM
            </div>
            <div className={classes.paperParagraph}>
              Concepción de San Rafael de Heredia
            </div>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>

          <Paper className={classes.paperNews} elevation={24}>
            <div style={{ backgroundColor: '#dfe9a0', marginBottom: '10px' }}>
              Noticias
            </div>

            <NewsCci />

          </Paper>

        </Grid>

      </Grid>

    </div>
  )
}

HomeSection1.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(HomeSection1)
