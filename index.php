<?php
    include_once 'header.php';
?>
<div id="mainArea">
    <div class='container-fluid'>
        <div class="sectionTitle">
            <h1>Life Expectancy</h1>
        </div>
        <br>
        <br>
        <div id='input'>
            <p>Calculate the probability of life expectancy by selecting your current age and expected age.</p>
            <br>
            <br>
            <p id="l_error" align="center"></p>
            <form method='post' name="life_expectancy" onsubmit="return leForm()">
                <div class="form-row">
                    <div class="col-sm-2">
                        <input type='number' class="form-control" min="0" max="119" name='curage' placeholder='Current Age' />
                    </div>           
                    <div class="col-sm-2">
                        <input type='number' class="form-control" min="0" max="119" name='expage' placeholder='Expected Age' />
                    </div>
                    <div class="col-sm-4">
                        <label class="btn btn-default active"><input type="radio" name="gender_button" onclick="leForm(this.value)" value="Avg">Avg.</label>
                        <label class="btn btn-info active"><input type="radio" name="gender_button" onclick="leForm(this.value)" value="male">Male</label>
                        <label class="btn btn-danger active"><input type="radio" name="gender_button" onclick="leForm(this.value)" value="female">Female</label>
                            
                    </div>
                    <div class="col-sm-4">
                        <p id="m_prob" align="center"></p>
                    </div>
                </div>   
            </form>
            <br>
            <br>
            <canvas id="lineChart"></canvas>
        </div>
	      <p>not rendering on iOS devices</p>      
    </div>   
</div>
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/Chart.bundle.js"></script>
<script src="js/lifeExp_cal.js"></script>
<?php
    include_once 'footer.php';
?>