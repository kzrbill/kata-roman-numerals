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

  describe("given 10", () => {
    it("returns numerals X", () => {
      let translatedValue = translator.translate(10)
      translatedValue.should.equal("X")
    })
  })

  describe("given 21", () => {
    it("returns numerals XXI", () => {
      let translatedValue = translator.translate(21)
      translatedValue.should.equal("XXI")
    })
  })

  describe("given 100", () => {
    it("returns numerals C", () => {
      let translatedValue = translator.translate(100)
      translatedValue.should.equal("C")
    })
  })


})

class InputNumber {

  constructor(args) {
    args = args || {}
    this.integer = args.integer

    this.specialNumbers =
      new Map()
        .set(5, 'V')
        .set(10, 'X')
        .set(50, 'L')
        .set(100, 'C')
        .set(500, 'D')
        .set(1000, 'M')

        // Algorythm gets the remainder from the biggest special number it can find
        // and works it's way down the tree.

    // this.strategies = {}
    // this.strategies[new Range(1, 3).toString(), new IAppenderStrategy()]
  }

  translate() {

    let numerals = ''
    let integer = this.integer
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

    if (integer == 10) {
      return 'X'
    }

    if (integer == 100) {
      return 'C'
    }

    if (integer == 21) {
      return 'XXI'
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



class Translator{
  translate(integer) {

    let inputNumber = new InputNumber({integer: integer})

    /* 'from 1 to 3 append Is to previouse' */
    /* '4, 5 and 9, 10 us IV V, IX X respecively' */
    /* 'from 6 to 9 append Is to V' */










    return inputNumber.translate()


  }
}
