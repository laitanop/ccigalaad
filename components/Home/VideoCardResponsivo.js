import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MobileStepper from '@material-ui/core/MobileStepper'
import Paper from '@material-ui/core/Paper'

import Button from '@material-ui/core/Button'

import SwipeableViews from 'react-swipeable-views'

const tutorialSteps = [
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/525944109&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Indicadores espirituales que alertan.',
    person: 'Pastor Rolando Soto',
    id: 15
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/522415377&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Aférrate a la decisión divina.',
    person: 'Pastor Rolando Soto',
    id: 14
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/518910954&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Vence tus preocupaciones.',
    person: 'Raquel Acosta V.',
    id: 13
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/515351529&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Palabras que Ganan.',
    person: 'Pastor Rolando Soto',
    id: 12
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/513819216&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Decisiones vitales.',
    person: 'Pastor Rolando Soto',
    id: 11
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/508764744&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Pensamientos poderosos.',
    person: 'Pastor Rolando Soto',
    id: 10
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/492538365&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Crear una cultura de servico en casa.',
    person: 'Pastor Rolando Soto',
    id: 9
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485937321&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Imparte fuerzas para vencer el miedo.',
    person: 'Pastor Rolando Soto',
    id: 8
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480298671&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Sé vivir.',
    person: 'Pastor Rolando Soto',
    id: 7
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480184503&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Este es tu momento.',
    person: 'Pastor Rolando Soto',
    id: 6
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475809495&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Una mala racha.',
    person: 'Pastor Rolando Soto',
    id: 5
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/472950204&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Donde esta Dios cuando tengo dificultades.',
    person: 'Pastor Rolando Soto',
    id: 4
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471358830&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Pon tu confianza en el señor.',
    person: 'Pastor Rolando Soto',
    id: 3
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/461122575&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Aspira a lo mejor.',
    person: 'Pastor Rolando Soto',
    id: 2
  },
  {
    src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/457565901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    name: 'Un botín prohibido.',
    person: 'Pastor Rolando Soto',
    id: 1
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
            {tutorialSteps[activeStep].name}
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
            <div key={step.id}>
              <iframe
                width='100%'
                height='150'
                scrolling='no'
                frameBorder='no'
                allow='autoplay'
                src={step.src}
              />
            </div>
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
