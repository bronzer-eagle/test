var td = document.getElementsByTagName("td");

for (var i = 6; i < td.length; i += 5) {
    var outHTML = td[i].outerHTML;
    td[i].innerHTML = '';
    td[i].innerHTML += "<a href='#openModal'>" + outHTML + "</a>";
    td[i].classList.add("hvr");
}


function getInform(row) {
    switch (row) {
        case "first":
            document.getElementById("modalInform").innerHTML = '<div class="inf" id="officeChair">' +
            ' <p>' +
            'Такое офисное кресло для руководителя, как Art Metal Furniture(AMF) Атлетик Пластик, имеет все необходимое,</p>' +
            '<p>' +
            'чтобы находясь в нем, пользователь чувствовал себя удобно и комфортно, и даже после длительного рабочего дня у него не</p>' +
            '<p>' +
            'возникло неприятных болевых ощущений в области сипы и шеи. Art Metal Furniture(AMF) Атлетик Пластик изготовлено из прочный и</p>' +
            '<p>' +
            'надежных материалов, обладающих высокой износоустойчивостью и способных выдерживать постоянную интенсивную эксплуатацию....</p>' +
            '</div>';
            break;

        case "second":
            document.getElementById("modalInform").innerHTML = '<div class="inf" id="lamp">' +
            '<p>Торшеры на длинных изящных ножках зрительно сделают любое помещение выше. Дизайнеры интерьера не преминут </p>' +

            '<p>воспользоваться торшером, если нужно &laquo;раздвинуть&raquo; стены, сделать помещение светлым, строгим. Торшер, кроме того, </span></p>' +

            '<p>прекрасный выбор для любителей читать по вечерам, сидя в мягком кресле. Уютный теплый свет, разгоняющий темноту,</p>' +

            '<p>изящный силуэт лампы, что еще нужно для счастья? Торшер может быть классическим &ndash; с одним плафоном, либо в </p>' +

            '<p>виде канделябра &ndash; от двух и более плафонов различных цветов. В каталоге вы можете найти не только традиционные </p>' +

            '<p>белые и розовые, плафоны, но и футуристические - стеклянные, стальные или даже экстравагантные черные, красные.</p>' +
            '</div>';
            break;
        case "third":
            document.getElementById("modalInform").innerHTML = '<div class="inf" id="lamp">' +
            '<p>Диван для детской Это наш второй диван который мы приобретаем в магазине &quot;Диваны для нирваны&quot; Первая евро-книжка была</p>' +

            '<p>производства фабрики &quot;Ливс&quot; на фотографии фабрики &quot;Катунь&quot;. Сравнивая отделку и качество обоих еще и с приобретенным лет 10</p>' +

            '<p>назад такого же формата диваном скажу, что качество безусловно ниже, хотя заметно изменилась и цена. Хотелось бы чтобы</p>' +

            '<p>внутренняя отделка ниши была бы оббита тканью (или выполнен из ламинированного ДСП (Как в &quot;Ливс&quot;), а не голой шлифовки), а ее</p>' +

            '<p>пол был сделан из более прочного материала чем уже прогнувшийся от детской руки двп 2мм. Полагаю эта новация не будет</p>' +

            '<p>дорогостоящей для производителя. Ножки полые внутри и не имеют &quot;пятки&quot;, что не дает возможности наклеить защиту для паркета. В</p>' +

            '<p>целом диваном довольны, хотя указанные мелочи наводят на мысль о том, что стоило доплатить 2600 грн. и выбрать фабрику лучше.</p>' +

            '<p>&nbsp;</p>' + '</div>';
            break;
    }

}

function changeInf(row) {
    switch (row) {
        case "first":
            td[7].innerHTML = "<input type='text' id='first' placeholder='Количество товаров'>" + "\n" + "<input type='submit' onclick='placeNumber(1)'>";
            break;
        case "second":
            td[12].innerHTML = "<input type='text' id='second' placeholder='Количество товаров'>" + "\n" + "<input type='submit' onclick='placeNumber(2)'>";
            break;
        case "third":
            td[17].innerHTML = "<input type='text' id='third' placeholder='Количество товаров'>" + "\n" + "<input type='submit' onclick='placeNumber(3)'>";
            break;
    }
}

function placeNumber(row) {
    if (row == 1) {
        var value = document.getElementById('first').value;
        td[7].innerHTML = value;
    }
    if (row == 2) {
        var value = document.getElementById('second').value;
        td[12].innerHTML = value;
    }
    if (row == 3) {
        var value = document.getElementById('third').value;
        td[17].innerHTML = value;
    }

}