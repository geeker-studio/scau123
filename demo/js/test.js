/**
 * ==========================================
 * config.js
 * Copyright (c) 2010 wwww.114la.com
 * ==========================================
 */

var Config = {
    Mail: [{
        val: 0
    }, { /*163.com*/
        action: "http://reg.163.com/CheckUser.jsp",
        params: {
            url: "http://entry.mail.163.com/coremail/fcg/ntesdoor2?lightweight=1&verifycookie=1&language=-1&style=15",
            username: "#{u}",
            password: "#{p}"
        }
    }, { /*126.com*/
        action: "https://reg.163.com/logins.jsp",
        params: {
            domain: "126.com",
            username: "#{u}@126.com",
            password: "#{p}",
            url: "http://entry.mail.126.com/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26language%3D0%26style%3D-1"
        }
    }, { /*vip.163.com*/
        action: "https://ssl1.vip.163.com/logon.m",
        params: {
            username: "#{u}",
            password: "#{p}",
            enterVip: true
        }
    }, { /*sina.com*/
        action: "http://mail.sina.com.cn/cgi-bin/login.cgi",
        params: {
            u: "#{u}",
            psw: "#{p}"
        }
    }, { /*vip.sina.com*/
        action: "http://vip.sina.com.cn/cgi-bin/login.cgi",
        params: {
            user: "#{u}",
            pass: "#{p}"
        }
    }, { /*yahoo.com.cn*/
        action: "https://edit.bjs.yahoo.com/config/login",
        params: {
            login: "#{u}@yahoo.com.cn",
            passwd: "#{p}",
            domainss: "yahoo",
            ".intl": "cn",
            ".src": "ym"
        }
    }, { /*yahoo.cn*/
        action: "https://edit.bjs.yahoo.com/config/login",
        params: {
            login: "#{u}@yahoo.cn",
            passwd: "#{p}",
            domainss: "yahoocn",
            ".intl": "cn",
            ".done": "http://mail.cn.yahoo.com/inset.html"
        }
    }, { /*sohu.com*/
        action: "http://passport.sohu.com/login.jsp",
        params: {
            loginid: "#{u}@sohu.com",
            passwd: "#{p}",
            fl: "1",
            vr: "1|1",
            appid: "1000",
            ru: "http://login.mail.sohu.com/servlet/LoginServlet",
            ct: "1173080990",
            sg: "5082635c77272088ae7241ccdf7cf062"
        }
    }, { /*tom.com*/
        action: "http://login.mail.tom.com/cgi/login",
        params: {
            user: "#{u}",
            pass: "#{p}"
        }
    }, { /*21cn.com*/
        action: "http://passport.21cn.com/maillogin.jsp",
        params: {
            UserName: "#{u}@21cn.com",
            passwd: "#{p}",
            domainname: "21cn.com"
        }
    }, { /*yeah.net*/
        action: "https://reg.163.com/logins.jsp",
        params: {
            domain: "yeah.net",
            username: "#{u}@yeah.net",
            password: "#{p}",
            url: "http://entry.mail.yeah.net/cgi/ntesdoor?lightweight%3D1%26verifycookie%3D1%26style%3D-1"
        }
    }, {
        action: "http://zx.passport.189.cn/Logon/UDBCommon/S/PassportLogin.aspx?PassportLoginRequest=3500000000400101%243qGTaeZcFhxvAWjKmUNeSXwAgn1LsgB7Baj1rQn96XNKuzpE%2baP%2b9Q6CDg1Bqmrnosfrnoa6ujbo%0aBzYxmWBAESIoGVwlaoSM4%2fMixUkU7%2fAcJ0L4Yrckifcqhk3rO22i",
        params: {
            __VIEWSTATE: "/wEPDwUKMTYxODg2ODExNQ9kFgJmD2QWDgIBDxYCHgVzdHlsZQUSdmlzaWJpbGl0eTp2aXNpYmxlFgICAQ8PFgIeBFRleHQFG+eUqOaIt+WQjeaIluWvhueggemUmeivr+OAgmRkAg0PDxYEHgtOYXZpZ2F0ZVVybAVIaHR0cDovL3Bhc3Nwb3J0LjE4OS5jbi9TZWxmUy9ML1JlZy9TZWxlY3QuYXNweD9EZXZpY2VObz0zNTAwMDAwMDAwNDAwMTAxHwEFByDms6jlhoxkZAIPDw8WAh8BBTRodHRwOi8vd3d3LjE4OS5jbi93ZWJtYWlsL2pzcC8xODltaXNjL3Y1L2Nzcy91ZGIuY3NzZGQCEQ8PFgIfAQUtaHR0cDovL3dlYm1haWw1LjE4OS5jbi93ZWJtYWlsL1VEQkxvZ2luUmV0dXJuZGQCEw8PFgIfAQUQMzUwMDAwMDAwMDQwMDEwMWRkAhUPDxYCHwEFDDEyNC4yMDUuNzcuOWRkAhcPDxYCHwEFDHZCWWdGcWRydTVrPWRkGAEFHl9fQ29udHJvbHNSZXF1aXJlUG9zdEJhY2tLZXlfXxYBBQtjYl9TYXZlTmFtZYevyftAQT5CX9s2VZJOrPsTLqDH",
            __EVENTVALIDATION: "/wEWCQLckeONBALT8dy8BQKd+7qdDgK/8ZbBBQKhwImNCwK1yJy1AQLhyKz0DgKh/9zICgKnqZGuBiPwFoYTVzM5HAbhLCKRJWRuEyet",
            txtUserID: "#{u}",
            txtPwd: "#{p}"
        }
    }, { /*139.com*/
        action: "https://mail.10086.cn/Login/Login.ashx",
        params: {
            UserName: "#{u}",
            Password: "#{p}",
            ClientId: "5028",
            type: "mail"
        }
    }, { /*百度帐号*/
        action: "http://passport.baidu.com/?login",
        params: {
            u: "http://passport.baidu.com/center",
            username: "#{u}",
            password: "#{p}"
        }
    }, { /*renren*/
        action: "http://passport.renren.com/PLogin.do",
        params: {
            email: "#{u}",
            password: "#{p}",
            origURL: "http://www.renren.com/Home.do",
            domain: "renren.com"
        }
    }, { /*51.com*/
        action: "http://passport.51.com/login.5p",
        params: {
            passport_51_user: "#{u}",
            passport_51_password: "#{p}",
            gourl: "http%3A%2F%2Fmy.51.com%2Fwebim%2Findex.php"
        }
    }, { /*chinaren*/
        action: "http://passport.sohu.com/login.jsp",
        params: {
            loginid: "#{u}@chinaren.com",
            passwd: "#{p}",
            fl: "1",
            vr: "1|1",
            appid: "1005",
            ru: "http://profile.chinaren.com/urs/setcookie.jsp?burl=http://alumni.chinaren.com/",
            ct: "1174378209",
            sg: "84ff7b2e1d8f3dc46c6d17bb83fe72bd"
        }
    }]
};


/**
* ==========================================
* main.js
* Copyright (c) 2012 wwww.114la.com
* ==========================================
*/

$(document).ready(function() {


    MailLogin.userNameGotFocus();
    MailLogin.setMailAddress();



});

Date.prototype.format = function (format) {
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(),    //day
        "h+": this.getHours(),   //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3),  //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
    }
    return format;
}


//var _preMailUserName = Cookie.get("preMailUserName");
//邮箱登录
var MailLogin = {
    userNameGotFocus: function () {
        var mailPrompt = $("#mail .mailPrompt"),
            mailLoginBox = $("#js_mailLogin"),
            mailUsername = $("#js_mailUsername"),
            mailPassWord = $("#js_mailPassWord"),
            mailPromptPw = $("#mail .mailPromptPw");

						/*
        if (Browser.isIE == '6.0') {
            mailUsername.el.value = "";
        }
        if(_preMailUserName){
            mailUsername.el.value = _preMailUserName;
        }

        if(mailUsername.el.value !==''){
            mailPrompt.hide();
        }
*/
        mailUsername.on('focus', function (el) {
            mailLoginBox.show();
            $("#js_eMail").hasClass("e-mailActived",function(pRst){
                if(!pRst) {
                    $("#js_eMail").addClass("e-mailActived");

                    if(_preMailUserName && YLMF.trim(_preMailUserName) == YLMF.trim(mailUsername.el.value) && YLMF.trim(_preMailUserName) != ""){
                        mailPassWord.el.focus();
                    }

                };

            });
            mailPrompt.hide();
        }).on('blur', function (el) {
            if (el.value === '') {
                mailPrompt.show();
            }
        });
        mailPassWord.on('focus', function (el) {
            mailPromptPw.hide();
        }).on('blur', function (el) {
            if (el.value === '') {
                mailPromptPw.show();
            }
        });
    },

    setMailAddress: function () {
        var mailServer = $("#js_mailServer"),
            eMailList = $("#js_eMailList"),
            eMailListLi = $("#js_eMailList li"),
            dn = 0;
        var mailCutOff = [{ sou: '@vip.163.com', tar: '@vip.163...' },
                { sou: '@vip.sina.com', tar: '@vip.sina...' },
                { sou: '@yahoo.com.cn', tar: '@yahoo.c..'}];
        eMailListLi.on('click', function (el) {
            if (el.getAttribute("dn")) {
                dn = el.getAttribute("dn");
                mailServer.el.innerHTML = el.innerHTML;
                eMailList.el.setAttribute('selectIndex', dn);
                for (var i = 0; i < mailCutOff.length; i++) {
                    if (Yl.trim(el.innerHTML.toString()) === mailCutOff[i].sou) {
                        mailServer.el.innerHTML = mailCutOff[i].tar;
                    }
                    continue;
                };
            }
        }).on('mouseover',function(el){
            eMailListLi.removeClass('hover');
            $(el).hasClass("no",function(pRst){
                if(!pRst) $(el).addClass('hover');
            })
        })
    },
    flag: false,
    mailCache: [],
    sendMail: function () {
        var username = $("#js_mailUsername").el.value, password = $("#js_mailPassWord").el.value, servers = $("#js_eMailList").el, form = $("#mail").el, index = servers.getAttribute("selectIndex"), H = Config.Mail[index], F = {
            u: username,
            p: password
        };
        if (Yl.trim(F.u) == "") {
            alert("用户名不能为空！");
            $("#js_mailUsername").el.focus();
            $("#mail .mailPrompt").hide();
            return;
        }
        if (Yl.trim(F.p) == "") {
            alert("密码不能为空！");
            $("#js_mailPassWord").el.focus();
            $("#mail .mailPromptPw").hide();
            return;
        }
        if (this.mailCache.index != index) {
            this.mailCache.forEach(function (el) {
                form.removeChild(el)
            });
            this.mailCache = [];
        }
        form.setAttribute('action',H.action);
        for (I in H.params) {
            $(form).create("input", {
                type: "hidden",
                name: I,
                value: format(H.params[I], F)
            }, function (el) {
                MailLogin.mailCache.push(el);
                this.append(el);
            })
        }
        form.submit();
        Cookie.set("preMailUserName",username);
        _preMailUserName = username;
        $("#js_mailPassWord").el.value = ""
    }

}
//搜索切换

document.onclick = function (e) {
    var e = e || window.event, obj = e.srcElement || e.target, tid = obj.id;
    if ($("#js_mailLogin").el) {
        if (tid === "js_mailUsername") {
        }
        else if (tid === "js_mailPassWord") {
        }
        else if (tid === "js_mailSubmit") {
        }
        else if (tid === "js_mailServer") {
        }
        else if (obj.className === 'mailPromptPw') {
        }
        else if (obj.parentNode.id === 'js_eMailList' && $("#js_mailUsername").el.value !=='') {
            $("#js_mailLogin").show();
            $("#js_eMail").hasClass("e-mailActived",function(pRst){
                if(!pRst) $("#js_eMail").addClass("e-mailActived");
            });
        }
        else {
            $("#js_mailLogin").hide();
            $("#js_eMail").removeClass("e-mailActived");
        }
    }
    if ($("#js_eMailList").el) {
        if (tid !== "js_mailServer") {
            $("#js_eMailList").hide();
            MailLogin.flag = false;
            if (obj.parentNode.id === 'js_eMailList' && obj.className.toString() === 'no') {
                $("#js_eMailList").show();
                $("#js_mailLogin").hide();
                MailLogin.flag = true;
            }
        }
        else {
            $("#js_mailLogin").hide();
            if (!MailLogin.flag) {
                $("#js_eMailList").show();
                MailLogin.flag = true;
            }
            else {
                $("#js_eMailList").hide();
                MailLogin.flag = false;
            }
        }
    }

};
