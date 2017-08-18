
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('stores').del()
    .then(function () {
      // Inserts seed entries
      return knex('stores').insert([
        {id: 1, name: 'Borders'},
        {id: 2, name: 'JC Penny'},
        {id: 3, name: 'Local Book Store'},
        {id: 4, name: "Macy's"},
        {id: 5, name: 'Sears'},
        {id: 6, name: 'Toys R Us'}
      ]).then(function() {
        return knex('receipts').del()
          .then(function () {
            // Inserts seed entries
            return knex('receipts').insert([
              {id: 1,store_id: 5, item: 'PS4', number_of_items: 1, price: 400,buy_date: 'January 21 2014'},
              {id: 2,store_id: 6, item: 'XBox One', number_of_items: 1, price: 500,buy_date: 'January 21 2014'},
              {id: 3,store_id: 6, item: 'TMNT Collectors Set', number_of_items: 1, price: 25,buy_date: 'January 21 2014'},
              {id: 4,store_id: 5, item: 'Lego Set', number_of_items: 1, price: 40,buy_date: 'January 21 2014'},
              {id: 5,store_id: 1, item: 'Blood Meridian', number_of_items: 3, price: 12,buy_date: 'March 21 2014'},
              {id: 6,store_id: 1, item: 'Ham on Rye', number_of_items: 2, price: 12,buy_date: 'March 21 2014'},
              {id: 7,store_id: 3, item: 'The Last Tycoon', number_of_items: 1, price: 14,buy_date: 'March 21 2014'},
              {id: 8,store_id: 4, item: 'Button Down Shirt', number_of_items: 3, price: 28.50,buy_date: 'March 22 2014'},
              {id: 9,store_id: 2, item: 'Nikes', number_of_items: 1, price: 100,buy_date: 'March 23 2014'},
              {id: 10,store_id: 2, item: 'tube socks', number_of_items: 3, price: 28,buy_date: 'March 23 2014'},
              {id: 11,store_id: 2, item: 'Reeboks', number_of_items: 1, price: 60,buy_date: 'March 23 2014'},
              {id: 12,store_id: 2, item: 'Umbrella, Red', number_of_items: 1, price: 10.50,buy_date: 'March 23 2014'},
              {id: 13,store_id: 2, item: 'Boxer Shorts', number_of_items: 3, price: 20.75,buy_date: 'March 23 2014'},
              {id: 14,store_id: 2, item: 'TMNT bedspread', number_of_items: 1, price: 20,buy_date: 'March 23 2014'},
              {id: 15,store_id: 5, item: 'Packers Jersey', number_of_items: 1, price: 50,buy_date: 'March 24 2014'},
              {id: 16,store_id: 6, item: 'Life', number_of_items: 1, price: 25,buy_date: 'March 24 2014'},
              {id: 17,store_id: 5, item: 'laptop bag', number_of_items: 19, price: 40.50,buy_date: 'March 24 2014'}
            ]);
          });
      });
    });
};
