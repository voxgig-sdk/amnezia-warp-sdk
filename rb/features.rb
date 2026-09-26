# AmneziaWarp SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module AmneziaWarpFeatures
  def self.make_feature(name)
    case name
    when "base"
      AmneziaWarpBaseFeature.new
    when "ratelimit"
      AmneziaWarpRatelimitFeature.new
    when "retry"
      AmneziaWarpRetryFeature.new
    when "test"
      AmneziaWarpTestFeature.new
    when "timeout"
      AmneziaWarpTimeoutFeature.new
    else
      AmneziaWarpBaseFeature.new
    end
  end
end
