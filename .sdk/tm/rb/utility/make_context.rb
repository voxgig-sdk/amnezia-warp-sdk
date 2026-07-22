# GithubWebsite SDK utility: make_context
require_relative '../core/context'
module GithubWebsiteUtilities
  MakeContext = ->(ctxmap, basectx) {
    GithubWebsiteContext.new(ctxmap, basectx)
  }
end
