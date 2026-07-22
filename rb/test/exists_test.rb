# GithubWebsite SDK exists test

require "minitest/autorun"
require_relative "../GithubWebsite_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = GithubWebsiteSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
