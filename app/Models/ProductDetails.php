<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProductDetails extends Model
{
    use HasFactory;
      protected $fillable = 
    [
        'productId',
        'version',
        'warranty',
        'weight',
        'country',
        'delivery',
        'fingerprint',
        'faceId',
        'nfc',
        'usbType',
        'bluetoothVersion',
        'gsmStandart',
        'navigation',
        'wiFiVersion',
        'ram',
        'memoryPhone',
        'slotMemoryCard',
        'numberOfProcessorCores',
        'batteryCapacity',
        'batteryType',
        'fastCharging',
        'frontalCamera',
        'mainCamera',
        'diagonal',
        'screenResolution',
        'webcamera',
        'cashMemory'
      ];
}
