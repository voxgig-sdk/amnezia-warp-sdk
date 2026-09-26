
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AmneziaWarpSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = AmneziaWarpSDK.test()
    equal(testsdk instanceof AmneziaWarpSDK, true,
      'AmneziaWarpSDK.test() must return a client synchronously')
  })

})
