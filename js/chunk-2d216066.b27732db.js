(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d216066"],{c168:function(t,o,n){"use strict";n.r(o);var e=function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{directives:[{name:"t9n",rawName:"v-t9n.deep",value:"docs",expression:"'docs'",modifiers:{deep:!0}}],staticClass:"plugin"},[n("Code",{attrs:{source:"install"}}),n("p",[t._v("Внутри конструктора компонента указываются типы выходов (option, output) и коллбэк функция для инициализации")]),n("Code",{attrs:{source:"contruct"}}),n("p",[t._v("Значение option указывает на то, что выход данного типа служит для передачи управления следующим узлам. Выход типа output работает так же, как и в обычной схеме без этого плагина")]),n("p",[t._v("Узлы могут запускаться по какому-либо событию в реальном времени (к этому моменту init уже будет вызван)")]),n("Code",{attrs:{source:"run_task"}}),n("p",[t._v("После выполнения метода worker выходные данные будут сохранены и использованы в дальнейших обращениях к этому узлу. Если узел должен подготовить новые данные, нужно очистить предыдущие.")]),n("Code",{attrs:{source:"reset_task"}}),t._m(0),n("Code",{attrs:{source:"worker"}}),n("p",[t._v("Здесь возвращается объект с ключами (в отличии от обычной схемы), которые совпадают с выходами, тип которых является 'output'")])],1)},s=[function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("p",[t._v("Метод "),n("i",[t._v("worker ")]),n("span",[t._v("должен выглядеть следующим образом")])])}],i=n("2877"),u=function(t){t.options.code||(t.options.code={}),t.options.code["install"]="import TaskPlugin from 'rete-task-plugin';\n\neditor.use(TaskPlugin);"},c=u,p=function(t){t.options.code||(t.options.code={}),t.options.code["contruct"]="this.task = {\n  // <output key>:<type>\n  outputs: {\n    num1: 'option', // тип для передачи управления\n    num2: 'output' // тип для передачи данных\n  },\n  init(task) {  // вызывается при инициализации всех тасков (при engine.process())\n    initialTask = task; // таск может быть сохранен для его отложенного запуска\n  }\n}"},r=p,a=function(t){t.options.code||(t.options.code={}),t.options.code["run_task"]="// например, вызывается по клику на кнопку для старта обработки\ninitialTask.run('any data');"},d=a,l=function(t){t.options.code||(t.options.code={}),t.options.code["reset_task"]="task.reset(); // очистить выходные данные, которые были сохранены ранее"},f=l,k=function(t){t.options.code||(t.options.code={}),t.options.code["worker"]="worker(node, inputs, data) { // data это 'any data' из run()\n  this.closed = ['num1']; // предотвращает переход к выходному таску, который соединен с текущим через первый 'option' сокет\n  \n  return {\n    num2: data // возвращает выходные данные\n  }\n}"},_=k,v={},m=Object(i["a"])(v,e,s,!1,null,null,null);"function"===typeof c&&c(m),"function"===typeof r&&r(m),"function"===typeof d&&d(m),"function"===typeof f&&f(m),"function"===typeof _&&_(m);o["default"]=m.exports}}]);