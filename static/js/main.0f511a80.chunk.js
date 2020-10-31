(this["webpackJsonpultraman-lienquan"]=this["webpackJsonpultraman-lienquan"]||[]).push([[0],{76:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var i=a(12),r=a.n(i),n=a(14),s=a(24),c=a(4),o=a(5),l=a(6),b=function(){function e(t){Object(o.a)(this,e),this.gl=void 0,this.promises=[],this.atlases=new Map,this.textures=new Map,this.done=0,this.fonts=new Map,this.gl=t}return Object(l.a)(e,[{key:"loadAtlas",value:function(e){var t=this,a=Object(c.n)(this.gl,e,{}).then((function(a){t.atlases.set(e,a),t.done++}));this.promises.push(a)}},{key:"loadFont",value:function(e){var t=this,a=Object(c.o)(this.gl,e,{}).then((function(a){t.fonts.set(e,a),t.done++}));this.promises.push(a)}},{key:"getFont",value:function(e){return this.fonts.get(e)}},{key:"getAtlas",value:function(e){return this.atlases.get(e)}},{key:"loadTexture",value:function(e){var t=this,a=Object(c.p)(this.gl,e,{}).then((function(a){t.textures.set(e,a),t.done++}));this.promises.push(a)}},{key:"getTexture",value:function(e){return this.textures.get(e)}},{key:"finishLoading",value:function(){var e=Object(n.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this.promises);case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getDone",value:function(){return this.done}},{key:"getTotal",value:function(){return this.promises.length}}]),e}(),h=function e(){Object(o.a)(this,e)};h.CAMERA_WIDTH=4,h.CAMERA_HEIGHT=8,h.GAP=1,h.GRAVITY=20,h.PLAYER_WIDTH=.2,h.PLAYER_HEIGHT=.2,h.PLAYER_SCALE=5,h.JUMP_FORCE=-10,h.RUN_FORCE=2,h.STAR_SIZE=.2,h.TRANSITION_DURATION=1.5,h.ALIEN_SPAWNING_TIME=.5,h.ALIEN_WIDTH=1.3,h.ALIEN_SPEED=1.5*h.CAMERA_WIDTH,h.ALIEN_YS=[h.CAMERA_HEIGHT/2-(h.ALIEN_HEIGHT=h.ALIEN_WIDTH/160*113)/2,h.CAMERA_WIDTH/3-h.ALIEN_HEIGHT/2,h.CAMERA_HEIGHT/1.5-h.ALIEN_HEIGHT/2],h.TOTAL_BLOCK_HEIGHT=15,h.BLOCK_BLOCK_SIZE=2.1*h.CAMERA_WIDTH,h.BLOCK_SIZE=h.CAMERA_HEIGHT/h.TOTAL_BLOCK_HEIGHT,h.BLOCK_OFFSET_Y=h.CAMERA_HEIGHT/1.7;a(76);var u,p,y,j,d,O,v,f,g,m,A,I,w,E,S,_,T,C,H,R,x,M,L,P,k,D,G,W,B,z,F,N,Y,K,Z,U,J,V,q,Q,X,$,ee,te,ae,ie,re,ne,se,ce,oe,le,be,he,ue,pe,ye,je,de,Oe,ve,fe,ge,me,Ae,Ie,we,Ee,Se,_e,Te,Ce,He,Re,xe,Me,Le,Pe,ke,De,Ge,We,Be,ze,Fe,Ne,Ye,Ke,Ze,Ue,Je,Ve,qe,Qe,Xe,$e,et,tt,at,it,rt,nt,st,ct,ot,lt,bt,ht,ut,pt,yt,jt,dt,Ot,vt,ft,gt,mt,At,It,wt,Et,St,_t,Tt,Ct,Ht,Rt,xt=a(11),Mt=a(0),Lt=function(){function e(){Object(o.a)(this,e),this.action="run",this.state="A",this.stateTime=0,this.states=["A","B","B","C","C","D"],this.stateIndex=0,this.transitionTime=0,this.stunnedDuration=0,this.appliedStun=!1,this.hp=3,this.score=0,this.complete=!1}return Object(l.a)(e,[{key:"getCurrentStateIndex",value:function(){return this.stateIndex}},{key:"changeAction",value:function(e){e!==this.action&&(this.action=e,this.stateTime=0)}},{key:"changeState",value:function(e){this.transitionTime=h.TRANSITION_DURATION,this.state=e}},{key:"nextState",value:function(){var e=this.stateIndex+1;e>=this.states.length?this.complete=!0:(this.stateIndex=e,this.changeState(this.states[e]))}},{key:"process",value:function(e){this.stateTime+=e,this.transitionTime>0&&(this.transitionTime-=e)}}]),e}(),Pt=a(9),kt=a(2),Dt=a(1),Gt=a(8),Wt=a(7),Bt=a(3),zt=(a(13),u=Object(Mt.Inject)("aliens"),p=Object(Mt.Inject)("fixedCamera"),y=Object(Mt.Inject)("context"),j=Object(Mt.Inject)("assetManager"),d=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"aliens",O,Object(Dt.a)(e)),Object(kt.a)(e,"fixedCamera",v,Object(Dt.a)(e)),Object(kt.a)(e,"gl",f,Object(Dt.a)(e)),Object(kt.a)(e,"assetManager",g,Object(Dt.a)(e)),e.batch=void 0,e.animations=[],e.elapsed=0,e}return Object(l.a)(a,[{key:"initialized",value:function(){var e=this;this.batch=Object(c.g)(this.gl);var t=this.assetManager.getAtlas("./main-char.atlas");t&&["alien1","alien2","alien3"].forEach((function(a){return e.animations.push(Object(c.f)(.4,t.findRegions(a)))}))}},{key:"process",value:function(){this.batch.setProjection(this.fixedCamera.combined),this.batch.begin(),this.elapsed+=this.world.delta;var e,t=Object(Pt.a)(this.aliens);try{for(t.s();!(e=t.n()).done;){var a=e.value;this.animations[a.type].getKeyFrame(h.ALIEN_SPAWNING_TIME-a.time,c.c.NORMAL).draw(this.batch,a.x,a.y,h.ALIEN_WIDTH,h.ALIEN_HEIGHT)}}catch(i){t.e(i)}finally{t.f()}this.batch.end()}}]),a}(Mt.System),O=Object(Bt.a)(d.prototype,"aliens",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=Object(Bt.a)(d.prototype,"fixedCamera",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=Object(Bt.a)(d.prototype,"gl",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=Object(Bt.a)(d.prototype,"assetManager",[j],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d),Ft=(m=Object(Mt.Inject)("aliens"),A=Object(Mt.Inject)("playerPosition"),I=Object(Mt.Inject)("playerState"),w=Object(Mt.Inject)("eventEmitter"),E=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"aliens",S,Object(Dt.a)(e)),Object(kt.a)(e,"playerPos",_,Object(Dt.a)(e)),Object(kt.a)(e,"playerState",T,Object(Dt.a)(e)),Object(kt.a)(e,"eventEmitter",C,Object(Dt.a)(e)),e}return Object(l.a)(a,[{key:"process",value:function(){for(var e=this.aliens.length-1;e>=0;e--){var t=this.aliens[e];if(t.time>0)return void(t.time-=this.world.delta);if(!t.hit){var a=this.playerPos.y;t.x<=h.GAP&&t.x+h.ALIEN_WIDTH>=h.GAP&&t.y<=a&&t.y+h.ALIEN_HEIGHT>=a&&(this.playerState.stunnedDuration=.3,this.playerState.changeAction("hurt"),this.playerState.hp--,t.hit=!0)}t.x-=h.ALIEN_SPEED*this.world.delta,t.x<=-h.ALIEN_WIDTH&&this.aliens.splice(e,1)}}}]),a}(Mt.System),S=Object(Bt.a)(E.prototype,"aliens",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_=Object(Bt.a)(E.prototype,"playerPos",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=Object(Bt.a)(E.prototype,"playerState",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=Object(Bt.a)(E.prototype,"eventEmitter",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E),Nt=(H=Object(Mt.Inject)("context"),R=Object(Mt.Inject)("assetManager"),x=Object(Mt.Inject)("fixedCamera"),M=Object(Mt.Inject)("playerPosition"),L=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"gl",P,Object(Dt.a)(e)),Object(kt.a)(e,"assetManager",k,Object(Dt.a)(e)),Object(kt.a)(e,"fixedCamera",D,Object(Dt.a)(e)),Object(kt.a)(e,"playerPos",G,Object(Dt.a)(e)),e.batch=void 0,e.textures=new Map,e}return Object(l.a)(a,[{key:"initialized",value:function(){var e=this;this.batch=Object(c.g)(this.gl),["bg","city_01","city_02","cloud_01","cloud_02","smoke_01","smoke_02"].map((function(t){return e.textures.set(t,e.assetManager.getTexture("./background/".concat(t,".png")))}))}},{key:"drawBackground",value:function(){for(var e=this.textures.get("bg"),t=h.CAMERA_HEIGHT,a=t/e.height*e.width,i=0;i*a<h.CAMERA_WIDTH;)this.batch.draw(e,i*a,0,a,t),i++}},{key:"process",value:function(){var e=-this.playerPos.x;this.batch.setProjection(this.fixedCamera.combined),this.batch.begin(),this.drawBackground(),this.drawCloud1(.5*e),this.drawCloud2(.8*e),this.drawCity1(e),this.drawCity2(1.1*e),this.batch.end()}},{key:"drawCity1",value:function(e){for(var t=this.textures.get("city_01"),a=h.CAMERA_HEIGHT/1.5,i=a/t.height*t.width;e<=0;)e+=i;for(this.batch.draw(t,e-i,h.CAMERA_HEIGHT-a,i,a);e<=h.CAMERA_WIDTH;)this.batch.draw(t,e,h.CAMERA_HEIGHT-a,i,a),e+=i}},{key:"drawCity2",value:function(e){for(var t=this.textures.get("city_02"),a=h.CAMERA_HEIGHT/1.5,i=a/t.height*t.width;e<=0;)e+=i;for(this.batch.draw(t,e-i,h.CAMERA_HEIGHT-a,i,a);e<=h.CAMERA_WIDTH;)this.batch.draw(t,e,h.CAMERA_HEIGHT-a,i,a),e+=i}},{key:"drawCloud1",value:function(e){for(var t=this.textures.get("cloud_01"),a=h.CAMERA_HEIGHT/1.2,i=a/t.height*t.width,r=i;e<=0;)e+=i+r;for(this.batch.draw(t,e-i,h.CAMERA_HEIGHT-a,i,a);e+r<=h.CAMERA_WIDTH;)this.batch.draw(t,e+r,h.CAMERA_HEIGHT-a,i,a),e+=i+r}},{key:"drawCloud2",value:function(e){for(var t=this.textures.get("cloud_02"),a=h.CAMERA_HEIGHT/6,i=a/t.height*t.width,r=i;e<=0;)e+=i+r;for(this.batch.draw(t,e-i,h.CAMERA_HEIGHT/4,i,a);e+r<=h.CAMERA_WIDTH;)this.batch.draw(t,e+r,h.CAMERA_HEIGHT/4,i,a),e+=i+r}}]),a}(Mt.System),P=Object(Bt.a)(L.prototype,"gl",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=Object(Bt.a)(L.prototype,"assetManager",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=Object(Bt.a)(L.prototype,"fixedCamera",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),G=Object(Bt.a)(L.prototype,"playerPos",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L),Yt=a(10),Kt=function(e){for(var t=[],a=e.map((function(e){var t=Object(Yt.a)(e,2),a=t[0];return 20*t[1]+a})),i=0;i<a.length;i++){var r=a[i],n=void 0;n=a.includes(r+20)?a.includes(r-20)?2:1:0,t[i]=n}return t},Zt=(W=Object(Mt.Inject)("viewport"),B=Object(Mt.Inject)("physicsWorld"),z=Object(Mt.Inject)("blocks"),F=Object(Mt.Inject)("stars"),N=Object(Mt.Inject)("aliens"),Y=Object(Mt.Inject)("playerPosition"),$=X=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).generatedStep=0,Object(kt.a)(e,"viewport",Z,Object(Dt.a)(e)),Object(kt.a)(e,"physicsWorld",U,Object(Dt.a)(e)),Object(kt.a)(e,"blocks",J,Object(Dt.a)(e)),Object(kt.a)(e,"stars",V,Object(Dt.a)(e)),Object(kt.a)(e,"aliens",q,Object(Dt.a)(e)),Object(kt.a)(e,"playerPos",Q,Object(Dt.a)(e)),e.typePatterns=void 0,e}return Object(l.a)(a,[{key:"createBox",value:function(e,t,a,i,r){var n=new xt.b2BodyDef;n.type=xt.b2BodyType.b2_staticBody,n.position.Set(e,t);var s=this.physicsWorld.CreateBody(n);s.SetUserData({type:"block"});var c=new xt.b2PolygonShape;c.SetAsBox(a/2,i/2),s.CreateFixture(c),this.blocks.push({x:e,y:t,w:a,h:i,type:r,body:s})}},{key:"initialized",value:function(){for(this.typePatterns=a.patterns.map(Kt);this.generatedStep<2;)this.generateBlocks(this.generatedStep*h.BLOCK_BLOCK_SIZE,!0),this.generatedStep++}},{key:"process",value:function(){for(var e=this.viewport.getCamera().getPosition(),t=Math.floor(e.x/h.BLOCK_BLOCK_SIZE);this.generatedStep<=t+1;)this.generateBlocks(this.generatedStep*h.BLOCK_BLOCK_SIZE),this.generatedStep++}},{key:"createStar",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=new xt.b2BodyDef;i.type=xt.b2BodyType.b2_staticBody,i.position.Set(e,t);var r=this.physicsWorld.CreateBody(i);r.SetUserData({type:"star"});var n=new xt.b2FixtureDef;n.isSensor=!0;var s=new xt.b2PolygonShape;s.SetAsBox(h.STAR_SIZE,h.STAR_SIZE),n.shape=s,r.CreateFixture(n);var c={x:e,y:t,body:r,active:!0,special:a};r.m_userData.starObject=c,this.stars.push(c)}},{key:"generateBlocks",value:function(e){for(var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=t?0:Math.floor(Math.random()*(a.patterns.length-1))+1,r=a.starPatterns[i]||[],n=a.patterns[i],s=this.typePatterns[i],c=0;c<n.length;c++){var o=n[c],l=Object(Yt.a)(o,2),b=l[0],u=l[1],p=void 0;p=0===s[c]?Math.floor(3*Math.random()):1===s[c]?Math.floor(3*Math.random())+6:Math.floor(3*Math.random())+3,this.createBox(e+h.BLOCK_SIZE*b,(h.TOTAL_BLOCK_HEIGHT-u)*h.BLOCK_SIZE,h.BLOCK_SIZE,h.BLOCK_SIZE,p)}var y,j=!1,d=Object(Pt.a)(r);try{for(d.s();!(y=d.n()).done;){var O=y.value,v=Object(Yt.a)(O,2),f=v[0],g=v[1],m=!j&&Math.random()<=.1;m&&(j=!0),this.createStar(e+h.BLOCK_SIZE*f,(h.TOTAL_BLOCK_HEIGHT-g)*h.BLOCK_SIZE,m)}}catch(I){d.e(I)}finally{d.f()}if(!t&&Math.random()<1){var A=Math.floor(3*Math.random());this.aliens.push({x:h.CAMERA_WIDTH-h.ALIEN_WIDTH,y:this.playerPos.y-h.ALIEN_HEIGHT/2,type:A,time:h.ALIEN_SPAWNING_TIME,hit:!1})}}}]),a}(Mt.System),X.patterns=["1-10,2","1-4,2;6-9,2;4,3-5;5,4;5,8-10;6,7-10;7,7-8","1-9,2;3,3-5;6-8,3;6-7,4","1-9,2;4,5-8;2,11;6,11;2-6,12;2-6,13","1-5,2;8-12,2;3-5,3;8-10,3;4-5,4;8-9,4;5-8,5;2-8,11;3-7,12;4-6,13","1-5,2;8-12,2;4-5,3;8-9,3;4-5,4;8-9,4","1-14,2;4-10,5;4-10,6;4,7;10,7;7,9-12","1-14,2;4-5,3;9-11,3;4,4;10,4;5-6,10;4-11,11;4-11,12"].map((function(e){var t,a=[],i=e.split(";"),r=Object(Pt.a)(i);try{for(r.s();!(t=r.n()).done;){var n=t.value.split(","),s=Object(Yt.a)(n,2),c=s[0],o=s[1],l=c.split("-").map((function(e){return parseInt(e)})),b=o.split("-").map((function(e){return parseInt(e)}));if(2===l.length){for(var h=[],u=l[0];u<=l[1];u++)h.push(u);l=h}if(2===b.length){for(var p=[],y=b[0];y<=b[1];y++)p.push(y);b=p}var j,d=Object(Pt.a)(l);try{for(d.s();!(j=d.n()).done;){var O,v=j.value,f=Object(Pt.a)(b);try{for(f.s();!(O=f.n()).done;){var g=O.value;a.push([v,g])}}catch(m){f.e(m)}finally{f.f()}}}catch(m){d.e(m)}finally{d.f()}}}catch(m){r.e(m)}finally{r.f()}return a})),X.starPatterns=[void 0,"2.5,6.5;3,7.2;3.5,7.9;3.8,9.2;3.9,10.2;4,11.2;4.2,12.2;5.2,12.6;6.1,12.2;6.2,11.3","2.2,6.8;2.8,7.5;3.2,8.1;5.5,6.8;5.9,7.5;6.3,8.3;6.7,9.1","2.5,7.8;2.9,8.5;3.2,9.2;4,9.6;4.8,9.6;5.5,9","2.9,6.5;3.2,7.2;4,7.9;4.8,7.4;5.2,6.5;6.2,6.5;7.2,6.5;8.2,6.5","3.2,6.5;3.5,7;4,7.5;4.8,7.3;5.3,6.5;6.5,8;7,9;8,9;8.5,8;8.8,7.5;9,6.5;9.1,6","4.5,9;5.5,7.5;6.5,7.5;7.5,7.5;8.5,7.5;9.5,8;10.5,9","4.5,5.5;5.5,5.5;5.5,4.5;6.5,4.5;6.5,3.5;8.5,7.5;9,8.5;10,8.5;10.3,7.5;10.5,5.5;11.5,5.5;11.5,4.5;12.5,4.5;12.5,3.5"].map((function(e){return e&&e.split(";").map((function(e){return e.split(",").map((function(e){return parseFloat(e)}))})).map((function(e){var t=Object(Yt.a)(e,2);return[t[0]-.5,t[1]]}))})),K=$,Z=Object(Bt.a)(K.prototype,"viewport",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=Object(Bt.a)(K.prototype,"physicsWorld",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=Object(Bt.a)(K.prototype,"blocks",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=Object(Bt.a)(K.prototype,"stars",[F],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),q=Object(Bt.a)(K.prototype,"aliens",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Q=Object(Bt.a)(K.prototype,"playerPos",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),K),Ut=(ee=Object(Mt.Inject)("viewport"),te=Object(Mt.Inject)("physicsWorld"),ae=Object(Mt.Inject)("blocks"),ie=Object(Mt.Inject)("stars"),re=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"viewport",ne,Object(Dt.a)(e)),Object(kt.a)(e,"physicsWorld",se,Object(Dt.a)(e)),Object(kt.a)(e,"blocks",ce,Object(Dt.a)(e)),Object(kt.a)(e,"stars",oe,Object(Dt.a)(e)),e}return Object(l.a)(a,[{key:"process",value:function(){for(var e=this.viewport.getCamera().getPosition(),t=this.blocks.length-1;t>=0;t--){var a=this.blocks[t];e.x-a.x>=3*h.CAMERA_WIDTH&&(this.physicsWorld.DestroyBody(a.body),this.blocks.splice(t,1))}for(var i=this.stars.length-1;i>=0;i--){var r=this.stars[i];e.x-r.x>=3*h.CAMERA_WIDTH&&(this.physicsWorld.DestroyBody(r.body),this.stars.splice(i,1))}}}]),a}(Mt.System),ne=Object(Bt.a)(re.prototype,"viewport",[ee],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),se=Object(Bt.a)(re.prototype,"physicsWorld",[te],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ce=Object(Bt.a)(re.prototype,"blocks",[ae],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),oe=Object(Bt.a)(re.prototype,"stars",[ie],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),re),Jt=(le=Object(Mt.Inject)("viewport"),be=Object(Mt.Inject)("context"),he=Object(Mt.Inject)("blocks"),ue=Object(Mt.Inject)("assetManager"),pe=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"viewport",ye,Object(Dt.a)(e)),Object(kt.a)(e,"gl",je,Object(Dt.a)(e)),Object(kt.a)(e,"blocks",de,Object(Dt.a)(e)),Object(kt.a)(e,"assetManager",Oe,Object(Dt.a)(e)),e.batch=void 0,e.whiteTex=void 0,e.atlas=void 0,e.regions=void 0,e}return Object(l.a)(a,[{key:"initialized",value:function(){this.batch=Object(c.g)(this.gl),this.whiteTex=Object(c.m)(this.gl);var e=this.assetManager.getAtlas("./ground.atlas");e&&(this.atlas=e,this.regions=e.findRegions("tile"))}},{key:"process",value:function(){this.batch.setProjection(this.viewport.getCamera().combined),this.batch.begin(),this.batch.setColor(0,0,0,.5);var e,t=Object(Pt.a)(this.blocks);try{for(t.s();!(e=t.n()).done;){var a=e.value,i=a.x,r=a.y,n=a.w,s=a.h,c=a.type;this.regions[c].draw(this.batch,i-n/2-.05*n,r-s/2+.05*s,n,s)}}catch(d){t.e(d)}finally{t.f()}this.batch.setColor(1,1,1,1);var o,l=Object(Pt.a)(this.blocks);try{for(l.s();!(o=l.n()).done;){var b=o.value,h=b.x,u=b.y,p=b.w,y=b.h,j=b.type;this.regions[j].draw(this.batch,h-p/2,u-y/2,p,y)}}catch(d){l.e(d)}finally{l.f()}this.batch.end()}}]),a}(Mt.System),ye=Object(Bt.a)(pe.prototype,"viewport",[le],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),je=Object(Bt.a)(pe.prototype,"gl",[be],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),de=Object(Bt.a)(pe.prototype,"blocks",[he],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Oe=Object(Bt.a)(pe.prototype,"assetManager",[ue],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),pe),Vt=(ve=Object(Mt.Inject)("viewport"),fe=Object(Mt.Inject)("playerPosition"),ge=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"viewport",me,Object(Dt.a)(e)),Object(kt.a)(e,"playerPos",Ae,Object(Dt.a)(e)),e}return Object(l.a)(a,[{key:"process",value:function(){var e=this.viewport.getCamera().getPosition(),t=e.x+1*(this.playerPos.x-h.GAP-e.x);this.viewport.getCamera().setPosition(t,e.y)}}]),a}(Mt.System),me=Object(Bt.a)(ge.prototype,"viewport",[ve],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ae=Object(Bt.a)(ge.prototype,"playerPos",[fe],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ge),qt=(Ie=Object(Mt.Inject)("physicsWorld"),we=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"physicsWorld",Ee,Object(Dt.a)(e)),e}return Object(l.a)(a,[{key:"process",value:function(){this.physicsWorld.Step(this.world.delta,8,3)}}]),a}(Mt.System),Ee=Object(Bt.a)(we.prototype,"physicsWorld",[Ie],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),we),Qt=function(e,t){for(var a="".concat(e);a.length<t;)a="0".concat(a);return a},Xt=(Se=Object(Mt.Inject)("fixedCamera"),_e=Object(Mt.Inject)("context"),Te=Object(Mt.Inject)("assetManager"),Ce=Object(Mt.Inject)("playerState"),He=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"fixedCamera",Re,Object(Dt.a)(e)),Object(kt.a)(e,"gl",xe,Object(Dt.a)(e)),Object(kt.a)(e,"assetManager",Me,Object(Dt.a)(e)),Object(kt.a)(e,"playerState",Le,Object(Dt.a)(e)),e.batch=void 0,e.panel=void 0,e.heartFull=void 0,e.heartEmpty=void 0,e.bar=void 0,e.scoreLabel=void 0,e.text=void 0,e.whiteText=void 0,e}return Object(l.a)(a,[{key:"initialized",value:function(){this.batch=Object(c.g)(this.gl);var e=this.assetManager.getAtlas("./ui.atlas");this.panel=e.findRegions("panel")[0],this.heartFull=e.findRegions("heart-full")[0],this.heartEmpty=e.findRegions("heart-empty")[0],this.bar=e.findRegions("bar")[0],this.scoreLabel=e.findRegions("score-label")[0];var t=this.assetManager.getFont("./score.fnt");this.text=t.createRenderer(.35*h.CAMERA_WIDTH),this.text.setAlignMode(c.a.right),this.whiteText=Object(c.m)(this.gl)}},{key:"process",value:function(){this.batch.setProjection(this.fixedCamera.combined),this.batch.begin();var e=this.panel,t=e.width,a=e.height,i=.95*h.CAMERA_WIDTH,r=i/t*a,n=.025*h.CAMERA_WIDTH,s=.05*h.CAMERA_WIDTH;this.panel.draw(this.batch,n,s,i,r);for(var c=this.heartFull,o=i/26,l=o/c.width*c.height,b=2*o,u=s+r-1.75*l,p=.2*o,y=0;y<3;y++)y<this.playerState.hp?this.heartFull.draw(this.batch,b+(o+p)*y,u,o,l):this.heartEmpty.draw(this.batch,b+(o+p)*y,u,o,l);var j=this.bar,d=b,O=i-2*(d-n),v=O/j.width*j.height,f=s+r/1.7-v;this.bar.draw(this.batch,d,f,O,v);var g=this.scoreLabel,m=g.width,A=.8*l,I=A/g.height*m,w=u+l-A,E=b+10*o;this.scoreLabel.draw(this.batch,E,w,I,A);var S=1.35*l,_=w+A-S;this.text.setDisplayWidth(i-3*o),this.text.draw(this.batch,Qt(this.playerState.score,10),n,_,S);var T=d,C=O/250,H=O/6-C,R=f+v;this.batch.setColor(0,0,0,.8);for(var x=0;x<6;x++)if(x>=this.playerState.stateIndex){var M=v*(1-.12*(5-x));this.batch.draw(this.whiteText,T+x*(C*(1+.08*x)+H),R-M,H,M)}this.batch.setColor(1,1,1,1),this.batch.end()}}]),a}(Mt.System),Re=Object(Bt.a)(He.prototype,"fixedCamera",[Se],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),xe=Object(Bt.a)(He.prototype,"gl",[_e],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Me=Object(Bt.a)(He.prototype,"assetManager",[Te],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Le=Object(Bt.a)(He.prototype,"playerState",[Ce],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),He),$t=(Pe=Object(Mt.Inject)("physicsWorld"),ke=Object(Mt.Inject)("playerPosition"),De=Object(Mt.Inject)("inputHandler"),Ge=Object(Mt.Inject)("playerState"),We=Object(Mt.Inject)("eventEmitter"),Be=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"physicsWorld",ze,Object(Dt.a)(e)),Object(kt.a)(e,"playerPos",Fe,Object(Dt.a)(e)),Object(kt.a)(e,"inputHandler",Ne,Object(Dt.a)(e)),Object(kt.a)(e,"playerState",Ye,Object(Dt.a)(e)),Object(kt.a)(e,"eventEmitter",Ke,Object(Dt.a)(e)),e.playerBody=void 0,e.pressed=!1,e.jumpLeft=0,e.gameOver=!1,e.zeroCenter={x:0,y:0},e.runImpulse={x:h.RUN_FORCE,y:0},e.jumpImpulse={x:0,y:h.JUMP_FORCE},e}return Object(l.a)(a,[{key:"initialized",value:function(){var e=new xt.b2BodyDef;e.type=xt.b2BodyType.b2_dynamicBody,e.fixedRotation=!0,e.position.Set(2,h.CAMERA_HEIGHT/2);var t=this.physicsWorld.CreateBody(e);t.SetUserData({type:"user"});var a=new xt.b2CircleShape(h.PLAYER_WIDTH);a.Set({x:-h.PLAYER_WIDTH/2,y:-h.PLAYER_HEIGHT/2},h.PLAYER_WIDTH),t.CreateFixture(a);var i=new xt.b2PolygonShape;i.SetAsBox(h.PLAYER_WIDTH/8,h.PLAYER_WIDTH/8,{x:0,y:h.PLAYER_HEIGHT/2});var r=new xt.b2FixtureDef;r.isSensor=!0,r.shape=i,r.userData={type:"playerSensor"},t.CreateFixture(r);var n=new xt.b2PolygonShape;n.SetAsBox(h.PLAYER_WIDTH/8,h.PLAYER_WIDTH/8,{x:h.PLAYER_WIDTH/2,y:0});var s=new xt.b2FixtureDef;s.isSensor=!0,s.shape=n,s.userData={type:"playerSensor2"},t.CreateFixture(s),this.playerBody=t;var c=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(e){var i;return Object(o.a)(this,a),(i=t.call(this)).movementSytem=void 0,i.movementSytem=e,i}return Object(l.a)(a,[{key:"processJumpable",value:function(e){var t,a,i,r,n=e.GetFixtureA(),s=e.GetFixtureB();n.IsSensor()&&"playerSensor"===(null===(t=n.GetUserData())||void 0===t?void 0:t.type)?r=s:s.IsSensor()&&"playerSensor"===(null===(a=s.GetUserData())||void 0===a?void 0:a.type)&&(r=n),r&&"block"===(null===(i=r.GetBody().GetUserData())||void 0===i?void 0:i.type)&&(this.movementSytem.jumpLeft=2,this.movementSytem.playerState.changeAction("run"))}},{key:"processObstacle",value:function(e){var t,a,i,r,n=e.GetFixtureA(),s=e.GetFixtureB();n.IsSensor()&&"playerSensor2"===(null===(t=n.GetUserData())||void 0===t?void 0:t.type)?r=s:s.IsSensor()&&"playerSensor2"===(null===(a=s.GetUserData())||void 0===a?void 0:a.type)&&(r=n),r&&"block"===(null===(i=r.GetBody().GetUserData())||void 0===i?void 0:i.type)&&(this.movementSytem.playerState.stunnedDuration=.2,this.movementSytem.playerState.changeAction("hurt"))}},{key:"BeginContact",value:function(e){this.movementSytem.gameOver||(this.processJumpable(e),this.processObstacle(e),this.movementSytem.eventEmitter.emit("beginContact",e))}}]),a}(xt.b2ContactListener);this.physicsWorld.SetContactListener(new c(this))}},{key:"process",value:function(){if(this.playerState.stunnedDuration>0)this.playerState.appliedStun||(this.playerState.appliedStun=!0,this.playerBody.GetLinearVelocity().Set(0,0),this.playerBody.ApplyLinearImpulse({x:-2*h.RUN_FORCE,y:0},{x:0,y:0})),this.playerState.stunnedDuration-=this.world.delta,this.playerState.stunnedDuration<=0&&(this.playerState.changeAction("run"),this.playerState.appliedStun=!1);else{var e=this.playerBody.GetLinearVelocity();if(e.Set(0,e.y),this.playerBody.ApplyLinearImpulse(this.runImpulse,this.zeroCenter),this.pressed)this.inputHandler.isTouched()||(this.pressed=!1);else if(this.inputHandler.isTouched()&&this.jumpLeft>0){this.jumpLeft--,1===this.jumpLeft?this.playerState.changeAction("jump"):this.playerState.changeAction("doubleJump"),this.pressed=!0;var t=this.playerBody.GetLinearVelocity();t.Set(t.x,0),this.playerBody.ApplyLinearImpulse(this.jumpImpulse,this.zeroCenter)}}var a=this.playerBody.GetPosition();this.playerPos.set(a.x,a.y),!this.gameOver&&(a.y>1.2*h.CAMERA_HEIGHT||this.playerState.hp<=0||this.playerState.complete)&&(this.gameOver=!0,this.eventEmitter.emit("gameOver",Qt(this.playerState.score,10)))}}]),a}(Mt.System),ze=Object(Bt.a)(Be.prototype,"physicsWorld",[Pe],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Fe=Object(Bt.a)(Be.prototype,"playerPos",[ke],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ne=Object(Bt.a)(Be.prototype,"inputHandler",[De],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ye=Object(Bt.a)(Be.prototype,"playerState",[Ge],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ke=Object(Bt.a)(Be.prototype,"eventEmitter",[We],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Be),ea=(Ze=Object(Mt.Inject)("viewport"),Ue=Object(Mt.Inject)("context"),Je=Object(Mt.Inject)("playerPosition"),Ve=Object(Mt.Inject)("assetManager"),qe=Object(Mt.Inject)("playerState"),Qe=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"viewport",Xe,Object(Dt.a)(e)),Object(kt.a)(e,"gl",$e,Object(Dt.a)(e)),Object(kt.a)(e,"playerPos",et,Object(Dt.a)(e)),Object(kt.a)(e,"assetManager",tt,Object(Dt.a)(e)),Object(kt.a)(e,"playerState",at,Object(Dt.a)(e)),e.batch=void 0,e.whiteTex=void 0,e.atlas=void 0,e.animations={},e.animationFrameDuration={run:.1,jump:.1,doubleJump:.1,hurt:.05},e}return Object(l.a)(a,[{key:"initialized",value:function(){this.batch=Object(c.g)(this.gl),this.whiteTex=Object(c.m)(this.gl);var e=this.assetManager.getAtlas("./main-char.atlas");e&&(this.atlas=e,this.animations.upgrade=Object(c.f)(.08,e.findRegions("upgrade_blast")))}},{key:"getAnimation",value:function(e,t){var a="".concat(e).concat(t);if(!this.animations[a]){var i=this.animationFrameDuration[e]||.1,r=this.atlas.findRegions(a);"jump"!==e&&"doubleJump"!==e||(r=r.slice(0,r.length-2)),this.animations[a]=Object(c.f)(i,r)}return this.animations[a]}},{key:"process",value:function(){this.batch.setProjection(this.viewport.getCamera().combined),this.batch.begin();var e=this.playerPos,t=e.x,a=e.y;this.playerState.process(this.world.delta);var i=c.c.LOOP;("jump"!==this.playerState.action&&"doubleJump"!==this.playerState.action||(i=c.c.NORMAL),this.getAnimation(this.playerState.action,this.playerState.state).getKeyFrame(this.playerState.stateTime,i).draw(this.batch,t-h.PLAYER_WIDTH/2,a-h.PLAYER_HEIGHT/2,h.PLAYER_WIDTH,h.PLAYER_HEIGHT,h.PLAYER_WIDTH/2,h.PLAYER_HEIGHT,0,h.PLAYER_SCALE,h.PLAYER_SCALE),this.playerState.transitionTime>0)&&this.animations.upgrade.getKeyFrame(this.playerState.stateTime,c.c.LOOP).draw(this.batch,t-h.PLAYER_WIDTH/2,a,h.PLAYER_WIDTH,h.PLAYER_HEIGHT,h.PLAYER_WIDTH/2,h.PLAYER_HEIGHT,0,1.2*h.PLAYER_SCALE,1.2*h.PLAYER_SCALE);this.batch.end()}}]),a}(Mt.System),Xe=Object(Bt.a)(Qe.prototype,"viewport",[Ze],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$e=Object(Bt.a)(Qe.prototype,"gl",[Ue],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),et=Object(Bt.a)(Qe.prototype,"playerPos",[Je],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),tt=Object(Bt.a)(Qe.prototype,"assetManager",[Ve],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),at=Object(Bt.a)(Qe.prototype,"playerState",[qe],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Qe),ta=(it=Object(Mt.Inject)("context"),rt=Object(Mt.Inject)("assetManager"),nt=Object(Mt.Inject)("fixedCamera"),st=Object(Mt.Inject)("playerPosition"),ct=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"gl",ot,Object(Dt.a)(e)),Object(kt.a)(e,"assetManager",lt,Object(Dt.a)(e)),Object(kt.a)(e,"fixedCamera",bt,Object(Dt.a)(e)),Object(kt.a)(e,"playerPos",ht,Object(Dt.a)(e)),e.batch=void 0,e.textures=new Map,e}return Object(l.a)(a,[{key:"initialized",value:function(){var e=this;this.batch=Object(c.g)(this.gl),["bg","city_01","city_02","cloud_01","cloud_02","smoke_01","smoke_02"].map((function(t){return e.textures.set(t,e.assetManager.getTexture("./background/".concat(t,".png")))}))}},{key:"process",value:function(){var e=-this.playerPos.x;this.batch.setProjection(this.fixedCamera.combined),this.batch.begin(),this.drawCloud1(.6*e),this.drawCloud2(.1*e),this.batch.end()}},{key:"drawCloud1",value:function(e){for(var t=this.textures.get("smoke_01"),a=h.CAMERA_HEIGHT/5,i=a/t.height*t.width,r=-i/1.5;e<=0;)e+=i+r;for(this.batch.draw(t,e-i,h.CAMERA_HEIGHT-a/2,i,a);e+r<=h.CAMERA_WIDTH;)this.batch.draw(t,e+r,h.CAMERA_HEIGHT-a/2,i,a),e+=i+r}},{key:"drawCloud2",value:function(e){for(var t=this.textures.get("smoke_02"),a=h.CAMERA_HEIGHT/5,i=a/t.height*t.width,r=-i/1.5;e<=0;)e+=i+r;for(this.batch.draw(t,e-i,h.CAMERA_HEIGHT-a/2,i,a);e+r<=h.CAMERA_WIDTH;)this.batch.draw(t,e+r,h.CAMERA_HEIGHT-a/2,i,a),e+=i+r}}]),a}(Mt.System),ot=Object(Bt.a)(ct.prototype,"gl",[it],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),lt=Object(Bt.a)(ct.prototype,"assetManager",[rt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),bt=Object(Bt.a)(ct.prototype,"fixedCamera",[nt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ht=Object(Bt.a)(ct.prototype,"playerPos",[st],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ct),aa=(ut=Object(Mt.Inject)("physicsWorld"),pt=Object(Mt.Inject)("stars"),yt=Object(Mt.Inject)("eventEmitter"),jt=Object(Mt.Inject)("playerState"),dt=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"physicsWorld",Ot,Object(Dt.a)(e)),Object(kt.a)(e,"stars",vt,Object(Dt.a)(e)),Object(kt.a)(e,"eventEmitter",ft,Object(Dt.a)(e)),Object(kt.a)(e,"playerState",gt,Object(Dt.a)(e)),e.subscription=void 0,e}return Object(l.a)(a,[{key:"initialized",value:function(){var e=this;this.subscription=this.eventEmitter.addListener("beginContact",(function(t){var a,i,r,n,s,c=t.GetFixtureA(),o=t.GetFixtureB();"star"===(null===(a=c.GetBody().GetUserData())||void 0===a?void 0:a.type)?(n=o,s=c):"star"===(null===(i=c.GetBody().GetUserData())||void 0===i?void 0:i.type)&&(n=c,s=o),s&&n&&"user"===(null===(r=n.GetBody().GetUserData())||void 0===r?void 0:r.type)&&e.removeStar(s.GetBody().GetUserData().starObject)}))}},{key:"process",value:function(){}},{key:"removeStar",value:function(e){e.active&&(e.special?this.playerState.nextState():this.playerState.score+=100*(this.playerState.stateIndex+1),e.active=!1)}},{key:"dispose",value:function(){this.subscription.remove()}}]),a}(Mt.System),Ot=Object(Bt.a)(dt.prototype,"physicsWorld",[ut],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),vt=Object(Bt.a)(dt.prototype,"stars",[pt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ft=Object(Bt.a)(dt.prototype,"eventEmitter",[yt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),gt=Object(Bt.a)(dt.prototype,"playerState",[jt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),dt),ia=(mt=Object(Mt.Inject)("viewport"),At=Object(Mt.Inject)("context"),It=Object(Mt.Inject)("stars"),wt=Object(Mt.Inject)("assetManager"),Et=Object(Mt.Inject)("playerState"),St=function(e){Object(Gt.a)(a,e);var t=Object(Wt.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return e=t.call.apply(t,[this].concat(r)),Object(kt.a)(e,"viewport",_t,Object(Dt.a)(e)),Object(kt.a)(e,"gl",Tt,Object(Dt.a)(e)),Object(kt.a)(e,"stars",Ct,Object(Dt.a)(e)),Object(kt.a)(e,"assetManager",Ht,Object(Dt.a)(e)),Object(kt.a)(e,"playerState",Rt,Object(Dt.a)(e)),e.batch=void 0,e.whiteTex=void 0,e.starAnimation=void 0,e.specialAnimations=void 0,e.elapsed=0,e}return Object(l.a)(a,[{key:"initialized",value:function(){this.batch=Object(c.g)(this.gl),this.whiteTex=Object(c.m)(this.gl);var e=this.assetManager.getAtlas("./object.atlas");e&&(this.starAnimation=Object(c.f)(.2,e.findRegions("star")),this.specialAnimations=["hand","hand","feet","feet","chest","head"].map((function(t){return Object(c.f)(.2,e.findRegions(t))})))}},{key:"process",value:function(){this.batch.setProjection(this.viewport.getCamera().combined),this.batch.begin(),this.elapsed+=this.world.delta;var e,t=Object(Pt.a)(this.stars);try{for(t.s();!(e=t.n()).done;){var a=e.value,i=a.x,r=a.y,n=a.active,s=a.special;n&&(s?this.specialAnimations[this.playerState.getCurrentStateIndex()].getKeyFrame(this.elapsed,c.c.LOOP).draw(this.batch,i-h.STAR_SIZE/2,r-h.STAR_SIZE/2,h.STAR_SIZE,h.STAR_SIZE,h.STAR_SIZE/2,h.STAR_SIZE/2,0,2,2):this.starAnimation.getKeyFrame(this.elapsed,c.c.LOOP).draw(this.batch,i-h.STAR_SIZE/2,r-h.STAR_SIZE/2,h.STAR_SIZE,h.STAR_SIZE))}}catch(o){t.e(o)}finally{t.f()}this.batch.end()}}]),a}(Mt.System),_t=Object(Bt.a)(St.prototype,"viewport",[mt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Tt=Object(Bt.a)(St.prototype,"gl",[At],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ct=Object(Bt.a)(St.prototype,"stars",[It],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ht=Object(Bt.a)(St.prototype,"assetManager",[wt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Rt=Object(Bt.a)(St.prototype,"playerState",[Et],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),St);function ra(e,t,a,i,r){var n=t.getContext();a.loadAtlas("./main-char.atlas"),a.loadAtlas("./ground.atlas"),a.loadAtlas("./object.atlas"),["bg","city_01","city_02","cloud_01","cloud_02","smoke_01","smoke_02"].map((function(e){return a.loadTexture("./background/".concat(e,".png"))})),a.loadAtlas("./ui.atlas"),a.loadFont("./score.fnt"),a.loadTexture("./winning.png"),a.finishLoading().then((function(){setTimeout((function(){e.setScreen(function(e,t,a,i){var r=e.getContext(),n=Object(c.l)(e.getCanvas(),e),s=function(){var s=new xt.b2World({x:0,y:h.GRAVITY}),o=new Mt.World,l=new Lt,b=new c.e(0,0);return e.getCamera().setPosition(0,0),o.register("context",r),o.register("physicsWorld",s),o.register("viewport",e),o.register("blocks",[]),o.register("stars",[]),o.register("aliens",[]),o.register("playerPosition",b),o.register("inputHandler",n),o.register("assetManager",t),o.register("playerState",l),o.register("fixedCamera",a),o.register("eventEmitter",i),o.addSystem(new Zt),o.addSystem(new $t),o.addSystem(new Ut),o.addSystem(new aa),o.addSystem(new Ft),o.addSystem(new qt),o.addSystem(new Vt,!1),o.addSystem(new Nt,!1),o.addSystem(new Jt,!1),o.addSystem(new ia,!1),o.addSystem(new zt,!1),o.addSystem(new ea,!1),o.addSystem(new ta,!1),o.addSystem(new Xt,!1),o},o=s(),l=!1,b="";i.addListener("gameOver",(function(e){l=!0,o.dispose(),b=e}));var u=Object(c.g)(r),p=Object(c.m)(r),y=t.getTexture("./winning.png"),j=.8*h.CAMERA_WIDTH,d=j/y.width*y.height,O=.1*h.CAMERA_WIDTH,v=(h.CAMERA_HEIGHT-d)/2,f=t.getFont("./score.fnt").createRenderer(.9*j);f.setAlignMode(c.a.right);var g=d/20;return{update:function(e){if(r.clearColor(0,0,0,1),r.clear(r.COLOR_BUFFER_BIT),o.setDelta(e),!l&&o.processActiveSystem(),o.processPassiveSystem(),l&&(u.setProjection(a.combined),u.begin(),u.setColor(0,0,0,.75),u.draw(p,0,0,h.CAMERA_WIDTH,h.CAMERA_HEIGHT),u.setColor(1,1,1,1),u.draw(y,O,v,j,d),f.setColor(1,0,0,1),f.draw(u,b,O,v+d/1.48,g),f.setColor(1,1,1,1),f.draw(u,b,O,v+d/1.49,g),u.end(),n.isTouched())){var t=n.getTouchedWorldCoord().y;t>=v+.8*d&&t<v+d&&(o=s(),l=!1)}}}}(t,a,i,r))}),1e3)}));var s=Object(c.g)(n),o=Object(c.m)(n),l=.8*h.CAMERA_WIDTH,b=.1*h.CAMERA_WIDTH,u=l/40,p=(h.CAMERA_HEIGHT-u)/2,y=a.getTotal(),j=0;return{update:function(e){n.clearColor(.694,.173,.192,1),n.clear(n.COLOR_BUFFER_BIT);var t=a.getDone();j+=.05*(t/y-j),s.setProjection(i.combined),s.begin(),s.draw(o,b,p,l*j,u),s.end()}}}(function(){var e=Object(n.a)(r.a.mark((function e(){var t,a,i,n,o,l,u,p;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=new s.EventEmitter,a=Object(c.j)(),i=a.getCanvas(),n=Object(c.k)(i,h.CAMERA_WIDTH,h.CAMERA_HEIGHT,{pixelRatio:1}),o=n.getContext(),l=Object(c.i)(h.CAMERA_WIDTH,h.CAMERA_HEIGHT,i.width,i.height),n.addCamera(l),n.update(),u=new b(o),(p=new c.b).setScreen(ra(p,n,u,l,t)),Object(c.h)((function(e){p.update(e,{})}));case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}},[[90,1,2]]]);
//# sourceMappingURL=main.0f511a80.chunk.js.map