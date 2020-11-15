!function(f,b,e,v,n,t,s)
 {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
 n.callMethod.apply(n,arguments):n.queue.push(arguments)};
 if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
 n.queue=[];t=b.createElement(e);t.async=!0;
 t.src=v;s=b.getElementsByTagName(e)[0];
 s.parentNode.insertBefore(t,s)}(window, document,'script',
 'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '522074631773388');
//fbq('track', "PageView");

var obj = JSON.parse('{{_CART_PRODUCTS_}}');
data1=[];
obj.forEach(function(item, index){
var obj2;
        obj2={
          id:item.product_id,
          quantity:item.quantity,
        }
       this.data1.push(obj2)
});
fbq('track', 'Purchase', {currency: "USD", value: '{{_ORDER_TOTAL_}}',contents:data1,content_type: 'product',compared_product:'{{_ORDER_ID_}}'  })

console.log(data1)
fbq('trackCustom', 'OrderDetails', {OrderID: '{{_ORDER_ID_}}'});
fbq('track', "ThankYou");


var noscript = document.createElement('noscript');
noscript.innerHTML = '';
document.getElementsByTagName('head')[0].appendChild(noscript);

var elem = document.createElement("img");
elem.setAttribute("src", "https://www.facebook.com/tr?id=522074631773388&ev=PageView&noscript=1");
elem.setAttribute("height", "1");
elem.setAttribute("width", "1");
elem.setAttribute("style", "display:none");
document.getElementsByTagName('noscript')[0].appendChild(elem);