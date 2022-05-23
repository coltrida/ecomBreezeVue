<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Product::factory(50)->create();

        $categories = Category::all();
        Product::all()->each(function ($product) use ($categories) {
           $product->categories()->attach(
               $categories->random(2)->pluck('id')->toArray()
           );
        });
    }
}
