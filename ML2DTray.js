const electron = require('electron');
const path = require('path');
const renderer = require('./main');
const fs = require('fs');
const Store = require('electron-store');

const Tray = electron.Tray;
const Menu = electron.Menu;
const BrowserWindow = electron.BrowserWindow;
const dialog = electron.dialog;
const ipcT = electron.ipcMain;

const appConfig = new Store();
var tempSizeEvent;


let trayMenu;












function WinShowHide () 
{
	console.log('electron');
	if(mainWindow.isVisible())
	{
		renderer.hideWindow();
	}
	else
	{
		renderer.showWindow();
	}
}


function setWHWin () 
{
	var WHWin = new BrowserWindow(
	{
		width: 400,
		height: 400,
		frame: false,
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
	
	 const modalPath = path.join(__dirname, 'modal.html');
	 WHWin.loadURL(modalPath);
	
}


function reCurBaseConfig (modWH, tipWH, reckb, zoomFactor) 
{
	tempSizeEvent.sender.send('currentBaseConfig', modWH, tipWH, reckb, zoomFactor);
}





function ML2DTray () 
{	
	var trayMenu = [
		
		{
			label: '@置顶', 
			type: 'checkbox', 
			click: item => {
				const {checked} = item;
				renderer.aTopWindow (checked);
			}
		},
		
		{
			label: '忽略点击',
			type: 'checkbox',
			click: item => {
				const {checked} = item;
				renderer.ignoreMouse (checked);
			}
		},
		
		{
			label: '开机启动',
			type: 'checkbox', 
			click: item => {
				const {checked} = item;
				renderer.openAtLogin (checked);
			}
		},
		
		{type: 'separator'},
		
		{
			label: '基础设置',
			click: async () => {
				setWHWin();
			}
		},
		
		{
			label: '导入模型',
			click: async () => {
				try 
				{
					const {canceled, filePaths} = await dialog.showOpenDialog({
					filters: [{ name: '模型配置文件', extensions: ['json'] }],
					properties: ['openFile']
					});

					if (canceled){return;}
					
					const filePath = filePaths[0];
					const fileName = path.basename(filePath);
					const requiredFieldList = ['model', 'textures'];
					const requiredFieldList2 = ['FileReferences'];
					const contentStr = fs.readFileSync(filePath, { encoding: 'utf-8' });
					const config = JSON.parse(contentStr);
					const keys = Object.keys(config);
					if(requiredFieldList.every(key => keys.includes(key)))
					{
						const modelFolder = path.dirname(filePath);
						var str2 = filePath.replace(/\\/g, '\/');
						appConfig.set('canModPath', 1);
						appConfig.set('customModPath', str2);
						renderer.reLoad();
					} 
					else if(requiredFieldList2.every(key => keys.includes(key)))
					{
						const modelFolder = path.dirname(filePath);
						var str2 = filePath.replace(/\\/g, '\/');
						var str3 = new Array();
						var str4 = new Array();
						str3 = str2.split("/");
						str4[1] = str3[str3.length-2];
						str3.pop();
						str3.pop();
						str4[0] = str3.join("/");
						appConfig.set('canModPath', 2);
						appConfig.set('customModName', str4[1]);
						appConfig.set('customModPath', str4[0]);
						renderer.reLoad();
					}
					else
					{
						dialog.showErrorBox('提示信息', '读取MOD出错！');
						console.error('invalid model config');
					}
				}
				catch (err)
				{
					dialog.showErrorBox('提示信息', '读取MOD出错！');
					console.error('load model error: ', err);
				}
			}
		},
		
		{
			label: '移除模型',
			click: function () {
				appConfig.set('canModPath', 0);
				renderer.reLoad();
			}
		},
		
		{
			label: '重新渲染',
			click: async () => {
				renderer.reBoot();
			}
		},
		
		{
			label: '软件重置',
			click: async () => {
				renderer.reSet();
			}
		},
		
		{type: 'separator'},
		
		{
			label: '关于',
			click: async () => {
				dialog.showMessageBox({
					type:'info',
					title:'关于',
					message:'Live2D-M~我的Live2D\n版本：1.2.3\nGithub：https://github.com/kongbaiku/Live2D-M',
					buttons:['ok']});
			}
		},
		
		{label: '退出',click: function () {renderer.allClosed();}}
	];
	
	
	appTray = new Tray(path.join(__dirname, 'ml2d.ico'));
	
	
    appTray.setToolTip('ML2D~My L2D');
 
    
    const contextMenu = Menu.buildFromTemplate(trayMenu);

    
    appTray.setContextMenu(contextMenu);
	
    
    appTray.on('click', WinShowHide);
	
	
	if(mainWindow.isAlwaysOnTop())
	{
		contextMenu.items[0].checked = true;
	}
	else
	{
		contextMenu.items[0].checked = false;
	}
	
	
	if(appConfig.get('ignoreMouse') == 1)
	{
		contextMenu.items[1].checked = true;
	}
	else
	{
		contextMenu.items[1].checked = false;
	}
	
	
	if(appConfig.get('openAtLogin') == 1)
	{
		contextMenu.items[2].checked = true;
	}
	else
	{
		contextMenu.items[2].checked = false;
	}
}





ipcT.on('setConfig', (event, baseWH, ckb, zoomFactor) => {
	renderer.setBaseConfig(baseWH, ckb, zoomFactor);
});


ipcT.on('winSizeError', (event) => {
	dialog.showErrorBox('提示信息', '参数值不能为0！');
});


ipcT.on('getBaseConfig', (event) => {
	
	event.sender.send('currentWinSize', mainWindow.getSize()[0], mainWindow.getSize()[1]);
	
	renderer.curBaseConfig();
	tempSizeEvent = event;
});



	

exports.ML2DTray = ML2DTray;
exports.reCurBaseConfig = reCurBaseConfig;



