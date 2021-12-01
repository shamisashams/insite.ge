<?php
/**
 *  app/Http/Requests/Admin/ProjectRequest.php
 *
 * Date-Time: 10.06.21
 * Time: 15:07
 * @author Insite International<hello@insite.ge>
 */

namespace App\Http\Requests;

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

        return [
            'fullname' => 'required|string|max:255',
            'email' => 'required|string|max:50|email',
            'phone' => 'required|string|max:255',
            'portfolio_link' => 'required|string'
        ];
    }
}
