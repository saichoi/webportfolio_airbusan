$(document).ready(function () {

    var ww = $(window).width();
    var wh = $(window).height();
    var bg = ['#284aa1', '#c4df9b', '#a3d39c', '#82ca9c', '#7accc8', '#6dcff6'];


    function layout() {

        if (ww >= 960 && ww < 1920) {

            $('#wrap').css({
                width: ww * 6,
                height: wh,
                //backgroundColor:'lightgray',
            });

            $('header').css({
                width: ww * 0.05,
                height: wh,
                backgroundColor: '#fff',
                position: 'fixed',
                zIndex: 99,
            });

            $('#in_header').css({
                width: '100%',
                height: wh * 0.6,
                float: 'left',
                //backgroundColor:'pink'
            });

            $('#logo').css({
                width: '100%',
                height: wh * 0.03,
                float: 'left',
                //backgroundColor:'crimson'
            });

            $('#logo img').css({
                width: '100%',
                marginTop: 5,
            });

            $('#menu_wrap').css({
                width: '100%',
                height: wh * 0.3,
                //backgroundColor:'gold',
                margin: '50px 0',
                float: 'left'
            });

            $('#menu_wrap>li').css({
                width: '100%',
                height: wh * 0.08,
                position: 'relative',
                //backgroundColor:'pink',
                display: 'block'
            });

            $('.h_icon>a>img').css({
                width: '60%',
                margin: '0 auto'
            });

            $('.hover_icon').css({
                width: '100%',
                height: ww * 0.1,
                backgroundcolor: '#fff',
                position: 'absolute',
                top: 0,
                left: 0,
                fontSize: ww * 0.009,
                textAlign: 'center',
                lineHeight: '50px',
                display: 'none'
            });

            /*히든메뉴*/

            $('#ham').css({
                width: ww * 0.05,
                height: ww * 0.05,
                backgroundColor: '#fff',
                float: 'left',
                position: 'relative',
                marginTop: 50,
                zIndex: 999
            });


            $('#hidden_menu_wrap').css({
                width: ww * 0.2,
                height: wh,
                backgroundColor: '#fff',
                position: 'fixed',
                top: 0,
                left: -ww * 0.2,
                zIndex: 99,
                //display:'none'
            });

            $('#hidden_logo_wrap').css({
                width: '100%',
                height: 'auto',
                backgroundColor: '#olive',
                float: 'left'
            });

            $('#hidden_logo').css({
                width: '100%',
                height: wh * 0.2,
                float: 'left',
                //backgroundColor:'gold'
            });

            $('#hidden_logo>img').css({
                width: '90%',
                margin: '0 auto'
            });

            $('#hidden_icon_wrap').css({
                width: '100%',
                height: wh * 0.1,
                //backgroundColor:'pink',
                float: 'left'
            });

            $('.hd_icon').css({
                width: '33.333%',
                height: '100%',
                //backgroundColor:'hotpink',
                float: 'left'
            });

            $('.hd_icon>img').css({
                width: '70%',
                margin: '0 auto'
            });

            $('#hidden_top_menu').css({
                width: '90%',
                height: ww * 0.2,
                //backgroundColor:'olive',
                float: 'left',
                marginTop: 50,
                textAlign: 'right',
                fontSize: ww * 0.016
            });

            $('#hidden_top_menu>div').css({
                width: '100%',
                height: '25%',
                //backgroundColor:'gold',
                float: 'right',
            });

            /*hidden_menu_wrap end*/

            //header end



            $('#section').css({
                width: ww * 6,
                height: wh,
                //backgroundColor:'gray'
            });

            $('section').css({
                width: ww,
                height: wh,
                /*backgroundColor:function(index){
                    return bg[index];
                },*/
                float: 'left',
                position: 'relative',
            });

            $('#cloud').css({
                width: ww,
                height: wh,
                position: 'relative',
                //backgroundColor:'lightblue'
            });

            $('.cloud').css({
                width: ww * 0.6,
                height: wh * 0.6,
                //backgroundColor:'cadetblue',
                position: 'absolute',
            });

            $('.cloud>img').css({
                width: '100%'
            });

            $('#l_cloud').css({
                bottom: 0,
                left: 0,
                display: 'block'
            });

            $('#r_cloud').css({
                top: -5,
                right: 0,
                display: 'block'
            });

            $('#airplane').css({
                width: ww * 0.65,
                position: 'absolute',
                top: -30,
                left:300,
                //display:'none'
            });
            
            

            $('#airplane>img').css({
                width: '100%',
            });

            $('#welcome').css({
                width: ww * 0.95,
                height: wh * 0.1,
                position: 'absolute',
                left: ww * 0.05,
                top: wh * 0.45,
                color: '#fff',
                textAlign: 'center',
                fontWeight: 900,
                lineHeight: '65px',
                fontSize: ww * 0.025,
                textShadow: '2px 4px 2px #282829'
            });

            //메인 검색창
            $('#search_container').css({
                width: ww * 0.7,
                height: wh * 0.22,
                //backgroundColor:'goldenrod',
                position: 'absolute',
                top: wh * 0.55,
                left: '55%',
                marginLeft: -(ww * 0.7) / 2,

            });

            //선택창
            $('#choice').css({
                width: '35%',
                height: ww * 0.04,
                backgroundColor: '#282829',
                color: '#fff',
                marginLeft: '5%',
                boxShadow: '3px 3px 5px #282829',
                fontSize:ww*0.01

            });

            $('#choice_1>li').css({
                width: '33%',
                height: ww * 0.02,
                float: 'left',
                textAlign: 'center',
                lineHeight: '32px',
            });

            $('#choice_2>li').css({
                width: '33%',
                height: ww * 0.02,
                textAlign: 'center',
                lineHeight: '32px',
                float: 'left'
            });

            $('#choice .active').css({
                backgroundColor: '#fff',
                color: '#282829'
            });

            //조건창
            $('#search_con').css({
                width: '90%',
                height: '60%',
                backgroundColor: '#fff',
                margin: '0 auto',
                boxShadow: '3px 3px 5px #282829',
            });

            $('#search_con>li').css({
                height: '45%',
                //backgroundColor:'lightblue',
                float: 'left',
                marginBottom: '0.5%',
                marginLeft: '2%',
                marginRight: '1%',
            });

            $('#search_con>li:nth-child(1),#search_con>li:nth-child(2)').css({
                width: '25%',
                borderBottom: '1px solid gray'
            });

            $('#search_con>li:nth-child(3)').css({
                width: '40%',
                borderBottom: '1px solid gray'
            });

            $('#search_con>li:nth-child(4)').css({
                width: '50%',
                borderBottom: '1px solid gray'
            });

            $('#search_con>li:nth-child(5)').css({
                width: '10%',
                height: '30%',
                marginLeft: '5%',
                marginTop: '1.5%',
                backgroundColor: '#658cef',
                textAlign: 'center',
                color: '#fff',
                lineHeight: '35px'
            });

            //항공권 검색 버튼
            $('#search_con>li:nth-child(6)').css({
                width: '20%',
                marginLeft: '8%',
                backgroundColor: '#284aa1',
                fontSize: ww * 0.014,
                color: '#fff',
                textAlign: 'center',
                lineHeight: '46px',
                fontWeight: 500
            });

            //검색창 아이콘 
            $('.s_icon').css({
                width: ww * 0.03,
                height: ww * 0.03,
                //backgroundColor:'pink',
                marginRight: 5,
                float: 'left'
            });

            $('.s_icon>img').css({
                width: '100%',
            });

            //인원수 선택
            $('#search_con>li:nth-child(1)>select,#search_con>li:nth-child(2)>select').css({
                width: ww * 0.1,
                height: ww * 0.018,
                marginTop: 10,
                marginLeft: 10,
                border: 'none',
                fontSize: ww * 0.014,
            });

            //날짜선택
            $('#schedule>input').css({
                width: ww * 0.09,
                height: ww * 0.018,
                float: 'left',
                marginTop: 10,
                marginLeft: 10,
                border: 'none',
            });

            $('#schedule>p').css({
                width: ww * 0.01,
                height: ww * 0.01,
                float: 'left',
                textAlign: 'center',
                lineHeight: '50px',
                marginLeft: 5
            });

            $('.ps').css({
                width: '33%',
                float: 'left',
            });

            $('.ps>p').css({
                width: '33%',
                float: 'left',
                marginTop: ww * 0.01
            });

            $('.ps>select').css({
                marginTop: ww * 0.01
            });
            //search_container end

            //메인페이지 이동 
            $('#next').css({
                width: 70,
                height: 50,
                //backgroundColor:'gray',
                position: 'absolute',
                right: 80,
                bottom: 80,
            });


            $('#next>img').css({
                width: '90%',
                //backgroundColor:'pink',
                position: 'absolute',
                top: 0,
                left: 0
            });


            $('#section_0').css({
                backgroundColor: '#284aa1',

                position: 'relative',
                top: 0,
                left: 0,
                zIndex: 9,
                overflow: 'hidden'
            });


            /*section_0 end*/

            $('#section_1').css({
                backgroundImage: 'url(img/section_1/bgimg_1.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                //display:'none'
            });

            $('#elevator').css({
                width: ww * 0.6,
                height: wh * 0.8,
                //position: 'absolute',
                //bottom: wh * 0.006,
                //left: 0,
                float:'left',
                marginTop:200
                //backgroundColor:'cadetblue'
            });

            $('#section_1>.help_con').css({
                width: ww * 0.1,
                height: ww*0.06,
                //position: 'absolute',
                //top: '33.1%',
                //left: '58.8%',
                float:'left',
                marginTop:ww*0.158,
                marginLeft:-ww*0.01,
                borderRadius: '50%',
                textAlign: 'center',
                lineHeight: ww * 0.05 + 'px',
                fontSize:ww*0.01
            });

            $('.help_con').css({
                color: 'rgba(0,0,0,0)',
                backgroundColor: 'rgba(255,255,255,0)',
                //display:'none'
                fontWeight: 900
            });


            $('#notice').css({
                width: ww * 0.04,
                height: ww * 0.055,
                backgroundColor: 'rgba(0,0,0,0.0)',
                float:'left',
                marginTop:ww*0.30,
                marginLeft:ww*0.19,
                position: 'relative',
                //top: '60%',
                //right: '8.2%'
            });

            $('#notice>img').css({
                width: ww * 0.15,
                position: 'absolute',
                right: 0,
                bottom: 0,
                border: '3px solid #5296ce',
                display: 'none'
            });

            /*section_1 end*/

            $('#section_2').css({
                backgroundImage: 'url(img/section_2/bgimg_2)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                //display:'none'
            });

            $('#section_2>.help_con').eq(0).css({
                width: '7%',
                height: '6%',
                //position: 'absolute',
                backgroundcolor: '#fff',
                //top: '53.5%',
                //left: '10.5%',
                marginTop:ww*0.2615,
                marginLeft:ww*0.105,
                float:'left',
                borderRadius: '48%',
                textAlign: 'center',
                lineHeight: ww * 0.013 + 'px',
                zIndex: 9,
                fontSize:ww*0.007
            });

            $('#section_2>.help_con').eq(1).css({
                width: '9%',
                height: '7%',
                //position: 'absolute',
                //top: '43%',
                //left: '30%',
                marginTop:ww*0.21,
                marginLeft:ww*0.125,
                float:'left',
                borderRadius: '48%',
                textAlign: 'center',
                lineHeight: ww * 0.016 + 'px',
                zIndex: 9,
                fontSize:ww*0.008
            });

            $('#section_2>.help_con').eq(2).css({
                width: '7%',
                height: '6%',
                //position: 'absolute',
                //top: '49%',
                //left: '55.3%',
                marginTop:ww*0.239,
                marginLeft:ww*0.164,
                float:'left',
                borderRadius: '48%',
                textAlign: 'center',
                lineHeight: ww * 0.014 + 'px',
                zIndex: 9,
                fontSize:ww*0.007
            });

            /*section_2 end*/

            $('#section_3').css({
                backgroundImage: 'url(img/section_3/bgimg_3.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
               //display:'none'
            });

            $('#section_3>.help_con').css({
                width: '9%',
                height: '7%',
                //position: 'absolute',
                //top: '53.5%',
                //left: '50.5%',
                float:'left',
                marginTop:ww*0.264,
                marginLeft:ww*0.503,
                borderRadius: '48%',
                textAlign: 'center',
                lineHeight: ww * 0.05 + 'px',
                fontSize:ww*0.009
            });

            /*section_3 end*/

            $('#section_4').css({
                backgroundImage: 'url(img/section_4/bgimg_4.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                //display:'none'
            });

            $('#section_4>.help_con').css({
                width: '16%',
                height: '13%',
                //position: 'absolute',
                //top: '11.5%',
                //left: '60.5%',
                float:'left',
                marginTop:ww*0.054,
                marginLeft:ww*0.61,
                borderRadius: '49%',
                textAlign: 'center',
                lineHeight: ww * 0.09 + 'px',
                fontSize: ww * 0.015,
            });

            /*section_4 end*/

            $('#section_5').css({
                backgroundImage: 'url(img/section_5/bgimg_5.png)',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                //display:'none'
            });

            $('#section_5>.help_con').eq(0).css({
                width: '6%',
                height: '6%',
                //position: 'absolute',
                //top: '75.5%',
                //left: '37.5%',
                float:'left',
                marginTop:ww*0.37,
                marginLeft:ww*0.375,
                borderRadius: '48%',
                textAlign: 'center',
                lineHeight: ww * 0.018 + 'px',
                zIndex: 9,
                fontSize:ww*0.007
            });

            $('#section_5>.help_con').eq(1).css({
                width: '6%',
                height: '6%',
                //position: 'absolute',
                //top: '72.5%',
                //left: '68%',
                float:'left',
                marginTop:ww*0.356,
                marginLeft:ww*0.245,
                borderRadius: '48%',
                textAlign: 'center',
                lineHeight: ww * 0.018 + 'px',
                fontSize:ww*0.007
            });

            /*section_5 end*/

            $('footer').css({
                width: ww,
                height: wh * 0.2,
                backgroundColor: 'rgba(204,204,204,0.5)',
                position: 'fixed',
                bottom: 0,
                left: 0,
            });

            $('#in_footer').css({
                width: ww * 0.6,
                height: wh * 0.1,
                //backgroundColor:'pink',
                marginLeft: 100,
                float: 'left',
                fontSize: ww * 0.0087,
                marginTop: 50
            });

            $('#f_menu').css({
                color: 'gray',
                fontWeight: 700,
                marginBottom: 10
            });

            $('#copyright').css({
                color: 'gray'
            });

            $('#quick_wrap').css({
                width: ww * 0.3,
                height: ww * 0.08,
                //backgroundColor:'pink',
                float: 'left',
                position:'relative',
                marginTop: 20,
                marginLeft: 20
            });

            $('#f_airplane').css({
                width: ww * 0.05,
                height: ww * 0.03, //backgroundColor:'lightblue',
                marginLeft:0,
                position:'absolute',
                top:0,
                left:0
            });

            $('#f_airplane>img').css({
                width: '100%'
            });

            $('#quick_btn').css({
                width: '100%',
                height: 5,
                boxShadow: '1px 1px 5px #282829',
                backgroundColor: 'rgba(170,170,172,0.5)',
                float: 'left',
                margin: '20px auto',
                borderRadius: '20%',
                position: 'absolute',
                bottom:0
            });

            $('#quick_btn>li').css({
                width: ww * 0.005,
                height: ww * 0.005,
                borderRadius: '50%',
                backgroundColor: '#fff',
                float: 'left',
                marginLeft: ww * 0.025,
                marginRight: ww * 0.02
            });

            $('#quick_btn .act').css({
                backgroundColor: '#284aa1'
            });
            
            


            /*footer end*/

        } //note end
        
        

    } //layout end
    layout();

    $(window).resize(function () {
        ww = $(window).width();
        wh = $(window).height();
        layout();
    });





}); //end
