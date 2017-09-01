/* global , it, describe */

import chai from 'chai'

function test(value) {
  return value
}

describe('testCase', () => {
  it('case1', () => {
    const data = 'test'
    const result = 'test'
    chai.expect(test(data)).to.equal(result)
  })
})
