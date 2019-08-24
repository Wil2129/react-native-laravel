<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ContactForm;

class ContactFormController extends Controller
{
    public function index(){
        return ContactForm::all();
    }

    public function show(ContactForm $contactForm){
        return $contactForm;
    }

    public function store(Request $request){
        $contactForm = ContactForm::create($request->all());

        return response()->json($contactForm, 201);
    }

    public function update(Request $request, ContactForm $contactForm){
        $contactForm->update($request->all());

        return response()->json($contactForm, 200);
    }

    public function destroy(ContactForm $contactForm){
        $contactForm->delete();

        return response()->json(null, 204);
    }
}