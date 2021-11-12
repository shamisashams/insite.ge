<?php
/**
 *  app/Repositories/Eloquent/ProjectRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Repositories\Eloquent;

use App\Models\VacancyRequest;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\VacancyRequestRepositoryInterface;

/**
 * Class LanguageRepository
 * @package App\Repositories\Eloquent
 */
class VacancyRequestRepository extends BaseRepository implements VacancyRequestRepositoryInterface
{
    /**
     * @param \App\Models\VacancyRequest $model
     */
    public function __construct(VacancyRequest $model)
    {
        parent::__construct($model);
    }

}
