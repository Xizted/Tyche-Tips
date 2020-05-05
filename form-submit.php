<?php

include('./lib/MailChimp.php');

use \DrewM\MailChimp\MailChimp;

$api_key = 'e91dc3db5b0dfe0b3913dec40e2b6b7a-us8';
$list_id = 'f76c05a46b';


$MailChimp = new MailChimp($api_key);

if ($_POST) {
    $email = $_POST['email'];


    $result = $MailChimp->post("lists/$list_id/members", [
        'email_address' => $email,
        'status'        => 'subscribed',
    ]);

    if ($MailChimp->success()) {
        echo "<h2>Submitted Successfully</h2>";
    } else {
        echo $MailChimp->getLastError();
    }
}
