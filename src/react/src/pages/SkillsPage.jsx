import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as textActions from '../actions/textActions';


class SkillsPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
    this.props.actions.getSkillsText();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.textReducer !== nextProps.textReducer) {
      this.setState({
        skillsText: Object.assign({}, nextProps.textReducer.skillsText)
      });
    }
  }

  render() {
    return (
      <div className="skills-page">
        <h2>Skills</h2>
        <pre>{ JSON.stringify(this.state.skillsText) }</pre>
      </div>
    );
  }
}


SkillsPage.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(SkillsPage);
