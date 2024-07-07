<?php

use Illuminate\Support\Facades\Route;

Route::group(['middleware' => 'api'], function () {
    Route::domain('ipv4.' . config('app.url'))->group(function () {
        Route::get('me', \App\Http\Controllers\Api\IpController::class . '@getV4')->name('ip.v4');
    });

    Route::domain('ipv6.' . config('app.url'))->group(function () {
        Route::get('me', \App\Http\Controllers\Api\IpController::class . '@getV6')->name('ip.v6');
    });
});
