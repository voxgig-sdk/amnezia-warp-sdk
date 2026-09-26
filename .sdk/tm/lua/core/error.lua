-- AmneziaWarp SDK error

local AmneziaWarpError = {}
AmneziaWarpError.__index = AmneziaWarpError


function AmneziaWarpError.new(code, msg, ctx)
  local self = setmetatable({}, AmneziaWarpError)
  self.is_sdk_error = true
  self.sdk = "AmneziaWarp"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function AmneziaWarpError:error()
  return self.msg
end


function AmneziaWarpError:__tostring()
  return self.msg
end


return AmneziaWarpError
