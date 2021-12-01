<?php
/**
 *  app/Repositories/Eloquent/UserRepository.php
 *
 * Date-Time: 19.05.21
 * Time: 10:54
 * @author Insite International<hello@insite.ge>
 */

namespace App\Repositories\Eloquent;

use App\Http\Request\Admin\FeatureRequest;
use App\Http\Request\Admin\LanguageRequest;

use App\Http\Request\Admin\TranslationRequest;
use App\Models\Answer;
use App\Models\Feature;
use App\Models\FeatureAnswers;
use App\Models\FeatureLanguage;
use App\Models\Language;
use App\Models\Translation;
use App\Models\User;
use App\Repositories\AnswerRepositoryInterface;
use App\Repositories\Eloquent\Base\BaseRepository;
use App\Repositories\FeatureRepositoryInterface;
use App\Repositories\TranslationRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

/**
 * Class UserRepository
 * @package App\Repositories\Eloquent
 */
class AnswerRepository extends BaseRepository implements AnswerRepositoryInterface
{
    /**
     * TranslationRepository constructor.
     *
     * @param User $model
     */
    public function __construct(Answer $model)
    {
        parent::__construct($model);
    }

    public function create(array $attributes = [])
    {
        DB::beginTransaction();
        try {
            $answer = $this->model->create($attributes);

            FeatureAnswers::create([
                'feature_id' => $attributes['feature'],
                'answer_id' => $answer->id
            ]);
            DB::commit();

            return $answer;
        } catch (\Illuminate\Database\QueryException $exception) {
            DB::rollBack();
            return $exception->errorInfo;
        }
    }

//
    public function update(int $id, array $data = [])
    {
        $this->model = $this->findOrFail($id);

        try {
            $answer = $this->model->update($data);

            $this->model->feature->update([
                'feature_id' => $data['feature']
            ]);

            DB::commit();
            return $answer;
        } catch (\Illuminate\Database\QueryException $exception) {
            DB::rollBack();
            return $exception->errorInfo;
        }
    }

//    public function delete(int $id)
//    {
//        $data = $this->find($id);
//        return $data->delete();
//    }

}
