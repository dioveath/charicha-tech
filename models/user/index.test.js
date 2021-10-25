

const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const { makeUser } = require("./index");


chai.use(chaiAsPromised);
const expect = chai.expect;


describe('makeUser', () => {

  it("tests makeUser with invalidPayload to throw error!", () => {
    var invalidPayload = {
      first_name: "no"
    };

    var promise = makeUser(invalidPayload);
    // expect(promise instanceof Promise).to.be.true;

    return expect(promise).to.be.rejected;

  });

  it("tests makeUser with validPayload", async () => {

    var validPayload = {
      "first_name": "Ram",
      "last_name": "Prasad",
      "nickname": "rame",
      "email": "ramprasad@gmail.com",
      "password": "prasad00"      
    };

    var validUser = await makeUser(validPayload);
 
    expect(validUser.getFirstName()).to.equal(validPayload.first_name);
    expect(validUser.getLastName()).to.equal(validPayload.last_name);
    expect(validUser.getNickName()).to.equal(validPayload.nickname);
    expect(validUser.getEmail()).to.equal(validPayload.email);
    expect(validUser.getPassword()).to.not.equal(validPayload.password);   // ¤ hashPassword

  });


  it("tests makeUser with invalidPayload (no Password) to throw error!", () => {
    var invalidPayload = {
      first_name: "Ram",
      last_name: "Prasad",
      nickname: "rame",
      email: "ramprasad@gmail.com",
    };

    var promise = makeUser(invalidPayload);

    return expect(promise).to.be.rejectedWith("password");

  });  
  

});
