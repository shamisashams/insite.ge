<?php

namespace App\Models;

use App\Models\Translations\BlogTranslation;
use App\Models\Translations\ProjectTranslation;
use App\Models\Translations\VacancyTranslation;
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

class VacancyRequest extends Model
{
    use SoftDeletes, HasFactory, ScopeFilter;

    /**
     * @var string
     */
    protected $table = 'vacancy_requests';

    /**
     * @var string[]
     */
    protected $fillable = [
        'vacancy_id',
        'full_name',
        'email',
        'phone',
        'portfolio_link'
    ];

//    /** @var string */
//    protected $translationModel = VacancyTranslation::class;
//
//    /** @var array */
//    public $translatedAttributes = [
//        'title',
//        'description',
//        'content',
//        'location',
//        'field',
//        'salary',
//        'experience',
//        'commitment'
//    ];


    public function getFilterScopes(): array
    {
        return [
            'id' => [
                'hasParam' => true,
                'scopeMethod' => 'id'
            ],
            'full_name' => [
                'hasParam' => true,
                'scopeMethod' => 'fullName'
            ],
            'email' => [
                'hasParam' => true,
                'scopeMethod' => 'email'
            ],
            'vacancy_title' => [
                'hasParam' => true,
                'scopeMethod' => 'relationTitleTranslation'
            ],
            'content' => [
                'hasParam' => true,
                'scopeMethod' => 'contentTranslation'
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

    public function vacancy()
    {
        return $this->hasOne(Vacancy::class, 'id', 'vacancy_id');
    }
}
