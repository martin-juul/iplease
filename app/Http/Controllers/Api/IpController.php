<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

class IpController
{
    public function getV4(Request $request)
    {
        return response(['ipv4' => $request->ip()]);
    }

    public function getV6(Request $request)
    {
        return response(['ipv6' => $request->ip()]);
    }
}
