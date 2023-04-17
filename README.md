
## Available Scripts

To run this on your local machine, install the dependencies and then run "npm run build".

Once the build process is done, run "npm start" and open the application at localhost:3000 on your browser.
Tests can be run using "npm run test".

## Comments about database design

The schema design implemented in the application currently only has 1 table with 3 columns. However, depending on client needs, the database can also be split into 3 tables, with foreign ID's being used to model the one-to-many relationships featured between a warehouse, it's zones, and each zone's shelves. A sample schema is provided as comments in the schema.sql file.

I'd be happy to talk about my code and answer any questions! Thank you for the opportunity.
