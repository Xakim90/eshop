<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductOld extends Model
{
    protected $fillable = ['title', 'description', 'price', 'availability'];
}
