$(function(){
         $('.tab li').click(function() {
            var activeTab = $(this).attr('data-tab');
            $('.tab li').removeClass('current');
            $('.tab li').removeClass("on2");
            $(this).addClass("on2");
            $('.tabcontent').removeClass('current');
            $(this).addClass('current');
            $('#' + activeTab).addClass('current');
         })
         $(".TFirst").click(function(){
           var activeTab2 = $("#Fir").attr('data-tab');
           $('.tabcontent').removeClass('current');
           $('.tab li').removeClass('current');
           $('.tab li').removeClass("on2");
           $("#Fir").addClass("on2");
           $('#' + activeTab2).addClass('current');
         });
         $(".TLast").click(function(){
           var activeTab2 = $("#Las").attr('data-tab');
           $('.tabcontent').removeClass('current');
           $('.tab li').removeClass('current');
           $('.tab li').removeClass("on2");
           $("#Las").addClass("on2");
           $('#' + activeTab2).addClass('current');
         });
});
