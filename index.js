$(".btn").click(function () {
    var yearvalue = $(".yearinput").val();
    var monthvalue = $(".monthinput").val();
    var dayvalue = $(".dayinput").val();


    if(dayvalue > 31){
        $(".dayy").css("color","red");
        $(".dayinput").css("border-color","red");
        if(monthvalue > 12){
            $(".monthh").css("color","red");
            $(".monthinput").css("border-color","red");
        }
        if(yearvalue > 2023){
            $(".yearr").css("color","red");
            $(".yearinput").css("border-color","red");
        }
    }
    else if(monthvalue > 12){
        $(".monthh").css("color","red");
        $(".monthinput").css("border-color","red");
        if(yearvalue > 2023){
            $(".yearr").css("color","red");
            $(".yearinput").css("border-color","red");
        }
    }
    else if(yearvalue > 2023){
        $(".yearr").css("color","red");
        $(".yearinput").css("border-color","red");
    }
    else{
        yearvalue = 2022 - yearvalue;
        monthvalue = 12 - monthvalue + 4;
        dayvalue = 30 - dayvalue + 5;
    
        $(".y").text(yearvalue);
        $(".m").text(monthvalue);
        $(".d").text(dayvalue);
    }

});

