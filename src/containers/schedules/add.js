import { connect } from 'react-redux';
import { addSchedule } from './actions';
import Form from './form';
import spec from './spec';

const mapStateToProps = state => {
  const { states } = state || [];
  const item = Object.assign(
    {},
    ...spec.map(({ name, value }) => ({ [name]: value }))
  );

  return {
    item,
    options: states,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: element => {
      dispatch(addSchedule(element));
    },
  };
};

const AddSchedule = connect(mapStateToProps, mapDispatchToProps)(Form);

export default AddSchedule;
