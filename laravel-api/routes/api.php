<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('contact_forms', 'ContactFormController@index');
Route::get('contact_forms/{contactForm}', 'ContactFormController@show');
Route::post('contact_forms', 'ContactFormController@store');
Route::put('contact_forms/{contactForm}', 'ContactFormController@update');
Route::delete('contact_forms/{contactForm}', 'ContactFormController@destroy');

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
