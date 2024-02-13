<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class UserController extends Controller
{
    public function submit(Request $request){
        $data = $request->validate([
            'name' => 'required',
            'email' => 'required|unique:users|string|email|max:255',
        ]);
        $user = User::factory($data)->create();

        return $user;

    }
}
