// Everything here is only executed on the server
import _ from 'lodash';
import { Meteor } from 'meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

// Only run after Meteor is ready
Meteor.startup(() => {
  // Generate data
  // check if collection already has data.
  // if so get amount.
  const numberRecords = Employees.find({}).count();
  if (!numberRecords) {
    // Generate some data...
    // lodash .times() method will run the function passed 5000 times.
    _.times(5000, () => {
      // createCard() from faker
      const { name, email, phone } = helpers.createCard();

      // insert new record to Mongo collection
      Employyees.insert({
        name,
        email,
        phone
      });
    });
  }
});
