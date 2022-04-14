<?php
header("Access-Control-Allow-Origin: *");
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// get refferer server
if($_SERVER['HTTP_REFERER'] === "http://netint.olegkrainyk.com"){
    // extract the data from $_POST
    $name = isset($_GET['name']) ? $_GET['name'] : null;
    $message = isset($_GET['message']) ? $_GET['message'] : null;
    $email = isset($_GET['sendto']) ? $_GET['sendto'] : null;

    if($name && $message && $email){
    
        //Load composer's autoloader
        require 'vendor/autoload.php';

        $mail = new PHPMailer(true);
        $mailRep = new PHPMailer(true);
        try{
            //mail TO

            // SMTP server configuration
            $mail->isSMTP();                                      // Send using SMTP
            $mail->Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
            $mail->SMTPAuth   = true;                             // Enable SMTP authentication
            $mail->Username   = 'netintegrations.mail@gmail.com';           // SMTP username
            $mail->Password   = 'zaxs1093';                        // SMTP password
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
            $mail->Port       = 587;

            // Recipients
            $mail->setFrom($email, 'NETintegrations');
            $mail->addAddress('netintegrations.mail@gmail.com');     // Add a recipient
            $mail->addReplyTo('netintegrations.mail@gmail.com', 'Information');

            // Content
            $mail->isHTML(true);      // Set email format to HTML
            $mail->Subject = 'NETintegrations Contact Us Form';
            $mail->Body    = 'Name: ' . $name . '<br />Email: ' . $email . '<br /><br /><b>Message:</b> '
            . $message;




            //mail FROM 

                // SMTP server configuration
                $mailRep->isSMTP();                                      // Send using SMTP
                $mailRep->Host       = 'smtp.gmail.com';                // Set the SMTP server to send through
                $mailRep->SMTPAuth   = true;                             // Enable SMTP authentication
                $mailRep->Username   = 'netintegrations.mail@gmail.com';           // SMTP username
                $mailRep->Password   = 'zaxs1093';                        // SMTP password
                $mailRep->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` also accepted
                $mailRep->Port       = 587;
    
                // Recipients
                $mailRep->setFrom('netintegrations.mail@gmail.com');
                $mailRep->addAddress($email);     // Add a recipient
                $mailRep->addReplyTo('netintegrations.mail@gmail.com', 'Information');
    
                // Content
                $mailRep->isHTML(true);      // Set email format to HTML
                $mailRep->Subject = 'NETintegrations Contact Us Form';
                $mailRep->Body = 'Greetings, ' . $name . '! <br /> Thank you for filling out our form at NETintegrations.net, tech support will contact you soon!
                <br />Have a nice day!';

            if($mail->send() && $mailRep->send())
                echo "Message has been sent!";
        }catch (Exception $e){
            echo "Message couldn't be sent. Error: ", $mail->ErrorInfo;
        }
    }else{
        echo "All the fileds are required!";
    }
}else{
    echo "You can't use this server!";
}
?>