$(document).ready(function () {

    var ww = $(window).width();
    var wh = $(window).height();

    /*마우스 휠 좌우로 넘기기1*/
    /*$('html, body, *').mousewheel(function (e, delta) {
        this.scrollLeft -= (delta);
        e.preventDefault();
    });*/

    //마우스 휠 좌우로 넘기기2
    // (function () {
    //     function scrollHorizontally(e) {
    //         e = window.event || e;
    //         var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    //         document.documentElement.scrollLeft -= (delta * 40); // Multiplied by 40
    //         document.body.scrollLeft -= (delta * 40); // Multiplied by 40
    //         e.preventDefault();
    //     }
    //     if (window.addEventListener) {
    //         // IE9, Chrome, Safari, Opera
    //         window.addEventListener("mousewheel", scrollHorizontally, false);
    //         // Firefox
    //         window.addEventListener("DOMMouseScroll", scrollHorizontally, false);
    //     } else {
    //         // IE 6/7/8
    //         window.attachEvent("onmousewheel", scrollHorizontally);
    //     }
    // })();


    //비행기 움직임 이벤트
    /*$(window).scroll(function () {

        sct = $(window).scrollLeft();

        var ww = $(window).width();

        if (sct > 200) {
            $('#airplane').animate({
                marginLeft:200,
                opacity:0
            },1500);

    });*/


    //구름 움직임
    var c1 = 0;

    $('#l_cloud>img').click(function () {

        if (c1 == 0) {
            $('#l_cloud>img').animate({
                marginTop: 3
            }, 2000);
            c1++;
        } else if (c1 == 1) {
            $('#l_cloud>img').animate({
                marginTop: -3
            }, 2000);
            c1 = 0;
        }

    });

    var c2 = 0;

    $('#r_cloud>img').click(function () {

        if (c2 == 0) {
            $('#r_cloud>img').animate({
                marginTop: 3
            }, 2500);
            c2++;
        } else if (c2 == 1) {
            $('#r_cloud>img').animate({
                marginTop: -3
            }, 2800);
            c2 = 0;
        }

    });

    setInterval(function () {
        $('#l_cloud>img').trigger('click');
    });

    setInterval(function () {
        $('#r_cloud>img').trigger('click');
    });



    /*히든 메뉴 나타나기*/
    var h = 0;


    $('.menu-trigger').click(function () {

        if (h == 0) {
            $('#hidden_menu_wrap').animate({
                marginLeft: ww * 0.2
            }, 500);
            h++;
        } else if (h == 1) {
            $('#hidden_menu_wrap').animate({
                marginLeft: -ww * 0.2
            }, 500);
            h = 0;
        }

    });

    //ham버튼 이벤트

    var burger = $('.menu-trigger');

    burger.each(function (index) {
        var $this = $(this);

        $this.on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active-' + (index + 1));
        })
    });




    //메뉴 아이콘 이벤트


    $('#menu_wrap div').each(function (index) {
        $(this).attr('menu-index', index);
    });
    $('.h_icon>a>img').each(function (index) {
        $(this).attr('menu-index', index);
    });
    $('#menu_wrap>li').each(function (index) {
        $(this).attr('menu-index', index);
    }).hover(function () {

        var m = $(this).attr('menu-index');

        $('.h_icon>a>img').eq(m).css({
            display: 'none'
        });

        $('#menu_wrap div').eq(m).css({
            display: 'block'
        });

    }, function () {

        $('.h_icon>a>img').css({
            display: 'block'
        });

        $('#menu_wrap div').css({
            display: 'none'
        });

    })



    //choice 이벤트

    $('#choice_1>li').each(function (index) {
        $(this).attr('choice1-index', index);
    }).click(function () {

        var ch1 = $(this).attr('choice1-index');

        $('#choice_1>li').css({
            backgroundColor: '#282829',
            color: '#fff'
        });

        $('#choice_1>li').eq(ch1).css({
            backgroundColor: '#fff',
            color: '#282829'
        });
    });

    $('#choice_2>li').each(function (index) {
        $(this).attr('choice2-index', index);
    }).click(function () {

        var ch2 = $(this).attr('choice2-index');

        $('#choice_2>li').css({
            backgroundColor: '#282829',
            color: '#fff'
        });

        $('#choice_2>li').eq(ch2).css({
            backgroundColor: '#fff',
            color: '#282829'
        });
    });


    /*$('#choice_1>li').each(function (index) {
        $(this).attr('choice1-index', index);
    }).click(function () {

        var ch1 = $(this).attr('choice1-index');

        $('#choice_1>li').removeClass('active');
        $('#choice_1>li').eq(ch1).addClass('active');

    });

    $('#choice_2>li').each(function (index) {
        $(this).attr('choice2-index', index);
    }).click(function () {

        var ch2 = $(this).attr('choice2-index');

        $('#choice_2>li').removeClass('active');
        $('#choice_2>li').eq(ch2).addClass('active');

    });
*/

    //section_0 화살표 이벤트

    var y = 0;

    $('#next>img').click(function () {

        if (y == 0) {
            $('#next>img').animate({
                marginLeft: 10
            }, 1000);
            y++;
        } else if (y == 1) {
            $('#next>img').animate({
                marginLeft: -10
            }, 1000);
            y = 0;
        }

    });

    setInterval(function () {
        $('#next>img').trigger('click');
    });


    //notice 이벤트
    var n = 0;
    $('#notice').hover(function () {

        $('#notice>img').css({
            display: 'block'
        });

    }, function () {

        $('#notice>img').css({
            display: 'none'
        });

    });


    //말주머니 이벤트
    $('.help_con').hover(function () {
        $(this).css({
            backgroundColor: '#5296ce',
//            backgroundColor:'pink',
            color: '#fff',
        });
    }, function () {
        $(this).css({
            backgroundColor: 'rgba(255,255,255,0)',
            color: 'rgba(0,0,0,0)',
            border: '0px'
        });
    });

    //푸터 퀵버튼 이벤트

    /*$('#quick_btn>li').each(function (index) {
        $(this).attr('btn-index', index)
    }).click(function () {

        var b = $(this).attr('btn-index');

        $('#f_airplane').css({
            left: ww * 0.05 * b
        });

        $('#quick_btn>li').removeClass('act');

        $('#quick_btn>li').eq(b).addClass('act');

        $('#wrap').css({
            left: ww * b
        });

    });
    */
    $('#quick_btn>li').each(function (index) {
        $(this).attr('quick-index', index);
    }).click(function () {

         bt = $(this).attr('quick-index');

        $('#quick_btn>li').css({
            backgroundColor: '#fff',
        });

        $('#quick_btn>li').eq(bt).css({
            backgroundColor: '#284aa1',
        });

        $('html,body').animate({
            scrollLeft: ww * bt
        });

        $('#f_airplane').css({
            left: (ww * 0.05) * bt
        });
    });

    $(window).scroll(function () {

        sct = $(window).scrollLeft();

        var ww = $(window).width();

        if (0 <= sct && sct < ww * 1) {
            $('#quick_btn>li').css({
                backgroundColor: '#fff',
            });

            $('#quick_btn>li').eq(0).css({
                backgroundColor: '#284aa1',
            });
            
            $('#f_airplane').css({
                left:0,
                //right:ww*0.25
            });
            
            //$('#section_1').fadeIn(1000);
        }else if (ww*1 <= sct && sct < ww * 2) {
            $('#quick_btn>li').css({
                backgroundColor: '#fff',
            });

            $('#quick_btn>li').eq(1).css({
                backgroundColor: '#284aa1',
            });
            
            $('#f_airplane').css({
                left:ww*0.05,
                //right:ww*0.2
            });
            
            
            //$('#section_2').fadeIn(1000);
        }else if (ww*2 <= sct && sct < ww * 3) {
            $('#quick_btn>li').css({
                backgroundColor: '#fff',
            });

            $('#quick_btn>li').eq(2).css({
                backgroundColor: '#284aa1',
            });
            
            $('#f_airplane').css({
                left:ww*0.1,
                //right:ww*0.15
            });
            
            //$('#section_3').fadeIn(1000);
        }else if (ww*3 <= sct && sct < ww * 4) {
            $('#quick_btn>li').css({
                backgroundColor: '#fff',
            });

            $('#quick_btn>li').eq(3).css({
                backgroundColor: '#284aa1',
            });
            
            $('#f_airplane').css({
                left:ww*0.15,
                //right:ww*0.1
            });
            
            
            //$('#section_4').fadeIn(1000);
            
        }else if (ww*4 <= sct && sct < ww * 5) {
            $('#quick_btn>li').css({
                backgroundColor: '#fff',
            });

            $('#quick_btn>li').eq(4).css({
                backgroundColor: '#284aa1',
            });
            
            $('#f_airplane').css({
                left:ww*0.2,
                //right:ww*0.05
            });
            
            //$('#section_5').fadeIn(1000);
        }else if (ww*5 <= sct && sct < ww * 6) {
            $('#quick_btn>li').css({
                backgroundColor: '#fff',
            });

            $('#quick_btn>li').eq(5).css({
                backgroundColor: '#284aa1',
            });
            
            $('#f_airplane').css({
                left:ww*0.25,
                //right:0
            });
            
        }

    });


}); //end
