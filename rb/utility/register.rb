# AmneziaWarp SDK utility registration
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

AmneziaWarpUtility.registrar = ->(u) {
  u.clean = AmneziaWarpUtilities::Clean
  u.done = AmneziaWarpUtilities::Done
  u.make_error = AmneziaWarpUtilities::MakeError
  u.feature_add = AmneziaWarpUtilities::FeatureAdd
  u.feature_hook = AmneziaWarpUtilities::FeatureHook
  u.feature_init = AmneziaWarpUtilities::FeatureInit
  u.fetcher = AmneziaWarpUtilities::Fetcher
  u.make_fetch_def = AmneziaWarpUtilities::MakeFetchDef
  u.make_context = AmneziaWarpUtilities::MakeContext
  u.make_options = AmneziaWarpUtilities::MakeOptions
  u.make_request = AmneziaWarpUtilities::MakeRequest
  u.make_response = AmneziaWarpUtilities::MakeResponse
  u.make_result = AmneziaWarpUtilities::MakeResult
  u.make_point = AmneziaWarpUtilities::MakePoint
  u.make_spec = AmneziaWarpUtilities::MakeSpec
  u.make_url = AmneziaWarpUtilities::MakeUrl
  u.param = AmneziaWarpUtilities::Param
  u.prepare_auth = AmneziaWarpUtilities::PrepareAuth
  u.prepare_body = AmneziaWarpUtilities::PrepareBody
  u.prepare_headers = AmneziaWarpUtilities::PrepareHeaders
  u.prepare_method = AmneziaWarpUtilities::PrepareMethod
  u.prepare_params = AmneziaWarpUtilities::PrepareParams
  u.prepare_path = AmneziaWarpUtilities::PreparePath
  u.prepare_query = AmneziaWarpUtilities::PrepareQuery
  u.graphql_body = AmneziaWarpUtilities::GraphqlBody
  u.graphql_errors = AmneziaWarpUtilities::GraphqlErrors
  u.result_basic = AmneziaWarpUtilities::ResultBasic
  u.result_body = AmneziaWarpUtilities::ResultBody
  u.result_headers = AmneziaWarpUtilities::ResultHeaders
  u.transform_request = AmneziaWarpUtilities::TransformRequest
  u.transform_response = AmneziaWarpUtilities::TransformResponse
}
