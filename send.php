<?php

$token = "7210188213:AAFhTfj07t8AP6CZh7sFFx1QP0JvHRFAPFg";
$chat_id = "-4735149758";
$name = $_GET['name'];
$email = $_GET['email'];
$message = $_GET['message'];

$arr = array(
    'name:' => $name,
    'email:' => $email,
    'message:' => $message
);

$txt = "";

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
