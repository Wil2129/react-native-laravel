<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\ContactForm;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(ContactForm::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'email' => $faker->freeEmail,
        'subject' => $faker->sentence,
        'message' => $faker->text,
    ];
});
