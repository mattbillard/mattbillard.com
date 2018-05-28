import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as textActions from '../actions/textActions';


class HomePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.props.actions.getHomeText();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.textReducer !== nextProps.textReducer) {
      this.setState({
        homeText: Object.assign({}, nextProps.textReducer.homeText)
      });
    }
  }

  render() {
    return (
      <div className="home-page">
        <h2>Home</h2>
        <pre>{ JSON.stringify(this.state.homeText) }</pre>
      </div>
    );
  }
}


HomePage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
