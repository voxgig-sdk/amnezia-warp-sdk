

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { AmneziaWarpSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('ConfigurationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AMNEZIA_WARP_TEST_LIVE=TRUE.
  afterEach(liveDelay('AMNEZIA_WARP_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AmneziaWarpSDK.test()
    const ent = testsdk.Configuration()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AMNEZIA_WARP_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'configuration.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"config":{"a":true,"h":"Config","n":"config","r":false,"t":"`$OBJECT`","key$":"config","index$":0},"path":{"a":true,"h":"Path","n":"path","r":false,"t":"`$STRING`","key$":"path","index$":1},"status":{"a":true,"h":"Status","n":"status","r":false,"t":"`$STRING`","key$":"status","index$":2}},"name":"configuration","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /api/warp","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/api/warp","q":{},"r":{},"s":[{"lit":"api"},{"lit":"warp"}],"t":{"req":"`reqdata`","res":"`body.config`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"configuration","name__orig":"configuration","Name":"Configuration","name_":"configuration","name-":"configuration","NAME":"CONFIGURATION","index$":0}, {"active":true,"entity":"configuration","key$":"BasicConfigurationFlow","kind":"basic","name":"BasicConfigurationFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"configuration_ref01","srcdatavar":"configuration_ref01_data","suffix":"_dt0"},"m":{},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-configuration_ref01"}}],"index$":0}]}, 'Configuration', {"GET /api/warp":{"protocol":"http","operationId":"getWarpConfig","responses":{"200":{"description":"Successful response with warp configuration","content":{"application/json":{"schema":{"type":"object","properties":{"config":{"description":"Warp configuration object","key$":"config","type":"object"},"path":{"description":"Path where configuration is saved","key$":"path","type":"string"},"status":{"description":"Status of the configuration generation","key$":"status","type":"string"}}},"example":{"config":{"interface":{"private_key":"example_private_key","address":"10.0.0.1/32"},"peer":{"public_key":"example_public_key","endpoint":"example.endpoint.com:51820"}},"status":"success","path":"/configs/warp_config.conf"}},"text/plain":{"schema":{"type":"string","description":"Plain text configuration file content"}}}},"500":{"description":"Internal server error - Error generating or saving config","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"status":{"type":"string","example":"error"}}},"example":{"error":"Error saving config","status":"error"}}}},"503":{"description":"Service unavailable - GitHub website or API is experiencing downtime","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","description":"Error message"},"status":{"type":"string","example":"unavailable"},"suggestion":{"type":"string","description":"Suggested action for the user"}}},"example":{"error":"Service temporarily unavailable","status":"unavailable","suggestion":"Please try again later or check the GitHub status page"}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let configuration_ref01_data = Object.values(setup.data.existing.configuration)[0] as any

    // LOAD
    const configuration_ref01_ent = client.Configuration()
    const configuration_ref01_match_dt0: any = {}
    const configuration_ref01_data_dt0 = (await configuration_ref01_ent.load(configuration_ref01_match_dt0)).data()
    assert(null != configuration_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/configuration/ConfigurationTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = AmneziaWarpSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['configuration01','configuration02','configuration03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AMNEZIA_WARP_TEST_CONFIGURATION_ENTID': idmap,
    'AMNEZIA_WARP_TEST_LIVE': 'FALSE',
    'AMNEZIA_WARP_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['AMNEZIA_WARP_TEST_CONFIGURATION_ENTID']

  const live = 'TRUE' === env.AMNEZIA_WARP_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AMNEZIA_WARP_TEST_CONFIGURATION_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new AmneziaWarpSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.AMNEZIA_WARP_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
