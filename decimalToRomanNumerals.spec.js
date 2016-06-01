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

  describe("given 4", () => {
    it("returns numerals IV", () => {
      let translatedValue = translator.translate(4)
      translatedValue.should.equal("IV")
    })
  })

  describe("given 5", () => {
    it("returns numerals V", () => {
      let translatedValue = translator.translate(5)
      translatedValue.should.equal("V")
    })
  })

  describe("given 6", () => {
    it("returns numerals VI", () => {
      let translatedValue = translator.translate(6)
      translatedValue.should.equal("VI")
    })
  })

  describe("given 7", () => {
    it("returns numerals VII", () => {
      let translatedValue = translator.translate(7)
      translatedValue.should.equal("VII")
    })
  })

  describe("given 8", () => {
    it("returns numerals VIII", () => {
      let translatedValue = translator.translate(8)
      translatedValue.should.equal("VIII")
    })
  })

  describe("given 9", () => {
    it("returns numerals IX", () => {
      let translatedValue = translator.translate(9)
      translatedValue.should.equal("IX")
    })
  })


})

class Translator{
  translate(integer) {

    let numerals = ''
    if (integer < 4) {
      for (let i = 0; i < integer; i++) {
          numerals = numerals + 'I'
      }
      return numerals
    }

    if (integer == 4) {
      return 'IV'
    }

    if (integer == 5) {
      return 'V'
    }

    if (integer == 9) {
      return 'IX'
    }

    if (integer > 5) {
      numerals = 'V'
      for (let i = 0; i < integer - 5; i++) {
          numerals = numerals + 'I'
      }

      return numerals
    }


    return numerals
  }
}
