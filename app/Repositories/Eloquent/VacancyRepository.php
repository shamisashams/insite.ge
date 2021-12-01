<?php
/**
 *  app/Repositories/Eloquent/ProjectRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Insite International<hello@insite.ge>
 */

namespace App\Repositories\Eloquent;


use App\Models\Blog;
use App\Models\Project;
use App\Models\Vacancy;
use App\Repositories\BlogRepositoryInterface;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\ProjectRepositoryInterface;
use App\Repositories\VacancyRepositoryInterface;

/**
 * Class LanguageRepository
 * @package App\Repositories\Eloquent
 */
class VacancyRepository extends BaseRepository implements VacancyRepositoryInterface
{
    /**
     * @param \App\Models\Vacancy $model
     */
    public function __construct(Vacancy $model)
    {
        parent::__construct($model);
    }

}
