jQuery(document).ready(function($){
	$('.navigation .default li.search a').toggle(
		function() {
			$('.search-form').fadeIn(100);
		},
		function() {
			$('.search-form').fadeOut(200);
		}
	)
    
	$(window).resize(function() {
		respondResize();
		mobileMenuResize();
	});
    
	$(window).load(function() {      
		if ($(".loading").length > 0) {
			$(".loading").fadeOut(500);
		}
	});
    
	jQuery(window).scroll(function() {
		if ($(".comments-wrapp").length > 0) {
			$wdTop = $('html').position().top;
			$cmTop = '-' + $('.comments-wrapp').position().top;
			if($wdTop < $cmTop) {
				$('.topbar').addClass('topbar-fixed');
			}else {
				$('.topbar').removeClass('topbar-fixed');
			}
		};
	});
});

function goToTop() {
	$('body,html').animate({scrollTop:0},500);
}

function faceMdItem() {
	$('.faceMdItemLnk').addClass('current');
	$('.faceItemLnk').removeClass('current');
	$('.faceMdIt').addClass('wrapp-active');
	$('.faceIt').removeClass('wrapp-active');
}

function faceItem() {
	$('.faceItemLnk').addClass('current');
	$('.faceMdItemLnk').removeClass('current');
	$('.faceIt').addClass('wrapp-active');
	$('.faceMdIt').removeClass('wrapp-active');
}
function showFaceSelect() {
	$('.smilelink').fadeIn(200);
}
function closeFaceSelect() {
	$('.smilelink').fadeOut(200);
}
function showReplyForm() {
	$('.respond-bk').addClass('is-on');
	respondResize();
}
function hiddenReplyForm() {
	$('.respond-bk').removeClass('is-on');
}
function respondResize() {
		$totalHeight = $(window).height()
		$windowHeight = $('.respond-main').height();
		$newHeight = ($(window).height() - $windowHeight) / 2;
		$('.respond-main').css({top : $newHeight + 'px'});
}
function mobileMenuResize() {
		$totalHeightMobi = $(window).height()
		$windowHeightMobi = $('.mobile .menu-wrapp .entry').height();
		$newHeightMobi = ($(window).height() - $windowHeightMobi) / 2;
		$('.mobile .menu-wrapp .entry').css({top : $newHeightMobi + 'px'});
}
function grin(tag) {
	var myField;
	tag = ' ' + tag + ' ';
if (document.getElementById('textarea') && document.getElementById('textarea').type == 'textarea') {
		myField = document.getElementById('textarea');
	} else {
		return false;
	}
	if (document.selection) {
		myField.focus();
		sel = document.selection.createRange();
		sel.text = tag;
		myField.focus();
	}
	else if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		var cursorPos = endPos;
		myField.value = myField.value.substring(0, startPos)
					  + tag
					  + myField.value.substring(endPos, myField.value.length);
		cursorPos += tag.length;
		myField.focus();
		myField.selectionStart = cursorPos;
		myField.selectionEnd = cursorPos;
	}
	else {
		myField.value += tag;
		myField.focus();
	}
}


// 时间戳转日期时间
$(function() {
    var timeSince;
    timeSince = function(date) {
        var interval, seconds;
        seconds = Math.floor((new Date() - date) / 1000);
        interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
            return interval + " 年前"
        }
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
            return interval + " 月前"
        }
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
            return interval + " 天前"
        }
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
            return interval + " 小时前"
        }
        interval = Math.floor(seconds / 60);
        if (interval > 1) {
            return interval + " 分钟前"
        }
        return Math.floor(seconds) + " 秒前"
    };
    $(function() {
        $(".date").each(function(idx, item) {
            var $date, date, timeStr, unixTime;
            $date = $(item);
            timeStr = $date.data("time");
            if (timeStr) {
                unixTime = Number(timeStr) * 1000;
                date = new Date(unixTime);
                return $date.prop("title", date).text(timeSince(date))
            }
        });
    })
});
