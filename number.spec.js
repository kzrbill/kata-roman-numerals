'use strict'

let should = require('should')

class Number {
  constructor(int, suffix) {

    this.int = int || 0
    this.suffix = suffix || ''

    this.numberMap = new Map()
      .set(1, 'I')
      .set(5, 'V')
      .set(10, 'X')
      .set(50, 'L')
      .set(100, 'C')
      .set(500, 'D')
      .set(1000, 'M')
  }

  _baseInt(){
    let baseInt = 0

    for (let intKey of this.numberMap.keys()) {
      if (this.int >= intKey) baseInt = intKey
    }

    return baseInt
  }

  _remainder(){
    return this.int - this._baseInt()
  }

  numerals(){
    let baseChar = this.numberMap.get(this._baseInt())
    if (!baseChar) return this.suffix

    return new Number(this._remainder(), this.suffix + baseChar).numerals()
  }
}

describe("number", () => {

  let number

  beforeEach(() => {
  })

  describe("given 5", () => {
    it("returns numerals V", () => {
      let number = new Number(5)
      number.numerals().should.equal('V')
    })
  })

  describe("given 10", () => {
    it("returns numerals X", () => {
      let number = new Number(10)
      number.numerals().should.equal('X')
    })
  })

  describe("given 50", () => {
    it("returns numerals L", () => {
      let number = new Number(50)
      number.numerals().should.equal('L')
    })
  })

  describe("given 8", () => {
    it("returns numerals VIII", () => {
      let number = new Number(8)
      number.numerals().should.equal('VIII')
    })
  })

  describe("given 51", () => {
    it("returns numerals LI", () => {
      let number = new Number(51)
      number.numerals().should.equal('LI')
    })
  })

  describe("given 788", () => {
    it("returns numerals DCCLXXXVIII", () => {
      let number = new Number(788)
      number.numerals().should.equal('DCCLXXXVIII')
    })
  })

  xdescribe("given 4", () => {
    it("returns numerals IV", () => {
      let number = new Number(4)
      number.numerals().should.equal('IV')
    })
  })

  xdescribe("given 51", () => {
    it("returns numerals 51", () => {
      for  (let i = 0; i < 1000; i++) {
        console.log(new Number(i).numerals())
      }
    })
  })
})
