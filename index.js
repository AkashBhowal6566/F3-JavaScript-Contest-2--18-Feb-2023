function getMenu() {
  fetch('https://free-food-menus-api-production.up.railway.app/burgers')
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);
      const menu = data.length;
      //   console.log(menu);

      let de = document.getElementById('main');

      for (let i = 0; i < menu; i++) {
        const c = data[i];
        // console.log(c.name);
        let d = document.createElement('span');
        d.innerHTML = `
      <div class="card" id="c" style="width: 18rem;">
      <img src="${c.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Name: ${c.name}</h5>
        <h6 class="card-title">ID: ${i.id}</h6>
        <p class="card-text">${c.dsc}</p>
        <h6 class="card-title">Price: ${c.price}</h6>
        <h6 class="card-title">Rate: ${c.rate}</h6>
        <h6 class="card-title">Country: ${c.country}</h6>
    </div></div>`;

        de.appendChild(d);
      }
    });
}

function takeOrder() {
  const o = {};
  for (let i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * 59);
    o[i] = r;
  }

  fetch('https://free-food-menus-api-production.up.railway.app/burgers')
    .then((response) => response.json())
    .then((data) => {
      let l = {};
      l[0] = data[o[0]].name;
      l[1] = data[o[1]].name;
      l[2] = data[o[2]].name;
      console.log(l);
    });

  setTimeout(() => {
    orderPrep();
  }, 2500);
}

getMenu();
takeOrder();

function orderPrep() {
  n = { order_status: true, paid: false };
  console.log(n);

  setTimeout(() => {
    payOrder();
  }, 1500);
}

function payOrder() {
  n = { order_status: true, paid: true };
  console.log(n);

  setTimeout(() => {
    thankYouFunc();
  }, 1000);
}

function thankYouFunc() {
  alert('Thank you for order');
}
