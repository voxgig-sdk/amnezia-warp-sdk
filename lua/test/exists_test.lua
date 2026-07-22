-- GithubWebsite SDK exists test

local sdk = require("github-website_sdk")

describe("GithubWebsiteSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
