<?php
declare(strict_types=1);

// GithubWebsite SDK utility: prepare_body

class GithubWebsitePrepareBody
{
    public static function call(GithubWebsiteContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
