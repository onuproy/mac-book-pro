//memory code
document.getElementById('8gbmemory').addEventListener('click',function(){
    macbookmemory.innerText = '0';
    update()
});
document.getElementById('16gbmemory').addEventListener('click',function(){
    macbookmemory.innerText = '180';
    update()
});
const macbookmemory = document.getElementById('mack-memory');

//storage code
document.getElementById('256gbstorage').addEventListener('click',function(){
    macbookstorage.innerText = '0';
    update()
});
document.getElementById('512gbstorage').addEventListener('click',function(){
    macbookstorage.innerText = '100';
    update()
});
document.getElementById('1tbstorage').addEventListener('click',function(){
    macbookstorage.innerText = '180';
    update()
});
const macbookstorage = document.getElementById('mack-storage');

//delivery code
document.getElementById('freedelivery').addEventListener('click',function(){
    delivery.innerText = '0';
    update()
});
document.getElementById('expressdelivery').addEventListener('click',function(){
    delivery.innerText = '20';
    update()
});
const delivery = document.getElementById('delivery-cost');

//update total code
const totalPrice = document.getElementById('total-price'); 
function update(){
    const mackBookMemory = parseFloat(macbookmemory.innerText);
    const mackBookStorage = parseFloat(macbookstorage.innerText);
    const deliveryCost = parseFloat(delivery.innerText);
    const mainPrice = 1299;
    const mackBookTotalPrice = mackBookMemory + mackBookStorage + deliveryCost + mainPrice;
    totalPrice.innerText = mackBookTotalPrice;
}
