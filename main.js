const electron = require('electron');
const path = require('path');
const renderer = require('./ML2DTray')
const fs = require('fs');
const Store = require('electron-store');
const BrowserWindow = electron.BrowserWindow;
const app = electron.app;
const ipcM = electron.ipcMain;
const appConfig = new Store();

let mainWindow;

/*********************************************************************/
/*****************************应用初始化******************************/

function onAppReady ()
{
	createWindow ();
	renderer.ML2DTray();
}


/*********************************************************************/
/*******************************主函数********************************/	

function createWindow () 
{
	var cWidth,cHeight,cX,cY;
	var winW = electron.screen.getPrimaryDisplay().workAreaSize.width;
	var winH = electron.screen.getPrimaryDisplay().workAreaSize.height;
	
	if(appConfig.get('custom') == 1)
	{
		cWidth = appConfig.get('winSize').split('x')[0];
		cHeight = appConfig.get('winSize').split('x')[1];
		cX = winW - cWidth;
		cY = winH - cHeight;
	}
	else
	{
		cWidth = 300;
		cHeight = 350;
		cX = winW - cWidth;
		cY = winH - cHeight;
	}	
	
	mainWindow = new BrowserWindow(
	{
		x: cX,
		y: cY,
		frame: false,
		transparent: true,
		alwaysOnTop: true,
		skipTaskbar: true,
		minimizable: false,
		maximizable: false,
		resizable: false,
		webPreferences: 
		{
			nodeIntegration: true,
			webSecurity: false,
			backgroundThrottling: false
			
		}
	});
	
	mainWindow.setContentSize(+cWidth, +cHeight);

	if(appConfig.get('ignoreMouse') == 1)
	{
		mainWindow.setIgnoreMouseEvents(true);
	}
	else
	{
		mainWindow.setIgnoreMouseEvents(false);
	}
	
	mainWindow.loadFile('index.html');

	if(appConfig.get('openDevTools') == 10086)
	{
		mainWindow.webContents.openDevTools();
	}
	
	
	global.mainWindow = mainWindow;

	mainWindow.on('closed', function () {
    
	
		mainWindow = null;
	});
}


/*********************************************************************/
/******************************主窗函数*******************************/	

function openWindow ()
{
	if (mainWindow === null)
	{
		createWindow();
	}  
}

function closeWindow ()
{
	mainWindow.close();
}

function showWindow ()
{
	mainWindow.show(); 
}

function hideWindow ()
{
	mainWindow.hide(); 
}

function aTopWindow (checked)
{
	mainWindow.setAlwaysOnTop(checked);
}

function ignoreMouse (checked)
{
	mainWindow.setIgnoreMouseEvents(checked, {forward: true});
	if(appConfig.get('ignoreMouse') == 1)
	{
		appConfig.set('ignoreMouse', 0);
	}
	else
	{
		appConfig.set('ignoreMouse', 1);
	}
}

function curBaseConfig ()
{
	mainWindow.webContents.send('curBaseConfig');
}

function setBaseConfig (baseWH, ckb, zoomFactor)
{
	mainWindow.setContentSize(+baseWH[0], +baseWH[1]);
	
	appConfig.set('custom', 1);
	appConfig.set('winSize', baseWH[0] + 'x' + baseWH[1]);
	appConfig.set('waifuSize', baseWH[2] + 'x' + baseWH[3]);
	appConfig.set('waifuTipsSize', baseWH[4] + 'x' + baseWH[5]);
	
	appConfig.set('showToolMenu', ckb[0]);
	appConfig.set('canSwitchModel', ckb[1]);
	appConfig.set('modelRandMode', ckb[2]);
	appConfig.set('canSwitchTextures', ckb[3]);
	appConfig.set('modelTexturesRandMode', ckb[4]);
	appConfig.set('showHitokoto', ckb[5]);
	appConfig.set('canSwitchHitokoto', ckb[6]);
	appConfig.set('canTakeScreenshot', ckb[7]);
	appConfig.set('showWelcomeMessage', ckb[8]);
	appConfig.set('openDevTools', ckb[9]);
	
	appConfig.set('canZoomFactor', zoomFactor[0]);
	appConfig.set('zoomFactor', zoomFactor[1]);
	
	reLoad();
}

function reLoad ()
{
	mainWindow.webContents.reload();
}

function reSet ()
{
	mainWindow.webContents.send('reInitVal');
}


/*********************************************************************/
/******************************应用函数*******************************/	

function openAtLogin (checked)
{
	app.setLoginItemSettings({openAtLogin: checked});
	if(appConfig.get('openAtLogin') == 1)
	{
		appConfig.set('openAtLogin', 0);
	}
	else
	{
		appConfig.set('openAtLogin', 1);
	}
}

function reBoot ()
{
	app.relaunch();
    app.quit();
}

function allClosed () 
{
	if (process.platform !== 'darwin') app.quit();
}


/*********************************************************************/
/******************************应用中断*******************************/	

app.on('ready', onAppReady);

app.on('window-all-closed', allClosed);

app.on('activate', openWindow);


/*********************************************************************/
/******************************通讯中断*******************************/	

ipcM.on('win-close', closeWindow);

ipcM.on('win-reLoad', reLoad);

ipcM.on('win-reBoot', reBoot);

ipcM.on('reCurBaseConfig', (event, modWH, tipWH, reckb, zoomFactor) => {
	renderer.reCurBaseConfig(modWH, tipWH, reckb, zoomFactor);
});

ipcM.on('test', (event, temp) => {
	
	console.error(temp);
});


/*********************************************************************/
/******************************外部调用*******************************/	

exports.hideWindow = hideWindow;
exports.showWindow = showWindow;
exports.allClosed = allClosed;
exports.aTopWindow = aTopWindow;
exports.ignoreMouse = ignoreMouse;
exports.openAtLogin = openAtLogin;
exports.setBaseConfig = setBaseConfig;
exports.curBaseConfig = curBaseConfig;

exports.reBoot = reBoot;
exports.reLoad = reLoad;
exports.reSet = reSet;


/*********************************************************************/
/******************************额外说明*******************************/	

