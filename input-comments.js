for (let i=0;i < 3; i++){
    let div = document.createElement('div');
    let img = new Image();
    let h2 = document.createElement('h2');
    let span = document.createElement('span');
    let p = document.createElement('p');
    let name = document.createTextNode(comments[i].user);
    let status = document.createTextNode(comments[i].status);
    let comment = document.createTextNode(comments[i].comment);
    img.src = comments[i].image;
    img.alt = 'thumb image of'+ comments[i].user; 
    h2.appendChild(name);
    span.appendChild(status);
    p.appendChild(comment);
    div.className = 'comment-box';
    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(span)
    div.appendChild(p);
    let elem = document.getElementById('item-3');
    elem.appendChild(div);
   }