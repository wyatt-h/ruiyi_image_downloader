import { expect, server, BASE_URL } from "./setup";

describe("Images", () => {
  it("get messages page", (done) => {
    server
      .get(`${BASE_URL}/images`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.images).to.be.instanceOf(Array);
        res.body.images.forEach((image) => {
          expect(image).to.have.property("name");
          expect(image).to.have.property("url");
          expect(image).to.have.property("tag");
        });
        done();
      });
  });
});
