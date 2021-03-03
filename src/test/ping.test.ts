import "reflect-metadata"
import request from 'supertest';
import {startServer} from '../server';

describe('Graph API', () => {

  it('returns the user args and greeting', async (done) => {

    const server = await startServer();

    request(server)
      .post('/graphql')
      .set('Accept', 'application/json')
      .send({query: `
      {
        ping
      }
    `})
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        expect(res.body).toEqual({
          data: {
            ping: 'Pong!'
          }
        })
        //console.log("Resp: ", res.body);
        done();
      });
  });

});

/**
describe("test add function", () => {
  it("should return 15 for add(10,5)", () => {
    expect(10+5).toBe(15);
  });
it("should return 5 for add(2,3)", () => {
    expect(2 + 3).toBe(5);
  });
});
 */