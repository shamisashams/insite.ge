<?php

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class AnswerRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            'title' => 'required|string|max:255',
            'feature' => 'required|integer',
            'main-image' => 'image|mimes:jpeg,png,jpg,gif,svg|max:4096',
            'start_price' => 'required|string|max:255',
            'end_price' => 'required|string|max:255',
            'start_time' => 'required|string|max:255',
            'end_time' => 'required|string|max:255',
//            'status' => 'required|string|min:1|max:1',
//            'slug' => ['required', Rule::unique('answers', 'slug')->ignore($this->answer)],
        ];
    }
}
