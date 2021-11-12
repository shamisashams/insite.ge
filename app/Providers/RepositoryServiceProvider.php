<?php
/**
 *  app/Providers/RepositoryServiceProvider.php
 *
 * Date-Time: 04.06.21
 * Time: 09:42
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Providers;

use App\Http\Requests\Admin\BlogRequest;
use App\Repositories\AnswerRepositoryInterface;
use App\Repositories\BlogRepositoryInterface;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\CertificateRepositoryInterface;
use App\Repositories\CompanyRepositoryInterface;
use App\Repositories\Eloquent\AnswerRepository;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\Eloquent\Base\EloquentRepositoryInterface;
use App\Repositories\Eloquent\BlogRepository;
use App\Repositories\Eloquent\CategoryRepository;
use App\Repositories\Eloquent\CertificateRepository;
use App\Repositories\Eloquent\CompanyRepository;
use App\Repositories\Eloquent\FeatureRepository;
use App\Repositories\Eloquent\LanguageRepository;
use App\Repositories\Eloquent\NewsRepository;
use App\Repositories\Eloquent\PageRepository;
use App\Repositories\Eloquent\ProductRepository;
use App\Repositories\Eloquent\ProjectRepository;
use App\Repositories\Eloquent\SettingRepository;
use App\Repositories\Eloquent\ServiceRepository;
use App\Repositories\Eloquent\SliderRepository;
use App\Repositories\Eloquent\TeamRepository;
use App\Repositories\Eloquent\TranslationRepository;
use App\Repositories\Eloquent\VacancyRepository;
use App\Repositories\Eloquent\VacancyRequestRepository;
use App\Repositories\FeatureRepositoryInterface;
use App\Repositories\LanguageRepositoryInterface;
use App\Repositories\NewsRepositoryInterface;
use App\Repositories\PageRepositoryInterface;
use App\Repositories\ProductRepositoryInterface;
use App\Repositories\ProjectRepositoryInterface;
use App\Repositories\SettingRepositoryInterface;
use App\Repositories\ServiceRepositoryInterface;
use App\Repositories\SliderRepositoryInterface;
use App\Repositories\TeamRepositoryInterface;
use App\Repositories\TranslationRepositoryInterface;
use App\Repositories\VacancyRepositoryInterface;
use App\Repositories\VacancyRequestRepositoryInterface;
use Carbon\Laravel\ServiceProvider;

/**
 * Class RepositoryServiceProvider
 * @package App\Providers
 */
class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register(): void
    {
        //
    }


    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot(): void
    {
        $this->app->bind(EloquentRepositoryInterface::class, BaseRepository::class);
        $this->app->bind(LanguageRepositoryInterface::class, LanguageRepository::class);
        $this->app->bind(TranslationRepositoryInterface::class, TranslationRepository::class);
        $this->app->bind(CategoryRepositoryInterface::class, CategoryRepository::class);
        $this->app->bind(ProductRepositoryInterface::class, ProductRepository::class);
        $this->app->bind(ProjectRepositoryInterface::class, ProjectRepository::class);
        $this->app->bind(SliderRepositoryInterface::class, SliderRepository::class);
        $this->app->bind(PageRepositoryInterface::class, PageRepository::class);
        $this->app->bind(SettingRepositoryInterface::class, SettingRepository::class);
        $this->app->bind(BlogRepositoryInterface::class, BlogRepository::class);
        $this->app->bind(TeamRepositoryInterface::class, TeamRepository::class);
        $this->app->bind(CompanyRepositoryInterface::class, CompanyRepository::class);
        $this->app->bind(NewsRepositoryInterface::class, NewsRepository::class);
        $this->app->bind(VacancyRepositoryInterface::class, VacancyRepository::class);
        $this->app->bind(VacancyRequestRepositoryInterface::class, VacancyRequestRepository::class);
        $this->app->bind(FeatureRepositoryInterface::class, FeatureRepository::class);
        $this->app->bind(AnswerRepositoryInterface::class, AnswerRepository::class);


    }
}
