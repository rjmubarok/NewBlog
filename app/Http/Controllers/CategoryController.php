<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = Category::all();
        return response()->json([
            'categories'=> $categories
        ],200);
     
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>'required|min:4',
            'status'=>'required'
        ]);
        Category::create([
            'name'=>$request->name,
            'status'=>$request->status,
            'slug'=>$request->name
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $category=Category::find($id);
        return response()->json([
            'category'=> $category
        ],200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $request->validate([
            'name'=>'required|min:4',
            'status'=>'required'
        ]);
   $category=Category::find($id)->update([
    'name'=>$request->name,
    'status'=>$request->status,
    'slug'=>$request->name
   ]);
   return response()->json([
    'category'=> $category
],200);
        
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();
    }
    public function removeitem(Request $request){
        $sl =0;
        foreach($request->ids as $id){
           $category=Category::find($id);
            $category->delete();
            $sl++;

        }
        $success = $sl>0? true:false;
        return response()->json([
            'success'=>$success ,
            'total'=>$sl
        ],200);
    }
    public function ChangeStatus(Request $request){
        $sl =0;
        foreach($request->ids as $id){
           $category=Category::find($id);
           $category->status=$request->status;
            $category->update();
            $sl++;

        }
        $success = $sl>0? true:false;
        return response()->json([
            'success'=>$success ,
            'total'=>$sl
        ],200);
    }
}
