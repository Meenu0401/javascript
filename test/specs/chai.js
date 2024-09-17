import { expect } from "chai";
import LoginPage from "../pageobjects/log.js"
//assert,expect,should
describe("",() => {
    it("",async() => 
        {
       //Basic equality
        expect(3).to.equal(3)
        expect(3).to.not.equal(4)

        //Checking inclusion in array
        expect([1,2,3]).to.include(2)

        //checking property in object
        expect({a:"aaa",b:"bbb",c:"ccc"}).to.have.property('a')

        //checking type
        expect("Hello").to.be.a('string')

        //array assertion
        expect([1,2,3]).to.be.a('array').that.includes(2)
        expect([1,2,3]).to.have.lengthOf(3)
        expect([1,2,3]).to.not.include(4)

        //object assertion
        const obj={a:'abcd',b:'42'}
        expect(obj).to.be.an('object')
        expect(obj).to.have.property('a').that.is.a('string')
        expect(obj).to.have.property('b','42')
        //expect(obj).to.deep.equal({a:'abcd',b:'42'})

        // .................Should........
        const should=require('chai').should()
        //basic equality
        (3).should.equal(3)
        //checking for inequality
        (3).should.not.equal('3')

        //object property
        ({name:"John"}).should.have.property('name')

        //array includes a value
        [1,2,3].should.include(2)

        //checking deep equality for objects
        //({a:"bb"}).should.deep.equal({a:"bb"})

        //checking type
       ('Hello').should.be.a('string')

        })
});