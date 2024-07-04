<?php

use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'Api'], function () {
    Route::group(['prefix' => 'ip'], function () {
       Route::get('v4', 'IpController@IpV4')->name('ip.v4');
       Route::get('v4', 'IpController@IpV6')->name('ip.v6');
    });
})->middleware('api');
