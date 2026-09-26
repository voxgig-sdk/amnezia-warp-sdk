<?php
declare(strict_types=1);

// AmneziaWarp SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class AmneziaWarpMakeContext
{
    public static function call(array $ctxmap, ?AmneziaWarpContext $basectx): AmneziaWarpContext
    {
        return new AmneziaWarpContext($ctxmap, $basectx);
    }
}
