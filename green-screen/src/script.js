var imgf=null;
var imgb=null;
var ia=null;





function merge()
{   
  if(imgf==null&& imgb==null)
  {
    alert("Please upload the Foreground(Green Screen) and the Background Image")
  }
  
  else if(imgb==null)
  {
    alert("Please upload the Background Image")
  }
  
  else if(imgf==null)
  {
    alert("Please upload the Foreground(Green Screen) Image")
  }
  
  else
  {
    ia=new SimpleImage(imgf.getWidth(),imgf.getHeight());
    var am=document.getElementById(imgc);  
    for (var m of imgf.values())
      {
        var x=m.getX();
        var y=m.getY();
        if (m.getGreen()>m.getRed()+m.getBlue()) 
        {
          var bgm = imgb.getPixel(x, y);
          ia.setPixel(x, y, bgm);
        }
        else 
        {
          ia.setPixel(m.getX(), m.getY(),m);
        } 
      }
  var a=document.getElementById("imgc");
  ia.drawTo(a);
  a.style.opacity=1;
  }
}




















function uploadf(aa,bb){
var i=document.getElementById(aa);
var a=document.getElementById(bb);  
imgf=new SimpleImage(i);
imgf.drawTo(a);
a.style.opacity=1;
}
function uploadb(aa,bb){
var i=document.getElementById(aa);
var a=document.getElementById(bb);  
imgb=new SimpleImage(i);
imgb.drawTo(a);
a.style.opacity=1;
}

function clearit(c,x,y){
  var ctx = c.getContext('2d');
  ctx.clearRect(0,0,x,y);
  c.style.backgroundColor = rgba(255,255,255,0.4);
}

function rgba(r,g,b,a) {
  return 'rgb(' + [(r||0),(g||0),(b||0),(a||0)].join(',') + ')';
}

















function clfg(){
  var a=document.getElementById("fgc");
  clearit(a,a.width,a.height);
  imgf=null;
  document.getElementById("fg").value = "";
}

function clbg(){
  var a=document.getElementById("bgc");
  clearit(a,a.width,a.height);
  imgb=null;
  document.getElementById("bg").value = "";
}

function clim(){
  var a=document.getElementById("imgc");
  clearit(a,a.width,a.height);
  ia=null;
}

function clall(){
  clfg();
  clbg();
  clim();
}