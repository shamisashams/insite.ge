<?php

namespace App\Models;

use App\Models\Translations\BlogTranslation;
use App\Models\Translations\FeatureTranslation;
use App\Models\Translations\ProjectTranslation;
use App\Traits\ScopeFilter;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Carbon;
use Spatie\Searchable\Searchable;
use Spatie\Searchable\SearchResult;

class Feature extends Model
{
    use SoftDeletes, HasFactory, ScopeFilter;

    /**
     * @var string
     */
    protected $table = 'features';

    /**
     * @var string[]
     */
    protected $fillable = [
        'title',
        'position',
        'status',
        'question'
    ];


    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'status' => [
                'hasParam' => true,
                'scopeMethod' => 'status'
            ],
            'title' => [
                'hasParam' => true,
                'scopeMethod' => 'title'
            ],
            'description' => [
                'hasParam' => true,
                'scopeMethod' => 'description'
            ],
            'content' => [
                'hasParam' => true,
                'scopeMethod' => 'content'
            ]
        ];
    }


    /**
     * @return MorphMany
     */
    public function files(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable')->where(['type' => File::FILE_DEFAULT]);;
    }

    public function answers()
    {
        return $this->hasMany('App\Models\FeatureAnswers', 'feature_id');
    }

    public function answer()
    {
        return $this->belongsToMany(Answer::class, 'feature_answers');
    }

    /**
     * @return MorphOne
     */
    public function file(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable')->where(['type' => File::FILE_DEFAULT]);;
    }

    public function mainFile(): MorphOne
    {
        return $this->morphOne(File::class, 'fileable')->where(['type' => File::FILE_MAIN]);
    }
}
