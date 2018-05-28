import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as textActions from '../actions/textActions';


class AboutPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.props.actions.getAboutText();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.textReducer !== nextProps.textReducer) {
      this.setState({
        aboutText: Object.assign({}, nextProps.textReducer.aboutText)
      });
    }
  }

  render() {
    return (
      <div className="about-page">
        <h2>About</h2>
        <pre>{ JSON.stringify(this.state.aboutText) }</pre>
      </div>
    );
  }
}


AboutPage.propTypes = {
  textReducer: PropTypes.any.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    textReducer: state.textReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(textActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
