

function nightforday() {
    document.body.style.setProperty('--cor-light', 'rgba(136, 136, 136, 0.38)');
    document.body.style.setProperty('--cor-body', '#000');
    document.body.style.setProperty('--cor-font-grey', '#e2e2e2');
    document.body.style.setProperty('--cor-dash-area', '#000');
    document.body.style.setProperty('--cor-principal', '#870deb');
    document.getElementById('moon').id = 'none-moon';
    document.getElementById('none-sun').id = 'sun';
    document.getElementById('banner').style.backgroundImage = "url('img/banner.png')";
  }

  
function dayfornight() {
    document.body.style.setProperty('--cor-light', '#fff');
    document.body.style.setProperty('--cor-body', '#fff');
    document.body.style.setProperty('--cor-font-grey', '#3f3f3f');
    document.body.style.setProperty('--cor-dash-area', 'rgba(136, 136, 136, 0.24)');
    document.body.style.setProperty('--cor-principal', '#0d92eb');
    document.getElementById('sun').id = 'none-sun';
    document.getElementById('none-moon').id = 'moon';
    document.getElementById('banner').style.backgroundImage = "url('img/banner-light.png')";
  }

