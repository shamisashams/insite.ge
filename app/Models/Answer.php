<?php

namespace App\Models;

use App\Models\Translations\AnswerTranslation;
use App\Models\Translations\BlogTranslation;
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

class Answer extends Model
{
    use SoftDeletes, HasFactory, ScopeFilter;

    /**
     * @var string
     */
    protected $table = 'answers';

    /**
     * @var string[]
     */
    protected $fillable = [
        'title',
        'position',
        'status',
        'start_price',
        'end_price',
        'start_time',
        'end_time'
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
            'content' => [
                'hasParam' => true,
                'scopeMethod' => 'content'
            ],
            'startPrice' => [
                'hasParam' => true,
                'scopeMethod' => 'startPrice'
            ],
            'endPrice' => [
                'hasParam' => true,
                'scopeMethod' => 'endPrice'
            ],
            'startTime' => [
                'hasParam' => true,
                'scopeMethod' => 'startTime'
            ],
            'endTime' => [
                'hasParam' => true,
                'scopeMethod' => 'endTime'
            ]
        ];
    }

//    public function getSearchResult(): SearchResult
//    {
//        $url = locale_route('client.project.show', $this->slug);
//
//        return new SearchResult(
//            $this,
//            $this->title,
//            $url
//        );
//    }

    public function feature()
    {
        return $this->hasOne('App\Models\FeatureAnswers', 'answer_id');
    }

    /**
     * @return MorphMany
     */
    public function files(): MorphMany
    {
        return $this->morphMany(File::class, 'fileable')->where(['type' => File::FILE_DEFAULT]);;
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
