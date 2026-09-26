<?php
declare(strict_types=1);

// AmneziaWarp SDK utility: result_body

class AmneziaWarpResultBody
{
    public static function call(AmneziaWarpContext $ctx): ?AmneziaWarpResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
