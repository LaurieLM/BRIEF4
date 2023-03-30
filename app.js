document.body.onload=function(){
    nbr=8;
    p=0;
    container=document.getElementById("container");
    card=document.getElementsByClassName("card");
    g=document.getElementById("g");
    d=document.getElementById("d"); 

    for (i=1;i<=nbr;i++) {
        container.appendChild(card);
    }
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
