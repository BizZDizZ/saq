$(document).ready(function(){
    sliders(".detailslider", false, true, 1, 1, 720, 0);
    sliders(".discoverslider", false, true, 4, 1, 300, 80);
    sliders(".carouselSlider", false, true, 4, 1, 270, 60);
    panelControl("header > div ul li:first-of-type");
    panelcloseControl();
    panelControl("header > div input");
    panelControl(".newAdd");
    panelControl(".editAdd");
    panelControl(".deleteAdd");
    panelControl(".deleteBtn");
    panelControl(".payEnd");
    panelControl(".contactEnd");
    panelControl(".filterBtn");
    popupcloseControl();
    foldControl(".productContainer #filterPopup > div > ul > li > strong");
    foldControl(".productContainer .filter > div > ul > li > strong");
    foldControl(".wineContainer table caption");
    visibleControl(".vActiveBtn");
    newvisibleControl(".newvActiveBtn");
    parentactiveControl("footer > div:last-of-type > div:not(:last-of-type) h3")
    parentactiveControl(".accountEdit");
    parentactiveControl(".accountdetailContainer .fillBtn");
    parentactiveControl(".aboutusContainer.FAQ div .accComponent li h4")
    permissionCheck();
    backBtn();
    classchange();
});

function permissionCheck(){
    $(".before a").click(function(){
        $(this).attr("href","login.html");
    });
}
function backBtn(){
    $(".backBtn").click(function(){
        history.back(); 
    });
}
function sliders(target,indicator,conVal,maxVal,minVal,slideW,slideM){
    $(target).bxSlider({
        pager: indicator,
        controls: conVal,
        maxSlides: maxVal,
        minSlides: minVal,
        slideWidth: slideW,
        slideMargin: slideM,
        shrinkItems: true
    });
}
function panelControl(openBtn){
    var currentPanel = null;
    $(openBtn).click(function(){
        if($(this).attr("data-panel")){
            currentPanel = "#" + $(this).attr("data-panel");
        }else if($(this).attr("data-popup")){
            currentPanel = "#" + $(this).attr("data-popup");
        }
        $(currentPanel).addClass("active");
    });
    $("[class*='close']").click(function(){
        $(currentPanel).removeClass("active");
    });
}
function popupcloseControl(){
    $("#welcomePopup > .closePopup").click(function(){
        $("#welcomePopup > .closePopup").parent().removeClass("active");
    })
}
function panelcloseControl(){
    var currentPanel = null;
    $("header > div ul li:last-of-type").click(function(){
        $(this).toggleClass("closePanel");
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).toggleClass("active");
    });
}
function foldControl(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    });
}
function parentactiveControl(target){
    $(target).click(function(){
        $(this).parent().toggleClass("active");
    });
}
function visibleControl(target){
    $(target).click(function(){
        $(".passwordField").toggleClass("active");
        if($("#userPW").attr("type") == "password"){
            $("#userPW").attr("type", "text");
        }else{
            $("#userPW").attr("type", "password");
        }
    });
}
function newvisibleControl(target){
    $(target).click(function(){
        $(".newpasswordField").toggleClass("active");
        if($("#newuserPW").attr("type") == "password"){
            $("#newuserPW").attr("type", "text");
        }else{
            $("#newuserPW").attr("type", "password");
        }
    });
}
function classchange(){
	var count = 0;
	setInterval(time, 3000);
	function time(){
		var list = $("header ol li");
		list.removeClass("active");
		list.eq(count).addClass("active");
		count++;
		if(count >= list.length){
            count = 0;
        }
	}
}