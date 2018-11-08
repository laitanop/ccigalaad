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
    imgPath: '../../static/Fotos/Optimized-camphoto_684387517.jpg'
  },
  {
    imgPath: '../../static/Fotos/Optimized-IMG_1344-photo-full.jpg'
  },
  {
    imgPath: '../../static/Fotos/Optimized-EB56A42F-AF4F-4371-A484-F6AE69D1BC63.JPG'
  },
  {
    imgPath: '../../static/Fotos/Optimized-IMG_1348.JPG'
  },
  {
    imgPath: '../../static/Fotos/Optimized-IMG_2824.jpg'
  },
  {
    imgPath: '../../static/Fotos/Optimized-IMG_2833.jpg'
  },
  {
    imgPath: '../../static/Fotos/Optimized-IMG_2838.jpg'
  },
  {
    imgPath: '../../static/Fotos/Optimized-IMG_2848.jpg'
  },
  {
    imgPath: '../../static/Fotos/Optimized-IMG_2858.jpg'
  },
  {
    imgPath: '../../static/Fotos/Optimized-IMG_2862.jpg'
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

class SwipeableTextMobileStepper extends React.Component {
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

        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.activeStep}
          onChangeIndex={this.handleStepChange}
          enableMouseEvents
        >
          {tutorialSteps.map(step => (
            <img
              key={step.label}
              className={classes.img}
              src={step.imgPath}
              alt={step.label}
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

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

export default withStyles(styles, { withTheme: true })(
  SwipeableTextMobileStepper
)
