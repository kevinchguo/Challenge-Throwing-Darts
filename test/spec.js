// write tests here

let calculateScores = require("../index.js");
const chai = require("chai");
const expect = chai.should();

describe("Valid scores between 1 and 20", function () {
    it("should return 0 if any scores over 20", function () {
        let invalidArr = [100, 21, 5, 200];
        calculateScores(invalidArr).should.equal(0);
    })
});

describe("No scores", function () {
    it("should return -1 if there are no scores", function () {
        let emptyArr = [];
        calculateScores(emptyArr).should.equal(-1);
    });
});

describe("Scores under 5", function () {
    it("should return a total of 10 points per score under 5, plus 100", function () {
        let sampleScores = [1, 2, 3, 4];
        calculateScores(sampleScores).should.equal(140);
    });
});

describe("Scores between 10 and 20", function () {
    it("should return 0 if all scores are over 10", function () {
        let sampleScores = [11, 13, 12, 15];
        calculateScores(sampleScores).should.equal(0);
    });
});

describe("Add up scores", function () {
    it("should return a total of all scores added up", function () {
        let sampleScores = [1, 2, 5, 15, 20, 7];
        calculateScores(sampleScores).should.equal(30);
    })
});