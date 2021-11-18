<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Mail\ContactEmail;
use App\Models\Page;
use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        $page = Page::where('key', 'contact')->firstOrFail();

        return view('client.pages.contact.index', [
            "page" => $page
        ]);
    }

    public function mail(Request $request)
    {
        if ($request->method() == 'POST') {
            $request->validate([
                'name' => 'required|string|max:55',
                'mail' => 'required|email',
                'message' => 'required|max:1024'
            ]);

            $data = [
                'name' => $request->name,
                'mail' => $request->mail,
                'message' => $request->message
            ];

            $mailTo = Setting::where(['key' => 'email'])->first();
            if (($mailTo !== null) && $mailTo->value) {
                Mail::to($mailTo->value)->send(new ContactEmail($data));
            }

        }
        
        return redirect()->back()->with('success', __('client.email_success_send'));
    }
}
