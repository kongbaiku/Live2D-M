var live2d_path = [
  {'name': '22', 'index': 13}, 
  {'name': '33', 'index': 13}, 
  {'name': 'kesshouban', 'index': 0}
];

window.live2d_settings = Array(); /*

    く__,.ヘヽ.　　　　/　,ー､ 〉
    　　　　　＼ ', !-─‐-i　/　/´
    　　　 　 ／｀ｰ'　　　 L/／｀ヽ､            Live2D 看板娘 参数设置
    　　 　 /　 ／,　 /|　 ,　 ,　　　 ',           Version 1.4.2
    　　　ｲ 　/ /-‐/　ｉ　L_ ﾊ ヽ!　 i             Update 2018.11.12
    　　　 ﾚ ﾍ 7ｲ｀ﾄ　 ﾚ'ｧ-ﾄ､!ハ|　 |
    　　　　 !,/7 '0'　　 ´0iソ| 　 |　　　
    　　　　 |.从"　　_　　 ,,,, / |./ 　 |     网页添加 Live2D 看板娘
    　　　　 ﾚ'| i＞.､,,__　_,.イ / 　.i 　|        https://www.fghrsh.net/post/123.html
    　　　　　 ﾚ'| | / k_７_/ﾚ'ヽ,　ﾊ.　|
    　　　　　　 | |/i 〈|/　 i　,.ﾍ |　i　|    Thanks
    　　　　　　.|/ /　ｉ： 　 ﾍ!　　＼　|          journey-ad / https://github.com/journey-ad/live2d_src
    　　　 　 　 kヽ>､ﾊ 　 _,.ﾍ､ 　 /､!             xiazeyu / https://github.com/xiazeyu/live2d-widget.js
    　　　　　　 !'〈//｀Ｔ´', ＼ ｀'7'ｰr'          Live2d Cubism SDK WebGL 2.1 Projrct & All model authors.
    　　　　　　 ﾚ'ヽL__|___i,___,ンﾚ|ノ
    　　　　　 　　　ﾄ-,/　|___./
    　　　　　 　　　'ｰ'　　!_,.:*********************************************************************************/


//后端接口
// live2d_settings['modelAPI']             = '//live2d.fghrsh.net/api/';   // 自建 API 修改这里
live2d_settings['modelAPI']             = '../../Resources/packages/live2d-widget-model-';//使用本地资源
live2d_settings['tipsMessage']          = 'waifu-tips.json';            // 默认对话，同目录下可省略路径
live2d_settings['hitokotoAPI']          = 'hitokoto.cn';                  // 一言 API，可选 'lwl12.com', 'hitokoto.cn', 'jinrishici.com'(古诗词)

//默认模型
live2d_settings['modelId']              = 0;           	// 默认模型 ID，可在 F12 控制台找到
live2d_settings['modelTexturesId']      = 0;            // 默认材质 ID，可在 F12 控制台找到

//工具栏设置
live2d_settings['showToolMenu']         = true;         // 显示 工具栏          ，可选 true(真), false(假)
live2d_settings['canCloseLive2d']       = false;        // 显示 关闭看板娘  按钮，可选 true(真), false(假)
live2d_settings['canSwitchModel']       = true;         // 显示 模型切换    按钮，可选 true(真), false(假)
live2d_settings['canSwitchTextures']    = true;         // 显示 材质切换    按钮，可选 true(真), false(假)
live2d_settings['canSwitchHitokoto']    = true;         // 显示 一言切换    按钮，可选 true(真), false(假)
live2d_settings['canTakeScreenshot']    = true;         // 显示 看板娘截图  按钮，可选 true(真), false(假)
live2d_settings['canTurnToHomePage']    = false;        // 显示 返回首页    按钮，可选 true(真), false(假)
live2d_settings['canTurnToAboutPage']   = false;        // 显示 跳转关于页  按钮，可选 true(真), false(假)

//模型切换模式
live2d_settings['modelStorage']         = false;        // 记录 ID (刷新后恢复)，可选 true(真), false(假)
live2d_settings['modelRandMode']        = false;     	// 模型切换，可选 true(随机), false(顺序)
live2d_settings['modelTexturesRandMode']= false;     	// 材质切换，可选 true(随机), false(顺序)

//提示消息选项
live2d_settings['showHitokoto']         = true;         // 显示一言
live2d_settings['showF12Status']        = false;        // 显示加载状态
live2d_settings['showF12Message']       = false;        // 显示看板娘消息
live2d_settings['showWelcomeMessage']   = true;         // 显示进入面页欢迎词

//看板娘样式设置
live2d_settings['waifuSize']            = '300x250';    // 看板娘大小，例如 '280x250', '600x535'
live2d_settings['waifuTipsSize']        = '250x70';     // 提示框大小，例如 '250x70', '570x150'
live2d_settings['waifuFontSize']        = '14px';       // 提示框字体，例如 '12px', '30px'
live2d_settings['waifuToolFont']        = '22px';       // 工具栏字体，例如 '14px', '36px'（工具栏图标大小）
live2d_settings['waifuToolLine']        = '50px';       // 工具栏行高，例如 '20px', '36px'（工具栏图标间距）
live2d_settings['waifuToolTop']         = '-70px';      // 工具栏顶部边距，例如 '0px', '-60px'（其实是对话框顶部边距）
live2d_settings['waifuMinWidth']        = 'disable';    // 面页小于 指定宽度 隐藏看板娘，例如 'disable'(禁用), '768px'
live2d_settings['waifuEdgeSide']        = 'left:0';     // 看板娘贴边方向，例如 'left:0'(靠左 0px), 'right:30'(靠右 30px)
live2d_settings['waifuDraggable']       = 'disable';  	// 拖拽样式，例如 'disable'(禁用), 'axis-x'(只能水平拖拽), 'unlimited'(自由拖拽)
live2d_settings['waifuDraggableRevert'] = false;         // 松开鼠标还原拖拽位置，可选 true(真), false(假)

//其他杂项设置
live2d_settings['l2dVersion']           = '1.4.2';      // 当前版本
live2d_settings['l2dVerDate']           = '2018.11.12'; // 版本更新日期
live2d_settings['homePageUrl']          = 'auto';       // 主页地址，可选 'auto'(自动), '{URL 网址}'
live2d_settings['aboutPageUrl']         = 'https://www.fghrsh.net/post/123.html';   // 关于页地址, '{URL 网址}'
live2d_settings['screenshotCaptureName']= 'live2d.png'; // 看板娘截图文件名，例如 'live2d.png'




String.prototype.render = function(context) {
    var tokenReg = /(\\)?\{([^\{\}\\]+)(\\)?\}/g;

    return this.replace(tokenReg, function (word, slash1, token, slash2) {
        if (slash1 || slash2)
		{
			return word.replace('\\', ''); 
		}

        var variables = token.replace(/\s/g, '').split('.');
        var currentObject = context;
        var i, length, variable;

        for (i = 0, length = variables.length; i < length; ++i) {
            variable = variables[i];
            currentObject = currentObject[variable];
            if (currentObject === undefined || currentObject === null) return '';
        }
        return currentObject;
    });
};

console.log("waifu-tips success");


function empty(obj) {return typeof obj=="undefined"||obj==null||obj==""?true:false}


function getRandText(text) {return Array.isArray(text) ? text[Math.floor(Math.random() * text.length + 1)-1] : text}


function showMessage(text, timeout, flag) {
    if(flag || sessionStorage.getItem('waifu-text') === '' || sessionStorage.getItem('waifu-text') === null)
	{
        if(Array.isArray(text)) text = text[Math.floor(Math.random() * text.length + 1)-1];
        if (live2d_settings.showF12Message) console.log('[Message]', text.replace(/<[^<>]+>/g,''));

        if(flag) sessionStorage.setItem('waifu-text', text);

        $('.waifu-tips').stop();
        $('.waifu-tips').html(text).fadeTo(200, 1);
        if (timeout === undefined) timeout = 5000;
        hideMessage(timeout);
    }
}


function hideMessage(timeout) {
    $('.waifu-tips').stop().css('opacity',1);
    if (timeout === undefined) timeout = 5000;
    window.setTimeout(function() {sessionStorage.removeItem('waifu-text')}, timeout);
    $('.waifu-tips').delay(timeout).fadeTo(200, 0);
}


function initModel(waifuPath, type) 
{
    
    if (typeof($.ajax) != 'function') 
	{
		typeof(jQuery.ajax) == 'function' ? window.$ = jQuery : console.log('[Error] JQuery is not defined.');
	}

    
    live2d_settings.waifuSize = live2d_settings.waifuSize.split('x');
    live2d_settings.waifuTipsSize = live2d_settings.waifuTipsSize.split('x');
    live2d_settings.waifuEdgeSide = live2d_settings.waifuEdgeSide.split(':');

	
    $("#live2d").attr("width",live2d_settings.waifuSize[0]);
    $("#live2d").attr("height",live2d_settings.waifuSize[1]);
    $(".waifu-tips").width(live2d_settings.waifuTipsSize[0]);
    $(".waifu-tips").height(live2d_settings.waifuTipsSize[1]);
    $(".waifu-tips").css("top",live2d_settings.waifuToolTop);
    $(".waifu-tips").css("font-size",live2d_settings.waifuFontSize);
    $(".waifu-tool").css("font-size",live2d_settings.waifuToolFont);
    $(".waifu-tool span").css("line-height",live2d_settings.waifuToolLine);
	
	
    
	
		
	
    
	
		
	

	
    window.waifuResize = function() { 
		$(window).width() <= Number(live2d_settings.waifuMinWidth.replace('px','')) ? $(".waifu").hide() : $(".waifu").show(); 
	};
	
	
    if (live2d_settings.waifuMinWidth != 'disable') 
	{ 
		waifuResize(); $(window).resize(function() {waifuResize()}); 
	}

    try
	{
        if (live2d_settings.waifuDraggable == 'axis-x')
		{
			$(".waifu").draggable({ axis: "x", revert: live2d_settings.waifuDraggableRevert });
		}
			
        else if (live2d_settings.waifuDraggable == 'unlimited') 
		{
			$(".waifu").draggable({ revert: live2d_settings.waifuDraggableRevert });
		}
        else 
		{
			$(".waifu").css("transition", 'all .3s ease-in-out');
		}
    } 
	catch(err)
	{ 
		console.log('[Error] JQuery UI is not defined.')
	}

	
    live2d_settings.homePageUrl = live2d_settings.homePageUrl == 'auto' ? window.location.protocol+'//'+window.location.hostname+'/' : live2d_settings.homePageUrl;
	
	
    if (window.location.protocol == 'file:' && live2d_settings.modelAPI.substr(0,2) == '//') 
	{
		live2d_settings.modelAPI = 'http:'+live2d_settings.modelAPI;
	}
	
	
    $('.waifu-tool .fui-home').click(function (){
        window.location = live2d_settings.homePageUrl;
    });

	
    $('.waifu-tool .fui-info-circle').click(function (){
        window.open(live2d_settings.aboutPageUrl);
    });

	
    if (typeof(waifuPath) == "object") 
	{
		loadTipsMessage(waifuPath);
	}
	else 
	{
        $.ajax({
            cache: true,
            url: waifuPath == '' ? live2d_settings.tipsMessage : (waifuPath.substr(waifuPath.length-15)=='waifu-tips.json'?waifuPath:waifuPath+'waifu-tips.json'),
            dataType: "json",
            success: function (result){ loadTipsMessage(result); }
        });
    }

	
    if (!live2d_settings.showToolMenu) $('.waifu-tool').hide();
    if (!live2d_settings.canCloseLive2d) $('.waifu-tool .fui-cross').hide();
    if (!live2d_settings.canSwitchModel) $('.waifu-tool .fui-eye').hide();
    if (!live2d_settings.canSwitchTextures) $('.waifu-tool .fui-user').hide();
    if (!live2d_settings.canSwitchHitokoto) $('.waifu-tool .fui-chat').hide();
    if (!live2d_settings.canTakeScreenshot) $('.waifu-tool .fui-photo').hide();
    if (!live2d_settings.canTurnToHomePage) $('.waifu-tool .fui-home').hide();
    if (!live2d_settings.canTurnToAboutPage) $('.waifu-tool .fui-info-circle').hide();

	
    if (waifuPath === undefined) waifuPath = '';
	   
	
	if(appConfig.get('canModNum') == 1)
	{
		var modelId = appConfig.get('modelId');
		var modelTexturesId = appConfig.get('modelTexturesId');
	}
	else
	{
		var modelId = live2d_settings.modelId;
		var modelTexturesId = live2d_settings.modelTexturesId;
	}
	
	
	if(appConfig.get('canModPath') == 1)
	{
		loadlive2d("live2d", appConfig.get('customModPath'));
	}
	else if(appConfig.get('canModPath') == 2)
	{
		var config = {
				basePath: appConfig.get('customModPath'),
				role: appConfig.get('customModName')
			}
		var v = new Viewer(config);
	}
	else
	{
		loadModel(modelId, modelTexturesId);
	}
	
}


function loadModel(modelId, modelTexturesId) 
{
	modelId = modelId % live2d_path.length;
	var name = live2d_path[modelId];
	modelTexturesId = modelTexturesId % (name.index + 1);
  
	
	appConfig.set('canModNum', 1);
	appConfig.set('modelId', modelId);
	appConfig.set('modelTexturesId', modelTexturesId);
	
	
	loadlive2d("live2d", "Resources/packages/live2d-widget-model-"+name.name+"/assets/"+name.name+".model"+modelTexturesId.toString()+".json");
    
}


function loadTipsMessage(result) {		
	var text;
    var now;
    window.waifu_tips = result;

	
    $.each(result.mouseover, function (index, tips){
        $(document).on("mouseover", tips.selector, function (){
            text = getRandText(tips.text);
            text = text.render({text: $(this).text()});
            showMessage(text, 3000);
        });
    });
	
	
    $.each(result.click, function (index, tips){
        $(document).on("click", tips.selector, function (){
			if(live2dPara.text !== "undefined" && live2dPara.text)
			{
				text = live2dPara.text;
				text = text.render({text: $(this).text()});
				showMessage(text, 3000, true);
				live2dPara.text = "";
			}
			else if(live2dMoc3_settings.text !== "undefined" && live2dMoc3_settings.text)
			{
				setTimeout(()=>{
						var ST = parseInt(live2dMoc3_settings.soundTime*1000);
						text = live2dMoc3_settings.text;
						text = text.render({text: $(this).text()});
						showMessage(text, ST>3000 ? ST : 3000, true);
						live2dMoc3_settings.text = "";
                    },500);
			}
			else
			{
				text = getRandText(tips.text);
				text = text.render({text: $(this).text()});
				showMessage(text, 3000, true);
				
			}
        });
    });

	
    $('.waifu-tool .fui-photo').click(function(){
        showMessage(getRandText(result.waifu.screenshot_message), 5000, true);
        window.Live2D.captureName = live2d_settings.screenshotCaptureName;
        window.Live2D.captureFrame = true;
    });

	
    $('.waifu-tool .fui-cross').click(function(){
        sessionStorage.setItem('waifu-dsiplay', 'none');
        showMessage(getRandText(result.waifu.hidden_message), 1300, true);
        window.setTimeout(function() {$('.waifu').hide();}, 1300);
    });
	
	
	if (live2d_settings.showWelcomeMessage)
	{
		setTimeout(()=>{
			now = new Date();
			var seasonsflag = 0;
			for (let group in result.seasons)
			{
				var after = group.split('-')[0];
				var before = group.split('-')[1] || after;
				if((after.split('/')[0] <= now.getMonth()+1 && now.getMonth()+1 <= before.split('/')[0]) &&
				(after.split('/')[1] <= now.getDate() && now.getDate() <= before.split('/')[1])){
				seasonsflag = group;
				}
			}
			
			if(now.getMinutes() == 0)
			{
				now = now.getHours();
				if (now > 23 || now <= 5) text = getRandText(result.waifu.hour_tips['t23_5']);
				else if (now > 5 && now <= 7) text = getRandText(result.waifu.hour_tips['t5_7']);
				else if (now > 7 && now <= 11) text = getRandText(result.waifu.hour_tips['t7_11']);
				else if (now > 11 && now <= 14) text = getRandText(result.waifu.hour_tips['t11_14']);
				else if (now > 14 && now <= 17) text = getRandText(result.waifu.hour_tips['t14_17']);
				else if (now > 17 && now <= 19) text = getRandText(result.waifu.hour_tips['t17_19']);
				else if (now > 19 && now <= 21) text = getRandText(result.waifu.hour_tips['t19_21']);
				else if (now > 21 && now <= 23) text = getRandText(result.waifu.hour_tips['t21_23']);
				else text = getRandText(result.waifu.hour_tips.default);
				showMessage(text, 6000, true);
			}
			else if(seasonsflag)
			{
				text = getRandText(result.seasons[seasonsflag]);
				if(seasonsflag = "10/01")
				{text = text.render({year: now.getFullYear()-1949});}
				else
				{text = text.render({year: now.getFullYear()});}
				showMessage(text, 6000, true);	
			}
			else if(live2dMoc3_settings.text)
			{
				setTimeout(()=>{
							var ST = parseInt(live2dMoc3_settings.soundTime*1000);
							text = live2dMoc3_settings.text;
							text = text.render({text: $(this).text()});
							showMessage(text, ST>3000 ? ST : 3000, true);
							live2dMoc3_settings.text = "";
					},500);
			}
			else
			{
				var referrer_message = result.waifu.referrer_message;
				text = referrer_message.none[0] + document.title.split(referrer_message.none[2])[0] + referrer_message.none[1];
				showMessage(text, 6000);
			}	
		},200);
	}		

    var waifu_tips = result.waifu;

	
    function loadOtherModel() {
        var modelId = appConfig.get('modelId');
        var modelRandMode = live2d_settings.modelRandMode;
		appConfig.set('canModPath', 0);		
		
		
		if(modelRandMode == false)
		{
			loadModel(modelId + 1, 0);
		}
		else
		{
			var num = Math.floor(Math.random() * 10); 
			loadModel(modelId + num, 0);
		}
		ipcMR.send('win-reLoad');
    }

	
    function loadRandTextures() {
        var modelId = appConfig.get('modelId');
        var modelTexturesId = appConfig.get('modelTexturesId');
        var modelTexturesRandMode = live2d_settings.modelTexturesRandMode;	
		
		
		if(modelTexturesRandMode == false)
		{
			loadModel(modelId, modelTexturesId + 1);
		}
		else
		{
			var num = Math.floor(Math.random() * 10); 
			loadModel(modelId, modelTexturesId + num);
		}
		ipcMR.send('win-reLoad');
    }

	
    function modelStorageGetItem(key) { 
		return live2d_settings.modelStorage ? localStorage.getItem(key) : sessionStorage.getItem(key); 
	}

    
    if (live2d_settings.showHitokoto) 
	{
        window.getActed = false;
		window.hitokotoTimer = 0;
		window.hitokotoInterval = false;
        $(document).mousemove(function(e){getActed = true;}).keydown(function(){getActed = true;});
        setInterval(function(){ if (!getActed) ifActed(); else elseActed(); }, 1000);
    }

	
    function ifActed() {
        if (!hitokotoInterval) {
			hitokotoInterval = true;
			hitokotoTimer = window.setInterval(showHitokotoActed, 45000);	
        }
    }

	
    function elseActed() {
        getActed = hitokotoInterval = false;
        window.clearInterval(hitokotoTimer);
    }
	
	
    function timeText(now) {
        if (now > 23 || now <= 5) text = getRandText(result.waifu.hour_tips['t23_5']);
		else if (now > 5 && now <= 7) text = getRandText(result.waifu.hour_tips['t5_7']);
		else if (now > 7 && now <= 11) text = getRandText(result.waifu.hour_tips['t7_11']);
		else if (now > 11 && now <= 14) text = getRandText(result.waifu.hour_tips['t11_14']);
		else if (now > 14 && now <= 17) text = getRandText(result.waifu.hour_tips['t14_17']);
		else if (now > 17 && now <= 19) text = getRandText(result.waifu.hour_tips['t17_19']);
		else if (now > 19 && now <= 21) text = getRandText(result.waifu.hour_tips['t19_21']);
		else if (now > 21 && now <= 23) text = getRandText(result.waifu.hour_tips['t21_23']);
		else text = getRandText(result.waifu.hour_tips.default);
		showMessage(text, 6000);
    }

	
    function showHitokotoActed() {
		now = new Date();
		if(now.getMinutes() == 0)
		{
			
			timeText(now.getHours());
		}
		else
		{
			if ($(document)[0].visibilityState == 'visible') showHitokoto();
		} 
    }

	
    function showHitokoto() {
    	switch(live2d_settings.hitokotoAPI) {
    	    case 'lwl12.com':
    	        $.getJSON('https://api.lwl12.com/hitokoto/v1?encode=realjson',function(result){
        	        if (!empty(result.source)) {
                        text = waifu_tips.hitokoto_api_message['lwl12.com'][0];
                        if (!empty(result.author)) text += waifu_tips.hitokoto_api_message['lwl12.com'][1];
                        text = text.render({source: result.source, creator: result.author});
                        window.setTimeout(function() {showMessage(text+waifu_tips.hitokoto_api_message['lwl12.com'][2], 3000, true);}, 5000);
                    } showMessage(result.text, 5000, true);
                });break;
    	    case 'fghrsh.net':
    	        $.getJSON('https://api.fghrsh.net/hitokoto/rand/?encode=jsc&uid=3335',function(result){
            	    if (!empty(result.source)) {
                        text = waifu_tips.hitokoto_api_message['fghrsh.net'][0];
                        text = text.render({source: result.source, date: result.date});
                        window.setTimeout(function() {showMessage(text, 3000, true);}, 5000);
                        showMessage(result.hitokoto, 5000, true);
            	    }
                });break;
            case 'jinrishici.com':
                $.ajax({
                    url: 'https://v2.jinrishici.com/one.json',
                    xhrFields: {withCredentials: true},
                    success: function (result, status) {
                        if (!empty(result.data.origin.title)) {
                            text = waifu_tips.hitokoto_api_message['jinrishici.com'][0];
                            text = text.render({title: result.data.origin.title, dynasty: result.data.origin.dynasty, author:result.data.origin.author});
                            window.setTimeout(function() {showMessage(text, 3000, true);}, 5000);
                        } showMessage(result.data.content, 5000, true);
                    }
                });break;
    	    default:
    	        $.getJSON('https://v1.hitokoto.cn',function(result){
            	    if (!empty(result.from)) {
                        text = waifu_tips.hitokoto_api_message['hitokoto.cn'][0];
                        text = text.render({source: result.from, creator: result.creator});
                        window.setTimeout(function() {showMessage(text, 3000, true);}, 5000);
            	    }
                    showMessage(result.hitokoto, 5000, true);
                });
    	}
    }


    $('.waifu-tool .fui-eye').click(function (){loadOtherModel()});
    $('.waifu-tool .fui-user').click(function (){loadRandTextures()});
    $('.waifu-tool .fui-chat').click(function (){showHitokoto()});
}
