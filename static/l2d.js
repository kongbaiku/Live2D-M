



window.L2DItem = Array();
L2DItem['center_x'] = 0;
L2DItem['center_y'] = 0;
L2DItem['width'] = 1;
L2DItem['height'] = 1;
L2DItem['HitAreasCustom'] = 0;
L2DItem['head_x'] = 0;
L2DItem['head_y'] = 0;
L2DItem['body_x'] = 0;
L2DItem['body_y'] = 0;
L2DItem['leg_x'] = 0;
L2DItem['leg_y'] = 0;
L2DItem['special_x'] = 0;
L2DItem['special_y'] = 0;
L2DItem['Idle'] = '';


class L2D {
	
    constructor (basePath) {
        this.basePath = basePath;
        this.loader = new PIXI.loaders.Loader(this.basePath);
        this.animatorBuilder = new LIVE2DCUBISMFRAMEWORK.AnimatorBuilder();
        this.timeScale = 1;
        this.models = {};
        this.TriggerMotions = new Map();
		this.TriggerVoices = new Map();	
		this.TriggerText = new Map();	
        this.TapAreas = new Map();		
		this.TapAreasV = new Map();		
		this.TapAreasT = new Map();		
    }
    
	
    setPhysics3Json (value) {
        if (!this.physicsRigBuilder) {
            this.physicsRigBuilder = new LIVE2DCUBISMFRAMEWORK.PhysicsRigBuilder();
        }
        this.physicsRigBuilder.setPhysics3Json(value);
        return this;
    }
    
	
    load (name, v) {
        if (!this.models[name]) {
            let modelDir = name+'/';
            let modelPath = name+'.model3.json';
            let textures = new Array();
            let textureCount = 0;
			let modelNames = new Array();
            let motionNames = new Array();
			let voiceNames = new Array();

            if (!modelNames.includes(name+'_model'))
			{
                this.loader.add(name+'_model', modelDir+modelPath, { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
                modelNames.push(name+'_model');
            } 

            this.loader.load((loader, resources) => 
			{
                let model3Obj = resources[name+'_model'].data;
                
                if (typeof(model3Obj['FileReferences']['Moc']) !== "undefined") 
				{
                    loader.add(name+'_moc', modelDir+model3Obj['FileReferences']['Moc'], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.BUFFER });
                }

                if (typeof(model3Obj['FileReferences']['Textures']) !== "undefined")
				{
                    model3Obj['FileReferences']['Textures'].forEach((element) => 
					{
                        loader.add(name+'_texture'+textureCount, modelDir+element);
                        textureCount++;
                    });
                }

                if (typeof(model3Obj['FileReferences']['Physics']) !== "undefined")
				{
                    loader.add(name+'_physics', modelDir+model3Obj['FileReferences']['Physics'], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
                }
				
				if (typeof(model3Obj['FileReferences']['Layout']) !== "undefined")
				{
					var layoutP = [];
					let i = 0;
					for (let group in model3Obj['FileReferences']['Layout']) 
					{
						layoutP[i] = model3Obj['FileReferences']['Layout'][group];
						i++;
					}				
					L2DItem.center_x = layoutP[0];
					L2DItem.center_y = layoutP[1];
					L2DItem.width = layoutP[2];
					L2DItem.height = layoutP[3];
                }

                if (typeof(model3Obj['FileReferences']['Motions']) !== "undefined")
				{
                    for (let group in model3Obj['FileReferences']['Motions']) 
					{
						var groupmotionNames = [];
						var groupvoiceNames = [];
						var grouptextNames = [];

                        model3Obj['FileReferences']['Motions'][group].forEach((element) => 
						{
                            let motionName = element['File'].split('/').pop().split('.').shift();
							let voiceName = element['Sound'];
							let TextName = element['Text'];
							if(group === "Idle")
							{
								L2DItem.Idle = motionName;
							}
                            if (!motionNames.includes(motionName))
							{
                                loader.add(motionName, modelDir+element['File'], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
                                motionNames.push(motionName);
								voiceNames.push(voiceName);
                            } 
							else 
							{
                                var n = motionName+String(Date.now());
                                loader.add(n, modelDir+element['File'], { xhrType: PIXI.loaders.Resource.XHR_RESPONSE_TYPE.JSON });
                                motionNames.push(motionName);
								voiceNames.push(voiceName);
                            }
							groupmotionNames.push(motionName);
							groupvoiceNames.push(voiceName);
							grouptextNames.push(TextName);
							
                        });
						this.TriggerMotions.set(group,groupmotionNames);
						this.TriggerVoices.set(group,groupvoiceNames);
						this.TriggerText.set(group,grouptextNames);
                    }
                }

                let groups = null;
                if (typeof(model3Obj['Groups']) !== "undefined")
				{
                    groups = LIVE2DCUBISMFRAMEWORK.Groups.fromModel3Json(model3Obj);
                }
				
				if (typeof(model3Obj['HitAreas']) !== 'undefined')
				{
                    let tempHitAreas = model3Obj['HitAreas'];
                    
                    tempHitAreas.forEach((e)=>{if(!e.Order){e.Order = 0}})
                    tempHitAreas.sort(function(a, b){return b.Order - a.Order}); 
                    tempHitAreas.forEach((e)=>{
                        let [MotionsGroup,MotionsItems] = e.Motion.split(':')
						this.TapAreasV.set(e.Id,this.TriggerVoices.get(MotionsGroup));
						this.TapAreasT.set(e.Id,this.TriggerText.get(MotionsGroup));
                        if(MotionsItems)
						{
                            this.TapAreas.set(e.Id,MotionsItems.split(','));
                        }
						else
						{
                            this.TapAreas.set(e.Id,this.TriggerMotions.get(MotionsGroup));
                        }
                    })
                }
				
				if (typeof(model3Obj['HitAreas_Custom']) !== "undefined")
				{
					L2DItem.HitAreasCustom = 1;
					var HitAreas = [];
					let i = 0;
					for (let group in model3Obj['HitAreas_Custom']) 
					{
						console.log(model3Obj['HitAreas_Custom'][group]);
						HitAreas[i] = model3Obj['HitAreas_Custom'][group];
						i++;
					}				
					L2DItem.head_x = HitAreas[0];
					L2DItem.head_y = HitAreas[1];
					L2DItem.body_x = HitAreas[2];
					L2DItem.body_y = HitAreas[3];
					L2DItem.leg_x = HitAreas[4];
					L2DItem.leg_y = HitAreas[5];
					L2DItem.special_x = HitAreas[6];
					L2DItem.special_y = HitAreas[7];
					console.log("L2DItem.head_x");
					console.log(L2DItem.head_x[0]);
                }

                loader.load((l, r) => {
                    let moc = null;
                    if (typeof(r[name+'_moc']) !== "undefined") 
					{
                        moc = Live2DCubismCore.Moc.fromArrayBuffer(r[name+'_moc'].data);
                    }

                    if (typeof(r[name+'_texture'+0]) !== "undefined") 
					{
                        for (let i = 0; i < textureCount; i++) {
                            textures.splice(i, 0, r[name+'_texture'+i].texture);
                        }
                    }

                    if (typeof(r[name+'_physics']) !== "undefined") 
					{
                        this.setPhysics3Json(r[name+'_physics'].data);
                    }

                    let motions = new Map();
                    motionNames.forEach((element) => {
                        motions.set(element, LIVE2DCUBISMFRAMEWORK.Animation.fromMotion3Json(r[element].data));
                    });
					
                        
                        
                    

                    let model = null;
                    let coreModel = Live2DCubismCore.Model.fromMoc(moc);
                    if (coreModel == null) {
                        return;
                    }

                    let animator = this.animatorBuilder
                        .setTarget(coreModel)
                        .setTimeScale(this.timeScale)
                        .build();

					let physicsRig = this.physicsRigBuilder
                        .setTarget(coreModel)
                        .setTimeScale(this.timeScale)
                        .build();
                    
                    let userData = null;

                    model = LIVE2DCUBISMPIXI.Model._create(coreModel, textures, animator, physicsRig, userData, groups);
                    model.motions = motions;
                    this.models[name] = model;

                    v.changeCanvas(model);
                });
            });
        } else {
            v.changeCanvas(this.models[name]);
        }
    }
}