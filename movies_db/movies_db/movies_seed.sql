INSERT INTO actors (first_name, last_name)
VALUES ('Fionn',
        'Whitehead'), ('Damien',
                       'Bonnard');


INSERT INTO directors (first_name, last_name)
VALUES ('Christopher',
        'Nolan');


INSERT INTO movies (name, release_date, director_id)
VALUES ('Dunkirk',
        '2017-07-21',
          (SELECT id
           FROM directors
           WHERE first_name = 'Christopher'
             AND last_name = 'Nolan'));

INSERT INTO actors_movies (actor_id, movie_id)
VALUES ((select id from actors where first_name = 'Fionn' and last_name = 'Whitehead'), (select id from movies where name = 'Dunkirk'));
INSERT INTO actors_movies (actor_id, movie_id)
VALUES ((select id from actors where first_name = 'Damien' and last_name = 'Bonnard'), (select id from movies where name = 'Dunkirk'));
