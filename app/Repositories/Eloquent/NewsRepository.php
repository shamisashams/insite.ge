<?php
/**
 *  app/Repositories/Eloquent/ProjectRepository.php
 *
 * Date-Time: 30.07.21
 * Time: 10:36
 * @author Insite International<hello@insite.ge>
 */

namespace App\Repositories\Eloquent;

use App\Models\News;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\NewsRepositoryInterface;

/**
 * Class NewsRepository
 * @package App\Repositories\Eloquent
 */
class NewsRepository extends BaseRepository implements NewsRepositoryInterface
{
    /**
     * @param \App\Models\News $model
     */
    public function __construct(News $model)
    {
        parent::__construct($model);
    }

}
