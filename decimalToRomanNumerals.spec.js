'use strict'

let should = require('should')

describe("translator", () => {

  let translator

  beforeEach(() => {
    translator = new Translator()
  })

  describe("given 1", () => {

    let translatedValue

    beforeEach(() => {
      translatedValue = translator.translate(1)
    })

    it("returns numerals I", () => {
      translatedValue.should.equal("I")
    })
  })
})

class Translator{
  translate() {
    return 'I'
  }
}
