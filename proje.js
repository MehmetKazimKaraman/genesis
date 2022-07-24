
function addItem() {
    const a = document.getElementById("liste");
    const isimler = document.getElementById("name");
    const div = document.createElement("div");
    const itemContainer = document.createElement("div");
    const aktarButon = document.createElement("button");

    div.setAttribute('class',"liste");
    div.setAttribute('id', isimler.value);
    itemContainer.innerHTML = isimler.value;
    aktarButon.innerHTML = "Aktar";
    div.appendChild(itemContainer);
    div.appendChild(aktarButon);
    a.appendChild(div);

    // const array1 = [];
    // const map1 = array1.map(isimler.value);
    // console.log(map1);
    
    // const values  = document.createElement("div");
    // values.push(isimler.value);

    // var isimList = document.getElementById('isimler.value'),
    // li = document.createElement('li'),
    // clone;
    // forEach(function (isimler, index) {
    // clone = li.cloneNode();
    // clone.textContent = index + ': ' + isimler;
    // isimList.appendChild(clone);
    // });
}
const btn = document.getElementById('btnekle');
    btn.addEventListener('click', function handleClick(event) {
    event.preventDefault();
    const silme = document.getElementById('name');
    console.log(silme.value);
    silme.value = '';
});