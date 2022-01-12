<?php

namespace Database\Seeders;

use App\Models\User;
use Faker\Factory;
use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()

    {
        
        $faker = Factory::create();
        foreach(range(1,20) as $index){
            User::create([
                

                'name'=>$faker->name,
                'email'=>$faker->email,
                'password'=> bcrypt( $faker->password),
                
            ]);
        }
    }
}
