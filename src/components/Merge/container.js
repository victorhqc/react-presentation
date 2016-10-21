import { connect } from 'react-redux';

import { mergeApp } from '../../actions';

import merge from './merge';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  mergeApp(data) { dispatch(mergeApp(data)); }
});

const container = connect(
  mapStateToProps,
  mapDispatchToProps
)(merge);

export default container;
