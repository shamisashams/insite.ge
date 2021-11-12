<?php

namespace App\Models;

use App\Traits\ScopeFilter;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\Relations\MorphOne;
use Illuminate\Database\Eloquent\SoftDeletes;


class News extends Model
{
    use SoftDeletes, HasFactory, ScopeFilter;

    /**
     * @var string
     */
    protected $table = 'news';

    /**
     * @var string[]
     */
    protected $fillable = [
        'title',
        'description',
        'content',
        'location',
        'category_id',
        'status',
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
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id', 'id');
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
