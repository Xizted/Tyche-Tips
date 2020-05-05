<?php

include('./lib/MailChimp.php');

use \DrewM\MailChimp\MailChimp;

$api_key = 'e91dc3db5b0dfe0b3913dec40e2b6b7a-us8';
$list_id = 'f76c05a46b';


$MailChimp = new MailChimp($api_key);


$email = $_POST['email'];

if ($email === '') {
    echo json_encode('error');
}

$result = $MailChimp->post("lists/$list_id/members", [
    'email_address' => $email,
    'status'        => 'subscribed',
]);

if ($MailChimp->success()) {
    echo json_encode($email);
} else {
    echo json_encode('Error');
}
