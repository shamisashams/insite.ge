<?php
/**
 *  app/Http/Middleware/EnableGlobalScopeMiddleware.php
 *
 * Date-Time: 11.08.21
 * Time: 11:03
 * @author Vito Makhatadze <vitomakhatadze@gmail.com>
 */

namespace App\Http\Middleware;

use App\Models\Blog;
use App\Models\Category;
use App\Models\Company;
use App\Models\Feature;
use App\Models\News;
use App\Models\Product;
use App\Models\Project;
use App\Models\Service;
use App\Models\Slider;
use App\Models\Team;
use App\Models\Vacancy;
use Closure;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class EnableGlobalScopeMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {

        Blog::addGlobalScope('active', function (Builder $builder) {
            $builder->where('status', true);
        });

        News::addGlobalScope('active', function (Builder $builder) {
            $builder->where('status', true);
        });


        Slider::addGlobalScope('active', function (Builder $builder) {
            $builder->where('status', true);
        });

        Vacancy::addGlobalScope('active', function (Builder $builder) {
            $builder->where('status', true);
        });


        Category::addGlobalScope('active', function (Builder $builder) {
            $builder->where('status', true);
        });

        Feature::addGlobalScope('active', function (Builder $builder) {
            $builder->where('status', true);
        });

        return $next($request);
    }
}
