// Everything here is only executed on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
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
      Employees.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }

  // Create a publication here...
  // Publication exist on server side and acts as a sort of
  // window to into the Mongo database.
  Meteor.publish('employees', function() {
    return Emplyees.find({}, { limit: 20 });
  });
});
