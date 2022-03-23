import chai from 'chai';
import chaiHttp from 'chai-http';
import fs from 'fs';

const expect = chai.expect;
const urlServerDefault = `localhost:3001/api`;
const urlServerItems = `${urlServerDefault}/items`;
let dataItem = {};
let dataItems = {};

chai.use(chaiHttp);

describe('TEST API  Item', () => {
  beforeEach(() => {
    dataItem = JSON.parse(fs.readFileSync(__dirname + './../__mocks__/itemDetail.json'));
    dataItems = JSON.parse(fs.readFileSync(__dirname + './../__mocks__/itemList.json'));
  });

  it('Should return status 200 and the product detail', (done) => {
    chai.request(urlServerItems)
      .get('/MLA618741486')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.eql(dataItem);
        done();
      });
  });

  it('Should return status 200 and the list of products', (done) => {
    chai.request(urlServerItems)
      .get('?q=cama&limit=4')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.eql(dataItems);
        done();
      });
  });

  it('Should get a 404 error', (done) => {
    chai.request(urlServerDefault)
      .get('/notFound')
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});
