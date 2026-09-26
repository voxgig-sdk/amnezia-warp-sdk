<?php
declare(strict_types=1);

// AmneziaWarp SDK base feature

class AmneziaWarpBaseFeature
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

    public function init(AmneziaWarpContext $ctx, array $options): void {}
    public function PostConstruct(AmneziaWarpContext $ctx): void {}
    public function PostConstructEntity(AmneziaWarpContext $ctx): void {}
    public function SetData(AmneziaWarpContext $ctx): void {}
    public function GetData(AmneziaWarpContext $ctx): void {}
    public function GetMatch(AmneziaWarpContext $ctx): void {}
    public function SetMatch(AmneziaWarpContext $ctx): void {}
    public function PrePoint(AmneziaWarpContext $ctx): void {}
    public function PreSpec(AmneziaWarpContext $ctx): void {}
    public function PreRequest(AmneziaWarpContext $ctx): void {}
    public function PreResponse(AmneziaWarpContext $ctx): void {}
    public function PreResult(AmneziaWarpContext $ctx): void {}
    public function PreDone(AmneziaWarpContext $ctx): void {}
    public function PreUnexpected(AmneziaWarpContext $ctx): void {}
}
