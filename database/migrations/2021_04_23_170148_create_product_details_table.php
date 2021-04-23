<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product_details', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->integer('productId');
            $table->string('version');
            $table->integer('warranty');
            $table->string('weight');
            $table->string('country');
            $table->boolean('delivery');
            $table->boolean('fingerprint');
            $table->boolean('faceId');
            $table->boolean('nfc');
            $table->string('usbType');
            $table->string('bluetoothVersion');
            $table->string('gsmStandart');
            $table->string('navigation');
            $table->string('wiFiVersion');
            $table->integer('ram');
            $table->integer('memoryPhone');
            $table->integer('slotMemoryCard');
            $table->integer('numberOfProcessorCores');
            $table->integer('batteryCapacity');
            $table->string('batteryType');
            $table->boolean('fastCharging');
            $table->integer('frontalCamera');
            $table->integer('mainCamera');
            $table->float('diagonal');
            $table->string('screenResolution');
            $table->boolean('webcamera');
            $table->integer('cashMemory');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product_details');
    }
}
