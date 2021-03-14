<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Brand;

class BrandsController extends Controller
{
    public function index()
	{
	    return Brand::all();
	}

	public function show(Brand $brand)
	{
	    return $brand;
	}

	public function store(Request $request)
	{
	   $this->validate($request, [
        'name' => 'required|unique:brands|max:255',
        'category_id' => 'required|integer',
    ]);
	    $brand = Brand::create($request->all());

	    return response()->json($brand, 201);
	}

	public function update(Request $request, Brand $brand)
	{
	    $brand->update($request->all());

	    return response()->json($brand, 200);
	}

	public function delete(Brand $brand)
	{
	    $brand->delete();

	    return response()->json(null, 204);
	}
}
