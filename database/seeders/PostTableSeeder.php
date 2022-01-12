<?php

namespace Database\Seeders;

use App\Models\Post;
use Faker\Factory;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
class PostTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        foreach(range(1,50) as $index){
        Post::create([
            'user_id'=>rand(1,20),
            'category_id'=>rand(1,10),
            'title'=>$faker->sentence(3),
            'content'=>$faker->paragraph(300),
            'img'=>$faker->imageUrl(),
            
            
        ]);
    }
    }
}
