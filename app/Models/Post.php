<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;
class Post extends Model
{
    use HasFactory;
    protected $guarded =[];
    public function Category(){
        return $this->belongsTo(Category::class);
    }
    public function User(){
        return $this->belongsTo(User::class);
    }

}
