<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class MeController extends Controller
{

    public function me()
    {
        $response = $client->request('GET', '/api/auth', [
        'headers' => [
            'Accept' => 'application/json',
            'Authorization' => 'Bearer ' . $access_token,
            ],
        ]);
    
        $body = (string) $response->getBody();
        $remoteUser = json_decode($body);
        return $remoteUser
    }
}
