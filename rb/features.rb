# GithubWebsite SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module GithubWebsiteFeatures
  def self.make_feature(name)
    case name
    when "base"
      GithubWebsiteBaseFeature.new
    when "test"
      GithubWebsiteTestFeature.new
    else
      GithubWebsiteBaseFeature.new
    end
  end
end
