$( document ).ready(function() {
    var reset = 0;
    $(".box_menu ul li a, .nav ul li a").click(function(){
        var flag = 0;
        if(($("body").attr("class") == undefined) || ($("body").attr("class") == "") ){
            flag = 1000;
        };

        $("body").attr("class" , "");
        $(".container .inner > div").removeClass("on");
        $(".box_menu ul li").removeClass("on");
        $(".nav ul li").removeClass("on");
        var bg = $(this).parent().attr("class");
        var idx = $(this).parent().index();
        $(".box_menu ul li").eq(idx).addClass("on");
        if(bg=="profile"){
            $("body").addClass("bg01");
        }else if(bg=="project"){
            $("body").addClass("bg02");
        }else if(bg=="skill"){
            $("body").addClass("bg03");
        }else if(bg=="contact"){
            $("body").addClass("bg04");
        }else if(bg=="Study"){
            $("body").addClass("bg05");
        }else if(bg=="none"){
            $("body").addClass("bg06");
        }

        $(".box_menu ul li").stop().animate({
            top:0,
            left:0
        }, flag, function(){
            if(bg=="profile"){
                $(".box_profile").addClass("on");
            }else if(bg=="project"){
                $(".box_project").addClass("on");
            }else if(bg=="skill"){
                $(".box_skill").addClass("on"); 
            }else if(bg=="contact"){
                $(".box_contact").addClass("on");
            }else if(bg=="Study"){
                $(".box_study").addClass("on");
            }else if(bg=="none"){
                $(".box_none").addClass("on");
            }
            reset = 1;
        });
    });
    $(".logo a").click(function(){
        if(reset == 1){
            $("body").attr("class" , "");
            $(".container .inner > div").removeClass("on");
            $(".box_menu ul li").removeClass("on");

            for(var i = 1; i < 6; i++){
                $(".box_menu ul li").eq(i).stop().animate({
                    top:i < 3 ? 0 : 340,
                    left:(i%3) * 340,
                },1000);
            }
            reset = 0;
        };               
    });
    $(".box_contents li").mouseenter(function(){
        $(this).children(".sub_menu").stop().animate({
            top:0,
        },300);
    });
    $(".box_contents li").mouseleave(function(){
        $(this).children(".sub_menu").stop().animate({
            top:-100,
        },500);
    });
});