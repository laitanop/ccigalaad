import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

class ShowModal extends React.Component {
  state = {
    open: false,
    scroll: 'paper'
  }

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render () {
    return (
      <div>
        <Button onClick={this.handleClickOpen('paper')}>
          <img
            src={this.props.img}
            alt='Italian Trulli'
            width='150'
            height='130'
          />
        </Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby='scroll-dialog-title'
        >

          <DialogContent>
            <DialogContentText>
              <img
                src={this.props.img}
                alt='Italian Trulli'
                width='550'
                height='500'
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color='primary'>
              Cerrar
            </Button>

          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default ShowModal
