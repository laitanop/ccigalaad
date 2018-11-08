import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import GalleryImages from './GalleryImages'
import GalleryImagesResponsive from './GalleryImagesResponsive'
import ShowModal from './ShowModal'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: '100px',
    margin: '50px'
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    marginTop: '100px'
  },
  Text: {
    textAlign: 'center',
    fontSize: '60px',
    fontWeight: '700px',
    lineHeight: '78px',
    color: '#96ad32'
  },
  description: {
    textAlign: 'center',
    fontSize: '30px',
    fontWeight: '500px',
    lineHeight: '78px',
    color: '#9E9E9E',
    [theme.breakpoints.down('sm')]: {
      fontSize: '15px',
      lineHeight: '28px'
    }
  },
  gallery: {
    [theme.breakpoints.down('md')]: {
      display: 'none',
      visibility: 'hidden'
    }
  },
  galleryResponsive: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
      visibility: 'hidden'
    }
  }
})

function Nosotros (props) {
  const { classes } = props

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>

        <Grid item xs={12} sm={6}>
          <div className={classes.Text}>Somos CCI Gaalad</div>
          <Grid item xs={12}>

            <div className={classes.description}>
              Esta organización ministerial está siempre sujeta al llamamiento ministerial y disponibilidad de servidores.
            </div>
            <div className={classes.gallery}>
              <img
                src='../../static/Fotos/tree.svg'
                alt='tree'
                width='500'
                height='500'
              />
            </div>
            <div className={classes.galleryResponsive}>
              <img
                src='../../static/Fotos/tree.svg'
                alt='tree'
                width='200'
                height='200'
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.gallery}>
            <GalleryImages />

          </div>
          <div className={classes.galleryResponsive}>
            <GalleryImagesResponsive />
          </div>

        </Grid>
      </Grid>
    </div>
  )
}

Nosotros.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Nosotros)
