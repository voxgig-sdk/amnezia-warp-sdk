
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { GithubWebsiteSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await GithubWebsiteSDK.test()
    equal(null !== testsdk, true)
  })

})
