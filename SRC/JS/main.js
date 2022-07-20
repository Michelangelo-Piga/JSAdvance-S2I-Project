



let chiamataNumeroNews = 10;
var arrayDecino = [];
let arrayNews = [];
const afterLoadingNews = async () => {

  try {
    let idsResponse = await axios.get(
      "https://hacker-news.firebaseio.com/v0/newstories.json"
    );

    arrayNews = _.get(idsResponse, ["data"]);
    //console.log(arrayNews);
    // handle success

  } catch (errors) {
    alert(errors);
  }

  for (let i = 0; i < 10; i++) {
    try {
      let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${arrayNews[i]}.json`);
      // handle success

      arrayDecino = _.get(response, ["data", "title"]);

      console.log(arrayDecino);

    } catch (errors) {
      alert(errors);
    }
  }

}

afterLoadingNews();

const load = document.getElementById('btn_load');
load.addEventListener('click', async () => {
  chiamataNumeroNews += 10;

  //console.log(arrayNews);

  for (let i = chiamataNumeroNews; i < chiamataNumeroNews + 10; i++) {
    let newResponse = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${arrayNews[i]}.json`);

    // console.error(newResponse);

    let arrayVentino = _.get(newResponse, ["data"]);

    console.log(arrayVentino.title),
      console.log(arrayVentino.url),
      console.log(arrayVentino.time);

    let createCard = document.createElement('div');
    createCard.className = 'card';
    document.getElementById('elenco_news').appendChild(createCard);

    let createBody = document.createElement('div');
    createBody.className = 'card-body';
    createCard.appendChild(createBody);

    let createTitle = document.createElement('h5');
    createTitle.className = 'card-title';
    let t = document.createTextNode(arrayVentino.title);
    createTitle.appendChild(t);
    createBody.appendChild(createTitle);

    let createDate = document.createElement('h6');
    createDate.className = 'card-subtitle';

    let unixTimestamp = arrayVentino.time;
    let date = new Date(unixTimestamp * 1000);
    let x = document.createTextNode(date.getDate() +
      "/" + (date.getMonth() + 1) +
      "/" + date.getFullYear() +
      " " + date.getHours() +
      ":" + date.getMinutes() +
      ":" + date.getSeconds());

    createDate.appendChild(x);
    createBody.appendChild(createDate);


    let createLink = document.createElement('a');
    createLink.className = 'card-link';
    createLink.href = arrayVentino.url;
    let l = document.createTextNode('Link');
    createLink.appendChild(l);
    createBody.appendChild(createLink);



  }
  chiamataNumeroNews += 10;
  console.log(chiamataNumeroNews);
});