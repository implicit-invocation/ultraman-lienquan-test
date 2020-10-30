(this["webpackJsonpultraman-lienquan"]=this["webpackJsonpultraman-lienquan"]||[]).push([[0],{89:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var i=a(11),r=a.n(i),n=a(13),o=a(6),s=a(12),c=a(0),l=(a(89),a(4)),u=function e(){Object(l.a)(this,e)};u.CAMERA_WIDTH=4,u.CAMERA_HEIGHT=8,u.GAP=1,u.GRAVITY=20,u.PLAYER_WIDTH=.2,u.PLAYER_HEIGHT=.2,u.PLAYER_SCALE=5,u.JUMP_FORCE=-10,u.RUN_FORCE=2,u.TOTAL_BLOCK_HEIGHT=15,u.BLOCK_BLOCK_SIZE=2.1*u.CAMERA_WIDTH,u.BLOCK_SIZE=u.CAMERA_HEIGHT/u.TOTAL_BLOCK_HEIGHT,u.BLOCK_OFFSET_Y=u.CAMERA_HEIGHT/1.7;var b,h,p,y,j,d,O,v,f,g,m,w,A,E,I,_,C,H,S,T,x,k,R,M,L,P,G,B,D,W,z,F,Y,K,U,J,Z,V,N,q,Q,X,$,ee,te,ae,ie,re,ne,oe,se,ce,le,ue,be,he,pe,ye,je,de,Oe,ve,fe,ge,me,we,Ae,Ee,Ie,_e,Ce,He,Se,Te=a(2),xe=a(5),ke=a(1),Re=a(8),Me=a(7),Le=a(3),Pe=(a(14),b=Object(c.Inject)("physicsWorld"),h=function(e){Object(Re.a)(a,e);var t=Object(Me.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(Te.a)(e,"physicsWorld",p,Object(ke.a)(e)),e}return Object(xe.a)(a,[{key:"process",value:function(){this.physicsWorld.Step(this.world.delta,8,3)}}]),a}(c.System),p=Object(Le.a)(h.prototype,"physicsWorld",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h),Ge=(y=Object(c.Inject)("viewport"),j=Object(c.Inject)("playerPosition"),d=function(e){Object(Re.a)(a,e);var t=Object(Me.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(Te.a)(e,"viewport",O,Object(ke.a)(e)),Object(Te.a)(e,"playerPos",v,Object(ke.a)(e)),e}return Object(xe.a)(a,[{key:"process",value:function(){var e=this.viewport.getCamera().getPosition();this.viewport.getCamera().setPosition(this.playerPos.x-u.GAP,e.y)}}]),a}(c.System),O=Object(Le.a)(d.prototype,"viewport",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=Object(Le.a)(d.prototype,"playerPos",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d),Be=a(9),De=a(10),We=(f=Object(c.Inject)("viewport"),g=Object(c.Inject)("physicsWorld"),m=Object(c.Inject)("blocks"),C=_=function(e){Object(Re.a)(a,e);var t=Object(Me.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).generatedStep=0,Object(Te.a)(e,"viewport",A,Object(ke.a)(e)),Object(Te.a)(e,"physicsWorld",E,Object(ke.a)(e)),Object(Te.a)(e,"blocks",I,Object(ke.a)(e)),e}return Object(xe.a)(a,[{key:"createBox",value:function(e,t,a,i,r){var n=new s.b2BodyDef;n.type=s.b2BodyType.b2_staticBody,n.position.Set(e,t);var o=this.physicsWorld.CreateBody(n);o.SetUserData({type:"block"});var c=new s.b2PolygonShape;c.SetAsBox(a/2,i/2),o.CreateFixture(c),this.blocks.push({x:e,y:t,w:a,h:i,type:r,body:o})}},{key:"initialized",value:function(){for(;this.generatedStep<2;)this.generateBlocks(this.generatedStep*u.BLOCK_BLOCK_SIZE,!0),this.generatedStep++}},{key:"process",value:function(){for(var e=this.viewport.getCamera().getPosition(),t=Math.floor(e.x/u.BLOCK_BLOCK_SIZE);this.generatedStep<=t+1;)this.generateBlocks(this.generatedStep*u.BLOCK_BLOCK_SIZE),this.generatedStep++}},{key:"generateBlocks",value:function(e){var t,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=i?0:Math.floor(Math.random()*(a.patterns.length-1))+1,n=a.patterns[r],o=Object(De.a)(n);try{for(o.s();!(t=o.n()).done;){var s=t.value,c=Object(Be.a)(s,2),l=c[0],b=c[1];this.createBox(e+u.BLOCK_SIZE*l,(u.TOTAL_BLOCK_HEIGHT-b)*u.BLOCK_SIZE,u.BLOCK_SIZE,u.BLOCK_SIZE,Math.floor(3*Math.random()))}}catch(h){o.e(h)}finally{o.f()}}}]),a}(c.System),_.patterns=["1-10,2","1-4,2;6-9,2;4,3-5;5,4;5,8-10;6,7-10;7,7-8","1-9,2;3,3-5;6-8,3;6-7,4","1-9,2;4,5-8;2,11;6,11;2-6,12;2-6,13","1-5,2;8-12,2;3-5,3;8-10,3;4-5,4;8-9,4;5-8,5;2-8,11;3-7,12;4-6,13","1-5,2;8-12,2;4-5,3;8-9,3;4-5,4;8-9,4","1-14,2;4-10,5;4-10,6;4,7;10,7;7,9-12","1-14,2;4-5,3;9-11,3;4,4;10,4;5-6,10;4-11,11;4-11,12"].map((function(e){var t,a=[],i=e.split(";"),r=Object(De.a)(i);try{for(r.s();!(t=r.n()).done;){var n=t.value.split(","),o=Object(Be.a)(n,2),s=o[0],c=o[1],l=s.split("-").map((function(e){return parseInt(e)})),u=c.split("-").map((function(e){return parseInt(e)}));if(2===l.length){for(var b=[],h=l[0];h<=l[1];h++)b.push(h);l=b}if(2===u.length){for(var p=[],y=u[0];y<=u[1];y++)p.push(y);u=p}var j,d=Object(De.a)(l);try{for(d.s();!(j=d.n()).done;){var O,v=j.value,f=Object(De.a)(u);try{for(f.s();!(O=f.n()).done;){var g=O.value;a.push([v,g])}}catch(m){f.e(m)}finally{f.f()}}}catch(m){d.e(m)}finally{d.f()}}}catch(m){r.e(m)}finally{r.f()}return a})),w=C,A=Object(Le.a)(w.prototype,"viewport",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=Object(Le.a)(w.prototype,"physicsWorld",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=Object(Le.a)(w.prototype,"blocks",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w),ze=(H=Object(c.Inject)("viewport"),S=Object(c.Inject)("context"),T=Object(c.Inject)("blocks"),x=Object(c.Inject)("assetManager"),k=function(e){Object(Re.a)(a,e);var t=Object(Me.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(Te.a)(e,"viewport",R,Object(ke.a)(e)),Object(Te.a)(e,"gl",M,Object(ke.a)(e)),Object(Te.a)(e,"blocks",L,Object(ke.a)(e)),Object(Te.a)(e,"assetManager",P,Object(ke.a)(e)),e.batch=void 0,e.whiteTex=void 0,e.atlas=void 0,e.regions=void 0,e}return Object(xe.a)(a,[{key:"initialized",value:function(){this.batch=Object(o.e)(this.gl),this.whiteTex=Object(o.k)(this.gl);var e=this.assetManager.getAtlas("./ground.atlas");e&&(this.atlas=e,this.regions=e.findRegions("tile"))}},{key:"process",value:function(){this.batch.setProjection(this.viewport.getCamera().combined),this.batch.begin();var e,t=Object(De.a)(this.blocks);try{for(t.s();!(e=t.n()).done;){var a=e.value,i=a.x,r=a.y,n=a.w,o=a.h,s=a.type;this.regions[s].draw(this.batch,i-n/2,r-o/2,n,o)}}catch(c){t.e(c)}finally{t.f()}this.batch.end()}}]),a}(c.System),R=Object(Le.a)(k.prototype,"viewport",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=Object(Le.a)(k.prototype,"gl",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=Object(Le.a)(k.prototype,"blocks",[T],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=Object(Le.a)(k.prototype,"assetManager",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k),Fe=(G=Object(c.Inject)("physicsWorld"),B=Object(c.Inject)("playerPosition"),D=Object(c.Inject)("inputHandler"),W=Object(c.Inject)("playerState"),z=Object(c.Inject)("eventEmitter"),F=function(e){Object(Re.a)(a,e);var t=Object(Me.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(Te.a)(e,"physicsWorld",Y,Object(ke.a)(e)),Object(Te.a)(e,"playerPos",K,Object(ke.a)(e)),Object(Te.a)(e,"inputHandler",U,Object(ke.a)(e)),Object(Te.a)(e,"playerState",J,Object(ke.a)(e)),Object(Te.a)(e,"eventEmitter",Z,Object(ke.a)(e)),e.playerBody=void 0,e.stunnedDuration=0,e.pressed=!1,e.jumpLeft=0,e.gameOver=!1,e.zeroCenter={x:0,y:0},e.runImpulse={x:u.RUN_FORCE,y:0},e.jumpImpulse={x:0,y:u.JUMP_FORCE},e}return Object(xe.a)(a,[{key:"initialized",value:function(){var e=new s.b2BodyDef;e.type=s.b2BodyType.b2_dynamicBody,e.fixedRotation=!0,e.position.Set(2,u.CAMERA_HEIGHT/2);var t=this.physicsWorld.CreateBody(e),a=new s.b2CircleShape(u.PLAYER_WIDTH);a.Set({x:-u.PLAYER_WIDTH/2,y:-u.PLAYER_HEIGHT/2},u.PLAYER_WIDTH),t.CreateFixture(a);var i=new s.b2PolygonShape;i.SetAsBox(u.PLAYER_WIDTH/8,u.PLAYER_WIDTH/8,{x:0,y:u.PLAYER_HEIGHT/2});var r=new s.b2FixtureDef;r.isSensor=!0,r.shape=i,r.userData={type:"playerSensor"},t.CreateFixture(r);var n=new s.b2PolygonShape;n.SetAsBox(u.PLAYER_WIDTH/8,u.PLAYER_WIDTH/8,{x:u.PLAYER_WIDTH/2,y:0});var o=new s.b2FixtureDef;o.isSensor=!0,o.shape=n,o.userData={type:"playerSensor2"},t.CreateFixture(o),this.playerBody=t;var c=function(e){Object(Re.a)(a,e);var t=Object(Me.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this)).movementSytem=void 0,i.movementSytem=e,i}return Object(xe.a)(a,[{key:"processJumpable",value:function(e){var t,a,i,r,n=e.GetFixtureA(),o=e.GetFixtureB();n.IsSensor()&&"playerSensor"===(null===(t=n.GetUserData())||void 0===t?void 0:t.type)?r=o:o.IsSensor()&&"playerSensor"===(null===(a=o.GetUserData())||void 0===a?void 0:a.type)&&(r=n),r&&"block"===(null===(i=r.GetBody().GetUserData())||void 0===i?void 0:i.type)&&(this.movementSytem.jumpLeft=2,this.movementSytem.playerState.changeAction("run"))}},{key:"processObstacle",value:function(e){var t,a,i,r,n=e.GetFixtureA(),o=e.GetFixtureB();n.IsSensor()&&"playerSensor2"===(null===(t=n.GetUserData())||void 0===t?void 0:t.type)?r=o:o.IsSensor()&&"playerSensor2"===(null===(a=o.GetUserData())||void 0===a?void 0:a.type)&&(r=n),r&&"block"===(null===(i=r.GetBody().GetUserData())||void 0===i?void 0:i.type)&&(this.movementSytem.stunnedDuration=.2,this.movementSytem.playerBody.GetLinearVelocity().Set(0,0),this.movementSytem.playerBody.ApplyLinearImpulse({x:-2*u.RUN_FORCE,y:0},{x:0,y:0}),this.movementSytem.playerState.changeAction("hurt"))}},{key:"BeginContact",value:function(e){this.processJumpable(e),this.processObstacle(e)}}]),a}(s.b2ContactListener);this.physicsWorld.SetContactListener(new c(this))}},{key:"process",value:function(){if(this.stunnedDuration>0)this.stunnedDuration-=this.world.delta,this.stunnedDuration<=0&&this.playerState.changeAction("run");else{var e=this.playerBody.GetLinearVelocity();if(e.Set(0,e.y),this.playerBody.ApplyLinearImpulse(this.runImpulse,this.zeroCenter),this.pressed)this.inputHandler.isTouched()||(this.pressed=!1);else if(this.inputHandler.isTouched()&&this.jumpLeft>0){this.jumpLeft--,1===this.jumpLeft?this.playerState.changeAction("jump"):this.playerState.changeAction("doubleJump"),this.pressed=!0;var t=this.playerBody.GetLinearVelocity();t.Set(t.x,0),this.playerBody.ApplyLinearImpulse(this.jumpImpulse,this.zeroCenter)}}var a=this.playerBody.GetPosition();this.playerPos.set(a.x,a.y),!this.gameOver&&a.y>1.2*u.CAMERA_HEIGHT&&(this.gameOver=!0,this.eventEmitter.emit("gameOver"))}}]),a}(c.System),Y=Object(Le.a)(F.prototype,"physicsWorld",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K=Object(Le.a)(F.prototype,"playerPos",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=Object(Le.a)(F.prototype,"inputHandler",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=Object(Le.a)(F.prototype,"playerState",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Z=Object(Le.a)(F.prototype,"eventEmitter",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F),Ye=(V=Object(c.Inject)("viewport"),N=Object(c.Inject)("context"),q=Object(c.Inject)("playerPosition"),Q=Object(c.Inject)("assetManager"),X=Object(c.Inject)("playerState"),$=function(e){Object(Re.a)(a,e);var t=Object(Me.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(Te.a)(e,"viewport",ee,Object(ke.a)(e)),Object(Te.a)(e,"gl",te,Object(ke.a)(e)),Object(Te.a)(e,"playerPos",ae,Object(ke.a)(e)),Object(Te.a)(e,"assetManager",ie,Object(ke.a)(e)),Object(Te.a)(e,"playerState",re,Object(ke.a)(e)),e.batch=void 0,e.whiteTex=void 0,e.atlas=void 0,e.animations={},e.animationFrameDuration={run:.13,jump:.1,doubleJump:.1,hurt:.05},e}return Object(xe.a)(a,[{key:"initialized",value:function(){this.batch=Object(o.e)(this.gl),this.whiteTex=Object(o.k)(this.gl);var e=this.assetManager.getAtlas("./main-char.atlas");e&&(this.atlas=e)}},{key:"getAnimation",value:function(e,t){var a="".concat(e).concat(t);if(!this.animations[a]){var i=this.animationFrameDuration[e]||.1,r=this.atlas.findRegions(a);"jump"!==e&&"doubleJump"!==e||(r=r.slice(0,r.length-2)),this.animations[a]=Object(o.d)(i,r)}return this.animations[a]}},{key:"process",value:function(){this.batch.setProjection(this.viewport.getCamera().combined),this.batch.begin();var e=this.playerPos,t=e.x,a=e.y;this.playerState.process(this.world.delta);var i=o.a.LOOP;"jump"!==this.playerState.action&&"doubleJump"!==this.playerState.action||(i=o.a.NORMAL),this.getAnimation(this.playerState.action,this.playerState.state).getKeyFrame(this.playerState.stateTime,i).draw(this.batch,t-u.PLAYER_WIDTH/2,a-u.PLAYER_HEIGHT/2,u.PLAYER_WIDTH,u.PLAYER_HEIGHT,u.PLAYER_WIDTH/2,u.PLAYER_HEIGHT,0,u.PLAYER_SCALE,u.PLAYER_SCALE),this.batch.end()}}]),a}(c.System),ee=Object(Le.a)($.prototype,"viewport",[V],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),te=Object(Le.a)($.prototype,"gl",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ae=Object(Le.a)($.prototype,"playerPos",[q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ie=Object(Le.a)($.prototype,"assetManager",[Q],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),re=Object(Le.a)($.prototype,"playerState",[X],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$),Ke=(ne=Object(c.Inject)("viewport"),oe=Object(c.Inject)("physicsWorld"),se=Object(c.Inject)("blocks"),ce=function(e){Object(Re.a)(a,e);var t=Object(Me.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(Te.a)(e,"viewport",le,Object(ke.a)(e)),Object(Te.a)(e,"physicsWorld",ue,Object(ke.a)(e)),Object(Te.a)(e,"blocks",be,Object(ke.a)(e)),e}return Object(xe.a)(a,[{key:"process",value:function(){for(var e=this.viewport.getCamera().getPosition(),t=this.blocks.length-1;t>=0;t--){var a=this.blocks[t];e.x-a.x>=3*u.CAMERA_WIDTH&&(this.physicsWorld.DestroyBody(a.body),this.blocks.splice(t,1))}}}]),a}(c.System),le=Object(Le.a)(ce.prototype,"viewport",[ne],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ue=Object(Le.a)(ce.prototype,"physicsWorld",[oe],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),be=Object(Le.a)(ce.prototype,"blocks",[se],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ce),Ue=function(){function e(t){Object(l.a)(this,e),this.gl=void 0,this.promises=[],this.atlases=new Map,this.textures=new Map,this.done=0,this.gl=t}return Object(xe.a)(e,[{key:"loadAtlas",value:function(e){var t=this,a=Object(o.l)(this.gl,e,{}).then((function(a){t.atlases.set(e,a),t.done++}));this.promises.push(a)}},{key:"getAtlas",value:function(e){return this.atlases.get(e)}},{key:"loadTexture",value:function(e){var t=this,a=Object(o.m)(this.gl,e,{}).then((function(a){t.textures.set(e,a),t.done++}));this.promises.push(a)}},{key:"getTexture",value:function(e){return this.textures.get(e)}},{key:"finishLoading",value:function(){var e=Object(n.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this.promises);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDone",value:function(){return this.done}},{key:"getTotal",value:function(){return this.promises.length}}]),e}(),Je=function(){function e(){Object(l.a)(this,e),this.action="run",this.state="A",this.stateTime=0}return Object(xe.a)(e,[{key:"changeAction",value:function(e){e!==this.action&&(this.action=e,this.stateTime=0)}},{key:"changeState",value:function(e){this.state=e}},{key:"process",value:function(e){this.stateTime+=e}}]),e}(),Ze=(he=Object(c.Inject)("context"),pe=Object(c.Inject)("assetManager"),ye=Object(c.Inject)("fixedCamera"),je=Object(c.Inject)("playerPosition"),de=function(e){Object(Re.a)(a,e);var t=Object(Me.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(Te.a)(e,"gl",Oe,Object(ke.a)(e)),Object(Te.a)(e,"assetManager",ve,Object(ke.a)(e)),Object(Te.a)(e,"fixedCamera",fe,Object(ke.a)(e)),Object(Te.a)(e,"playerPos",ge,Object(ke.a)(e)),e.batch=void 0,e.textures=new Map,e}return Object(xe.a)(a,[{key:"initialized",value:function(){var e=this;this.batch=Object(o.e)(this.gl),["bg","city_01","city_02","cloud_01","cloud_02","smoke_01","smoke_02"].map((function(t){return e.textures.set(t,e.assetManager.getTexture("./background/".concat(t,".png")))}))}},{key:"drawBackground",value:function(){for(var e=this.textures.get("bg"),t=u.CAMERA_HEIGHT,a=t/e.height*e.width,i=0;i*a<u.CAMERA_WIDTH;)this.batch.draw(e,i*a,0,a,t),i++}},{key:"process",value:function(){var e=-this.playerPos.x;this.batch.setProjection(this.fixedCamera.combined),this.batch.begin(),this.drawBackground(),this.drawCloud1(.5*e),this.drawCloud2(.8*e),this.drawCity1(e),this.drawCity2(1.1*e),this.batch.end()}},{key:"drawCity1",value:function(e){for(var t=this.textures.get("city_01"),a=u.CAMERA_HEIGHT/1.5,i=a/t.height*t.width;e<=0;)e+=i;for(this.batch.draw(t,e-i,u.CAMERA_HEIGHT-a,i,a);e<=u.CAMERA_WIDTH;)this.batch.draw(t,e,u.CAMERA_HEIGHT-a,i,a),e+=i}},{key:"drawCity2",value:function(e){for(var t=this.textures.get("city_02"),a=u.CAMERA_HEIGHT/1.5,i=a/t.height*t.width;e<=0;)e+=i;for(this.batch.draw(t,e-i,u.CAMERA_HEIGHT-a,i,a);e<=u.CAMERA_WIDTH;)this.batch.draw(t,e,u.CAMERA_HEIGHT-a,i,a),e+=i}},{key:"drawCloud1",value:function(e){for(var t=this.textures.get("cloud_01"),a=u.CAMERA_HEIGHT/1.2,i=a/t.height*t.width,r=i;e<=0;)e+=i+r;for(this.batch.draw(t,e-i,u.CAMERA_HEIGHT-a,i,a);e+r<=u.CAMERA_WIDTH;)this.batch.draw(t,e+r,u.CAMERA_HEIGHT-a,i,a),e+=i+r}},{key:"drawCloud2",value:function(e){for(var t=this.textures.get("cloud_02"),a=u.CAMERA_HEIGHT/6,i=a/t.height*t.width,r=i;e<=0;)e+=i+r;for(this.batch.draw(t,e-i,u.CAMERA_HEIGHT/4,i,a);e+r<=u.CAMERA_WIDTH;)this.batch.draw(t,e+r,u.CAMERA_HEIGHT/4,i,a),e+=i+r}}]),a}(c.System),Oe=Object(Le.a)(de.prototype,"gl",[he],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ve=Object(Le.a)(de.prototype,"assetManager",[pe],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),fe=Object(Le.a)(de.prototype,"fixedCamera",[ye],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ge=Object(Le.a)(de.prototype,"playerPos",[je],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),de),Ve=(me=Object(c.Inject)("context"),we=Object(c.Inject)("assetManager"),Ae=Object(c.Inject)("fixedCamera"),Ee=Object(c.Inject)("playerPosition"),Ie=function(e){Object(Re.a)(a,e);var t=Object(Me.a)(a);function a(){var e;Object(l.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(Te.a)(e,"gl",_e,Object(ke.a)(e)),Object(Te.a)(e,"assetManager",Ce,Object(ke.a)(e)),Object(Te.a)(e,"fixedCamera",He,Object(ke.a)(e)),Object(Te.a)(e,"playerPos",Se,Object(ke.a)(e)),e.batch=void 0,e.textures=new Map,e}return Object(xe.a)(a,[{key:"initialized",value:function(){var e=this;this.batch=Object(o.e)(this.gl),["bg","city_01","city_02","cloud_01","cloud_02","smoke_01","smoke_02"].map((function(t){return e.textures.set(t,e.assetManager.getTexture("./background/".concat(t,".png")))}))}},{key:"process",value:function(){var e=-this.playerPos.x;this.batch.setProjection(this.fixedCamera.combined),this.batch.begin(),this.drawCloud1(.05*e),this.drawCloud2(.1*e),this.batch.end()}},{key:"drawCloud1",value:function(e){for(var t=this.textures.get("smoke_01"),a=u.CAMERA_HEIGHT/5,i=a/t.height*t.width,r=-i/1.5;e<=0;)e+=i+r;for(this.batch.draw(t,e-i,u.CAMERA_HEIGHT-a/2,i,a);e+r<=u.CAMERA_WIDTH;)this.batch.draw(t,e+r,u.CAMERA_HEIGHT-a/2,i,a),e+=i+r}},{key:"drawCloud2",value:function(e){for(var t=this.textures.get("smoke_02"),a=u.CAMERA_HEIGHT/5,i=a/t.height*t.width,r=-i/1.5;e<=0;)e+=i+r;for(this.batch.draw(t,e-i,u.CAMERA_HEIGHT-a/2,i,a);e+r<=u.CAMERA_WIDTH;)this.batch.draw(t,e+r,u.CAMERA_HEIGHT-a/2,i,a),e+=i+r}}]),a}(c.System),_e=Object(Le.a)(Ie.prototype,"gl",[me],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ce=Object(Le.a)(Ie.prototype,"assetManager",[we],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),He=Object(Le.a)(Ie.prototype,"fixedCamera",[Ae],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Se=Object(Le.a)(Ie.prototype,"playerPos",[Ee],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ie),Ne=a(24);(function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,i,n,l,b,h,p,y,j,d,O,v;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Ne.EventEmitter,a=Object(o.h)(),i=a.getCanvas(),n=a.getInfo(),l=Object(o.i)(i,u.CAMERA_WIDTH,u.CAMERA_HEIGHT,{pixelRatio:1}),b=l.getContext(),h=Object(o.j)(i,l),p=Object(o.g)(u.CAMERA_WIDTH,u.CAMERA_HEIGHT,i.width,i.height),l.addCamera(p),l.update(),(y=new Ue(b)).loadAtlas("./main-char.atlas"),y.loadAtlas("./ground.atlas"),["bg","city_01","city_02","cloud_01","cloud_02","smoke_01","smoke_02"].map((function(e){return y.loadTexture("./background/".concat(e,".png"))})),n.innerHTML="Loading...",e.next=17,y.finishLoading();case 17:j=function(){var e=new s.b2World({x:0,y:u.GRAVITY}),a=new c.World;return a.register("context",b),a.register("physicsWorld",e),a.register("viewport",l),a.register("blocks",[]),a.register("playerPosition",new o.c(0,0)),a.register("inputHandler",h),a.register("assetManager",y),a.register("playerState",new Je),a.register("fixedCamera",p),a.register("eventEmitter",t),a.addSystem(new We,!0),a.addSystem(new Fe,!0),a.addSystem(new Ke,!0),a.addSystem(new Pe,!0),a.addSystem(new Ge,!1),a.addSystem(new Ze,!1),a.addSystem(new ze,!1),a.addSystem(new Ye,!1),a.addSystem(new Ve,!1),a},d=j(),O=!1,t.addListener("gameOver",(function(){O=!0,d.dispose(),setTimeout((function(){d=j(),O=!1}),1e3)})),b.clearColor(0,0,0,1),v=Object(o.f)((function(e){b.clear(b.COLOR_BUFFER_BIT),d.setDelta(e),!O&&d.processActiveSystem(),d.processPassiveSystem()})),setInterval((function(){return n.innerHTML="FPS: ".concat(v.getFps())}),500);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},[[90,1,2]]]);
//# sourceMappingURL=main.f38ca069.chunk.js.map