<?php
declare(strict_types=1);

// GithubWebsite SDK utility: result_body

class GithubWebsiteResultBody
{
    public static function call(GithubWebsiteContext $ctx): ?GithubWebsiteResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
