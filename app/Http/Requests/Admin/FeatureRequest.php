<?php
/**
 *  app/Http/Request/Admin/FeatureRequest.php
 *
 * User:
 * Date-Time: 15.12.20
 * Time: 14:10
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Http\Requests\Admin;

use Illuminate\Foundation\Http\FormRequest;

class FeatureRequest extends FormRequest
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
        ];
    }
}
