<?php
/**
 *  app/Repositories/ProductRepositoryInterface.php
 *
 * Date-Time: 30.07.21
 * Time: 10:35
 * @author Insite International<hello@insite.ge>
 */
namespace App\Repositories;


use App\Http\Requests\Admin\BlogRequest;
use App\Http\Requests\Admin\VacancyRequest;


interface VacancyRepositoryInterface
{

    /**
     * @param VacancyRequest $request
     * @param array $with
     *
     * @return mixed
     */
    public function getData(VacancyRequest $request, array $with = []);
}
