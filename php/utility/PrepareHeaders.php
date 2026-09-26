<?php
declare(strict_types=1);

// AmneziaWarp SDK utility: prepare_headers

class AmneziaWarpPrepareHeaders
{
    public static function call(AmneziaWarpContext $ctx): array
    {
        $options = $ctx->client->options_map();
        $headers = \Voxgig\Struct\Struct::getprop($options, 'headers');
        if (!$headers) {
            return [];
        }
        $out = \Voxgig\Struct\Struct::clone($headers);
        return is_array($out) ? $out : [];
    }
}
