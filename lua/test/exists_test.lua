-- AmneziaWarp SDK exists test

local sdk = require("amnezia-warp_sdk")

describe("AmneziaWarpSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
