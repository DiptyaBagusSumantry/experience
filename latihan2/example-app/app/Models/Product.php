<?php

namespace App\Models;

use App\Traits\Uuid; //dari folder UUID
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory, Uuid;
    protected $fillable = ['name','stock']; //
}
