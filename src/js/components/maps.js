ymaps.ready(init);
function init(){
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [42.874232, 74.618056],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16,
    controls: [],
  });
  var myPlacemark = new ymaps.Placemark([42.874232, 74.618056], {}, {
    preset: 'islands#blackDotIcon'
  });
  myMap.geoObjects.add(myPlacemark);
}

