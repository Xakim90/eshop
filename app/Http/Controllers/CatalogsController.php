<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Catalog;

class CatalogsController extends Controller
{
    public function index()
	{
	    return Catalog::all();
	}

	public function show(Catalog $catalog)
	{
	    return $catalog;
	}

	public function store(Request $request)
	{
	   $this->validate($request, [
        'title' => 'required|unique:catalogs|max:255',
        'url' => 'required|unique:catalogs|max:255',
    ]);
	    $catalog = Catalog::create($request->all());

	    return response()->json($catalog, 201);
	}

	public function update(Request $request, Catalog $catalog)
	{
	    $catalog->update($request->all());

	    return response()->json($catalog, 200);
	}

	public function delete(Catalog $catalog)
	{
	    $catalog->delete();

	    return response()->json(null, 204);
	}
}
