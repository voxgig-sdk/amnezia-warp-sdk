<?php
declare(strict_types=1);

// GithubWebsite SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

GithubWebsiteUtility::setRegistrar(function (GithubWebsiteUtility $u): void {
    $u->clean = [GithubWebsiteClean::class, 'call'];
    $u->done = [GithubWebsiteDone::class, 'call'];
    $u->make_error = [GithubWebsiteMakeError::class, 'call'];
    $u->feature_add = [GithubWebsiteFeatureAdd::class, 'call'];
    $u->feature_hook = [GithubWebsiteFeatureHook::class, 'call'];
    $u->feature_init = [GithubWebsiteFeatureInit::class, 'call'];
    $u->fetcher = [GithubWebsiteFetcher::class, 'call'];
    $u->make_fetch_def = [GithubWebsiteMakeFetchDef::class, 'call'];
    $u->make_context = [GithubWebsiteMakeContext::class, 'call'];
    $u->make_options = [GithubWebsiteMakeOptions::class, 'call'];
    $u->make_request = [GithubWebsiteMakeRequest::class, 'call'];
    $u->make_response = [GithubWebsiteMakeResponse::class, 'call'];
    $u->make_result = [GithubWebsiteMakeResult::class, 'call'];
    $u->make_point = [GithubWebsiteMakePoint::class, 'call'];
    $u->make_spec = [GithubWebsiteMakeSpec::class, 'call'];
    $u->make_url = [GithubWebsiteMakeUrl::class, 'call'];
    $u->param = [GithubWebsiteParam::class, 'call'];
    $u->prepare_auth = [GithubWebsitePrepareAuth::class, 'call'];
    $u->prepare_body = [GithubWebsitePrepareBody::class, 'call'];
    $u->prepare_headers = [GithubWebsitePrepareHeaders::class, 'call'];
    $u->prepare_method = [GithubWebsitePrepareMethod::class, 'call'];
    $u->prepare_params = [GithubWebsitePrepareParams::class, 'call'];
    $u->prepare_path = [GithubWebsitePreparePath::class, 'call'];
    $u->prepare_query = [GithubWebsitePrepareQuery::class, 'call'];
    $u->result_basic = [GithubWebsiteResultBasic::class, 'call'];
    $u->result_body = [GithubWebsiteResultBody::class, 'call'];
    $u->result_headers = [GithubWebsiteResultHeaders::class, 'call'];
    $u->transform_request = [GithubWebsiteTransformRequest::class, 'call'];
    $u->transform_response = [GithubWebsiteTransformResponse::class, 'call'];
});
