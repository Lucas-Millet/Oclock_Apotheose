import { connect } from 'react-redux';

import Checkbox from 'src/components/Checkbox';

// connection de props en lecture sur le state
// ces props seront des tableaux, objets, booléens, numériques, string
const mapStateToProps = (state, ownProps) => ({
  // propName:  valueFromTheState,
});

// connection de props fonctions qui déclenchent des actions
// ces props seraont des fonctions
const mapDispatchToProps = (dispatch, ownProps) => ({
// props: () => {
//   dispatch(actionFromAnActionCreator());
// },
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox);
