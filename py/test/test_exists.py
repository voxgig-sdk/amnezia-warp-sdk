# AmneziaWarp SDK exists test

import pytest
from amneziawarp_sdk import AmneziaWarpSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = AmneziaWarpSDK.test(None, None)
        assert testsdk is not None
