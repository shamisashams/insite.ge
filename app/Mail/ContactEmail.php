<?php
/**
 *  app/Mail/ContactEmail.php
 *
 * User:
 * Date-Time: 21.12.20
 * Time: 13:49
 * @author Insite International<hello@insite.ge>
 */
namespace App\Mail;

use App\Models\Setting;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactEmail extends Mailable
{
    use Queueable, SerializesModels;

    protected $data;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data)
    {
        $this->data = $data;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $mailTo = Setting::where(['key' => 'email'])->first();
        if ($mailTo) {
            return $this->from($mailTo->value, $this->data['name'])->subject('subject')->view('client.email.contact', ['data' => $this->data]);
        }

    }
}
