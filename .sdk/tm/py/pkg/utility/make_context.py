# AmneziaWarp SDK utility: make_context

from projectname_sdk.core.context import AmneziaWarpContext


def make_context_util(ctxmap, basectx):
    return AmneziaWarpContext(ctxmap, basectx)
