$(document).ready(
    function(){
        $("aside .top").click(
            function(){
                $("html,body").animate({scrollTop:"0px"},3000); //수치속성값을 애니메이트
                return false;
            }
        );
    }
);