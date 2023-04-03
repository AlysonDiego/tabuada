// function tabuada() {
//   let num = document.getElementById("txtn");
//   let tab = document.getElementById("seltab");

//   if (num.value.length == 0) {
//     alert("Por favor, digite um número");
//   } else {
//     let n = Number(num.value);
//     let c = 1;
//     tab.innerHTML = "";
//     while (c <= 10) {
//       let item = document.createElement("option");
//       item.text = `${n} X ${c} = ${n * c}`;
//       item.value = `tab${c}`;
//       tab.appendChild(item);
//       c++;
//     }
//   }
// }

function tabuada() {
  const num = document.getElementById("txtn").value.trim();
  const tab = document.getElementById("seltab");

  if (!num) {
    alert("Por favor, digite um número");
    return;
  }

  const n = Number(num);
  if (isNaN(n)) {
    alert("Por favor, digite um número válido");
    return;
  }

  tab.innerHTML = "";
  for (let c = 1; c <= 10; c++) {
    const item = document.createElement("option");
    item.text = `${n} X ${c} = ${n * c}`;
    item.value = `tab${c}`;
    tab.appendChild(item);
  }
}
