<?php

namespace Database\Seeders;

use App\Models\Category;
use Faker\Factory;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;

class CategoryTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        foreach(range(1,10) as $index){
            Category::create([
                'name'=>$faker->name,
                'slug'=>Str::slug($faker->name,'_'),
               
            ]);
        }
       
    }
}
