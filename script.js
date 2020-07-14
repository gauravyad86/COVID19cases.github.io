const newData = new Map();
var countriesData    = null;
const protect   = new Map();

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

var workPlace = ["https://www.dropbox.com/s/j7wa41cu7yytbfk/workplace-readiness-en-1.jpg?raw=1", "https://www.dropbox.com/s/ted9j1t8m6vawsk/workplace-readiness-en-2.jpg?raw=1", "https://www.dropbox.com/s/krkyr7xyn6c3vg9/workplace-readiness-en-3.jpg?raw=1", "https://www.dropbox.com/s/wpir7s4kjiy78nf/workplace-readiness-en-4.jpg?raw=1", "https://www.dropbox.com/s/2shscrjpjdfgb9n/workplace-readiness-en-5.jpg?raw=1", "https://www.dropbox.com/s/qhgg5jo22ed3vsw/workplace-readiness-en-6.jpg?raw=1", "https://www.dropbox.com/s/a6jztcd09gz9ma2/workplace-readiness-en-7.jpg?raw=1", "https://www.dropbox.com/s/fb675yhwlvhq8zt/workplace-readiness-en-8.jpg?raw=1"];
var homeCare = ["https://www.dropbox.com/s/fs51934qtrop605/home-care-ill-people-square-covid1.png?raw=1", "https://www.dropbox.com/s/5rhps0hnd6lu3yq/home-care-everyone-square-covid2.png?raw=1", "https://www.dropbox.com/s/6m6wpggut9wb98g/home-care-caregivers-square-covid3.png?raw=1"];
var maskUse = ["https://www.dropbox.com/s/jwuykivkayxkm3x/mask-use-1.png?raw=1", "https://www.dropbox.com/s/184fkhap04tco50/mask-use-2.png?raw=1", "https://www.dropbox.com/s/jtr35dm38s07zqm/mask-use-3.png?raw=1", "https://www.dropbox.com/s/tw3h5s7lrlus3oq/mask-use-4.png?raw=1", "https://www.dropbox.com/s/mb5zvjacpic9wox/mask-use-5.png?raw=1", "https://www.dropbox.com/s/sr8suvuku3884py/mask-use-6.png?raw=1", "https://www.dropbox.com/s/3dtaq61v1pvcwt2/mask-use-7.png?raw=1"];
var handWashing = ["https://www.dropbox.com/s/xoqnr6rhbjnbt0u/hand_washing.png?raw=1"];
var healthWorkers = ["https://www.dropbox.com/s/9rblc7jkazxjlo9/protect_your_self_and_others_health_workers_en.png?raw=1"];
var generalPublic = ["https://www.dropbox.com/s/901s7tfws9c1yjz/protect_your_self_and_others_general_public_en.png?raw=1"];
var schools = ["https://www.dropbox.com/s/z66gff5i9hyl1fa/protect_students_and_stfull_in_schools_and_nurseries.png?raw=1"];
var travelHealth = ["https://www.dropbox.com/s/x2u1c9es8yh3n3y/protect_your_self_and_others_travel_health_en.png?raw=1"];

const countries = "afghanistan, albania, algeria, andorra, angola, anguilla, antigua-and-barbuda, argentina, armenia, aruba, australia, austria, azerbaijan, bahamas, bahrain, bangladesh, barbados, belarus, belgium, belize, benin, bermuda, bhutan, bolivia, bosnia-and-herzegovina, botswana, brazil, british-virgin-islands, brunei-darussalam, bulgaria, burkina-faso, burundi, cabo-verde, cambodia, cameroon, canada, caribbean-netherlands, cayman-islands, central-african-republic, chad, channel-islands, chile, china, china-hong-kong-sar, china-macao-sar, colombia, congo, costa-rica, cote-d-ivoire, croatia, cuba, curacao, cyprus, czech-republic, democratic-republic-of-the-congo, denmark, djibouti, dominica, dominican-republic, ecuador, egypt, el-salvador, equatorial-guinea, eritrea, estonia, ethiopia, faeroe-islands, falkland-islands-malvinas, fiji, finland, france, french-guiana, french-polynesia, gabon, gambia, georgia, germany, ghana, gibraltar, greece, greenland, grenada, guadeloupe, guatemala, guinea, guinea-bissau, guyana, haiti, holy-see, honduras, hungary, iceland, india, indonesia, iran, iraq, ireland, isle-of-man, israel, italy, jamaica, japan, jordan, kazakhstan, kenya, kuwait, kyrgyzstan, laos, latvia, lebanon, liberia, libya, liechtenstein, lithuania, luxembourg, macedonia, madagascar, malawi, malaysia, maldives, mali, malta, martinique, mauritania, mauritius, mayotte, mexico, moldova, monaco, mongolia, montenegro, montserrat, morocco, mozambique, myanmar, namibia, nepal, netherlands, new-caledonia, new-zealand, nicaragua, niger, nigeria, norway, oman, pakistan, panama, papua-new-guinea, paraguay, peru, philippines, poland, portugal, qatar, reunion, romania, russia, rwanda, saint-barthelemy, saint-kitts-and-nevis, saint-lucia, saint-martin, saint-vincent-and-the-grenadines, san-marino, saudi-arabia, senegal, serbia, seychelles, sierra-leone, singapore, sint-maarten, slovakia, slovenia, somalia, south-africa, south-korea, spain, sri-lanka, state-of-palestine, sudan, suriname, swaziland, sweden, switzerland, syria, taiwan, tanzania, thailand, timor-leste, togo, trinidad-and-tobago, tunisia, turkey, turks-and-caicos-islands, uganda, uk, ukraine, united-arab-emirates, uruguay, us, uzbekistan, venezuela, viet-nam, zambia, zimbabwe";

var countriesList = countries.split(", ");

protect.set('Work Place', workPlace);
protect.set('Home Care', homeCare);
protect.set('Mask Use', maskUse);
protect.set('Hand Washing', handWashing);
protect.set('Health Workers', healthWorkers);
protect.set('General Public', generalPublic);
protect.set('Schools', schools);
protect.set('Travel Health', travelHealth);

var aboutCovidArr = ['Coronaviruses (CoV) are a large family of viruses that cause illness ranging from the common cold to more severe diseases such as Middle East Respiratory Syndrome (MERS-CoV) and Severe Acute Respiratory Syndrome (SARS-CoV). A novel coronavirus (nCoV) is a new strain that has not been previously identified in humans.', 'Coronaviruses are zoonotic, meaning they are transmitted between animals and people. Detailed investigations found that SARS-CoV was transmitted from civet cats to humans and MERS-CoV from dromedary camels to humans. Several known coronaviruses are circulating in animals that have not yet infected humans. ', 'Common signs of infection include respiratory symptoms, fever, cough, shortness of breath and breathing difficulties. In more severe cases, infection can cause pneumonia, severe acute respiratory syndrome, kidney failure and even death. ', 'Standard recommendations to prevent infection spread include regular hand washing, covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs. Avoid close contact with anyone showing symptoms of respiratory illness such as coughing and sneezing. '];

console.log = function() {}

window.onload = function(){
    $(".loader").css("display", "block");
    $("#card1").css("display", "none");
    $(".chartContainer4").css("display", "none");
    $("#aboutCovid").css("display", "none");
    $("#protectYourself").css("display", "none");
    $("#IndianStateData").css("display", "none");
    $("#fatalityRateByAge").css("display", "none");
    $("#countryWiseCases").css("display", "none");
    $('.img-fluid').css("display", "none");
    
    httpGet('https://coronavirus-19-api.herokuapp.com/countries');
    
    $( ".global" ).click(function() {
        $("#globalData").css("display", "block");
        $("#countryWise").css("display", "none");
        $("#aboutCovid").css("display", "none");
        $("#protectYourself").css("display", "none");
        $("#IndianStateData").css("display", "none");
        $("#fatalityRateByAge").css("display", "none");
        $("#countryWiseCases").css("display", "none");
        $(".countries").removeClass('active');
        $(".information").removeClass('active');
        $(".global").addClass('active');
        goToPosition('card', 'slow');
    });
    
    $( ".countries" ).click(function() {
        $("#globalData").css("display", "none");
        $("#countryWise").css("display", "block");
        $("#aboutCovid").css("display", "none");
        $("#protectYourself").css("display", "none");
        $("#IndianStateData").css("display", "none");
        $("#fatalityRateByAge").css("display", "none");
        $("#countryWiseCases").css("display", "none");
        $(".global").removeClass('active');
        $(".information").removeClass('active');
        $(".countries").addClass('active');
        goToPosition('card', 'slow');
    });
    
    $( ".information" ).click(function() {
        $("#globalData").css("display", "none");
        $("#countryWise").css("display", "none");
        $("#aboutCovid").css("display", "block");   
        $("#protectYourself").css("display", "none");
        $("#fatalityRateByAge").css("display", "none");
        $("#countryWiseCases").css("display", "none");
        $(".countries").removeClass('active');
        $(".global").removeClass('active');
        $(".information").addClass('active');
        goToPosition('card', 'slow');
    });

    $( ".protect" ).click(function() {
        $("#globalData").css("display", "none");
        $("#countryWise").css("display", "none");
        $("#aboutCovid").css("display", "none");   
        $("#protectYourself").css("display", "block");
        $("#IndianStateData").css("display", "none");
        $("#fatalityRateByAge").css("display", "none");
        $("#countryWiseCases").css("display", "none");
        $(".global").removeClass('active');
        $(".countries").removeClass('active');
        $(".information").removeClass('active');
        closeNav();
        goToPosition('card', 'slow');
    });
    
    $( ".IndiaCasesByStates" ).click(function() {
        $("#globalData").css("display", "none");
        $("#countryWise").css("display", "none");
        $("#aboutCovid").css("display", "none");   
        $("#protectYourself").css("display", "none");
        $("#fatalityRateByAge").css("display", "none");
        $(".global").removeClass('active');
        $(".countries").removeClass('active');
        $(".information").removeClass('active');
        $("#IndianStateData").css("display", "block");
        $("#countryWiseCases").css("display", "none");
        closeNav();
        IndiaCasesByStates();
        goToPosition('card', 'slow');
    });
    
    $( ".fatalityRate" ).click(function() {
        $("#globalData").css("display", "none");
        $("#countryWise").css("display", "none");
        $("#aboutCovid").css("display", "none");   
        $("#protectYourself").css("display", "none");
        $(".global").removeClass('active');
        $(".countries").removeClass('active');
        $(".information").removeClass('active');
        $("#IndianStateData").css("display", "none");
        $("#fatalityRateByAge").css("display", "block");
        $("#countryWiseCases").css("display", "none");
        closeNav();
        fatalityRateByAge();
        goToPosition('card', 'slow');
    });
    
    $( ".confirmedanddeath" ).click(function() {
        $("#globalData").css("display", "none");
        $("#countryWise").css("display", "none");
        $("#aboutCovid").css("display", "none");   
        $("#protectYourself").css("display", "none");
        $(".global").removeClass('active');
        $(".countries").removeClass('active');
        $(".information").removeClass('active');
        $("#IndianStateData").css("display", "none");
        $("#fatalityRateByAge").css("display", "none");
        $("#countryWiseCases").css("display", "block");
        closeNav();
        fatalityRateByAge();
        goToPosition('card', 'slow');
    });
    
    setProtectYourselfData();
    setAboutCovidData();
    applyCollapsible();
}

function httpGet(link) {
    if(link !== null && link !== undefined && link !== "") {
        $.ajax({
            url: link,
            success: function(data) {
                //console.log(data)]
                
                countriesData   = data;
                
                addCountriesToList();
                getGlobalReport();
                setCountryWiseData();
                //const d1 = new Date(data.Date);
                
                //$('.collapsible').html('<b id = "label">Cases Global</b> <br>Today Till<br> (' + d1.toString() + ")");
                $('.collapsible1').html('<b id = "label">Global</b>');
                $("#card1").css("display", "block");
                $(".tabcontent").css("display", "block");
                $(".loader").css("display", "none");
                $("#countryWise").css("display", "none");
            },
            error: function() {
                alert("System seems to be offline, try again!");
            }
        });
    }
}

function addCountriesToList() {
    var countryList     = document.getElementById('countryList');
    
    for(var i = 0; i < countriesData.length; i++) {
        var object  = {};
            
        object.cases               = countriesData[i].cases;
        object.todayCases= countriesData[i].todayCases;
        object.deaths              = countriesData[i].deaths;
        object.todayDeaths         = countriesData[i].todayDeaths;
        object.recovered           = countriesData[i].recovered;
        object.active              = countriesData[i].active;
        object.critical            = countriesData[i].critical;
        object.casesPerOneMillion  = countriesData[i].casesPerOneMillion;
        object.deathsPerOneMillion = countriesData[i].deathsPerOneMillion;
        object.totalTests          = countriesData[i].totalTests;
        object.testsPerOneMillion  = countriesData[i].testsPerOneMillion;
            
        newData.set(countriesData[i].country, object);
    }
    
    for(var j = 0; j < countriesList.length; j++) {
        var opt         = document.createElement('option');
        opt.value       = countriesList[j];
        opt.innerHTML   = capitalize(countriesList[j]);
        countryList.appendChild(opt);
    }
}

function sortList() { 
    $("#countryList").append($("#countryList option") 
              .remove().sort(function(a, b) { 
        var at = $(a).text(), 
        bt = $(b).text(); 
        return (at > bt) ? 1 : ((at < bt) ? -1 : 0); 
    })); 
} 

function getGlobalReport() {
    var globalReport    = newData.get('World');
    
    setData(globalReport);
    showGraph('subjectwise', '', globalReport.cases, globalReport.recovered, globalReport.deaths);
}

function setData(globalReport) {
    
    var activePer       = (globalReport.active / globalReport.cases) * 100;
    var deathPer        = (globalReport.deaths / globalReport.cases) * 100;
    var recoveredPer    = (globalReport.recovered / globalReport.cases) * 100;

    $('#totalCases').html('<b class="count">' + (globalReport.cases) + '</b><br><b class = "count1">' + (globalReport.cases) + '</b>');
    $('#todayCases').html('<b class="count">' + (globalReport.todayCases) + '</b><br><b class = "count1">' + (globalReport.todayCases) + '</b>');
    $('#deaths').html('<b class="count">' + (globalReport.deaths) + '</b> (' + deathPer.toFixed(2) + ' %)<br><b class = "count1">' + (globalReport.deaths) + '</b>');
    $('#todayDeaths').html('<b class="count">' + (globalReport.todayDeaths) + '</b><br><b class = "count1">' + (globalReport.todayDeaths) + '</b>');
    $('#recovered').html('<b class="count">' + (globalReport.recovered) + '</b> (' + recoveredPer.toFixed(2) + ' %)<br><b class = "count1">' + (globalReport.recovered) + '</b>');
    $('#active').html('<b class="count">' + (globalReport.active) + '</b> (' + activePer.toFixed(2) + ' %)<br><b class = "count1">' + (globalReport.active) + '</b>');
    $('#critical').html('<b class="count">' + (globalReport.critical) + '</b><br><b class = "count1">' + (globalReport.critical) + '</b>');
    $('#casesPerOneMillion').html('<b class="count">' + (globalReport.casesPerOneMillion) + '</b><br><b class = "count1">' + (globalReport.casesPerOneMillion) + '</b>');
    $('#deathsPerOneMillion').html('<b class="count">' + (globalReport.deathsPerOneMillion) + '</b><br><b class = "count1">' + (globalReport.deathsPerOneMillion) + '</b>');
    
    convertNumberInWords();
    counterWithCommasNumber('count');
    
}

function setCountryWiseData() {
    //var content = '';
    
    var i = 0;
    
    for (let [key, value] of newData) {
        if(key != "World") {
            var content = '<div class="card bg-light countryWiseFilter"><div class="card-header text-white text-center" style="background-color: '+ getRandomColor() +'">' + key + '</div><div class="card-body text-center"><span id = "deathsPerOneMillion"><b>Cases : </b><b class="count2">'+ value.cases +'</b> | <b>Today : </b><b class="count2">'+ value.todayCases +'</b> | <b>Active : </b><b class="count2">'+ value.active +'</b><br> <b>Deaths : </b><b class="count2">'+ value.deaths +'</b> | <b>Today : </b><b class="count2">'+ value.todayDeaths +'</b><br> <b>Recovered : </b><b class="count2">'+ value.recovered +'</b> | <b>Critical : </b><b class="count2">'+ value.critical +'</b> <br> <b>Cases Per One Million : </b><b class="count2">'+ value.casesPerOneMillion +'</b> <br> <b>Deaths Per One Million : </b><b class="count2">'+ value.deathsPerOneMillion +'</b> <br> <b>Total Tests : </b><b class="count2">'+ value.totalTests +'</b> <br> <b>Tests Per One Million : </b><b class="count2">'+ value.testsPerOneMillion +'</b></span></div></div>';
            $('.countryWise').append(content);
        }
    }
    
    counterWithCommasNumber('count2');
}

function getReport() {
    var report          = $('#countryList').val();
    
    if(report == 'zero') {
        $('.img-fluid').css("display", "none");
        alert('Please, Select Country !');
        return;
    }
    
    $(".loader").css("display", "block");
    $("#card1").css("display", "none");
    
    $.ajax({
        url: 'https://covid19api.io/api/v1/ReportsByCountries/' + report,
        success: function(response) {
            //console.log(data)]
                
            var report   = response.report;

            setCountriesWiseCases(report);
            
            $(".loader").css("display", "none");
            $("#card1").css("display", "block");
        },
        error: function() {
            $(".loader").css("display", "none");
            $("#card1").css("display", "block");
            alert("System seems to be offline, try again!");
        }
    });
}

function setCountriesWiseCases(data) {
    $('.bg-text').empty();
    $("#flag").attr("src", data.flag);
    $('#country_name').html(capitalize(data.country));
    
    var active = data.cases - data.deaths - data.recovered;
    
    var deathPer        = (data.deaths / data.cases) * 100;
    var recoveredPer    = (data.recovered / data.cases) * 100;
    var activePer       = (active / data.cases) * 100;
    
    $('.bg-text').append('<h5>Cases - <b class = "count3">' + data.cases + '</b></h5>');
    $('.bg-text').append('<h5>Active - <b class = "count3">' + active + '</b> (' + activePer.toFixed(2) + ' %) </h5>');
    $('.bg-text').append('<h5>Deaths - <b class = "count3">' + data.deaths + '</b> (' + deathPer.toFixed(2) + ' %) </h5>');
    $('.bg-text').append('<h5>Recovered - <b class = "count3">' + data.recovered + '</b> (' + recoveredPer.toFixed(2) + ' %) </h5>');
    $('.img-fluid').css("display", "block");
    counterWithCommasNumber('count3');
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getTopTenCountriesByDeath() {
    countriesData.sort(function(a, b) {
        return b.deaths - a.deaths
    });
    
    var totalXP = [];

    for(var j = 1; j <= 10; j++) {
        var obj1  = countriesData[j];
                
        totalXP.push({
            label : obj1.country, y : obj1.deaths
        });
    }
    
    var options = {
        theme: "dark2",
        width: 450,
        height:260,
        animationEnabled: true,
        legend: {
            maxWidth: 350,
            itemWidth: 120
        },

        data: [{
                type: "doughnut",
                innerRadius: "40%",
                toolTipContent: "<b>{label}</b>: {y} (#percent%)",
                indexLabelFontSize: 12,
                showInLegend: "true",
                legendText: "{label}",
                indexLabel: "{label} (#percent%)",
                //yValueFormatString: "#,##0,,.## Million",
                dataPoints: totalXP
        }]
    };
    
    var options1 = {
        theme: "dark2",
        width: 450,
        height:260,
        animationEnabled: true,
        legend: {
            maxWidth: 350,
            itemWidth: 120
        },

        data: [{
                type: "column",
                indexLabelFontSize: 12,
                //yValueFormatString: "#,##0,,.## Million",
                dataPoints: totalXP
        }]
    };

    $("#chartContainer").CanvasJSChart(options);
    $("#chartContainer1").CanvasJSChart(options1);
    $(".modal-title").html("Top Ten Countries By Death");
    $("#myModal").modal('show');
}

function getTopTenCountriesByTotal() {
    countriesData.sort(function(a, b) {
        return b.cases - a.cases
    });
    
    var totalXP = [];

    for(var j = 1; j <= 10; j++) {
        var obj1  = countriesData[j];
                
        totalXP.push({
            label : obj1.country, y : obj1.cases
        });
    }
    
    var options = {
        theme: "dark2",
        width: 450,
        height:260,
        animationEnabled: true,
        legend: {
            maxWidth: 350,
            itemWidth: 120
        },

        data: [{
                type: "doughnut",
                innerRadius: "40%",
                toolTipContent: "<b>{label}</b>: {y} (#percent%)",
                indexLabelFontSize: 12,
                showInLegend: "true",
                legendText: "{label}",
                indexLabel: "{label} (#percent%)",
                //yValueFormatString: "#,##0,,.## Million",
                dataPoints: totalXP
        }]
    };

    var options1 = {
        theme: "dark2",
        width: 450,
        height:260,
        animationEnabled: true,
        legend: {
            maxWidth: 350,
            itemWidth: 120
        },

        data: [{
                type: "column",
                indexLabelFontSize: 12,
                //yValueFormatString: "#,##0,,.## Million",
                dataPoints: totalXP
        }]
    };

    $("#chartContainer").CanvasJSChart(options);
    $("#chartContainer1").CanvasJSChart(options1);
    $(".modal-title").html("Top Ten Countries By Total Cases");
    $("#myModal").modal('show');
}

function getTopTenCountriesByActive() {
    countriesData.sort(function(a, b) {
        return (b.cases - b.recovered - b.deaths) - (a.cases - a.recovered - a.deaths)
    });
    
    var totalXP = [];

    for(var j = 1; j <= 10; j++) {
        var obj1  = countriesData[j];
                
        totalXP.push({
            label : obj1.country, y : (obj1.cases - obj1.recovered - obj1.deaths)
        });
    }
    
    var options = {
        theme: "dark2",
        width: 450,
        height:260,
        animationEnabled: true,
        legend: {
            maxWidth: 350,
            itemWidth: 120
        },

        data: [{
                type: "doughnut",
                innerRadius: "40%",
                toolTipContent: "<b>{label}</b>: {y} (#percent%)",
                indexLabelFontSize: 12,
                showInLegend: "true",
                legendText: "{label}",
                indexLabel: "{label} (#percent%)",
                //yValueFormatString: "#,##0,,.## Million",
                dataPoints: totalXP
        }]
    };

    var options1 = {
        theme: "dark2",
        width: 450,
        height:260,
        animationEnabled: true,
        legend: {
            maxWidth: 350,
            itemWidth: 120
        },

        data: [{
                type: "column",
                indexLabelFontSize: 12,
                //yValueFormatString: "#,##0,,.## Million",
                dataPoints: totalXP
        }]
    };

    $("#chartContainer").CanvasJSChart(options);
    $("#chartContainer1").CanvasJSChart(options1);
    $(".modal-title").html("Top Ten Countries By Active Cases");
    $("#myModal").modal('show');
}

function getTopTenCountriesByRecovered() {
    countriesData.sort(function(a, b) {
        return b.recovered - a.recovered
    });
    
    var totalXP = [];

    for(var j = 1; j <= 10; j++) {
        var obj1  = countriesData[j];
                
        totalXP.push({
            label : obj1.country, y : obj1.recovered
        });
    }
    
    var options = {
        theme: "dark2",
        width: 450,
        height:260,
        animationEnabled: true,
        legend: {
            maxWidth: 350,
            itemWidth: 120
        },

        data: [{
                type: "doughnut",
                innerRadius: "40%",
                toolTipContent: "<b>{label}</b>: {y} (#percent%)",
                indexLabelFontSize: 12,
                showInLegend: "true",
                legendText: "{label}",
                indexLabel: "{label} (#percent%)",//yValueFormatString: "#,##0,,.## Million",
                dataPoints: totalXP
        }]
    };
    
    var options1 = {
        theme: "dark2",
        width: 450,
        height:260,
        animationEnabled: true,
        legend: {
            maxWidth: 350,
            itemWidth: 120
        },

        data: [{
                type: "column",
                indexLabelFontSize: 12,
                //yValueFormatString: "#,##0,,.## Million",
                dataPoints: totalXP
        }]
    };

    $("#chartContainer").CanvasJSChart(options);
    $("#chartContainer1").CanvasJSChart(options1);
    $(".modal-title").html("Top Ten Countries By Recovered");
    $("#myModal").modal('show');
}

function someInfo() {
    $(".modal-title").html("Some prevention on Corona Virus");
    $("#myModal1").modal('show');
}

function showGraph(id, cnt, confirmed, recovered, deaths) {
    
    if(id) {

        var active = confirmed - recovered - deaths;
        var totalXP = [];

       //totalXP.push({label : 'Confirmed', y : confirmed});
       totalXP.push({label : 'Recovered', y : recovered});
       totalXP.push({label : 'Deaths', y : deaths});
       totalXP.push({label : 'Active', y : active});
       
       CanvasJS.addColorSet("colorShades",
                [//colorSet Array

                "#4C9900",
                "#CC0000",
                "#FF8000"               
                ]);
        
        var options = {
            //theme: "dark2",
            width: 400,
            height:260,
            animationEnabled: true,
            colorSet: "colorShades",
            title:{
                text: "Confirmed Cases (Active + Deaths + Recovered)",
                fontFamily: "tahoma",
                fontWeight: "bold",
                fontSize: 14
            },
            legend: {
                maxWidth: 350,
                itemWidth: 120
            },
    
            data: [{
                    type: "doughnut",
                    innerRadius: "40%",
                    toolTipContent: "<b>{label}</b>: {y} (#percent%)",
                    indexLabelFontSize: 12,
                    showInLegend: "true",
                    legendText: "{label}",
                    indexLabel: "{label} (#percent%)",
                    //yValueFormatString: "#,##0,,.## Million",
                    dataPoints: totalXP
            }]
        };
        
        var options1 = {
            //theme: "dark2",
            width: 400,
            height:260,
            animationEnabled: true,
            colorSet: "colorShades",
            title:{
                text: "Confirmed Cases (Active + Deaths + Recovered)",
                fontFamily: "tahoma",
                fontWeight: "bold",
                fontSize: 14
            },
            legend: {
                maxWidth: 350
            },
    
            data: [{
                    type: "column",
                    //yValueFormatString: "#,##0,,.## Million",
                    dataPoints: totalXP
            }]
        };

        $("#chartContainer2").CanvasJSChart(options);
        $("#chartContainer3").CanvasJSChart(options1);
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function counterWithCommasNumber(className) {
    $('.' + className).each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                if(now > 0) {
                    $(this).text(Math.ceil(now).toLocaleString('en'));
                } else {
                    $(this).text(Math.ceil(0).toLocaleString('en'));
                }
            }
        });
    });
}

function convertNumberInWords() {
    $('.count1').each(function () {
        if($(this).text() > 0) {
            $(this).text(convertNumberToWord($(this).text()));
        }
    });
}

function disableConsole() {
    console.log     = function(){};
    console.error   = function(){};
    window.onerror= function() {
        console = null;
        return true;
    }
}

window.addEventListener("touchstart", ontouchmove);
window.addEventListener("touchmove", ontouchmove);
window.addEventListener("touchend", ontouchmove);

function ontouchmove(e){
  if(e.cancelable){
    e.cancelable = false;
    disableConsole();
  }
}

function convertNumberToWord(inputNumber) {

    var str     = new String(inputNumber);
    var splt     = str.split("");
    var rev     = splt.reverse();
    var once     = ['Zero', ' One', ' Two', ' Three', ' Four', ' Five', ' Six', ' Seven', ' Eight', ' Nine'];
    var twos     = ['Ten', ' Eleven', ' Twelve', ' Thirteen', ' Fourteen', ' Fifteen', ' Sixteen', ' Seventeen', ' Eighteen', ' Nineteen'];
    var tens     = ['', 'Ten', ' Twenty', ' Thirty', ' Forty', ' Fifty', ' Sixty', ' Seventy', ' Eighty', ' Ninety'];

    numLength     = rev.length;
    var word     = new Array();
    var j         = 0;

    for (i = 0; i < numLength; i++) {
        switch (i) {
            case 0:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) { word[j] = '';
                } else { word[j] = '' + once[rev[i]];}
                word[j] = word[j];
                break;

            case 1:
                aboveTens();
                break;

            case 2:
                if (rev[i] == 0) {word[j] = '';
                } else if ((rev[i - 1] == 0) || (rev[i - 2] == 0)) {
                    word[j] = once[rev[i]] + " Hundred ";
                } else {word[j] = once[rev[i]] + " Hundred and";
                }
                break;

            case 3:
                if (rev[i] == 0 || rev[i + 1] == 1) {word[j] = '';
                } else {word[j] = once[rev[i]];}
                
                if ((rev[i + 1] != 0) || (rev[i] > 0)) {word[j] = word[j] + " Thousand";}
                break;
            case 4:
                aboveTens();
                break;

            case 5:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {word[j] = '';} else {
                    word[j] = once[rev[i]];}
                
                if (rev[i + 1] !== '0' || rev[i] > '0') {word[j] = word[j] + " Lakh";}
                 
                break;

            case 6:
                aboveTens();
                break;

            case 7:
                if ((rev[i] == 0) || (rev[i + 1] == 1)) {word[j] = '';
                } else {word[j] = once[rev[i]];}
               
                if (rev[i + 1] !== '0' || rev[i] > '0') {word[j] = word[j] + " Crore";}                
                break;

            case 8:
                aboveTens();
                break;

            default: break;
        }
        j++;
    }

    function aboveTens() {
        if (rev[i] == 0) { word[j] = ''; }
        else if (rev[i] == 1) { word[j] = twos[rev[i - 1]]; }
        else { word[j] = tens[rev[i]]; }
    }

    word.reverse();
    var finalOutput = '';
   
    for (i = 0; i < numLength; i++) {
        finalOutput = finalOutput + word[i];
    }
    
    return finalOutput;
}

function filterTable() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myCodeTable");
  tr = document.getElementsByClassName("countryWiseFilter");
  
  for (i = 0; i < tr.length; i++) {
    td      = tr[i].getElementsByClassName("card-header")[0];
   
    if (td) {
      txtValue = td.textContent || td.innerText;
      
      //console.log(txtValue.toUpperCase().indexOf(filter));
      
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        
      } else {
        tr[i].style.display = "none";
      }
    } 
    
  }
}

function goToPosition(elementId, slideSpeed) {
    $('html,body').animate({
        scrollTop: $("." + elementId).offset().top},
        slideSpeed);
}

function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


function applyCollapsible() {
    var coll= document.getElementsByClassName("collapsible");
    var i;
    
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
        this.classList.toggle("active2");
        var content = this.nextElementSibling;
        
        if (content.style.maxHeight){
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        } 
      });
    }
}

function setProtectYourselfData() {
    
    for (let [key, value] of protect) {
        var content = '<button class="collapsible"><b>'+ key +'</b></button><div class = "content3"><div class="card-deck">';
        
        for(var i = 0; i < value.length; i++) {
            content += '<div class="card"><div class="text-center"><img src = "'+ value[i] +'"/></div></div>';
        }
        
        content += "</div></div>";
        
        $("#protectYourselfDetails").append(content);
    }
}

function setAboutCovidData() {
    var content = "";
    
    for(var i = 0; i < aboutCovidArr.length; i++) {
        content += '<div class="card" style = "border-radius: 15px 50px;"><div class="card-body box-shadow bg-info"><p>'+ aboutCovidArr[i] +'</p></div></div>';
    }
    
    $("#aboutCovidData").append(content);
}

function IndiaCasesByStates() {
    $(".loader").css("display", "block");
    
    $.ajax({
            url: 'https://covid19api.io/api/v1/IndiaCasesByStates',
            success: function(response) {
                //console.log(data)]
                
                var indiaData   = response.data;
                
                $('#reportTable thead').empty();
                $('#reportTable tbody').empty();

                setIndianStateWiseData(indiaData[0]);
                
                $(".loader").css("display", "none");
                
            },
            error: function() {
                alert("System seems to be offline, try again!");
            }
        });
}

function setIndianStateWiseData(indiaData) {
    var list    = indiaData.table;
    
    var columnArray    = [];
    
    columnArray.push("<td style='text-align: center; vertical-align: middle;'><b>State</b></td>");
    columnArray.push("<td style='text-align: center; vertical-align: middle;'>Active</td>");
    columnArray.push("<td style='text-align: center; vertical-align: middle;'>Confirmed</td>");
    columnArray.push("<td style='text-align: center; vertical-align: middle;'>Deaths</td>");
    columnArray.push("<td style='text-align: center; vertical-align: middle;'>Recovered</td>");    
//    columnArray.push("<td style='text-align: center; vertical-align: middle;'>Last Updated Time</td>");
    
    $('#reportTable thead').append('<tr class = "table-info">' + columnArray.join(' ') + '</tr>');
    
    columnArray    = [];
    
    for(var i = 0; i < list.length; i++) {
        columnArray.push("<td style='text-align: center; vertical-align: middle;'>" + list[i].state + "</td>");
        columnArray.push("<td style='text-align: center; vertical-align: middle;'>" + list[i].active + "</td>");
        columnArray.push("<td style='text-align: center; vertical-align: middle;'>" + list[i].confirmed + "</td>");
        columnArray.push("<td style='text-align: center; vertical-align: middle;'>" + list[i].deaths + "</td>");
        columnArray.push("<td style='text-align: center; vertical-align: middle;'>" + list[i].recovered + "</td>");    
    //    columnArray.push("<td style='text-align: center; vertical-align: middle;'>" + list[i].lastupdatedtime + "</td>");
        
        $('#reportTable tbody').append('<tr>' + columnArray.join(' ') + '</tr>');
        columnArray    = [];
    }
}

function fatalityRateByAge() {
     $(".loader").css("display", "block");
    
    $.ajax({
            url: 'https://covid19api.io/api/v1/FatalityRateByAge',
            success: function(response) {
                //console.log(data)]
                
                var indiaData   = response.table;
                
                $('#reportTable1 thead').empty();
                $('#reportTable1 tbody').empty();

                setFatalityRateByAgeData(indiaData);
                
            },
            error: function() {
                alert("System seems to be offline, try again!");
            }
        });
}

function setFatalityRateByAgeData(indiaData) {
    var columnArray    = [];
    
    columnArray.push("<td style='text-align: center; vertical-align: middle;'>Age</td>");
    columnArray.push("<td style='text-align: center; vertical-align: middle;'>Death Rate<br>Confirmed Cases</td>");
    columnArray.push("<td style='text-align: center; vertical-align: middle;'>Death Rate<br>All Cases</td>");
    
    $('#reportTable1 thead').append('<tr class = "table-info">' + columnArray.join(' ') + '</tr>');
    
    columnArray    = [];
    
    for(var i = 0; i < indiaData.length; i++) {
        columnArray.push("<td style='text-align: center; vertical-align: middle;'>" + indiaData[i].Age + "</td>");
        columnArray.push("<td style='text-align: center; vertical-align: middle;'>" + indiaData[i].DeathRateConfirmedCases + "</td>");
        columnArray.push("<td style='text-align: center; vertical-align: middle;'>" + indiaData[i].DeathRateAllCases + "</td>");
        
        $('#reportTable1 tbody').append('<tr>' + columnArray.join(' ') + '</tr>');
        columnArray    = [];
    }
    
    $(".loader").css("display", "none");
}