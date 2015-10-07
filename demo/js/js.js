//document ready
$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	$('#back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

	var website_url = 'js/site.json';
	var news_url = [
		{'title':'hackernews','url':'http://node-read.avosapps.com/hackernews'},
		{'title':'稀土·掘金','url':'http://node-read.avosapps.com/xitugold'},
		{'title':'36Kr','url':'http://node-read.avosapps.com/next'}
		];
	websites(website_url,'Websites','#right',"vertical","col-1-5");
	websites(website_url,'Websites','#right',"horizontal","col-1-10");
	websites(website_url,'Websites','#bottom1',"horizontal","col-1-4");
//	websites(website_url,'Websites','#bottom',"horizontal");
	$.each(news_url,function(i,item){
		news(item.url,item.title,'#left');
	});
  getDate();
});

/**
 * Templete Engine
 */

function newbox(title) {
	var box = $('<div>', {
		class: 'box'
	});
	var box_title = $('<div>', {
		class: 'box-title'
	});
	box_title.append($('<span>').text(title));
	var box_inner = $('<div>', {
		class: 'box-inner'
	});
	box.append(box_title);
	box.append(box_inner);
	return box;
}

function newlink(url,title,description){
	var link  =  $('<a>');
	$('<span>').text(title).appendTo(link);
	if (description != undefined) {
		$('<p>').text(description).appendTo(link);
	}
	link.attr({
		href : url,
		target: '_blank',
		title: title
	});
		return link;
}

function newlist(data,theclass){
	var list = $('<ul>', {
		class: theclass
	});
	$.each(data, function(i, item) {
		var li = $('<li>');
		newlink(item.link,item.title,item.description).appendTo(li);
		list.append(li);
	});
	return list;
}

function newcolumn(data,theclass) {
	var column = $('<div>', {
		class: 'column '+theclass
	});
	var column_title = $('<div>', {
		class: 'column-title'
	}).text(data.column_title);
	column.append(column_title);
	column.append(newlist(data.sites,'linklist'));
	return column;
}

function newclear(){
	var clear = $("<div>",{
		class: 'clearfix'
	});
	return clear;
}

function websites(url,box_title,partentnode,direction,columnclass){
	newbox(box_title).addClass("box-"+direction).appendTo(partentnode);
	var lastbox = $(partentnode).children("div.box:last");
	$.getJSON(url, function(data) {
		$.each(data, function(i, item) {
			/*if ( direction == "vertical" ){
				columnclass="pure-u-1-5 "+columnclass;
				console.log(columnclass);
			}else if ( direction == "horizontal" ){

			}*/
			var column = newcolumn(item,columnclass);

			newcolumn(item,columnclass).appendTo(lastbox.children('div.box-inner'));
		});
	});
}

function news(url,box_title,partentnode){
	var box = newbox(box_title)
	$.getJSON(url, function(data) {
			newlist(data,'list').appendTo(box.find('.box-inner'));
	});
	box.appendTo(partentnode);
}


//init Function
function init() {

}

//baidu serarchbar
function checkHttps () {
    BaiduHttps.useHttps();
};
function gowhere1 (formname) {
    var data = BaiduHttps.useHttps();
    var url;
    if (formname.myselectvalue.value == "0") {
        url = data.s == 0 ? "http://www.baidu.com/baidu" : 'https://www.baidu.com/baidu' + '?ssl_s=1&ssl_c' + data.ssl_code;
        document.search_form1.tn.value = "SE_zzsearchcode_shhzc78w";
        formname.method = "get";
    }
    if (formname.myselectvalue.value == "1") {
        document.search_form1.tn.value = "SE_zzsearchcode_shhzc78w";
        document.search_form1.ct.value = "134217728";
        document.search_form1.lm.value = "-1";
        url = "http://mp3.baidu.com/m";
    }
    if (formname.myselectvalue.value == "4") {
        document.search_form1.tn.value = "SE_zzsearchcode_shhzc78w";
        document.search_form1.cl.value = "2";
        document.search_form1.rn.value = "20";
        url = "http://news.baidu.com/ns";
    }
    if (formname.myselectvalue.value == "5") {
        document.search_form1.tn.value = "SE_zzsearchcode_shhzc78w";
        document.search_form1.ct.value = "201326592";
        document.search_form1.cl.value = "2";
        document.search_form1.lm.value = "-1";
        url = "http://image.baidu.com/i";
    }
    if (formname.myselectvalue.value == "6") {
        document.search_form1.tn.value = "SE_zzsearchcode_shhzc78w";
        document.search_form1.ct.value = "352321536";
        document.search_form1.rn.value = "10";
        document.search_form1.lm.value = "65536";
        url = "http://tieba.baidu.com";
    }
    formname.action = url;
    return true;
}
//

//mail login

function cmail_init() {
  $('#mail_options').value = gck("seMAILDOMAIN") || "sohu";
}

function cmail() {
  var D = document.gomail;
  var C = D.domains;
  var A = D.uName;
  var B = D.uPw;
  if (C.value == "") {
    alert("您没有选择邮箱！");
    C.focus();
    return false;
  }
  if (A.value == "") {
    alert("用户名不能为空！");
    A.focus();
    return false;
  }
  if (B.value == "") {
    alert("密码不能为空！");
    B.focus();
    return false;
  }
  switch (C.value) {
    case "163":
      D.action = "http://reg.163.com/CheckUser.jsp";
      D.url.value = "http://fm163.163.com/coremail/fcg/ntesdoor2?lightweight=1&verifycookie=1&language=-1&style=15";
      D.username.value = A.value;
      D.password.value = B.value;
      D.enterVip.value = "";
      break;
		case "163vip":
	    D.action = "https://ssl1.vip.163.com/logon.m";
	    D.username.value = A.value;
	    D.password.value = B.value;
	    D.enterVip.value = "true";
	    break;
    case "126":
      D.action = "https://reg.163.com/logins.jsp";
      D.domain.value = "126.com";
      D.username.value = A.value + "@126.com";
      D.password.value = B.value;
      D.url.value = "http://entry.mail.126.com/cgetDate();&urlName=" + C.value;
      pingback(pb_str, "mail");
      return false;
      break;
    case "sina":
      D.action = "https://login.sina.com.cn/sso/login.php";
      D.username.value = A.value + "@sina.com";
      D.password.value = B.value;
      D.url.value = "http://mail.sina.com.cn/";
      D.u.value = A.value;
      D.psw.value = B.value;
      break;
		case "sinavip":
	    D.action = "http://vip.sina.com.cn/cgi-bin/login.cgi";
	    D.username.value = A.value;
	    D.password.value = B.value;
	    break;
    case "sohu":
      D.action = "http://passport.sohu.com/login.jsp";
      D.url.value = "";
      D.UserName.value = A.value;
      D.Password.value = B.value;
      D.id.value = A.value;
      D.username.value = A.value;
      D.password.value = B.value;
      D.m.value = A.value;
      D.passwd.value = B.value;
      D.mpass.value = B.value;
      D.loginid.value = A.value + "@sohu.com";
      D.fl.value = "1";
      D.vr.value = "1|1";
      D.appid.value = "1000";
      D.ru.value = "http://login.mail.sohu.com/servlet/LoginServlet";
      D.eru.value = "http://login.mail.sohu.com/login.jsp";
      D.ct.value = "1173080990";
      D.sg.value = "5082635c77272088ae7241ccdf7cf062";
      break;
    case "yeah":
      D.action = "https://reg.163.com/logins.jsp";
      D.domain.value = "yeah.net";
      D.username.value = A.value + "@yeah.net";
      D.password.value = B.value;
      D.url.value = "http://entry.mail.yeah.net/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26style%3D-1";
      break;
    case "21cn":
      D.action = "http://passport.21cn.com/maillogin.jsp";
      D.LoginName.value = A.value;
      D.passwd.value = B.value;
      D.domainname.value = "21cn.com";
      D.UserName.value = A.value + "@21cn.com";
      break;
    case "renren":
      D.action = "http://passport.renren.com/PLogin.do";
      D.email.value = A.value;
      D.password.value = B.value;
      D.domain.value = "renren.com";
      D.origURL.value = "http://www.renren.com/Home.do";
      break;
    case "51com":
      D.action = "http://passport.51.com/login.5p";
      D.passport_51_user.value = A.value;
      D.passport_51_password.value = B.value;
      D.gourl.value = "http%3A%2F%2Fmy.51.com%2Fwebim%2Findex.php";
      break;
  }
  B.value = "";

  var pb_str = "&url=" + DH.eu(D.action) + "&urlName=" + C.value;
  pingback(pb_str, "mail");
  return true;
}


$('#mail_options').change(function(){
	var smo_arr = {
		"scaumail":"http://stu.scau.edu.cn/",
		"weibo":"http://weibo.com/",
		"sogou": "http://mail.sogou.com/",
		"baidu":"http://passport.baidu.com/",
		"qqcom": "http://mail.qq.com",
		"qzone": "http://qzone.qq.com/",
		"gmail": "https://mail.google.com",
		"139com": "http://mail.10086.cn/",
		"189":"http://mail.189.cn",
		"outlook": "https://login.live.com"

	};
	var smo = this.value;
	if (smo_arr[smo]) {
		document.gomail.reset();
	  window.open(smo_arr[smo]);
		return true;
	}
})



function getDate(){
  //Date
  var sWeek = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
  var dNow = new Date();
  var CalendarData = new Array(100);
  var madd = new Array(12);
  var tgString = "甲乙丙丁戊己庚辛壬癸";
  var dzString = "子丑寅卯辰巳午未申酉戌亥";
  var numString = "一二三四五六七八九十";
  var monString = "正二三四五六七八九十冬腊";
  var weekString = "日一二三四五六";
  var sx = "鼠牛虎兔龙蛇马羊猴鸡狗猪";
  var cYear, cMonth, cDay, TheDate;
  CalendarData = new Array(
    0xA4B, 0x5164B, 0x6A5, 0x6D4, 0x415B5, 0x2B6, 0x957, 0x2092F, 0x497, 0x60C96,
    0xD4A, 0xEA5, 0x50DA9, 0x5AD, 0x2B6, 0x3126E, 0x92E, 0x7192D, 0xC95, 0xD4A,
    0x61B4A, 0xB55, 0x56A, 0x4155B, 0x25D, 0x92D, 0x2192B, 0xA95, 0x71695, 0x6CA,
    0xB55, 0x50AB5, 0x4DA, 0xA5B, 0x30A57, 0x52B, 0x8152A, 0xE95, 0x6AA, 0x615AA,
    0xAB5, 0x4B6, 0x414AE, 0xA57, 0x526, 0x31D26, 0xD95, 0x70B55, 0x56A, 0x96D,
    0x5095D, 0x4AD, 0xA4D, 0x41A4D, 0xD25, 0x81AA5, 0xB54, 0xB6A, 0x612DA, 0x95B,
    0x49B, 0x41497, 0xA4B, 0xA164B, 0x6A5, 0x6D4, 0x615B4, 0xAB6, 0x957, 0x5092F,
    0x497, 0x64B, 0x30D4A, 0xEA5, 0x80D65, 0x5AC, 0xAB6, 0x5126D, 0x92E, 0xC96,
    0x41A95, 0xD4A, 0xDA5, 0x20B55, 0x56A, 0x7155B, 0x25D, 0x92D, 0x5192B, 0xA95,
    0xB4A, 0x416AA, 0xAD5, 0x90AB5, 0x4BA, 0xA5B, 0x60A57, 0x52B, 0xA93, 0x40E95);
  madd[0] = 0;
  madd[1] = 31;
  madd[2] = 59;
  madd[3] = 90;
  madd[4] = 120;
  madd[5] = 151;
  madd[6] = 181;
  madd[7] = 212;
  madd[8] = 243;
  madd[9] = 273;
  madd[10] = 304;
  madd[11] = 334;
  function GetBit(m, n) {
    return (m >> n) & 1;
  }

  function e2c() {
    TheDate = (arguments.length != 3) ? new Date() : new Date(arguments[0], arguments[1], arguments[2]);
    var total, m, n, k;
    var isEnd = false;
    var tmp = TheDate.getFullYear();
    total = (tmp - 1921) * 365 + Math.floor((tmp - 1921) / 4) + madd[TheDate.getMonth()] + TheDate.getDate() - 38;
    if (TheDate.getYear() % 4 == 0 && TheDate.getMonth() > 1) {
      total++;
    }
    for (m = 0;; m++) {
      k = (CalendarData[m] < 0xfff) ? 11 : 12;
      for (n = k; n >= 0; n--) {
        if (total <= 29 + GetBit(CalendarData[m], n)) {
          isEnd = true;
          break;
        }
        total = total - 29 - GetBit(CalendarData[m], n);
      }
      if (isEnd) break;
    }
    cYear = 1921 + m;
    cMonth = k - n + 1;
    cDay = total;
    if (k == 12) {
      if (cMonth == Math.floor(CalendarData[m] / 0x10000) + 1) {
        cMonth = 1 - cMonth;
      }
      if (cMonth > Math.floor(CalendarData[m] / 0x10000) + 1) {
        cMonth--;
      }
    }
  }

  function GetcDateString() {
    var tmp = "";
    tmp += tgString.charAt((cYear - 4) % 10);
    tmp += dzString.charAt((cYear - 4) % 12);
    tmp += "年 ";
    if (cMonth < 1) {
      tmp += "(闰)";
      tmp += monString.charAt(-cMonth - 1);
    } else {
      tmp += monString.charAt(cMonth - 1);
    }
    tmp += "月";
    tmp += (cDay < 11) ? "初" : ((cDay < 20) ? "十" : ((cDay < 30) ? "廿" : "三十"));
    if (cDay % 10 != 0 || cDay == 10) {
      tmp += numString.charAt((cDay - 1) % 10);
    }
    return tmp;
  }

  function GetLunarDay(solarYear, solarMonth, solarDay) {
    if (solarYear < 1921 || solarYear > 2020) {
      return "";
    } else {
      solarMonth = (parseInt(solarMonth) > 0) ? (solarMonth - 1) : 11;
      e2c(solarYear, solarMonth, solarDay);
      return GetcDateString();
    }
  }
  var D = new Date();
  var yy = D.getFullYear();
  var mm = D.getMonth() + 1;
  var dd = D.getDate();
  var ww = D.getDay();
  var ss = parseInt(D.getTime() / 1000);

  function getFullYear(d) { // 修正firefox下year错误
    yr = d.getYear();
    if (yr < 1000)
      yr += 1900;
    return yr;
  }

  function showDate() {
    timeString = new Date().toLocaleTimeString();
    var sValue = getFullYear(dNow) + "年" + (dNow.getMonth() + 1) + "月" + dNow.getDate() + "日" + " " + timeString +
      " " + sWeek[dNow.getDay()] + " ";
    sValue += GetLunarDay(yy, mm, dd);
    var svalue1 = getFullYear(dNow) + "年" + (dNow.getMonth() + 1) + "月" + dNow.getDate() + "日" + sWeek[dNow.getDay()];
    var svalue2 = timeString;
    var svalue3 = GetLunarDay(yy, mm, dd);
    var sx2 = sx.substr(dzString.indexOf(svalue3.substr(1, 1)), 1);
    var svalue33 = svalue3.substr(0, 3)
    var svalue333 = svalue33.substr(0, 2) + "(" + sx2 + ")" + svalue33.substr(2, 1);
    var sx22 = "农历" + svalue3.substr(4, 6);
    $('#nowDateIs').text(svalue1);
    $('#nowCnYearIs').text(svalue333 + sx22);
  }
  showDate();
}

//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
