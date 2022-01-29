var loadState = function(game){

};

  loadState.prototype = {
      
      preload: function(){
          console.log(game.state.getCurrentState());

          var Font = "40px Comic Sans MS";
            this.loadText = this.add.text(this.world.centerX,this.world.centerY,'loading ',{font: Font, fill: '#99CC0E', stroke: '#55B50D', strokeThickness: 3});
          this.loadText.anchor.setTo(0.5,0.5);
          
          /*
          this.loadingBg = this.add.sprite(this.world.centerX,this.world.centerY,'loadingbg');
          this.loadingBg.anchor.setTo(0.5,0.5);
          this.loadingBg.scale.setTo(0.5,0.5);
          
          this.loadingBar = this.add.sprite(this.world.centerX,this.world.centerY,'loadingbar');
          this.loadingBar.anchor.setTo(0.5,0.5);
          this.loadingBar.scale.setTo(0.5,1);
          this.load.setPreloadSprite(this.loadingBar);
          this.loadingBar.x = this.world.centerX - this.loadingBar.width/2;
          */
          
          // load all objcet 
          this.load.image('background','./../juego/assets/bg.png');
          this.load.image('cactus','./../juego/assets/cactus.png');
          this.load.image('platform','./../juego/assets/platform.png');
          
          //load fruties
          this.load.image('fruit0','./../juego/assets/fruits/banana_01.png');
          this.load.image('fruit1','./../juego/assets/fruits/grape.png');
          this.load.image('fruit2','./../juego/assets/fruits/pineapple.png');
          this.load.image('fruit3','./../juego/assets/fruits/watermelon.png');
          this.load.image('fruit4','./../juego/assets/fruits/cherry.png');
          // load utility
          this.load.spritesheet('gems','./../juego/assets/gems-sprite.png',45,42); // fruit.js && play.js
          // load player
           this.load.spritesheet('jolly','./../juego/assets/player/monkey.png',63,78);
          
          // load GUI
           this.load.image('play','./../juego/assets/GUI/play.png');    
           this.load.image('setting','./../juego/assets/GUI/setting.png');    
           this.load.image('credit','./../juego/assets/GUI/credit.png');    
           this.load.image('howtoplay','./../juego/assets/GUI/howToPlay.png');      
           this.load.spritesheet('sound-sprite','./../juego/assets/GUI/sound.png',70,60); 
           this.load.image('title-bg','./../juego/assets/GUI/title_bg.png');
           this.load.image('menu-title','./../juego/assets/GUI/menu-title.png');
           this.load.image('pauseBtn','./../juego/assets/GUI/pause.png');  // Play.js
           this.load.image('restartBtn','./../juego/assets/GUI/restart.png');  // leaderboard.js
           this.load.image('menuBtn','./../juego/assets/GUI/b_More.png');  // leaderboard.js
           this.load.image('backward','./../juego/assets/GUI/backward.png');// credit.js
           this.load.image('resumeBtn','./../juego/assets/GUI/resume.png'); // Play.js
           this.load.image('life','./../juego/assets/GUI/life.png'); // Play.js
           this.load.image('coconut','./../juego/assets/coconut.png'); // fruit.js
           
          //credit
          this.load.image('social-link','./../juego/assets/credit/credit-social-link.png');
          this.load.image('code','./../juego/assets/credit/code.png');
          this.load.image('devcredit','./../juego/assets/credit/devcredit.png');
          this.load.image('shohan','./../juego/assets/credit/shohan.png');
          
          // how to play
          this.load.image('how-to-play','./../juego/assets/how-to-play.png');
          
          // sounds
          this.load.audio('fruitGulp',['./../juego/sounds/fruitGulp.wav','./../juego/sounds/fruitGulp.ogg','./../juego/sounds/fruitGulp.mp3','./../juego/sounds/fruitGulp.m4a'],true);
          this.load.audio('menuBg',['./../juego/sounds/menuBg.ogg','./../juego/sounds/menuBg.wav','./../juego/sounds/menuBg.mp3','./../juego/sounds/menuBg.m4a'],true);
          
          this.load.audio('jumpSound',['./../juego/sounds/jump.wav','./../juego/sounds/jump.ogg','./../juego/sounds/jump.mp3','./../juego/sounds/jump.m4a'],true);

          this.load.audio('gemSound',['./../juego/sounds/gemSound.mp3','./../juego/sounds/gemSound.wav','./../juego/sounds/gemSound.ogg','./../juego/sounds/gemSound.m4a'],true);
          
          this.load.audio('deadSound',['./../juego/sounds/dead.mp3','./../juego/sounds/dead.wav','./../juego/sounds/dead.ogg','./../juego/sounds/dead.m4a'],true);
          
          this.load.audio('cocoSound',['./../juego/sounds/dap.mp3','./../juego/sounds/dap.wav','./../juego/sounds/dap.ogg','./../juego/sounds/dap.m4a'],true);
          
          
      },
      
      create: function(){
            
          this.sound.setDecodedCallback([ 'gemSound', 'menuBg', 'jumpSound','deadSound' ], function(){
                console.log('sounds are ready');
                this.state.start('Menu');
          }, this);
      },
      
      loadUpdate: function(){
        this.loadText.text = 'loading '+this.load.progress+'%';
          //console.log(this.load.progress);
      },
      
      update: function(){
            
      }
      
      
  }