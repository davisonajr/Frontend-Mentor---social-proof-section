for (let i=0;i < 3; i++) {
    let div = document.createElement('div');
    let span = document.createElement('span');
    let t = document.createTextNode('Rated ' + rates[i].rate + ' Stars in ' + rates[i].website);
    span.appendChild(t);
    for (let k=0; k < rates[i].rate; k++){
      let star = new Image();
      star.src = './images/icon-star.svg';
      star.alt = '\u272E';
      div.appendChild(star);
    }
    div.className = 'rate-box';        
    div.appendChild(span);
    let elem = document.getElementById('item-2');
    elem.appendChild(div);
  }