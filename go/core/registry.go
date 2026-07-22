package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewConfigurationEntityFunc func(client *GithubWebsiteSDK, entopts map[string]any) GithubWebsiteEntity

