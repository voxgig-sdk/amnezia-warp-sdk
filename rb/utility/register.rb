# GithubWebsite SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'graphql'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

GithubWebsiteUtility.registrar = ->(u) {
  u.clean = GithubWebsiteUtilities::Clean
  u.done = GithubWebsiteUtilities::Done
  u.make_error = GithubWebsiteUtilities::MakeError
  u.feature_add = GithubWebsiteUtilities::FeatureAdd
  u.feature_hook = GithubWebsiteUtilities::FeatureHook
  u.feature_init = GithubWebsiteUtilities::FeatureInit
  u.fetcher = GithubWebsiteUtilities::Fetcher
  u.make_fetch_def = GithubWebsiteUtilities::MakeFetchDef
  u.make_context = GithubWebsiteUtilities::MakeContext
  u.make_options = GithubWebsiteUtilities::MakeOptions
  u.make_request = GithubWebsiteUtilities::MakeRequest
  u.make_response = GithubWebsiteUtilities::MakeResponse
  u.make_result = GithubWebsiteUtilities::MakeResult
  u.make_point = GithubWebsiteUtilities::MakePoint
  u.make_spec = GithubWebsiteUtilities::MakeSpec
  u.make_url = GithubWebsiteUtilities::MakeUrl
  u.param = GithubWebsiteUtilities::Param
  u.prepare_auth = GithubWebsiteUtilities::PrepareAuth
  u.prepare_body = GithubWebsiteUtilities::PrepareBody
  u.prepare_headers = GithubWebsiteUtilities::PrepareHeaders
  u.prepare_method = GithubWebsiteUtilities::PrepareMethod
  u.prepare_params = GithubWebsiteUtilities::PrepareParams
  u.prepare_path = GithubWebsiteUtilities::PreparePath
  u.prepare_query = GithubWebsiteUtilities::PrepareQuery
  u.graphql_body = GithubWebsiteUtilities::GraphqlBody
  u.graphql_errors = GithubWebsiteUtilities::GraphqlErrors
  u.result_basic = GithubWebsiteUtilities::ResultBasic
  u.result_body = GithubWebsiteUtilities::ResultBody
  u.result_headers = GithubWebsiteUtilities::ResultHeaders
  u.transform_request = GithubWebsiteUtilities::TransformRequest
  u.transform_response = GithubWebsiteUtilities::TransformResponse
}
