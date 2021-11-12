<?php
/**
 *  app/Http/Controllers/Admin/ProjectController.php
 *
 * Date-Time: 30.07.21
 * Time: 10:37
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\ChangePasswordRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function changePassword()
    {
        $user = User::where(['id' => auth()->user()->id])->first();
        return view('admin.pages.user.change-password', [
            'user' => $user
        ]);
    }


    public function storePassword(ChangePasswordRequest $request)
    {
        $password = Hash::make($request['password']);
        $user = User::where(['id' => auth()->user()->id])->update([
            'password' => $password
        ]);

        if ($user) {
            return redirect(locale_route('change-password'))->with('success', __('password_success_change'));
        }
        return redirect(locale_route('change-password'))->with('fail', __('password_fail_change'));;

    }
}
