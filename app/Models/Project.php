<?php

namespace App\Models;

use App\Traits\ScopeFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use HasFactory, ScopeFilter, SoftDeletes;

    protected $fillable = [
        'total_price',
        'time',
        'name',
        'email',
        'phone'
    ];

    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'key' => [
                'hasParam' => true,
                'scopeMethod' => 'key'
            ],
            'title_1' => [
                'hasParam' => true,
                'scopeMethod' => 'title1Translation'
            ],
            'title_2' => [
                'hasParam' => true,
                'scopeMethod' => 'title2Translation'
            ]
        ];
    }


    public function projectRequest()
    {
        return $this->hasMany(ProjectRequest::class, 'project_id');
    }

    public function files(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable')->where(['type' => File::FILE_DEFAULT]);;
    }

    public function pdf(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable')->where(['format' => 'pdf'])->orderBy('id', 'desc');;
    }
}
