(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
function kg(g){return g>=1000?(Math.round(g/100)/10)+' kg':Math.round(g/10)*10+' g';}
var dg=$('dq-g');if(dg){var dk=$('dq-k'),dm=$('dq-m'),da=$('dq-a');var P={meat:[175,'Boneless meat'],bone:[300,'Meat on the bone'],fish:[170,'Fish fillets'],veg:[0,'Vegetarian main']};
 on([dg,dk,dm,da],function(){var g=Math.max(0,parseInt(dg.value,10)||0),k=Math.max(0,parseInt(dk.value,10)||0),a=parseFloat(da.value),n=(g+k*0.5)*a;if(n<=0){$('dq-o').innerHTML='<strong>Add your guests</strong>';return;}var p=P[dm.value];
  $('dq-o').innerHTML='<strong>'+(dm.value==='veg'?'1 large bake for '+Math.ceil(n)+' portions':kg(p[0]*n)+' '+p[1].toLowerCase())+'</strong><ul><li>Potatoes: '+kg(225*n)+'</li><li>Or rice/pasta (dry): '+kg(85*n)+'</li><li>Green vegetables: '+kg(100*n)+' per side</li><li>Bread: '+Math.ceil(n*1.5)+' slices</li></ul><p>Weights are raw. Round up if you want leftovers.</p>';});}
var ct=$('ct-t');if(ct){var cr=$('ct-r'),cs=$('ct-s');function f(m){m=((m%1440)+1440)%1440;return ('0'+Math.floor(m/60)).slice(-2)+':'+('0'+m%60).slice(-2);}
 on([ct,cr,cs],function(){var p=(ct.value||'19:30').split(':'),s=parseInt(p[0],10)*60+parseInt(p[1],10),r=Math.max(0,parseInt(cr.value,10)||0),re=Math.max(0,parseInt(cs.value,10)||0),out=s-5-re,inn=out-r,heat=inn-20;
  $('ct-o').innerHTML='<strong>Main in at '+f(inn)+'</strong><ol><li>'+f(heat-40)+' &ndash; take the main out of the fridge</li><li>'+f(heat)+' &ndash; heat the oven</li><li>'+f(inn)+' &ndash; main into the oven</li><li>'+f(out)+' &ndash; out to rest; sides on</li><li>'+f(s-5)+' &ndash; carve and warm plates</li><li>'+f(s)+' &ndash; serve</li></ol>';});}
var mm=$('mb-m');if(mm){var ms=$('mb-s');var M={roast:[['crisp roast potatoes','something green and fresh'],['a sharp salad or pickled vegetables'],'Add one bright, acidic side to cut through the richness.'],braise:[['buttery mash or polenta','steamed greens'],['a crunchy slaw'],'Something creamy to soak up the sauce, something crisp for contrast.'],fish:[['new potatoes','a herby green salad'],['lemon wedges and a light sauce'],'Keep sides delicate so the fish leads.'],pasta:[['a crisp leaf salad','garlic bread'],['roasted tomatoes'],'Lighten the plate with a fresh, sharp salad.'],veg:[['a grain salad','roasted seasonal vegetables'],['a yoghurt or herb dressing'],'Add protein with beans, lentils or cheese if the tart is light.'],curry:[['steamed rice','flatbreads'],['a cooling cucumber raita'],'Balance heat with something cool and something plain.']};
 on([mm,ms],function(){var m=M[mm.value],w=ms.value==='warm';$('mb-o').innerHTML='<strong>'+m[0][0].charAt(0).toUpperCase()+m[0][0].slice(1)+' + '+m[0][1]+'</strong><p>For contrast: '+m[1][0]+'.</p><p>'+m[2]+'</p><p>'+(w?'Warm months: serve one side at room temperature.':'Cool months: roast your vegetables alongside the main to save oven space.')+'</p>';});}
})();
