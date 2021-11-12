<?php
/**
 *  app/Repositories/ProductRepositoryInterface.php
 *
 * Date-Time: 30.07.21
 * Time: 10:35
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */
namespace App\Repositories;


use App\Http\Requests\Admin\BlogRequest;
use App\Http\Requests\Admin\VacancyRequest;
use App\Http\Requests\Admin\VacancyRequestRequest;


interface VacancyRequestRepositoryInterface
{

    /**
     * @param VacancyRequestRequest $request
     * @param array $with
     *
     * @return mixed
     */
    public function getData(VacancyRequestRequest $request, array $with = []);
}
