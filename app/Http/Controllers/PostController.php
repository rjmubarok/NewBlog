<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts =Post::with('Category','User')->get();
        return response()->json([
            'posts'=>$posts
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
        $success=false;
        $request->validate([
            'title'=>'required|min:4 max:100',
            'content'=>'required',
            'status'=>'required',
            'category_id'=>'required',
        ]);
        Post::create([
            'title'=>$request->title,
            'category_id'=>$request->category_id,
            'user_id'=>auth()->user()->id,
            'slug'=>$request->title,
            'content'=>$request->content,
            'status'=>$request->status,
            'img'=>'img.jpg'
            
        ]);
        return response()->json([
            'success'=>$success
        ],200);
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post = Post::find($id);
        $post->delete();
    }
    public function removeitem(Request $request){
        $sl =0;
        foreach($request->ids as $id){
           $posts=Post::find($id);
            $posts->delete();
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
           $posts=Post::find($id);
           $posts->status=$request->status;
            $posts->update();
            $sl++;

        }
        $success = $sl>0? true:false;
        return response()->json([
            'success'=>$success ,
            'total'=>$sl
        ],200);
    }
}
