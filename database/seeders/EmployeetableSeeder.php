<?php

namespace Database\Seeders;

use App\Models\Employee;
use Illuminate\Database\Seeder;
use Faker\Factory;

class EmployeetableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Factory::create();
        foreach(range(1,30) as $index){
        Employee::create([
            'name'=>$faker->name(),
            'department'=>$faker->name(),
            'section'=>$faker->sentence(5),
            'email'=>$faker->email(),
            'status'=>$faker->boolean(),
            
            
        ]);
    }
    }
}
