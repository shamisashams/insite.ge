<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'feature_id',
        'answer_id',
        'project_id',
        'comment',
        'answer'
    ];

    public function answer()
    {
        return $this->belongsTo('App\Models\Answer', 'answer_id');
    }

    public function feature()
    {
        return $this->belongsTo('App\Models\Feature', 'feature_id');
    }


    public function answers(string $answers)
    {
        return Answer::whereIn('id', json_decode($answers, true))->get();
    }
}
