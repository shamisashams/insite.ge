<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Category;
use App\Models\News;
use App\Models\Page;
use App\Models\Product;
use App\Models\Project;
use Carbon\Carbon;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class NewsController extends Controller
{


    /**
     * @param Request $request
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        $baseData['data'] = News::with(['mainFile'])->orderBy('created_at', 'desc')->paginate(10);
        $baseData['blogs'] = Blog::with(['mainFile'])->orderBy('created_at', 'desc')->take(5)->get();

        return Inertia::render('News/News', [
            'news' => $baseData
        ]);
    }


    /**
     * @param string $id
     * @return \Inertia\Response
     */
    public function show($id)
    {
        $baseData['news'] = News::with('mainFile')->where(['status' => 1])->findOrFail($id);
        $baseData['nextNews'] = News::where('id', '>', $id)->with('mainFile')->orderBy('id')->first();
        $baseData['previousNews'] = News::where('id', '<', $id)->with('mainFile')->orderBy('id', 'desc')->first();

        return Inertia::render('News/ShowNews/ShowNews', [
            'data' => $baseData
        ]);
    }
}
