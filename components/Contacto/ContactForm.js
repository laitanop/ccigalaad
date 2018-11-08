import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Tooltip from '@material-ui/core/Tooltip'

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  card: {
    maxWidth: 845,
    marginTop: 50,
    padding: '50px'
  },
  media: {
    height: 440
  },
  button: {
    backgroundColor: '#6A772A'
  }
}

class ContactForm extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>

              <CardMedia
                className={classes.media}
                image='/static/contactImg.png'
                title='Contemplative Reptile'
              />
              <div>

                <div style={{ textAlign: 'center', fontSize: '30px' }}>
                  Contacto{' '}
                </div>
                <div style={{ textAlign: 'center', fontSize: '18px' }}>
                  Dirección: Centro de retiros Galaad, concepción San Rafale de Herdia
                </div>
                <div style={{ textAlign: 'center', fontSize: '18px' }}>
                  Telefono: +506 70-03-8087
                </div>
                <div style={{ textAlign: 'center', fontSize: '18px' }}>
                  Correo: info@cciheredia.cr
                </div>
                <div style={{ textAlign: 'center', fontSize: '18px' }}>
                  <a
                    style={{ textDecoration: 'none' }}
                    target='_blank'
                    href='https://www.facebook.com/CCIGalaad/'
                  >

                    <span style={{ color: '#6A772A' }}>
                      <i className='fab fa-facebook-f' />:{' '}
                    </span>&nbsp; &nbsp;
                    Siguenos en facebook
                    {' '}
                  </a>

                </div>

              </div>

            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>

              <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.714432443968!2d-84.07077048578132!3d10.040407092823452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0ef9bd520b641%3A0xe1c9fc2d215143b2!2sCentro+Retiros+GALAAD!5e0!3m2!1sen!2scr!4v1541686218884'
                width='100%'
                height='450'
                frameBorder='0'
                style={{ border: 0 }}
                allowFullScreen
              />

            </Paper>
          </Grid>

        </Grid>

      </div>
    )
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ContactForm)
