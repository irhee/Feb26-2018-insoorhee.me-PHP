<?php
include 'database.php';
    $public_key = "6LcWS0gUAAAAAFPBg7ybGZ7eNFoQXugp9cz3lbhb";
    $private_key = "6LcWS0gUAAAAALFUyUOf2tzDwPbv2k25hfH5KrD9";
    $url = "https://www.google.com/recaptcha/api/siteverify";
        
    if(array_key_exists('shoutbox_submit',$_POST))
    {
        
        $response_key = $_POST['g-recaptcha-response'];
        $response = file_get_contents($url.'?secret='.$private_key.'&response='.$response_key.'&remoteip='.$_SERVER['REMOTE_ADDR']);
        $response = json_decode($response);
            
        if($response->success == 1)
        {
            if(isset($_POST['shoutbox_submit'])){
                $user = mysqli_real_escape_string($con, $_POST['user']);
                $message = mysqli_real_escape_string($con, $_POST['message']);

                //Validate input
                if(!isset($user) || $user == '' || !isset($message) || $message == ''){
                    //$error = "Please fill in your name and a message";
                    header("Location: shoutouts.php");
                    exit();
                } else {
                    $query = "INSERT INTO shouts (user, message)
                            VALUES ('$user','$message')";
                    if(!mysqli_query($con, $query)){
                        die('Error: '.mysqli_error($con));
                    } else {
                        header("Location: shoutouts.php");
                        exit();
                    }
                }
            }    
        }
        else
        {
            $error = "You are a robot and we don't like robots";
            header("Location: shoutouts.php?error=".urlencode($error));
            exit();  
        }
            
    }
//check if from submitted