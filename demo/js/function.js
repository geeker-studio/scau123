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
	var nav = $('<ul>', {
		class: theclass
	});
	$.each(data, function(i, item) {
		var li = $('<li>');
		newlink(item.link,item.title,item.description).appendTo(li);
		nav.append(li);
	});
	return nav;
}

function newcolumn(data) {
	var column = $('<div>', {
		class: 'column'
	});
	var column_title = $('<div>', {
		class: 'column-title'
	}).text(data.column_title);
	column.append(column_title);
	column.append(newlist(data.sites,'nav'));
	return column;
}

function websites(url,box_title,partentnode){
	newbox(box_title).appendTo(partentnode);
	$.getJSON(url, function(data) {
		$.each(data, function(i, item) {
			var lastbox = $(partentnode).children("div.box:last");
			newcolumn(item).appendTo(lastbox.children('div.box-inner'));
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
	websites(website_url,'Websites','#right');
	$.each(news_url,function(i,item){
		news(item.url,item.title,'#left');
	});
});

