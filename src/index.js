var ImageEditor = require('tui-image-editor');
import EditIcon from './svg/edit.svg';
import { whiteTheme } from './white-theme';

/**
* Build styles
*/
require('./index.css').toString();
require('../node_modules/tui-image-editor/dist/tui-image-editor.min.css').toString();
require('../node_modules/tui-color-picker/dist/tui-color-picker.min.css').toString();


function openImageEditor(node) {
  var img = document.querySelector('.ce-block--focused .image-tool__image-picture');
  var editorTag = document.createElement('div');
  editorTag.id = 'ui-editor';
  document.querySelector('body').append(editorTag);
  var instance = new ImageEditor(editorTag, {
    includeUI: {
        theme: whiteTheme,
        menu: ['draw', 'text', 'icon', 'crop', 'rotate'],
        loadImage:
        {
          path: img.src,
          name: 'Image Editor'
        },
        locale: {
          'Download': 'Save'
        }
      },
      cssMaxWidth: 700,
      cssMaxHeight: 500,
      selectionStyle: {
      cornerSize: 20,
      rotatingPointOffset: 70
    } 
  });

  for(let btn of document.querySelectorAll('.tui-image-editor-download-btn')) {
    var old_element = btn;
    var new_element = old_element.cloneNode(true);
    old_element.parentNode.replaceChild(new_element, old_element);
    new_element.addEventListener('click', (e) =>{
      // prevent default behaviour
      img.src = instance.toDataURL();
      e.preventDefault();
      e.stopPropagation();
      document.querySelector('body').removeChild(editorTag);
    }, true);
  }
}

var imageEditor = {
  'name': 'edit',
  'title': 'Edit Image',
  'icon': EditIcon,
  'action': openImageEditor
}

export default imageEditor;

