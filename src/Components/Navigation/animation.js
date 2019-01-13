/**
 * getHeight - for elements with display:none
 */
const getDomElementHeight = domElement => {
  const domElement_style = window.getComputedStyle(domElement),
    domElementDisplay = domElement_style.display,
    domElementPosition = domElement_style.position,
    domElementVisibility = domElement_style.visibility,
    domElementMaxHeight = domElement_style.maxHeight
      .replace('px', '')
      .replace('%', '');

  let elementHeight = 0;

  // if its not hidden we just return normal height
  if (domElementDisplay !== 'none' && domElementMaxHeight !== '0') {
    return domElement.offsetHeight;
  }

  // the element is hidden so:
  // making the el block so we can meassure its height but still be hidden
  domElement.style.position = 'absolute';
  domElement.style.visibility = 'hidden';
  domElement.style.display = 'block';

  elementHeight = domElement.offsetHeight;

  // reverting to the original values
  domElement.style.display = domElementDisplay;
  domElement.style.position = domElementPosition;
  domElement.style.visibility = domElementVisibility;

  return elementHeight;
};

/**
 * toggleSlide mimics the jQuery version of slideDown and slideUp
 * all in one function comparing the max-heigth to 0
 */
export const toggleNavbarSlide = element => {
  let elementMaxHeight = 0;

  if (element.getAttribute('data-max-height')) {
    // we've already used this before, so everything is setup
    if (element.style.maxHeight.replace('px', '').replace('%', '') === '0') {
      element.style.maxHeight = element.getAttribute('data-max-height');
    } else {
      element.style.maxHeight = '0';
    }
  } else {
    elementMaxHeight = getDomElementHeight(element) + 'px';
    element.style['transition'] = 'max-height 0.5s ease-in-out';
    element.style.overflowY = 'hidden';
    element.style.maxHeight = '0';
    element.setAttribute('data-max-height', elementMaxHeight);
    element.style.display = 'block';

    // we use setTimeout to modify maxHeight later than display (to we have the transition effect)
    setTimeout(() => {
      element.style.maxHeight = elementMaxHeight;
    }, 10);
  }
};
