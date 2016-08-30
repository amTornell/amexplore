
(function() {
	//**************      menu mobile    **************
	$("#nav-mobile").html($("#nav-main").html());
    $("#nav-trigger span").click(function(){
        if ($("nav#nav-mobile ul").hasClass("expanded")) {
            $("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
            $(this).removeClass("open");
        } else {
            $("nav#nav-mobile ul").addClass("expanded").slideDown(250);
            $(this).addClass("open");
        }
    });

    if( $('#the-profile').length ){
        console.log("the profile");
        $('.count').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 1500,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }

    if( $('#choose-influencer').length ){
        $('.mini-influencer').click(function(e){
            e.preventDefault();
            $('.mini-influencer').removeClass('selected');
            //$('')
            if ($(this).hasClass('selected')) {
                    $(this).removeClass('selected');
                    //Insert logic if you want a type of optional click/off click code
                } 
            else
                {
                    $(this).addClass('selected');
                    //Insert event handling logic
                }
        });
    }

    if( $('#choose-activities').length ){
        $("input[type=checkbox][name=activity]").click(function() {
            var bol = $("input[type=checkbox][name=activity]:checked").length >= 5;     
            $("input[type=checkbox][name=activity]").not(":checked").attr("disabled",bol);
        });
        $(".activity-item").change(function() {
            if(this.checked) {
                //Do stuff
                console.log('hola change checkbox');
                $(this).parent('.activity-info').addClass('selected');
            }else{
                $(this).parent('.activity-info').removeClass('selected');
            }
        });
    }



    





})();




//**************      / agregar fonts    **************
(function() {

	console.log("script app 2");

})();
