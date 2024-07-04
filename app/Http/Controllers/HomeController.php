<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController
{
    public function index(Request $request)
    {
        return Inertia::render('Home', [
            'cookies' => $request->cookies->all(),
            'headers' => $request->headers->all(),
            'ip' => $request->ip(),
            'languages' => $request->getLanguages(),
            'query' => $request->query->all(),
        ]);
    }
}
