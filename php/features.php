<?php
declare(strict_types=1);

// GithubWebsite SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class GithubWebsiteFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new GithubWebsiteBaseFeature();
            case "test":
                return new GithubWebsiteTestFeature();
            default:
                return new GithubWebsiteBaseFeature();
        }
    }
}
