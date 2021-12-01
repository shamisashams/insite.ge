<?php
/**
 *  routes/web.php
 *
 * Date-Time: 03.06.21
 * Time: 15:41
 * @author Insite International<hello@insite.ge>
 */

use App\Http\Controllers\Admin\AnswerController;
use App\Http\Controllers\Admin\Auth\LoginController;
use App\Http\Controllers\Admin\BlogController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\CertificateController;
use App\Http\Controllers\Admin\CompanyController;
use App\Http\Controllers\Admin\FeatureController;
use App\Http\Controllers\Admin\LanguageController;
use App\Http\Controllers\Admin\NewsController;
use App\Http\Controllers\Admin\PageController;
use App\Http\Controllers\Admin\ProductController;
use App\Http\Controllers\Admin\ProjectController;
use App\Http\Controllers\Admin\SettingController;
use App\Http\Controllers\Admin\SliderController;
use App\Http\Controllers\Admin\TeamController;
use App\Http\Controllers\Admin\TranslationController;
use App\Http\Controllers\Admin\VacancyController;
use App\Http\Controllers\Admin\VacancyRequestController;
use App\Http\Controllers\CKEditorController;
use App\Http\Controllers\Client\HomeController;
use App\Http\Controllers\Client\ContactController;
use App\Http\Controllers\Client\AboutUsController;
use App\Http\Controllers\Client\ServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::post('ckeditor/image_upload/{type}', [CKEditorController::class, 'upload'])->name('upload');

//Route::redirect('', config('translatable.fallback_locale'));

Route::prefix('admin')->group(function () {
    Route::get('login', [LoginController::class, 'loginView'])->name('loginView');
    Route::post('login', [LoginController::class, 'login'])->name('login');

    Route::middleware('auth')->group(function () {
        Route::get('logout', [LoginController::class, 'logout'])->name('logout');

        Route::redirect('', '/admin/blog',);


        // Category
        Route::resource('category', CategoryController::class);
        Route::get('category/{category}/destroy', [CategoryController::class, 'destroy'])->name('category.destroy');


        // Blog
        Route::resource('blog', BlogController::class);
        Route::get('blog/{blog}/destroy', [BlogController::class, 'destroy'])->name('blog.destroy');

        // News
        Route::resource('news', NewsController::class);
        Route::get('news/{news}/destroy', [NewsController::class, 'destroy'])->name('news.destroy');

        // Vacancy
        Route::resource('vacancy', VacancyController::class);
        Route::get('vacancy/{vacancy}/destroy', [VacancyController::class, 'destroy'])->name('vacancy.destroy');

        // Feature
        Route::resource('feature', FeatureController::class);
        Route::get('feature/{feature}/destroy', [FeatureController::class, 'destroy'])->name('feature.destroy');

        // Answer
        Route::resource('answer', AnswerController::class);
        Route::get('answer/{answer}/destroy', [AnswerController::class, 'destroy'])->name('answer.destroy');

        // Vacancy
        Route::resource('vacancyRequest', VacancyRequestController::class)->except('create', 'store');
        Route::get('vacancyRequest/{vacancyRequest}/destroy', [VacancyRequestController::class, 'destroy'])->name('vacancyRequest.destroy');

        Route::get('change-password', [\App\Http\Controllers\Admin\UserController::class, 'changePassword'])->name('change-password');
        Route::post('store-password', [\App\Http\Controllers\Admin\UserController::class, 'storePassword'])->name('store-password');
        // Project
        Route::resource('project', ProjectController::class);
        Route::get('project/{project}/destroy', [ProjectController::class, 'destroy'])->name('project.destroy');

        Route::get('download-pdf/{project}', [ProjectController::class, 'downloadPdf'])->name('project.download-pdf');
        // Slider
        Route::resource('slider', SliderController::class);
        Route::get('slider/{slider}/destroy', [SliderController::class, 'destroy'])->name('slider.destroy');

        // Page
        Route::resource('page', PageController::class);
        Route::get('page/{page}/destroy', [PageController::class, 'destroy'])->name('page.destroy');

        // Setting
        Route::resource('setting', SettingController::class);
        Route::get('setting/{setting}/destroy', [SettingController::class, 'destroy'])->name('setting.destroy');


    });
});

Route::middleware(['inertia', 'active'])->group(function () {


    // Home Page
    Route::get('', [HomeController::class, 'index'])->name('client.home.index');

    Route::prefix('company')->group(function () {
        Route::get('/about-us', [HomeController::class, 'about'])->name('client.home.about-us');
        Route::get('/projects', function () {
            return Inertia::render('Projects/Projects');
        });
        Route::get('/faq', function () {
            return Inertia::render('FAQ/FAQ');
        });

    });

    Route::prefix('services')->group(function () {
        Route::get('/planning', function () {
            return Inertia::render('Planning/Planning');
        });

        Route::get('/web-development', function () {
            return Inertia::render('WebDevelopment/WebDevelopment');
        });

        Route::get('/design', function () {
            return Inertia::render('Design/Design');
        });


        Route::get('/virtualization', function () {
            return Inertia::render('Virtualization/Virtualization');
        });

        Route::get('/remote-work', function () {
            return Inertia::render('RemoteWork/RemoteWork');
        });

        Route::get('/security', function () {
            return Inertia::render('Security/Security');
        });

        Route::get('/solutions', function () {
            return Inertia::render('Solutions/Solutions');
        });

        Route::get('/calculator', [\App\Http\Controllers\Client\CalculatorController::class, 'index']);
        Route::get('/results', [\App\Http\Controllers\Client\CalculatorController::class, 'result']);
        Route::post('/calculator-save', [\App\Http\Controllers\Client\CalculatorController::class, 'save']);
        Route::post('/calculator/send-email', [\App\Http\Controllers\Client\CalculatorController::class, 'sendEmail']);
    });
    Route::get('/download-pdf', [\App\Http\Controllers\Client\CalculatorController::class, 'generatePDF']);


    Route::get('/cdn', function () {
        return Inertia::render('CDN/CDN');
    });

    Route::get('/vacancies', [\App\Http\Controllers\Client\VacancyController::class, 'index'])->name('vacancy');
    Route::get('/show-vacancy/{id}', [\App\Http\Controllers\Client\VacancyController::class, 'show'])->name('showVacancy');
    Route::post('/save-request', [\App\Http\Controllers\Client\VacancyController::class, 'saveRequest']);


    Route::get('/contact', function () {
        return Inertia::render('Contact/Contact');
    });

    Route::get('/solutions', function () {
        return Inertia::render('Solutions/Solutions');
    });

    Route::get('/blogs', [\App\Http\Controllers\Client\BlogController::class, 'index'])->name('blog');
    Route::get('/blog-details/{id}', [\App\Http\Controllers\Client\BlogController::class, 'show'])->name('blog-details');

    Route::get('/news', [\App\Http\Controllers\Client\NewsController::class, 'index'])->name('news');
    Route::get('/news-details/{id}', [\App\Http\Controllers\Client\NewsController::class, 'show'])->name('news-details');

    // Contact Page
//            Route::get('/contact', [ContactController::class, 'index'])->name('client.contact.index');
    Route::post('/contact-us', [ContactController::class, 'mail'])->name('client.contact.mail');


    // About Page
    Route::get('/about', [AboutUsController::class, 'index'])->name('client.about.index');

    // Product Page
    Route::get('/product', [\App\Http\Controllers\Client\ProductController::class, 'index'])->name('client.product.index');
    Route::get('/product/{product}', [\App\Http\Controllers\Client\ProductController::class, 'show'])->name('client.product.show');

    // Project Page
    Route::get('/project', [\App\Http\Controllers\Client\ProjectController::class, 'index'])->name('client.project.index');
    Route::get('/project/view/{project}', [\App\Http\Controllers\Client\ProjectController::class, "show"])->name('client.project.show');
    Route::get('/project/{type}', [\App\Http\Controllers\Client\ProjectController::class, 'projectsByType'])->name('client.project-type.index');

    // Blog Page
    Route::get('/blog', [\App\Http\Controllers\Client\BlogController::class, 'index'])->name('client.blog.index');
    Route::get('/blog/{blog}', [\App\Http\Controllers\Client\BlogController::class, "show"])->name('client.blog.show');

    // Team Page
    Route::get('/team', [\App\Http\Controllers\Client\TeamController::class, 'index'])->name('client.team.index');
    Route::get('/team/{team}', [\App\Http\Controllers\Client\TeamController::class, 'show'])->name('client.team.show');

    // Search Page
    Route::get('/search', [\App\Http\Controllers\Client\SearchController::class, 'index'])->name('client.search.index');

    //Company Page

    Route::get('/company', [\App\Http\Controllers\Client\CompanyController::class, 'index'])->name('client.company.index');
    Route::get('/company/{company}', [\App\Http\Controllers\Client\CompanyController::class, 'show'])->name('client.company.show');


    // Service Page
    Route::get('/service', [ServiceController::class, "index"])->name('client.service.index');
});




