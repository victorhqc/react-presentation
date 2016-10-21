import { connect } from 'react-redux';

import App from './App';

const mapStateToProps = ({
  merge
}) => ({
  merge
});

const mapDispatchToProps = () => ({});

const AppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default AppContainer;
