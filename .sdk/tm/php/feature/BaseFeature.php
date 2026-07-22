<?php
declare(strict_types=1);

// GithubWebsite SDK base feature

class GithubWebsiteBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(GithubWebsiteContext $ctx, array $options): void {}
    public function PostConstruct(GithubWebsiteContext $ctx): void {}
    public function PostConstructEntity(GithubWebsiteContext $ctx): void {}
    public function SetData(GithubWebsiteContext $ctx): void {}
    public function GetData(GithubWebsiteContext $ctx): void {}
    public function GetMatch(GithubWebsiteContext $ctx): void {}
    public function SetMatch(GithubWebsiteContext $ctx): void {}
    public function PrePoint(GithubWebsiteContext $ctx): void {}
    public function PreSpec(GithubWebsiteContext $ctx): void {}
    public function PreRequest(GithubWebsiteContext $ctx): void {}
    public function PreResponse(GithubWebsiteContext $ctx): void {}
    public function PreResult(GithubWebsiteContext $ctx): void {}
    public function PreDone(GithubWebsiteContext $ctx): void {}
    public function PreUnexpected(GithubWebsiteContext $ctx): void {}
}
