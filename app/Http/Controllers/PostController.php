<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use Image;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $posts = Post::with('Category', 'User')->get();
        return response()->json([
            'posts' => $posts,
        ], 200);
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

        // $strpos = strpos($request->img,';');
        //  $str = substr($request->img,0, $strpos);
        //  $files=explode('/',$str);
        //  echo end($files);

        $success = false;
        $request->validate([
            'title'       => 'required|max:100|unique:posts',
            'content'     => 'required',
            'status'      => 'required',
            'category_id' => 'required',
        ]);
        $file      = explode(';', $request->img);
        $file      = explode('/', $file[0]);
        $file_ex   = end($file);
        $slug      = Str::slug($request->title);
        $file_name = $slug . '.' . $file_ex;

        $success = Post::create([
            'title'       => $request->title,
            'category_id' => $request->category_id,
            'user_id'     => auth()->user()->id,
            'slug'        => $slug,
            'content'     => $request->content,
            'status'      => $request->status,
            'img'         => $file_name,

        ]);
        if ($success) {
            Image::make($request->img)->resize(400, 200)->save(public_path('uploades/posts/') . $file_name);
        }
        return response()->json([
            'success' => $success,
        ], 200);
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
        $post=Post::find($id);
        return response()->json([
            'post'=> $post
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
        $success = false;
        $request->validate([
            'title'       => 'required|max:100|unique:posts',
            'content'     => 'required',
            'status'      => 'required',
            'category_id' => 'required',
        ]);
        $file      = explode(';', $request->img);
        $file      = explode('/', $file[0]);
        $file_ex   = end($file);
        $slug      = Str::slug($request->title);
        $file_name = $slug . '.' . $file_ex;

        $success = Post::find($id)->update([
            'title'       => $request->title,
            'category_id' => $request->category_id,
            'user_id'     => auth()->user()->id,
            'slug'        => $slug,
            'content'     => $request->content,
            'status'      => $request->status,
            'img'         => $file_name,

        ]);
        if ($success) {
            Image::make($request->img)->resize(400, 200)->save(public_path('uploades/posts/') . $file_name);
        }
        return response()->json([
            'success' => $success,
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $post  = Post::find($id);
        $files = $post->img;
        if ($post->delete()) {
            if (file_exists(public_path('uploades/posts/' . $files))) {
                unlink(public_path('uploades/posts/' . $files));
            }
        }
    }
    public function removeitem(Request $request)
    {
        $sl = 0;
        foreach ($request->ids as $id) {
            $posts = Post::find($id);
            $posts->delete();
            $sl++;

        }
        $success = $sl > 0 ? true : false;
        return response()->json([
            'success' => $success,
            'total'   => $sl,
        ], 200);
    }
    public function ChangeStatus(Request $request)
    {
        $sl = 0;
        foreach ($request->ids as $id) {
            $posts         = Post::find($id);
            $posts->status = $request->status;
            $posts->update();
            $sl++;

        }
        $success = $sl > 0 ? true : false;
        return response()->json([
            'success' => $success,
            'total'   => $sl,
        ], 200);
    }
}