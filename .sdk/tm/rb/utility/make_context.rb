# AmneziaWarp SDK utility: make_context
require_relative '../core/context'
module AmneziaWarpUtilities
  MakeContext = ->(ctxmap, basectx) {
    AmneziaWarpContext.new(ctxmap, basectx)
  }
end
