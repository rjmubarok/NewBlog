<?php

use App\Http\Controllers\EmployeesController;
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Auth;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();
 /// any route
 //Route::get('/{any}', [HomeController::class , 'index'])->where('any', '.*');
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
// category
Route::get('/get-categories', [App\Http\Controllers\CategoryController::class, 'index'])->name('categories');
Route::get('/get-Active-Categories', [App\Http\Controllers\CategoryController::class, 'getActiveCategories']);
Route::post('/store-category', [App\Http\Controllers\CategoryController::class, 'store'])->name('store-category');
Route::get('/edit-category/{id}', [App\Http\Controllers\CategoryController::class, 'edit'])->name('edit-category');
Route::post('/update-category/{id}', [App\Http\Controllers\CategoryController::class, 'update'])->name('update-category');
Route::get('/remove-category/{id}', [App\Http\Controllers\CategoryController::class, 'destroy']);
Route::post('/categories/remove-items', [App\Http\Controllers\CategoryController::class, 'removeitem']);
Route::post('/categories/Change-Status-Active', [App\Http\Controllers\CategoryController::class, 'ChangeStatus']);
//employee
Route::post('/store-employee',[EmployeesController::class,'store']);
Route::get('/get-employees',[EmployeesController::class,'index']);
Route::get('/employee-remove/{id}',[EmployeesController::class,'delete']);
Route::get('/edit-employee/{id}',[EmployeesController::class,'edit']);
Route::post('/update-employee/{id}',[EmployeesController::class,'update']);
//post
Route::get('/get-posts', [App\Http\Controllers\PostController::class, 'index']);
Route::post('/add-posts', [App\Http\Controllers\PostController::class, 'store']);
Route::get('/post-remove/{id}', [App\Http\Controllers\PostController::class, 'destroy']);
Route::post('/post/Change-Status', [App\Http\Controllers\PostController::class, 'ChangeStatus']);
Route::post('/post/remove-items', [App\Http\Controllers\PostController::class, 'removeitem']);
//tag
Route::post('/add/tag', [App\Http\Controllers\TagController::class, 'store']);