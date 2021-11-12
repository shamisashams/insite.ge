<?php
/**
 *  app/Mail/ContactEmail.php
 *
 * User:
 * Date-Time: 21.12.20
 * Time: 13:49
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */

namespace App\Mail;

use App\Models\Setting;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class OrderEmail extends Mailable
{
    use Queueable, SerializesModels;

    protected $data;
    protected $mailTo;
    protected $name;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data, $mailTo, $name)
    {
        $this->data = $data;
        $this->mailTo = $mailTo;
        $this->name = $name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from($this->mailTo, $this->name)->subject('Order was successfully created')->view('client.email.order', ['features' => $this->data]);
    }
}
