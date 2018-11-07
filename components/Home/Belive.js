import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 1,
    paddingBottom: theme.spacing.unit * 1,
    textAlign: 'center',
    '&:hover': {
      boxShadow: '5px 5px 5px 5px #BDBDBD'
    }
  }
})

function Belive (props) {
  const { classes } = props
  const listVideo = [
    {
      src: '../static/join.png',
      name: 'Creer'
    }
    // {
    // 	src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485937321&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    // 	name: "Imparte fuerzas para vencer el miedo."
    // },
    // {
    // 	src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480298671&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    // 	name: "Sé vivir."
    // },
  ]

  return (
    <div>
      {listVideo.map(video => {
        return (
          <div className={classes.root}>

            <div>
              <Paper className={classes.root} elevation={0}>

                <Grid container spacing={0}>

                  <Grid item xs={8}>
                    <img src={video.src} alt='CCI' height='70' width='70' />
                    {/* <iframe width="70%" height="150" scrolling="no" frameborder="no" allow="autoplay" src={video.src}></iframe> */}
                  </Grid>
                  <Grid item xs={4}>
                    <div style={{ fontSize: '16px', marginTop: '30px' }}>
                      {video.name}
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

Belive.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(Belive)

{
  /* <Grid item  sm={12}>

									<div className={classes.paper1}><img src="../static/join.png" alt="CCI" height="70" width="70" /></div>
									<div className={classes.paper1}>Creer</div>
								</Grid>
								<Grid item  sm={12}>
									<div className={classes.paper1}>	<img src="../static/grow.png" alt="CCI" height="70" width="70" /></div>
									<div className={classes.paper1}>	Crecer </div>
								</Grid>
								<Grid item sm={12}>
									<div className={classes.paper1}>	<img src="../static/serve.png" alt="CCI" height="70" width="70" /></div>
									<div className={classes.paper1}>Servir</div>
								</Grid> */
}
