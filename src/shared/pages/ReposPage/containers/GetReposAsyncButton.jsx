// @flow

import { connect } from 'react-redux';

import { fetchReposList } from '../reducer';
import Button from '../../../components/Button';

// FIXME: waiting for the MapDispatchToProps to be fixed.
// link: https://github.com/flowtype/flow-typed/pull/2105
const mapDispatchToProps: any => { onClick: any => mixed } = (dispatch: Dispatch) => ({
  onClick: () => {
    dispatch(fetchReposList());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Button);
