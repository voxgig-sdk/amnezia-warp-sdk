<?php
declare(strict_types=1);

// AmneziaWarp SDK exists test

require_once __DIR__ . '/../amneziawarp_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = AmneziaWarpSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
