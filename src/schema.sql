DROP DATABASE IF EXISTS warehouses;

CREATE DATABASE warehouses;

CREATE TABLE IF NOT EXISTS warehouse_names (
  id SERIAL PRIMARY KEY,
  name varchar NOT NULL,
  zones json NOT NULL
);

-- Alternative schema depending on needs of the client, zones column would be removed and instead replaced with 2 more tables using foreign keys
-- CREATE TABLE IF NOT EXISTS zones (
--   id SERIAL PRIMARY KEY,
--   zone_number integer NOT NULL,
--   warehouse_id integer REFERENCES warehouse_names (id)
-- );

-- CREATE TABLE IF NOT EXISTS shelves (
--   id SERIAL PRIMARY KEY,
--   shelf_name varchar NOT NULL,
--   zone_id REFERENCES zones (id)
-- );