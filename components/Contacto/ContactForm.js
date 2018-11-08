import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'

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
    height: 240
  },
  button: {
    backgroundColor: '#6A772A'
  }
}

class ContactForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Paper className={classes.card}>
          <div>
            <CardMedia
              className={classes.media}
              image='/static/imgcontact.jpg'
              title='Contemplative Reptile'
            />
            <div>
              <Typography gutterBottom variant='h5' component='h2'>
                CCI Galaad
              </Typography>
              <Typography component='p'>
                Ingresa tu nombre y correo electronico para consultas.
              </Typography>
              <form className={classes.container} autoComplete='off'>
                <TextField
                  id='filled-name'
                  label='Nombre'
                  className={classes.textField}
                  name='name'
                  onChange={this.handleChange}
                  margin='normal'
                  variant='filled'
                />

                <TextField
                  id='filled-email'
                  label='Correo'
                  className={classes.textField}
                  name='email'
                  onChange={this.handleChange}
                  margin='normal'
                  variant='filled'
                />

                <div>
                  {' '}
                  <textarea
                    name='message'
                    onChange={this.handleChange}
                    rows='10'
                    cols='60'
                  />
                </div>

                <div>
                  <Button
                    // onClick={this.handleSubmit}
                    variant='contained'
                    color='primary'
                    className={classes.button}
                  >
                    Enviar
                  </Button>

                </div>

              </form>

            </div>
          </div>

        </Paper>
      </div>
    )
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ContactForm)
