<?php
    include_once 'header.php';
    include 'database.php';
    //Create Select Query
    $query = "SELECT * FROM shouts";
    $shouts = mysqli_query($con, $query);
    while($row = mysqli_fetch_assoc($shouts)){
    $items[] = $row;
    }
    $items = array_reverse($items ,true);
?>
<div id="mainArea">
    <div class='container-fluid'>
        <div class="sectionTitle">
            <h1>Shout Outs</h1>
        </div>
        <br>
        <br>
        <div id='input'>
            <p>Leave me any comment.</p>
            <br>
            <br>
            <?php if(isset($_GET['error'])) : ?>
            <div style="background:red;color:#ffffff;padding:5px;margin-bottom:20px;"><?php echo $_GET['error']; ?></div>
            <?php endif; ?>
            <p id="error_message"></p>
            <form method='post' action='shoutouts_process.php' name="shoutbox_myForm" onsubmit="return validateForm()">
                <div class="form-row">
                    <div class="col-sm-2">
                        <input type='text' class="form-control" name='user' placeholder='Enter Your Name' />
                    </div>
                    <div class="col-sm-8">
                        <input type='text' class="form-control" name='message' placeholder='Enter Your Message' />
                    </div>
                    <div class="col-sm-2">
                        <button type='submit' class="btn btn-default" name='shoutbox_submit'>Submit</button>
                    </div>
                </div>
                <div class="g-recaptcha" data-sitekey="6LcWS0gUAAAAAFPBg7ybGZ7eNFoQXugp9cz3lbhb"></div>
            </form>
        </div>             
        <br>            
        <br>            
        <br>
        <div id='shouts'>
            <ul class="list-group list-group-flush">
                    <?php foreach($items as $item){
                if($item['id'] % 2 == 1) { ?>
                <li class='list-group-item list-group-item-info'>#<?php echo $item['id'] ?> - <strong><?php echo $item['user'] ?>:</strong> <?php echo $item['message'] ?> </li>                  
                <?php } elseif($item['id'] % 2 == 0) { ?>
                <li class='list-group-item list-group-item-primary' style="color: #444;">#<?php echo $item['id'] ?> - <strong><?php echo $item['user'] ?>:</strong> <?php echo $item['message'] ?> </li>
                <?php }
                      }?>
            </ul>
                
        </div>
    </div>
</div>
<script src='js/shoutouts_form_alert.js'></script>
<script src='https://www.google.com/recaptcha/api.js'></script>
<?php
    include_once 'footer.php';
?>