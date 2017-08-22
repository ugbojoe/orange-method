const expect = require('chai').expect;
const supertest = require('supertest')
const Movie = require('../models/movie');


const api = supertest('localhost:3002/api/movies');

describe('Movies Routes', () => {
   describe('INDEX ROUTE', () => {   //('GET /', () => {
   it('should return a 200 response', done => {  //200 response is http response for ok
     api.get('/') // putting id in ('/id') will get aspecific id
     .set('Accept', 'application/json')
     .expect(200, done);
   });
   it('should return 6 movies each having a title', done => {
         api.get('/')
         .set('Accept', 'application/json')
         .expect(200)
         .end((err, res) => {
           expect(err).to.equal(null);
           const movies = res.body;
           expect(movies).to.not.equal(null);
           expect(movies).to.be.instanceof(Array);
           expect(movies.length).to.equal(6);
           expect(movies[0]).to.have.property('title').that.equals('Air Force One');
           done();
         });
       });
       describe('SHOW ROUTE', () => {
         it('should return a 200 response and return Star Wars when given the id', done => {
           // first lookup the id for Star Wars
           Movie.where({ title: 'Star Wars' }).fetch().then(starWars => {
             const id = starWars.id;
             api.get(`/${id}`)
             .set('Accept', 'application/json')
             .expect(200)
             .end((err, res) => {
               const movie = res.body;
               expect(movie).to.not.equal(null);
               expect(movie).to.have.property('title').that.equals('Star Wars');
               done();
             });
           });
         });
       });
       describe('CREATE ROUTE', () => {
    it('should return a 201 response and return the new movie', done => {
      api.post('/')
      .set('Accept', 'application/json')
      .send({ title: 'Terminator', genre: 'sci-fi' })
      .expect(201)
      .end((err, res) => {
        const movie = res.body;
        expect(movie).to.not.equal(null);
        expect(movie).to.have.property('title').that.equals('Terminator');
        done();
    });
  });
  });
});
});
