<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVacanciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vacancies', function (Blueprint $table) {
            $table->id();
            $table->boolean('status');
            $table->string('title')->nullable();
            $table->string('description')->nullable();
            $table->longText('content')->nullable();
            $table->string('location')->nullable();
            $table->string('field')->nullable();
            $table->string('salary')->nullable();
            $table->string('experience')->nullable();
            $table->string('commitment')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vacancies');
    }
}
