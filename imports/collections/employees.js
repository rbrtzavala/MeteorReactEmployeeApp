// Declare our collection
// Mongo comes packaged with meteor, if a meteor server is running
// then a mongo server is simultaneously runnign as well.
import { Mongo } from 'meteor/mongo';

// Declare a new Collection() and passing it a value
// will automatically create it in the database.
export const Employees = new Mongo.Collection('employees');
