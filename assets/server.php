<?php
$response = array(
    'files' => $_FILES,
    'post_data' => $_POST
);

echo json_encode($response);
