setInterval(() => {
  axios.post('http://localhost:3000/api/v1/questions',{}, {
    headers: {
      KL:$('#details_body> tbody >tr >td').eq(11).text(),
      TK:$('#details_body> tbody >tr >td').eq(21).text()
    },
  })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}, 998);