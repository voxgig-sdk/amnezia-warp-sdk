<?php
declare(strict_types=1);

// GithubWebsite SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class GithubWebsiteMakeContext
{
    public static function call(array $ctxmap, ?GithubWebsiteContext $basectx): GithubWebsiteContext
    {
        return new GithubWebsiteContext($ctxmap, $basectx);
    }
}
