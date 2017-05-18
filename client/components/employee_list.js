import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';

const EmployeeList = (props) => {
  // props.employees => an array of employee objects
  console.log(props.employees);


  return (
    <div>
      <div className="employee-list">
        EmployeeList
      </div>
    </div>
  )
};

// createConainer() here.
// a Container watches a collection and passes data to a component.
export default createContainer(() => {
  // set up subscription which requests available publication from db
  Meteor.subscribe('employees');

  // return an object. Whatever we return will be sent to
  // EmployeeList as props.
  return { employees: Employees.find({}).fetch()};
}, EmployeeList);
