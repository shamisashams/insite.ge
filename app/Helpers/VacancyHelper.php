<?php


namespace App\Helpers;


class VacancyHelper
{
    /**
     * @param string $baseLangName
     * @param string $baseModuleName
     *
     * @return array
     */
    public static function getLang($baseLangName = 'client')
    {


        $langData = [
            'salary' => __($baseLangName . '.salary'),
            'apply_now' => __($baseLangName . '.apply_now'),
            'share' => __($baseLangName . '.share')
        ];


        return $langData;
    }

}
