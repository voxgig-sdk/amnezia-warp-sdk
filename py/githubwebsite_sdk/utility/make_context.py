# GithubWebsite SDK utility: make_context

from githubwebsite_sdk.core.context import GithubWebsiteContext


def make_context_util(ctxmap, basectx):
    return GithubWebsiteContext(ctxmap, basectx)
