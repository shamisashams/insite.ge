<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddVacancyIdToVacancyRequestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('vacancy_requests', function (Blueprint $table) {
            $table->bigInteger('vacancy_id')->unsigned()->nullable()->after('id');
            $table->foreign('vacancy_id')
                ->references('id')
                ->on('vacancies')
                ->onDelete('cascade')
                ->onUpdate('cascade');

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('vacancy_requests', function (Blueprint $table) {
        });
    }
}
