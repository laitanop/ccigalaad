import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1
  },
  root1: {
    '&:hover': {
      boxShadow: '5px 5px 5px 5px #BDBDBD'
    }
  }
})

function VideoCard (props) {
  const { classes } = props
  const listVideo = [
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/492538365&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      name: 'Crear una cultura de servico en casa.'
    },
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485937321&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      name: 'Imparte fuerzas para vencer el miedo.'
    },
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480298671&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      name: 'Sé vivir.'
    },
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480184503&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      name: 'Este es tu momento.'
    },
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475809495&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      name: 'Una mala racha.'
    },
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/472950204&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      name: 'Donde esta Dios cuando tengo dificultades.'
    },
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471358830&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      name: 'Pon tu confianza en el señor.'
    },
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/461122575&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      name: 'Aspira a lo mejor.'
    },
    {
      src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/457565901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      name: 'Un botín prohibido.'
    }
  ]

  return (
    <div>
      {listVideo.map(video => {
        return (
          <div className={classes.root}>

            <div>
              <Paper className={classes.root1} elevation={2}>

                <Grid container spacing={0}>

                  <Grid item xs={8}>
                    <iframe
                      width='70%'
                      height='150'
                      scrolling='no'
                      frameborder='no'
                      allow='autoplay'
                      src={video.src}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <div
                      style={{
                        fontSize: '16px',
                        textAlign: 'left',
                        marginTop: '30px'
                      }}
                    >
                      {video.name}
                    </div>
                    <div
                      style={{
                        color: '#BDBDBD',
                        fontSize: '10px',
                        textAlign: 'right',
                        marginRight: '9px'
                      }}
                    >
                      Pastor Rolando Soto
                    </div>
                  </Grid>

                </Grid>

              </Paper>
            </div>
          </div>
        )
      })}

    </div>
  )
}

VideoCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(VideoCard)
