-- All the attributes from all the receipts
SELECT *
FROM receipts
INNER JOIN stores
ON receipts.store_id = stores.id;

-- The store and item names from all the receipts
SELECT stores.name, receipts.item
FROM receipts
INNER JOIN stores
ON receipts.store_id = stores.id;
-- OR
SELECT stores.name, receipts.item
FROM stores
LEFT JOIN receipts
ON receipts.store_id = stores.id;


-- All the attributes from all purchases made at Toys R Us

SELECT *
FROM receipts
INNER JOIN stores
ON receipts.store_id = stores.id
WHERE stores.name = 'Toys R Us';

-- The item name of all the purchases made at Borders.
SELECT receipts.item
FROM receipts
INNER JOIN stores
ON receipts.store_Id = stores.id
WHERE stores.name = 'Borders';


-- The names of all the stores that we shopped at (no duplicates)

SELECT DISTINCT(stores.name)
FROM stores;

-- OR
cd
-- The total number of items purchased

SELECT SUM(number_of_items)
FROM receipts;

-- The total number of items purchased at Sears

SELECT SUM(receipts.number_of_items), stores.name
FROM receipts
INNER JOIN stores
ON receipts.store_id = stores.id
WHERE stores.name = 'Sears'
GROUP BY stores.name;

-- OR

-- The store name and the total number of items purchased for each store

SELECT stores.name, SUM(receipts.number_of_items)
FROM receipts
INNER JOIN stores
ON receipts.store_id = stores.id
WHERE stores.name in (SELECT stores.name FROM stores)
GROUP BY stores.name;
--OR
ELECT stores.name, SUM(receipts.number_of_items)
FROM receipts
INNER JOIN stores
ON receipts.store_id = stores.id
GROUP BY stores.name;

-- The total amount of money spent at Sears
SELECT stores.name, SUM(receipts.price * receipts.number_of_items)
FROM receipts
INNER JOIN stores
ON receipts.store_id = stores.id
WHERE stores.name = 'Sears'
GROUP BY stores.name;
-- OR

-- Note: Price is the price of a single item, not the total cost of, say, 2 or 3 shirts


-- The average number of items purchased on a trip to JC Penny
SELECT stores.name, AVG(receipts.number_of_items)
FROM receipts
INNER JOIN stores
ON receipts.store_id = stores.id
WHERE stores.name = 'JC Penny'
GROUP BY stores.name;
-- OR
select avg(number_of_items) from receipts
 INNER JOIN stores on receipts.store_id = stores.id
 where stores.name = 'JC Penny';
-- The average number of items purchased at each store

SELECT stores.name, AVG(receipts.number_of_items)
FROM receipts
INNER JOIN stores
ON receipts.store_id = stores.id
WHERE stores.name in (SELECT stores.name FROM stores)
GROUP BY stores.name;

-- OR
select stores.name, round(avg(number_of_items), 2) from receipts
 INNER JOIN stores on receipts.store_id = stores.id
 GROUP BY stores.name;
-- The maximum amount spent on any item
select item, max(price) from receipts
group by item;
