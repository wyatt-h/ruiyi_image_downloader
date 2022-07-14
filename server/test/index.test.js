import { isTag } from "domhandler";
import { expect, server, BASE_URL } from "./setup";

describe("Index page test", function () {
  it("gets base url", (done) => {
    server
      .get(`${BASE_URL}/`)
      .expect(200)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body.message).to.equal("today is a gooooood day");
        done();
      });
  });
});
