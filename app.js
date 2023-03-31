document.body.onload=function(){
    nbr=8;
    p=0;
    container=document.getElementById("container");
    card=document.getElementsByClassName("card");
    g=document.getElementById("g");
    d=document.getElementById("d"); 
    

    // POP UP 
    const popup = document.createElement("div");
    popup.setAttribute("id","popup");
    popup.style.display = 'none';
    popup.style.backgroundImage="url(img/img1.jpg)";
    popup.style.backgroundSize="cover";
    popup.innerHTML ="<h2> Détail du voyage </h2>" + "<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum doloribus sit dolorum aliquam, est ab similique praesentium totam deserunt excepturi.</p>" ;
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "#fff";
    popup.style.padding = "20px";
    popup.style.border = "1px solid #000";
    popup.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.3)";
    document.body.appendChild(popup);

}

g.onclick=function(){
    if (p>-nbr+1)
        p--;
    container.style.transform="translate("+p*400+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();
}

d.onclick=function(){
    if (p<0)
        p++;
    container.style.transform="translate("+p*400+"px)";
    container.style.transition="all 0.5s ease";
    afficherMasquer();

}

function afficherMasquer() {
    if (p==-nbr+1) 
        g.style.visibility="hidden";
    else
        g.style.visibility="visible";
    if (p==0) 
        d.style.visibility="hidden";
    else
        d.style.visibility="visible";    
}

// POP UP
let isPopupVisible = false;
btn1=document.getElementById('btn1');
btn2=document.getElementById('btn2');
btn3=document.getElementById('btn3');
btn4=document.getElementById('btn4');
btn5=document.getElementById('btn5');
btn6=document.getElementById('btn6');
btn7=document.getElementById('btn7');
btn8=document.getElementById('btn8');

btn1.onclick =function() {

    isPopupVisible === true
        ? popup.style.display = 'none'
        : popup.style.display = 'block';
    isPopupVisible = !isPopupVisible;  
}
btn2.onclick =function() {
    isPopupVisible === true
        ? popup.style.display = 'none'
        : popup.style.display = 'block';
    isPopupVisible = !isPopupVisible;  
}
btn3.onclick =function() {
    isPopupVisible === true
        ? popup.style.display = 'none'
        : popup.style.display = 'block';
    isPopupVisible = !isPopupVisible;  
}
btn4.onclick =function() {
    isPopupVisible === true
        ? popup.style.display = 'none'
        : popup.style.display = 'block';
    isPopupVisible = !isPopupVisible;  
}
btn5.onclick =function() {
    isPopupVisible === true
        ? popup.style.display = 'none'
        : popup.style.display = 'block';
    isPopupVisible = !isPopupVisible;  
}
btn6.onclick =function() {
    isPopupVisible === true
        ? popup.style.display = 'none'
        : popup.style.display = 'block';
    isPopupVisible = !isPopupVisible;  
}
btn7.onclick =function() {
    isPopupVisible === true
        ? popup.style.display = 'none'
        : popup.style.display = 'block';
    isPopupVisible = !isPopupVisible;  
}
btn8.onclick =function() {
    isPopupVisible === true
        ? popup.style.display = 'none'
        : popup.style.display = 'block';
    isPopupVisible = !isPopupVisible;  
}









