-- GithubWebsite SDK error

local GithubWebsiteError = {}
GithubWebsiteError.__index = GithubWebsiteError


function GithubWebsiteError.new(code, msg, ctx)
  local self = setmetatable({}, GithubWebsiteError)
  self.is_sdk_error = true
  self.sdk = "GithubWebsite"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function GithubWebsiteError:error()
  return self.msg
end


function GithubWebsiteError:__tostring()
  return self.msg
end


return GithubWebsiteError
