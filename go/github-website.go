package voxgiggithubwebsitesdk

import (
	"github.com/voxgig-sdk/github-website-sdk/go/core"
	"github.com/voxgig-sdk/github-website-sdk/go/entity"
	"github.com/voxgig-sdk/github-website-sdk/go/feature"
	_ "github.com/voxgig-sdk/github-website-sdk/go/utility"
)

// Type aliases preserve external API.
type GithubWebsiteSDK = core.GithubWebsiteSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type GithubWebsiteEntity = core.GithubWebsiteEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type GithubWebsiteError = core.GithubWebsiteError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewConfigurationEntityFunc = func(client *core.GithubWebsiteSDK, entopts map[string]any) core.GithubWebsiteEntity {
		return entity.NewConfigurationEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewGithubWebsiteSDK = core.NewGithubWebsiteSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewGithubWebsiteSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *GithubWebsiteSDK  { return NewGithubWebsiteSDK(nil) }
func Test() *GithubWebsiteSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
