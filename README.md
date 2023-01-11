<<<<<<< HEAD

# Shop

=======
[] добавить localstorage сохранение корзины
[] проверить редьюсеры на исходных код проекта.
[] если картинки не подгружаются обработать ошибки
[] Исправить формат ts на tsx при необходимости.
[] Сверить разметку с ресторанами.
[] Название с маленькой буквы.
[] Разница с импортом по дефолту или нет.
[] функция или константа (конст, чтобы избежать всплытия). Если использовать функцию, что у нас не отрисовывают данные полученные в результате useEffect
[] отдельно компоненты и элементы
[] fetch обернуть в try catch ?
[] надо посмотреть как передаются данные в дочерний компонент в проекте с флагами, сразу из сторы или через пропс из листа
[]как импортировать только один аргумент из кастомных хуков
[] https://morioh.com/p/d6c74251bb8e
[] промо на TS BESTDAYOFMONTH

//
useEffect(() => {
fetch(API_URL, {
headers: {
Authorization: API_KEY,
},
})
.then((response) => response.json())
.then((data) => {
console.log(data.featured);
});
}, []);

REACT_APP_API_KEY=55c1f62a-106479ac-8376eaf1-c90e6736

const API_KEY = process.env.REACT_APP_API_KEY;

const API_URL = 'https://fortniteapi.io/v1/shop?lang=en';

export { API_KEY, API_URL};

useEffect(() => {
dispatch(goodsLoading());
}, []);

> > > > > > > 7466bf6 (pure redux)
