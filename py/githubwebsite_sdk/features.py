# GithubWebsite SDK feature factory

from githubwebsite_sdk.feature.base_feature import GithubWebsiteBaseFeature
from githubwebsite_sdk.feature.test_feature import GithubWebsiteTestFeature


def _make_feature(name):
    features = {
        "base": lambda: GithubWebsiteBaseFeature(),
        "test": lambda: GithubWebsiteTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
