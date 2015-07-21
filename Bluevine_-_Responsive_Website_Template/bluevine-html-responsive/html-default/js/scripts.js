// <![CDATA[
$(function() {
	
//$('.content_box,.centercol,.btn a span').css({"border-radius":"5px", "-moz-border-radius":"5px", "-webkit-border-radius":"5px"});
$('.content_resize').css({"-webkit-box-shadow": "0px 0px 2px #e7e7e7", "-moz-box-shadow":"0px 0px 2px #e7e7e7", "box-shadow":"0px 0px 2px #e7e7e7"});


/*
$('#contactform input,#contactform textarea').css({"border-radius":"4px", "-moz-border-radius":"4px", "-webkit-border-radius":"4px"});
*/

});	

$(function () {
	
	var arr_links = location.href.split('/');
	var length = arr_links.length;
	$('.menu li').each(function () {
		if ($(this).children('a').attr('href') == arr_links[(length-1)]) {
			$(this).addClass('active');
			$(this).children('a').addClass('active');
			$(this).parents('li').addClass('active');
			$(this).parents('li').children('a').addClass('active');
		}
	})
	
	$(function(){
		$("a[rel^='prettyPhoto']").prettyPhoto({
			social_tools: false,
		});
	});



	$().UItoTop();
	
	$("#gallery, #gallery-imgs").preloader({not_preloader:'.h2_arrows img,img.h, img.r_plus, img.r_plus_overlay, .showcase-slide img, .flickr img, .sidebar_flickr img, #now_slider img'});

    $("#ticker").tweet({
        username: "twitter", // define your twitter username
        page: 1,
        avatar_size: 16, // avatar size in px
        count: 20, // how many tweets to show
        loading_text: "loading ..."
    }).bind("loaded", function () {
        var ul = $(this).find(".tweet_list");
        var ticker = function () {
                setTimeout(function () {
                    ul.find('li:first').animate({
                        marginTop: '-4em'
                    }, 500, function () {
                        $(this).detach().appendTo(ul).removeAttr('style');
                    });
                    ticker();
                }, 8000); // duration before next tick (4000 = 4 secs)
            };
        ticker();
    });

	$('#contactform_main').submit(function(){				  
		var action = $(this).attr('action');
		$.post(action, { 
			name: $('#name').val(),
			email: $('#email').val(),
			company: $('#url').val(),
			subject: $('#subject').val(),
			message: $('#message').val()
		},
			function(data){
				$('#contactform_main #submit').attr('disabled','');
				$('.response').remove();
				$('#contactform_main').before('<p class="response">'+data+'</p>');
				$('.response').slideDown();
				if(data=='Message sent!') $('#contactform_main').slideUp();
			}
		); 
		return false;
	});



});
// ]]>
