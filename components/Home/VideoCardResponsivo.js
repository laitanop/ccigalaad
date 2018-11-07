import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import SwipeableViews from 'react-swipeable-views'

const tutorialSteps = [
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/492538365&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    label: 'Crear una cultura de servico en casa.'
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485937321&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    label: 'Imparte fuerzas para vencer el miedo.'
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480298671&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    label: 'Sé vivir.'
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480184503&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    label: 'Este es tu momento.'
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475809495&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    label: 'Una mala racha.'
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/472950204&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    label: 'Donde esta Dios cuando tengo dificultades.'
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471358830&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    label: 'Pon tu confianza en el señor.'
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/461122575&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    label: 'Aspira a lo mejor.'
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/457565901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    label: 'Un botín prohibido.'
  }
]

const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default
  },
  img: {
    height: 200,
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%'
  }
})

class VideoCardResponsivo extends React.Component {
  state = {
    activeStep: 0
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1
    }))
  }

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1
    }))
  }

  handleStepChange = activeStep => {
    this.setState({ activeStep })
  }

  render () {
    const { classes, theme } = this.props
    const { activeStep } = this.state

    const maxSteps = tutorialSteps.length

    return (
      <div className={classes.root}>
        <Paper square elevation={0} className={classes.header}>
          <div
            style={{ fontSize: '16px', textAlign: 'left', marginTop: '30px' }}
          >
            {tutorialSteps[activeStep].label}
            {' '}
            <span
              style={{
                color: '#BDBDBD',
                fontSize: '10px',
                textAlign: 'right',
                marginRight: '9px'
              }}
            >
              {' '}Pastor Rolando Soto
            </span>
          </div>

        </Paper>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map(step => (
            <iframe
              width='100%'
              height='150'
              scrolling='no'
              frameborder='no'
              allow='autoplay'
              src={step.src}
            />
          ))}
        </SwipeableViews>
        <MobileStepper
          steps={5}
          position='static'
          activeStep={activeStep}
          className={classes.mobileStepper}
          nextButton={
            <Button
              size='small'
              onClick={this.handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === 'rtl'
                ? <i className='fas fa-chevron-left' />
                : <i className='fas fa-chevron-right' />}
            </Button>
          }
          backButton={
            <Button
              size='small'
              onClick={this.handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === 'rtl'
                ? <i className='fas fa-chevron-right' />
                : <i className='fas fa-chevron-left' />}
              Back
            </Button>
          }
        />
      </div>
    )
  }
}

VideoCardResponsivo.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(VideoCardResponsivo)
