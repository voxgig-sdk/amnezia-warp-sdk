# AmneziaWarp SDK exists test

require "minitest/autorun"
require_relative "../AmneziaWarp_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = AmneziaWarpSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
