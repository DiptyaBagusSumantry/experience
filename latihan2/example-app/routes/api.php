<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//API route for register new user

Route::post('/register', [App\Http\Controllers\AuthController::class, 'register']);


//API route for login user
Route::post('/login', [App\Http\Controllers\AuthController::class, 'login']);

//Protecting Routes
Route::group(['middleware' => ['auth:sanctum']], function () { //middleware pengaman untuk memasukan token
    Route::get('/profile', function(Request $request) {
        return auth()->user();
    });

    // API route for logout user
    Route::post('/logout', [App\Http\Controllers\AuthController::class, 'logout']);
});

Route::prefix('/product')->group(function() {
    Route::post('create', [App\Http\Controllers\ProductController::class, 'create']);
    Route::get('list', [App\Http\Controllers\ProductController::class, 'list']);
    Route::get('/productId={id}', [App\Http\Controllers\ProductController::class, 'read']);
    Route::put('/productId={id}', [App\Http\Controllers\ProductController::class, 'put_update']);
    Route::delete('/productId={id}', [App\Http\Controllers\ProductController::class, 'delete']);
    Route::get('/list', [App\Http\Controllers\ProductController::class, 'list' ]);
});