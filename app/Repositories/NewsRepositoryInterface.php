<?php
/**
 *  app/Repositories/ProductRepositoryInterface.php
 *
 * Date-Time: 30.07.21
 * Time: 10:35
 * @author Insite International<hello@insite.ge>
 */
namespace App\Repositories;

use App\Http\Requests\Admin\NewsRequest;


interface NewsRepositoryInterface
{

    /**
     * @param NewsRequest $request
     * @param array $with
     *
     * @return mixed
     */
    public function getData(NewsRequest $request, array $with = []);
}
