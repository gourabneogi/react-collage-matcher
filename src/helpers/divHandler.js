
export default function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    const partId = getPartID(e.path);
    document.getElementById(partId).classList.remove("not-transparent");
    document.getElementById(partId).classList.add("transparent");
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    const list = document.elementsFromPoint(e.clientX, e.clientY);
    const mainId = getMainID(list);
    resetMainHover();
    
    if (mainId) {
      document.getElementById(mainId).classList.add("main-hover");
    }
  }

  function closeDragElement(e) {
    /* stop moving when mouse button is released:*/
    const list = document.elementsFromPoint(e.clientX, e.clientY);
    const partId = getPartID(list);
    const mainId = getMainID(list);
    document.getElementById(partId).classList.remove("transparent");
    document.getElementById(partId).classList.add("not-transparent");
    const partEle = document.getElementById(partId);

    if (isMatched(partId, mainId)) {
      partEle.classList.add("destroy");
    } else {
      partEle.classList.remove("destroy");
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function getPartID(list) {
    let e = list.filter((element) => element.id?.includes("part"));

    if (!e.length) return null;

    return e[0].id;
  }

  function getMainID(list) {
    let e = list.filter((element) => element.id?.includes("main"));

    if (!e.length) return null;

    return e[0].id;
  }

  function isMatched(partId, mainId) {
    if (!(partId && mainId)) return false;

    const pid = partId.replace("part", "");
    const mid = mainId.replace("main", "");

    return pid === mid ? true : false;
  }

  function resetMainHover() {
    let i = 1;
    
    while(true) {
      const element = document.getElementById(`main${i++}`);
      
      if (!element) break;

      element.classList.remove("main-hover");
    }
  }
}
