import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router';

import Input from './Input';
import Checkbox from './Checkbox';

class TodoForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.props.onSubmit.bind(this))}>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-6"> 
            <Field
              name="name"
              type="text"
              label="Name"
              required={true}
              component={Input}
            />
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6"> 
            <div className="margin-top-30px">
              <Field
                name="email"
                label="Email"
                disabled={this.props.disableCompleted}
                component={Input}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-6"> 
            <div className="margin-top-30px">
              <Field
                name="age"
                label="Age"
                component={Input}
              />
            </div>
          </div>

           <div className="col-xs-12 col-sm-6 col-md-6"> 
            <div className="margin-top-30px">
              <Field
                name="password"
                label="Password"
                component={Input}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12"> 
            <button type="submit" className="btn btn-primary">Save</button>
            <Link to= "/" className="btn btn-primary">Cancel</Link>
          </div>
        </div>
      </form>
    );
  }
}

TodoForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

function validate(values) {
  const errors = {};

  if (!values.text) {
    errors.text = 'Enter a text description';
  }

  return errors;
}

export default connect()(reduxForm({
  form: 'todo',
  validate
})(TodoForm));