(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1645:function(e,t,n){},1651:function(e,t,n){"use strict";n.r(t);var a=n(3),o=n.n(a),i=n(570),s=n.n(i),r=(n(683),n(38)),c=n(39),l=n(41),u=n(40),h=n(42),d=n(572),p=n(97),y=n(118),m=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(y.a,null,o.a.createElement(y.b,{variant:"h2"},"Home Page"))}}]),t}(a.Component),b=n(96),g=n.n(b),w=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,"TestScene"))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"preload",value:function(){this.load.setBaseURL("https://raw.githubusercontent.com/wjxhenry/website/master"),this.load.image("sky","assets/test/space3.png"),this.load.image("logo","assets/test/phaser3-logo.png"),this.load.image("red","assets/test/red.png")}},{key:"create",value:function(){var e=this;console.log(this),this.add.image(400,300,"sky");var t=this.add.particles("red").createEmitter({speed:100,scale:{start:1,end:0},blendMode:"ADD"}),n=this.physics.add.image(400,100,"logo");n.setVelocity(100,200),n.setBounce(1,1),n.setCollideWorldBounds(!0),t.startFollow(n),this.input.keyboard.addKey("Enter").on("down",function(){console.log("Enter key down"),console.log('Start "Movement" scene'),e.scene.start("Movement")})}},{key:"update",value:function(){}}]),t}(g.a.Scene),f=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,"Movement"))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"updateMovement",value:function(e,t){"up"===t?(e.y-=2,e.y<0&&(e.y=0)):"down"===t?(e.y+=2,e.y>600&&(e.y=600)):"left"===t?(e.x-=2,e.x<0&&(e.x=0)):"right"===t&&(e.x+=2,e.x>800&&(e.x=800))}},{key:"preload",value:function(){this.load.setBaseURL("https://raw.githubusercontent.com/wjxhenry/website/master"),this.load.image("player","assets/test/red.png")}},{key:"create",value:function(){this.cameras.main.setBackgroundColor("#000000"),this.counter=0,this.keys=this.input.keyboard.addKeys({up:"W",down:"S",left:"A",right:"D"}),this.input.keyboard.addKey("ESC").on("down",function(){}),this.player=this.add.sprite(0,0,"player")}},{key:"update",value:function(){this.counter++,this.counter%1===0&&(this.counter=0,this.keys.up.isDown&&(console.log("Up"),this.updateMovement(this.player,"up")),this.keys.down.isDown&&(console.log("Down"),this.updateMovement(this.player,"down")),this.keys.left.isDown&&(console.log("Left"),this.updateMovement(this.player,"left")),this.keys.right.isDown&&(console.log("Right"),this.updateMovement(this.player,"right")))}}]),t}(g.a.Scene),v=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this._getDimensions(),t={type:g.a.AUTO,parent:"phaser-parent",pixelArt:!0,width:.8*e,height:.8*e,physics:{default:"arcade",arcade:{gravity:{y:200}}},scene:[w,f]};new g.a.Game(t)}},{key:"_getDimensions",value:function(){var e=window.innerWidth,t=window.innerHeight;return e<t?e:t}},{key:"render",value:function(){return o.a.createElement("div",{id:"phaser-parent"})}}]),t}(o.a.Component),j=function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(y.a,null,o.a.createElement(y.b,{variant:"h2"},"Maze Game"),o.a.createElement(v,null))}}]),t}(a.Component),O=(n(1645),function(e){function t(){return Object(r.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return console.log("/website"),o.a.createElement(d.a,{basename:"/website"},o.a.createElement("div",{className:"App"},o.a.createElement(p.a,{path:"/",component:m}),o.a.createElement(p.a,{path:"/game",component:j})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},678:function(e,t,n){e.exports=n(1651)},683:function(e,t,n){}},[[678,1,2]]]);
//# sourceMappingURL=main.83483dbe.chunk.js.map