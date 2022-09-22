<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Validator;


class ProductController extends Controller
{
    //
    public function create ( Request $request){
        $validator = Validator::make($request->all(),[
            'name' => 'required',
            'stock' =>  'required'
        ]);

        if($validator->fails()){
            return response()->json($validator->errors(),400);
        };

        $Product = Product::create([
            'name' => $request->name,
            'stock' => $request->stock
        ]);

        return response()
            ->json(['message' => 'Product Created', 'data' => $Product], 201);
    }

    public function read (Request $request, $id){ //membaca data sesuai id primary key
        $Product = Product::FindOrFail($id); //finOrFail untuk mencari data 

        return response()
            ->json(['message' => 'Product Readed', 'data' => $Product], 200);

    }

    public function put_update (Request $request, $id){ //membaca data sesuai id primary key
        $Product = Product::Find($id); //
        
        $Product -> name = $request -> name;
        $Product -> stock = $request -> stock;
        $Product -> save();

        return response()
            ->json(['message' => 'Product Update', 'data' => $Product], 200);

    }

    public function delete (Request $request, $id){ //membaca data sesuai id primary key
        $Product = Product::Find($id);
        $Product-> delete();

        return response()
            ->json(['message' => 'Product Deleted', 'data' => $Product], 200);

    }

    public function list (Request $request){ 
        $Product = Product::all(); //menampilkan semua data
        

        return response()
            ->json(['message' => 'Product List', 'data' => $Product], 200);

    }


}


