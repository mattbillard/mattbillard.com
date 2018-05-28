import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as textActions from '../actions/textActions';


class ConnectPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.props.actions.getConnectText();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.textReducer !== nextProps.textReducer) {
      this.setState({
        connectText: Object.assign({}, nextProps.textReducer.connectText)
      });
    }
  }

  render() {
    return (
      <div className="connect-page">
        <h2>Connect</h2>
        <pre>{ JSON.stringify(this.state.connectText) }</pre>
      </div>
    );
  }
}


ConnectPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(ConnectPage);
