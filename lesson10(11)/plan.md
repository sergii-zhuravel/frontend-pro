### Welcome!

### HW review and improvements (questions)

### DOM

### DOM and events

### Add event handler via attributs (onClick)

### Add events via element prop

### Add events via addEventListener

### Prevent default for links

### Create HTML Element

Атрибуты

 element.hasAttribute('id') – проверяет наличие атрибута
 element.getAttribute(name) – получает значение атрибута
 element.setAttribute(name) – устанавливает атрибут
 element.removeAttribute(name) – удаляет атрибут
 element.attributes – получить все атрибуты

Работа с элементами

document.createElement('div')
document.createTextNode(text) / textContent
parentElem.appendChild(elem)
parentElem.insertBefore(elem, nextSibling/null)
elem.cloneNode(true/false)
parentElem.removeChild(elem) / parentElem.replaceChild(newElem, elem) / elem.remove()


Работа со стилями
  element.style – for inner styles
 elem.style.cssFloat – исключение
 elem.style.width="” – сброс стиля
 getComputedStyle(element[,pseudo]) (IE9+)






Задачки:
------------------
<p id="elem">Привет, мир!</p>

<script>
  elem.outerHTML = "Hello world!"
  alert(elem.outerHTML);
</script>

Что выведет этот код?

1. Выведет undefined, теперь elem – текстовый узел.
2.  Hello world!
3. <p id="elem">Привет, мир!</p>
4. <p id="elem">Hello world!</p>
5. Будет ошибка.
---------------
<table>
<tr>
  <td id="hi">Привет!</td>
</tr>
</table>

Каков будет результат document.getElementById('hi').parentNode.parentNode.tagName?

document.getElementById('hi').parentNode.parentNode.tagName.toLowerCase() === 'table'
----------------------

Дан такой HTML:

<div id="outer">
  <div id="inner"></div>
</div>

Какие вызовы вернут div#inner?

1. document.querySelector("#outer #inner")
2. document.getElementById("outer").getElementById("inner")
3. document.querySelector("#outer").children[0]
4. document.getElementById("#outer").firstChild

Матвей: 
Евгений: 1 и 3
Максим: 1 и 3