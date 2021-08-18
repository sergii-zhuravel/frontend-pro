### Welcome!

### HW review and improvements (questions)

### HTTP/HTTPS

### Client/Server, Request/Response

### Request URL:  Protocol + domain + path + query parameter

### Method:
    GET https://myapi.com/user
    POST https://myapi.com/user
    PUT https://myapi.com/user
    DELETE https://myapi.com/user
    OPTIONS
    PATCH https://myapi.com/user
    
### Body

### Headers (служебная информация)

### Status

100 (редко, служебные коды)

200 (success)
  201
  204

300 (редиректы)
  301
  302

400 (client errors)
   403 - unauthorised
   404 - 

500 (server errors)





JavaScript Objects
Literal {}, Object.create(), with function constructor
.hasOwnProperty()
Undefined  для несуществующих свойств
Properties lookup
. and [] to access properties
for … in, Object.keys()


Методы объектов
Свойства-функции – являются методами объекта
Обращение к объекту внутри метода – через this
This принадлежит функции, но значение определяется контекстом вызова


call & apply
  Вызов func.call(context, a, b...) – то же, что обычный вызов func(a, b...), но с явно указанным this(=context)
  func.call(context, arg1, arg2);
  func.apply(context, [arg1, arg2]);

this
 
Значение this устанавливается в зависимости от того, как вызвана функция:
При вызове функции как метода:
obj.func(...) // this = obj obj["func"](...)
При обычном вызове:
func(...) // this = window (ES3) /undefined (ES5)
В new:
new func() // this = {} (новый объект)
Явное указание:
func.apply(context, args) // this = context (явная передача) func.call(context, arg1, arg2, ...)



-----
function User(name) {
  this.name = name;

  this.sayHi = function() {
    alert( "Меня зовут: " + this.name );
  };
}

let vasya = new User("Вася");

vasya.sayHi(); // Меня зовут: Вася



-----
'use strict'
/* console.log(this); */
function sayHello() {
  console.log(this);
}

const user = {
  name: "Viktor",
  sayHello: function() {
    console.log(this);
  }
}

const say = user.sayHello;
say();