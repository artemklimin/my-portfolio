import './index.scss';
import 'normalize.css';
import createMenu from '../../components/menu/menu';
var menu = createMenu(['Мои работы','Обо мне','Блог'], 'menu');
document.body.appendChild(menu);
console.log('in index.js');
console.log($);
console.log(jQuery);

