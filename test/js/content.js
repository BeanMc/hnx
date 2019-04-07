setInterval(() => {
  axios.post('http://localhost:3000/api/v1/questions',{}, {
    headers: {
      HSI:$('body > div.js-rootresizer__contents > div.layout__area--center > div.chart-container.active > div.chart-container-border > div > table > tr:nth-child(1) > td.chart-markup-table.pane > div > div.pane-legend > div.pane-legend-line.pane-legend-wrap.main > div > span:nth-child(5) > span.pane-legend-item-value.pane-legend-item-value__main').text(),
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}, 998);