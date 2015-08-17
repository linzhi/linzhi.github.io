(function() {
  function getGarden(canvas) {
    var ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'lighter';
    return new Garden(ctx, canvas);
  }

  function getHeartPoint(angle) {
    var t = angle / Math.PI;
    var x = 19.5 * (16 * Math.pow(Math.sin(t), 3));
    var y = -20 * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    return [offsetX + x, offsetY + y];
  }

  function startHeartAnimation() {
    var angle = 10;
    var heart = [];
    var animationTimer = setInterval(function() {
      var bloom = getHeartPoint(angle);
      var draw = true;
      for (var i = 0; i < heart.length; i++) {
        var p = heart[i];
        var distance = Math.sqrt(Math.pow(p[0] - bloom[0], 2) + Math.pow(p[1] - bloom[1], 2));
        if (distance < Garden.options.bloomRadius.max * 1.3) {
          draw = false;
          break;
        }
      }
      if (draw) {
        heart.push(bloom);
        garden.createRandomBloom(bloom[0], bloom[1]);
      }
      if (angle >= 30) {
        clearInterval(animationTimer);
        afterAnimate();
      } else {
        angle += 0.2;
      }
    }, 50);
  }

  function clock(date) {
    var current = Date();
    var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
      hours = '0' + hours;
    }
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    seconds = seconds % 60;
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    var result = '<span class="digit">' + days + '</span> days <span class="digit">' + hours + '</span> hours <span class="digit">' + minutes + '</span> minutes <span class="digit">' + seconds + '</span> seconds';
    $('#clock').html(result);
  }

  function afterAnimate() {
    $('#love').fadeIn(5000, function() {
    });
  }

  var canvas = document.getElementById('heart');
  var $main = $('#main');
  canvas.width = $main.width();
  canvas.height = $main.height();

  var garden = getGarden(canvas),
    offsetX = canvas.width / 2,
    offsetY = canvas.height / 2 - 55;

  setInterval(function() {
    garden.render();
  }, Garden.options.growSpeed);

  var interval = 2000;
  $('#to').fadeIn(interval, function() {
    $('#to').fadeIn(interval, function() {
      var loveDate = '2015/07/04 20:19:00';
      setInterval(function() {
        clock(loveDate);
      }, 500);

      $('#clock').fadeIn(interval, function() {
        $('#end').fadeIn(interval, function() {
          $('#from').fadeIn(interval, function() {
            startHeartAnimation();
          });
        });
      });
    });
  });
}());

