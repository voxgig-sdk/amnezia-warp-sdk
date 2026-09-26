package voxgigamneziawarpsdk

import (
	"github.com/voxgig-sdk/amnezia-warp-sdk/go/core"
	"github.com/voxgig-sdk/amnezia-warp-sdk/go/entity"
	"github.com/voxgig-sdk/amnezia-warp-sdk/go/feature"
	_ "github.com/voxgig-sdk/amnezia-warp-sdk/go/utility"
)

// Type aliases preserve external API.
type AmneziaWarpSDK = core.AmneziaWarpSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type AmneziaWarpEntity = core.AmneziaWarpEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type AmneziaWarpError = core.AmneziaWarpError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewConfigurationEntityFunc = func(client *core.AmneziaWarpSDK, entopts map[string]any) core.AmneziaWarpEntity {
		return entity.NewConfigurationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewAmneziaWarpSDK = core.NewAmneziaWarpSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewAmneziaWarpSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *AmneziaWarpSDK  { return NewAmneziaWarpSDK(nil) }
func Test() *AmneziaWarpSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
