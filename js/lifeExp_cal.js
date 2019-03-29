const CHART = document.getElementById("lineChart");
var data = {
    labels: [],
    datasets: [
        {
            label: 'Current Age',
            data:[],
            borderWidth: 1,
            backgroundColor:"rgba(0,0,0,0.2)"
        },
        {
            label:'Expected Age',
            data:[],
            borderWidth: 1,
            borderColor:"rgba(0,0,0,0.5)",
            backgroundColor:"rgba(0,0,0,0.1)"
        },
        {
            label: 'Male Number of Lives',
            steppedLine: true,
            data:[],
            borderWidth: 1,
            backgroundColor: ""
        },
        {
            label: 'Female Number of Lives',
            steppedLine: true,
            data:[],
            borderWidth: 1,
            backgroundColor:""
        }]
};
var options= {
    spanGaps: true,
    title:{
        display:true,
        text:"Across the Life Span for the U.S. 2013"
    },
    elements: {
        line: {
            tension: 0.001
        }
    },
    scales: {
        xAxes: [{
                display: true,
                beginAtZero:true,
                scaleLabel: {
                    display: true,
                    labelString: 'Aget At'
                }
            }],
        yAxes: [{
                display: true,
                beginAtZero:true,
                scaleLabel: {
                    display: true,
                    labelString: 'Accumulated Number of Deaths'
                }
            }]
    },
    plugins: {
        filler: {
            fill: true,
            propagate: true
        },
        samples_filler_analyser: {
            target: 'chart-analyser'
        }
    }
};    

let lineChart = new Chart(CHART, {
    type: 'line',
    data: data,
    options: options
});

function leForm(gender_button) {
    var i;
    var cur_age = 0;    //receives current age
    var exp_age = 0;    //receives expected age
    var LL = 100000;    //total population
    var M_mort = new Array;
    var F_mort = new Array;
    var horizon_cur_avg = 0;
    var horizon_exp_avg = 0;
    var print_percent = 0;
    var boolvar = true;
    
    M_mort =[100000,99368,99328,99300,99279,99261,99245,99231,99218,99206,99197,99187,99177,99164,99144,99114,99074,99024,98963,98889,98802,98701,98588,98464,98335,98204,98072,97937,97801,97662,97520,97373,97224,97071,96914,96753,96587,96415,96236,96050,95856,95653,95437,95207,94958,94688,94394,94073,93721,93336,92913,92449,91943,91392,90792,90142,89439,88681,87867,87001,86081,85104,84065,82967,81812,80600,79324,77977,76550,75036,73427,71710,69878,67930,65866,63686,61377,58930,56344,53625,50776,47795,44685,41461,38148,34771,31358,27943,24565,21270,18107,15128,12381,9906,7733,5878,4348,3130,2194,1500,1001,652,413,254,151,87,48,26,13,6,3,1,1];
    F_mort =[100000,99469,99434,99412,99396,99383,99372,99361,99351,99342,99334,99325,99317,99307,99294,99279,99260,99237,99210,99180,99146,99109,99069,99025,98978,98929,98877,98822,98765,98705,98641,98575,98505,98431,98351,98266,98175,98076,97970,97856,97735,97604,97463,97311,97146,96966,96771,96559,96327,96072,95794,95488,95155,94794,94405,93987,93539,93057,92542,91997,91420,90809,90157,89461,88715,87914,87049,86114,85102,84006,82818,81525,80117,78591,76947,75182,73280,71225,69008,66621,64059,61304,58350,55213,51913,48467,44889,41191,37394,33531,29650,25811,22083,18536,15240,12250,9620,7378,5525,4043,2893,2021,1375,909,583,361,215,123,67,35,17,8,3,1];
    cur_age = document.forms["life_expectancy"]["curage"].value;
    exp_age = document.forms["life_expectancy"]["expage"].value;

    if (cur_age <= exp_age && cur_age > 9 &&cur_age < 81 && exp_age < 100)
    {
        var btn = gender_button;
        
        if(btn === "Avg")
        {
            boolvar = true;
            
            for (i=0;i<113;i++)
            {
                
                if(i > cur_age)
                {
                }
                else if (i == cur_age)
                {
                    horizon_cur_avg = M_mort[i] + F_mort[i];
                    lineChart.data.datasets[0].data[i]= LL;
                }
                else
                {
                    lineChart.data.datasets[0].data[i]= LL;
                }
                
                if(i < exp_age)
                {
                    lineChart.data.datasets[1].data[i]= 0;
                }
                else if(i == exp_age )
                {
                    horizon_exp_avg = M_mort[i] + F_mort[i];
                    lineChart.data.datasets[1].data[i]= LL;
                }
                else
                {
                    lineChart.data.datasets[1].data[i]= LL;
                }
                
                lineChart.data.datasets[2].data[i]= M_mort[i];  
                lineChart.data.datasets[3].data[i]= F_mort[i];
                lineChart.data.labels[i]=i;
            }
            
            lineChart.data.datasets[2].backgroundColor="rgba(75,192,192,0.86)";
            lineChart.data.datasets[3].backgroundColor="rgba(255,135,195,0.5)";
            lineChart.update();
            
            print_percent = Math.round(horizon_exp_avg / horizon_cur_avg * 10000) / 100;
            document.getElementById("m_prob").style.background = "rgba(255,255,0,0.5)";
            document.getElementById("m_prob").style.color = "black";
        }
        
        if(btn === "male")
        {
            boolvar = true;
            
            for (i=0;i<113;i++)
            {
                if(i > cur_age)
                {

                }
                else if (i == cur_age)
                {
                    horizon_cur_avg = M_mort[i];
                    lineChart.data.datasets[0].data[i]= LL;
                }
                else
                {
                    lineChart.data.datasets[0].data[i]= LL;
                }
                
                if(i < exp_age)
                {
                    lineChart.data.datasets[1].data[i]= 0;
                }
                else if(i == exp_age)
                {
                    horizon_exp_avg = M_mort[i];
                    lineChart.data.datasets[1].data[i]= LL;
                    
                }
                else
                {
                    lineChart.data.datasets[1].data[i]= LL;
                }
                
                lineChart.data.datasets[2].data[i]= M_mort[i];  
                lineChart.data.datasets[3].data[i]= 0;
                lineChart.data.labels[i]=i;   
            }
            
            lineChart.data.datasets[2].backgroundColor="rgba(75,192,192,0.8)";
            lineChart.data.datasets[3].backgroundColor="rgba(255,135,195,0.3)";
            lineChart.update();
            
            print_percent = Math.round(horizon_exp_avg / horizon_cur_avg * 10000) / 100;
            document.getElementById("m_prob").style.background = "rgba(75,192,192,0.85)";
            document.getElementById("m_prob").style.color = "white";
        }
        
        if(btn === "female")
        {
            boolvar = true;
            
            for (i=0;i<113;i++)
            {
                if(i > cur_age)
                {

                }
                else if (i == cur_age)
                {
                    horizon_cur_avg = F_mort[i];
                    lineChart.data.datasets[0].data[i]= LL;
                }
                else
                {
                    lineChart.data.datasets[0].data[i]= LL;
                }
                
                if(i < exp_age)
                {
                    lineChart.data.datasets[1].data[i]= 0;
                }
                else if(i == exp_age)
                {
                    horizon_exp_avg = F_mort[i];
                    lineChart.data.datasets[1].data[i]= LL;
                    
                }
                else
                {
                    lineChart.data.datasets[1].data[i]= LL;
                }
                
                lineChart.data.datasets[2].data[i]=  0;
                lineChart.data.datasets[3].data[i]= F_mort[i]; 
                lineChart.data.labels[i]=i;   
            }
            
            lineChart.data.datasets[2].backgroundColor="rgba(75,192,192,0.3)";
            lineChart.data.datasets[3].backgroundColor="rgba(255,135,195,0.8)";
            lineChart.update();
            
            print_percent = Math.round(horizon_exp_avg / horizon_cur_avg * 10000) / 100;
            document.getElementById("m_prob").style.background = "rgba(255,135,195,0.85)";
            document.getElementById("m_prob").style.color = "white";
            
        }
    }
    else
    {
        boolvar = false;
    }
    
    if(boolvar == true)
    {
        document.getElementById("l_error").innerHTML = "";   
        document.getElementById("l_error").style.background = "white";
        document.getElementById("l_error").style.color = "white";
        document.getElementById("l_error").style.padding = "0px";
        document.getElementById("l_error").style.marginBottom = "0px";
        
        document.getElementById("m_prob").innerHTML = print_percent + "% chance to reach the expected age";
        document.getElementById("m_prob").style.padding = "5px";
        document.getElementById("m_prob").style.marginBottom = "20px";
        
    }
    else
    {
        document.getElementById("m_prob").innerHTML = "";
        document.getElementById("m_prob").style.background = "white";
        document.getElementById("m_prob").style.color = "white";
        document.getElementById("m_prob").style.padding = "5px";
        document.getElementById("m_prob").style.marginBottom = "20px";
        
        document.getElementById("l_error").innerHTML = "Invalid numbers (current age must be less than expected age, current age must be between 10 and 80, and expected age must be between 10 and 99)";
        document.getElementById("l_error").style.background = "red";
        document.getElementById("l_error").style.color = "white";
        document.getElementById("l_error").style.padding = "5px";
        document.getElementById("l_error").style.marginBottom = "20px";
        
        for(var i=0;i<113;i++)
        {
            lineChart.data.datasets[0].data[i]= 0;
            lineChart.data.datasets[1].data[i]= 0;
            lineChart.data.datasets[2].data[i]= 0;
            lineChart.data.datasets[3].data[i]= 0;
            lineChart.data.labels[i]=i;
        }
        
        lineChart.data.datasets[1].backgroundColor="";
        lineChart.data.datasets[2].backgroundColor="";
        lineChart.data.datasets[3].backgroundColor="";
        lineChart.update();
        
    }
    
    
    return false;
}