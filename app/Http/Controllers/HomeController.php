<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController
{
    public function __invoke(Request $request)
    {
        return inertia('home', [
            'cookies' => $request->cookies->all(),
            'headers' => $request->headers->all(),
            'languages' => $request->getLanguages(),
            'query' => $request->query->all(),
        ]);
    }
}
