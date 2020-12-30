window.live2dMoc3_settings = Array();
live2dMoc3_settings['modWidth'] = 800;
live2dMoc3_settings['modHeight'] = 600;
live2dMoc3_settings['modLeft'] = 0+'px';
live2dMoc3_settings['modRight'] = 0+'px';
live2dMoc3_settings['modTop'] = 0+'px';
live2dMoc3_settings['modBottom'] = 0+'px';
live2dMoc3_settings['modMotions'] = 0;
live2dMoc3_settings['opacity'] = 0;
live2dMoc3_settings['mobile'] = true;
live2dMoc3_settings['playFlag'] = false;
live2dMoc3_settings['role'] = '';
live2dMoc3_settings['basePath'] = '';
live2dMoc3_settings['Idle'] = '';
live2dMoc3_settings['Text'] = '';
live2dMoc3_settings['soundTime'] = 0;
live2dMoc3_settings['soundPath'] = '';
live2dMoc3_settings['x'] = 0;
live2dMoc3_settings['y'] = 0;

class Viewer {
    constructor (config) {
		
        let width = live2dMoc3_settings.modWidth;
        let height = live2dMoc3_settings.modHeight;
        let left = live2dMoc3_settings.modLeft;
        let right = live2dMoc3_settings.modRight;
		let top = live2dMoc3_settings.modTop;
        let bottom = live2dMoc3_settings.modBottom;
		let opa = live2dMoc3_settings.opacity;
		let mobile = live2dMoc3_settings.mobile;
		let role = live2dMoc3_settings.role = config.role;
		let basePath = live2dMoc3_settings.basePath = config.basePath;
        let bg = config.background;
		
		
        if(!mobile){
            if(this.isMobile()) return;
        } 
		
		
        this.l2d = new L2D(config.basePath);
        this.canvas = $(".Canvas");
        this.l2d.load(role, this);
		
		
        this.app = new PIXI.Application({
            width: width,
            height: height, 
            transparent: true,
            antialias: true
        });
        this.canvas.html(this.app.view);
        this.canvas[0].style.position = 'fixed';
		
        if(bg)
		{
            this.canvas[0].style.background = `url("${bg}")`;
            this.canvas[0].style.backgroundSize = 'cover';
        }
		
        if(opa)
            this.canvas[0].style.opacity = opa;
        
            
        
            
        
            
        
            


        this.app.ticker.add((deltaTime) => {
            if (!this.model) {
                return;
            }

            this.model.update(deltaTime);
            this.model.masks.update(this.app.renderer);
        });

		
        window.onresize = (event) => {                 
            if (event === void 0) { event = null; }

            this.app.view.style.width = width + "px";
            this.app.view.style.height = height + "px";
            this.app.renderer.resize(width, height);
            
            if (this.model)
			{
				this.model.position = new PIXI.Point((width * 0.5), (height * 0.5));
                
				if(L2DItem.width !== 1 || L2DItem.height !== 1)
				{
					this.model.scale = new PIXI.Point((this.model.position.x * 0.12 * L2DItem.width), (this.model.position.x * 0.12* L2DItem.height));
				}
				else
				{
					this.model.scale = new PIXI.Point((this.model.position.x * 0.12), (this.model.position.x * 0.12));
				}
                
                this.model.masks.resize(this.app.view.width, this.app.view.height);
				
				if(L2DItem.center_x !== 0 || L2DItem.center_y !== 0)
				{
					this.canvas[0].style.left = L2DItem.center_x * 10 + 'px';
					this.canvas[0].style.bottom = L2DItem.center_y * 10 + 'px';					
				}
            }
        };
		
		
        this.isClick = false;
		
        this.app.view.addEventListener('mousedown', (event) => {
            this.isClick = true;
        });
		
        this.app.view.addEventListener('mousemove', (event) => {
			this.isClick = false;
			if (this.model&& live2dMoc3_settings.playFlag == false)
			{
				this.model.inDrag = true;
			}

            if (this.model)
			{
                let mouse_x = this.model.position.x - event.offsetX;
                let mouse_y = this.model.position.y - event.offsetY;
                this.model.pointerX = -mouse_x / this.app.view.height;
                this.model.pointerY = -mouse_y / this.app.view.width;
            }
        });
		
        this.app.view.addEventListener('mouseup', (event) => {
            if (!this.model) {
                return;
            }
			let templatestr = '';
            let i = 0;
			this.isClick = false;
            this.model.inDrag = false;
					
            if (this.l2d.TapAreas && live2dMoc3_settings.playFlag == false)
			{
				var soundTime = 0;
				
				
                for(let item of this.l2d.TapAreas)
				{
					
					
                    templatestr=templatestr+(i==0?"if":"else if")
                    if (item[0])
					{	
						if(item[1].length==1)
						{
							let cText = this.l2d.TapAreasT.get(item[0])[0];
							const filePath = config.basePath+"/"+config.role+"/"+this.l2d.TapAreasV.get(item[0]);
							if(this.l2d.TapAreasV.get(item[0]) !== undefined)
							{
								templatestr=templatestr+
								`(this.isHit("`+item[0]+`", event.offsetX, event.offsetY)) 
								{
									this.startAnimation("`+item[1][0]+`", "base");
									live2dMoc3_settings.text = "`+cText+`";
									live2dMoc3_settings.soundPath = "`+filePath+`";
								}`
							}
							else
							{
								templatestr=templatestr+
								`(this.isHit("`+item[0]+`", event.offsetX, event.offsetY)) 
								{
									this.startAnimation("`+item[1][0]+`", "base");
									live2dMoc3_settings.text = "`+cText+`";
								}`
							}
						}
						else
						{
							let currentMotion = Math.floor(Math.random()*item[1].length);
							let cText = this.l2d.TapAreasT.get(item[0])[currentMotion];
							const filePath = ''+config.basePath+"/"+config.role+"/"+this.l2d.TapAreasV.get(item[0])[currentMotion];
							if(this.l2d.TapAreasV.get(item[0])[currentMotion] !== undefined)
							{
								templatestr=templatestr+
								`(this.isHit("`+item[0]+`", event.offsetX, event.offsetY)) 
								{
									this.startAnimation("`+item[1][currentMotion]+`", "base");
									live2dMoc3_settings.text = "`+cText+`";
									live2dMoc3_settings.soundPath = "`+filePath+`";
								}`
							}
							else
							{
								templatestr=templatestr+
								`(this.isHit("`+item[0]+`", event.offsetX, event.offsetY)) 
								{
									this.startAnimation("`+item[1][currentMotion]+`", "base");
									live2dMoc3_settings.text = "`+cText+`";
								}`
							}
						}
                    }
					console.log(templatestr);
                    i++
                }
				eval(templatestr);
				if(live2dMoc3_settings.soundPath)
				{
					var sound = new Audio(live2dMoc3_settings.soundPath);
					sound.play();
					sound.addEventListener('timeupdate',()=>{live2dMoc3_settings.soundTime=sound.duration;console.log(sound.duration);});
					live2dMoc3_settings.soundPath = "";
					live2dMoc3_settings.playFlag = true;
				}				
            } 
        });
        console.log("Init finished.");
    }
	
	
    changeCanvas (model) {
        this.app.stage.removeChildren();

        model.motions.forEach((value, key) => {
            if (key != "effect") {
                let btn = document.createElement("button");
                let label = document.createTextNode(key);
                btn.appendChild(label);
                btn.className = "btnGenericText";
				btn.id = "btnG";
				if(live2dMoc3_settings.modMotions === true)
				{
					document.body.appendChild(btn);
				}
                btn.addEventListener("click", () => {
                    this.startAnimation(key, "base");
                });
            }
        });

        this.model = model;
        this.model.update = this.onUpdate; 
        this.model.animator.addLayer("base", LIVE2DCUBISMFRAMEWORK.BuiltinAnimationBlenders.OVERRIDE, 1);

        this.app.stage.addChild(this.model);
        this.app.stage.addChild(this.model.masks);
		
		live2dMoc3_settings.Idle = L2DItem.Idle;
        if(this.l2d.TriggerMotions.get('Start'))
		{
			const filePath = live2dMoc3_settings.basePath+"/"+live2dMoc3_settings.role+"/"+this.l2d.TriggerVoices.get('Start');
            this.startAnimation(this.l2d.TriggerMotions.get('Start')[0], "base");
			live2dMoc3_settings.text = this.l2d.TriggerText.get('Start')[0];
			var sound = new Audio(filePath);
			sound.play();
			sound.addEventListener('timeupdate',()=>{live2dMoc3_settings.soundTime = sound.duration;});
			live2dMoc3_settings.playFlag = true;
        }
        window.onresize();
    }

	
    onUpdate (delta) {
        let deltaTime = 0.016 * delta;
        if (!this.animator.isPlaying)
		{
			if(live2dMoc3_settings.Idle !== 0)
			{
				let m = this.motions.get(live2dMoc3_settings.Idle);
				this.animator.getLayer("base").play(m);
			}
			live2dMoc3_settings.playFlag = false;
        }
        this._animator.updateAndEvaluate(deltaTime);

        if (this.inDrag)
		{
            this.addParameterValueById("ParamAngleX", this.pointerX * 30);
            this.addParameterValueById("ParamAngleY", -this.pointerY * 30);
            this.addParameterValueById("ParamBodyAngleX", this.pointerX * 10);
            this.addParameterValueById("ParamBodyAngleY", -this.pointerY * 10);
            this.addParameterValueById("ParamEyeBallX", this.pointerX);
            this.addParameterValueById("ParamEyeBallY", -this.pointerY);
        }
		
		live2dMoc3_settings.x = this.pointerX;
		live2dMoc3_settings.y = this.pointerY;

        if (this._physicsRig)
		{
            this._physicsRig.updateAndEvaluate(deltaTime);
        }

        this._coreModel.update();

        let sort = false;
        for (let m = 0; m < this._meshes.length; ++m)
		{
            this._meshes[m].alpha = this._coreModel.drawables.opacities[m];
            this._meshes[m].visible = Live2DCubismCore.Utils.hasIsVisibleBit(this._coreModel.drawables.dynamicFlags[m]);
            if (Live2DCubismCore.Utils.hasVertexPositionsDidChangeBit(this._coreModel.drawables.dynamicFlags[m]))
			{
                this._meshes[m].vertices = this._coreModel.drawables.vertexPositions[m];
                this._meshes[m].dirtyVertex = true;
            }
            if (Live2DCubismCore.Utils.hasRenderOrderDidChangeBit(this._coreModel.drawables.dynamicFlags[m]))
			{
                sort = true;
            }
        }

        if (sort)
		{
            this.children.sort((a, b) => {
                let aIndex = this._meshes.indexOf(a);
                let bIndex = this._meshes.indexOf(b);
                let aRenderOrder = this._coreModel.drawables.renderOrders[aIndex];
                let bRenderOrder = this._coreModel.drawables.renderOrders[bIndex];

                return aRenderOrder - bRenderOrder;
            });
        }

        this._coreModel.drawables.resetDynamicFlags();
    }

	
    startAnimation (motionId, layerId) {
        if (!this.model)
		{
            return;
        }
        console.log("Animation:", motionId, layerId)
        let m = this.model.motions.get(motionId);
        
        if (!m) 
		{
            return;
        }

        let l = this.model.animator.getLayer(layerId);
		
        if (!l) 
		{
            return;
        }

        l.play(m);
    }

	
    isHit (id, posX, posY) {
        if (!this.model)
		{
            return false;
        }
		let _meshesname = []
        this.model._meshes.forEach((e)=>{
            _meshesname.push(e.name)
        })
		
		
		
		
			
			
			
			
			
			
			
			
			

			
            
            

            
                
            
            
                
            
            
                
            
            
                
            
			
			
			
			
			
			
		
			
			
				
				
			
        
		
		
		if(L2DItem.HitAreasCustom === 1)
		{
			if(L2DItem.head_x[0] < this.model.pointerX && L2DItem.head_x[1] < this.model.pointerY)
			{
				if(L2DItem.head_y[0] > this.model.pointerX && L2DItem.head_y[1] > this.model.pointerY)
				{
					if("TouchHead" === id)
					{
						return (1);
					}
				}
				
			}
			if(L2DItem.body_x[0] < this.model.pointerX && L2DItem.body_x[1] < this.model.pointerY)
			{
				if(L2DItem.body_y[0] > this.model.pointerX && L2DItem.body_y[1] > this.model.pointerY)
				{
					if("TouchBody" === id)
					{
						return (1);
					}
				}
			}

			if(L2DItem.leg_x[0] < this.model.pointerX && L2DItem.leg_x[1] < this.model.pointerY)
			{
				if(L2DItem.leg_y[0] > this.model.pointerX && L2DItem.leg_y[1] > this.model.pointerY)
				{
					if("TouchLeg" === id)
					{
						return (1);
					}
				}
			}
			
			if(L2DItem.special_x[0] < this.model.pointerX && L2DItem.special_x[1] < this.model.pointerY)
			{
				if(L2DItem.special_y[0] > this.model.pointerX && L2DItem.special_y[1] > this.model.pointerY)
				{
					if("TouchSpecial" === id)
					{
						return (1);
					}
				}
			}
		}
		
		let m = this.model.getModelMeshById(id);
		
		if (!m)
		{
            return false;
        }

        const vertexOffset = 0;
        const vertexStep = 2;
        const vertices = m.vertices;
		
        let left = vertices[0];
        let right = vertices[0];
        let top = vertices[1];
        let bottom = vertices[1];

        for (let i = 1; i < 4; ++i) {
            let x = vertices[vertexOffset + i * vertexStep];
            let y = vertices[vertexOffset + i * vertexStep + 1];

            if (x < left) {
                left = x;
            }
            if (x > right) {
                right = x;
            }
            if (y < top) {
                top = y;
            }
            if (y > bottom) {
                bottom = y;
            }
        }

        let mouse_x = m.worldTransform.tx - posX;
        let mouse_y = m.worldTransform.ty - posY;
        let tx = -mouse_x / m.worldTransform.a;
        let ty = -mouse_y / m.worldTransform.d;

        return ((left <= tx) && (tx <= right) && (top <= ty) && (ty <= bottom));
    }

	
    isMobile(){
        var WIN = window;
        var LOC = WIN["location"];
        var NA = WIN.navigator;
        var UA = NA.userAgent.toLowerCase();

        function test(needle) {
          return needle.test(UA);
        }        
        var IsAndroid = test(/android|htc/) || /linux/i.test(NA.platform + "");
        var IsIPhone = !IsAndroid && test(/ipod|iphone/);
        var IsWinPhone = test(/windows phone/);

        var device = {
            IsAndroid: IsAndroid,
            IsIPhone: IsIPhone,
            IsWinPhone: IsWinPhone
        }
        var documentElement = WIN.document.documentElement;
        for (var i in device) {
            if (device[i]) {
                documentElement.className += " " + i.replace("Is", "").toLowerCase();
            }
        }
        return device.IsAndroid || device.IsIPhone || device.IsWinPhone
    }
}
