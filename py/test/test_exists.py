# ProjectName SDK exists test

import pytest
from githubwebsite_sdk import GithubWebsiteSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = GithubWebsiteSDK.test(None, None)
        assert testsdk is not None
