<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Certificate;
use App\Models\Company;
use App\Models\Page;
use App\Models\Product;
use App\Models\Project;
use App\Models\Service;
use App\Models\Slider;
use App\Models\Team;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $blogs = Blog::where(['status' => 1])->with('mainFile')->take(3)->get();
        return inertia('MainPage/MainPage', [
            'blogs' => $blogs
        ]);
    }

    public function about()
    {
        return Inertia::render('AboutUs/AboutUs');
    }
}
