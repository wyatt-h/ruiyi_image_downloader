const supertest = require("supertest");
const chai = require("chai");
const sinonChai = require("sinon-chai");
const app = require("../src");

chai.use(sinonChai);
