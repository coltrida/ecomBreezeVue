<?php

namespace Database\Seeders;


use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'name' => 'cacao',
            'email' => 'cacao@cacao.it',
            'password' => \Hash::make('123456'),
            'address' => 'via Roma 3',
            'city' => 'Montevarchi',
            'state' => 'Arezzo',
            'zip_code' => 52028,
            'remember_token' => \Str::random(10),
        ]);
        User::factory(9)->create();
    }
}
