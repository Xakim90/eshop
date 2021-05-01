<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProductDetails;

class ProductDetailsController extends Controller
{
     public function index()
	{
	    return ProductDetails::all();
	}

	public function show(ProductDetails $product_detail)
	{
	    return $product_detail;
	}

	public function store(Request $request)
	{
	   $this->validate($request, [
        'productId' => 'required|unique:product_details|integer',
        'version' => 'string',
        'warranty' => 'integer',
        'weight' => 'string',
        'country' => 'string',
        'delivery' => 'boolean',
        'fingerprint' => 'boolean',
        'faceId' => 'boolean',
        'nfc' => 'boolean',
        'usbType' => 'string',
        'bluetoothVersion' => 'string',
        'gsmStandart' => 'string',
        'navigation' => 'string',
        'wiFiVersion' => 'string',
        'ram' => 'integer',
        'memoryPhone' => 'integer',
        'slotMemoryCard' => 'integer',
        'numberOfProcessorCores' => 'integer',
        'batteryCapacity' => 'integer',
        'batteryType' => 'string',
        'fastCharging' => 'boolean',
        'frontalCamera' => 'integer',
        'mainCamera' => 'integer',
        'diagonal' => 'numeric',
        'screenResolution' => 'string',
        'webcamera' => 'boolean',
        'cashMemory' => 'integer',
    ]);
	    $product_detail = ProductDetails::create($request->all());

	    return response()->json($product_detail, 201);
	}

	public function update(Request $request, ProductDetails $product_detail)
	{

	    $product_detail->update($request->all());

	    return response()->json($product_detail, 200);
	}

	public function delete(ProductDetails $product_detail)
	{
	    $product_detail->delete();

	    return response()->json(null, 204);
	}
}
