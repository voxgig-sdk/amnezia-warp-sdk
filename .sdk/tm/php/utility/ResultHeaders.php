<?php
declare(strict_types=1);

// GithubWebsite SDK utility: result_headers

class GithubWebsiteResultHeaders
{
    public static function call(GithubWebsiteContext $ctx): ?GithubWebsiteResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
