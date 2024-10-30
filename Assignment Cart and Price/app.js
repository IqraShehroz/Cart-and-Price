let cart = ["milk        " , "eggs      " , "bread      " , "chips       " , "oil     "];
let quote = [75 , 320, 120, 100, 597];
let discount = [5 , 7];
let sum = 0;

document.write("ITEMS     " + ":     " + "Price     <br>");
document.write("============== <br>");
document.write("<br>" + cart[0] + "    :     " + quote[0]);
document.write("<br>" + cart[1] + "    :     " + quote[1]);
document.write("<br>" + cart[2] + "    :     " + quote[2]);
document.write("<br>" + cart[3] + "    :     " + quote[3]);
document.write("<br>" + cart[4] + "    :     " + quote[4] + "<br>");

sum = quote[0] + quote[1] + quote[2] + quote[3] + quote[4]; 
disc = quote[1]/discount[0];
disc1 = quote[4]/discount[1];
sub = quote[1]-disc;
sub1 = quote[4]-disc1;
totaldisc = sub+sub1
billedamount = sum-totaldisc

document.write("total price     " + "=     " +  quote[0] + "+" +  quote[1] + "+" + quote[2] + "+" + quote[3] + "+" + quote[4] + "=" + sum + "<br>");
document.write("Discount " + ":" + cart[1] + "=" + quote[1] + "(5%)" + "==>" + sub + "<br>");
document.write("Discount " + ":" + cart[4] + "=" + quote[4] + "(7%)"  + "==>" + sub1 + "<br>" );
document.write("total discount" + "=" + totaldisc + "<br>" );
document.write("billing amount" + ":" + sum + "-" + totaldisc + "=" + billedamount);
