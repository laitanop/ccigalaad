import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import withRoot from '../src/withRoot'

import Layout from '../components/Layout'
import Nosotros from '../components/Nosotros/Nosotros'

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
})

class AboutUs extends React.Component {
  render () {
    return (
      <Layout>
        <Nosotros />

      </Layout>
    )
  }
}

AboutUs.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withRoot(withStyles(styles)(AboutUs))
