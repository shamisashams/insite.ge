<?php
/**
 *  app/Http/Requests/Admin/ProjectRequest.php
 *
 * Date-Time: 10.06.21
 * Time: 15:07
 * @author Insite International<hello@insite.ge>
 */

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

/**
 * Class ProjectRequest
 * @package App\Http\Requests\Admin
 */
class ProjectRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(): array
    {
        // Check if method is get,fields are nullable.
        if ($this->method() === 'GET') {
            return [];
        }

        return [
            'slug' => ['required', 'alpha_dash', Rule::unique('projects', 'slug')->ignore($this->project)],
            config('translatable.fallback_locale') . '.title' => 'required',
            config('translatable.fallback_locale') . '.content' => 'required',
            'type' => 'required|string',
        ];
    }
}
