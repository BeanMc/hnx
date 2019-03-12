function renderImage(content) {
  document.getElementById('content').innerHTML = content;
}

async function getGifUrl() {
  console.log("this is test======================");
  let tag = document.getElementById('tag').value;
  let url = 'https://api.giphy.com/v1/gifs/random?api_key=key_api_cua_ban&tag='+tag;
  let result = await fetch(url);
  let jsonResult = await result.json();
  return jsonResult.data;
  return `http://sds-cdn.viettelpost.vn/files/temp/2019/2/27/20190227101501.jpg`;
}

document.getElementById('getGif').addEventListener('click', async () => {
  alert($(".price-original-sku").text());
  console.log("this is test=====================dsa=");
  renderImage('<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>');
  // var imageData = await getGifUrl();
  var imageData = `http://sds-cdn.viettelpost.vn/files/temp/2019/2/27/20190227101501.jpg`;
  renderImage('<a href="' + imageData.url + '" target="_blank"><img class="image img-responsive img-rounded" src="' + imageData.fixed_height_small_url + '" /></a>');
});