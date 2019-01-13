/**
 * getHeight - for elements with display:none
 */
const getHeight = domElement => {
  var el_style = window.getComputedStyle(domElement),
    el_display = el_style.display,
    el_position = el_style.position,
    el_visibility = el_style.visibility,
    el_max_height = el_style.maxHeight.replace('px', '').replace('%', ''),
    wanted_height = 0;

  // if its not hidden we just return normal height
  if (el_display !== 'none' && el_max_height !== '0') {
    return domElement.offsetHeight;
  }

  // the element is hidden so:
  // making the el block so we can meassure its height but still be hidden
  domElement.style.position = 'absolute';
  domElement.style.visibility = 'hidden';
  domElement.style.display = 'block';

  wanted_height = domElement.offsetHeight;

  // reverting to the original values
  domElement.style.display = el_display;
  domElement.style.position = el_position;
  domElement.style.visibility = el_visibility;

  return wanted_height;
};

/**
 * toggleSlide mimics the jQuery version of slideDown and slideUp
 * all in one function comparing the max-heigth to 0
 */
export const toggleSlide = function(el) {
  var el_max_height = 0;

  if (el.getAttribute('data-max-height')) {
    // we've already used this before, so everything is setup
    if (el.style.maxHeight.replace('px', '').replace('%', '') === '0') {
      el.style.maxHeight = el.getAttribute('data-max-height');
    } else {
      el.style.maxHeight = '0';
    }
  } else {
    el_max_height = getHeight(el) + 'px';
    el.style['transition'] = 'max-height 0.5s ease-in-out';
    el.style.overflowY = 'hidden';
    el.style.maxHeight = '0';
    el.setAttribute('data-max-height', el_max_height);
    el.style.display = 'block';

    // we use setTimeout to modify maxHeight later than display (to we have the transition effect)
    setTimeout(function() {
      el.style.maxHeight = el_max_height;
    }, 10);
  }
};
