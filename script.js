var count = 1;

let imageDiv = document.getElementById("imageDiv");

function getData() {
  count++;
  // console.log(count);
  fetchData(count);
}
fetchData(count);

async function fetchData(count) {
  const api = "https://picsum.photos/v2/list?limit=15&page=" + count;
  let res = await fetch(api);
  let data = await res.json();
  
  console.log("data:", data);
  data.forEach(({download_url}) => {
    let div = document.createElement("div");
    div.setAttribute("class", "flex col-auto");
    div.innerHTML = `<div
            class="
              container
              bg-white
              shadow-lg
              transform
              transition
              duration-400
              ease-in-out
              hover:scale-105
              hover:shadow-lg
              h-max
            "
          >
            <img
              class="cursor-pointer"
              src=${download_url}
              alt="image not found"
              height=Math.random() * 200 + 100;
              width=Math.random() * 200 + 100;
            />
          </div>`;
    imageDiv.append(div);
  });
}


//infinite scroll

window.addEventListener("scroll", () => {
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight) {
    getData();
  }
});
