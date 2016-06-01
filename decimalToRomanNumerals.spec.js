'use strict'

let should = require('should')

describe("translator", () => {

  let translator

  beforeEach(() => {
    translator = new Translator()
  })

  describe("given 1", () => {
    it("returns numerals I", () => {
      let translatedValue = translator.translate(1)
      translatedValue.should.equal("I")
    })
  })

  describe("given 2", () => {
    it("returns numerals II", () => {
      let translatedValue = translator.translate(2)
      translatedValue.should.equal("II")
    })
  })

  describe("given 3", () => {
    it("returns numerals III", () => {
      let translatedValue = translator.translate(3)
      translatedValue.should.equal("III")
    })
  })


})

class Translator{
  translate(integer) {

    let numerals = ''
    for (let i = 0; i < integer; i++) {
        numerals = numerals + 'I'
    }
    
    return numerals
  }
}
