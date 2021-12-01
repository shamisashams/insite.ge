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
class VacancyRequest extends FormRequest
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
            'title' => 'required',
            'content' => 'required',
            'field' => 'required',
            'experience' => 'required',
            'location' => 'required',
            'commitment' => 'required',
            'salary' => 'required',
        ];
    }
}
