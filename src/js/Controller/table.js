fetch("https://5efbdd57cf235d0016ad6e9c.mockapi.io/api/table/users")
    .then(response => {

        if (!response.ok) throw new Error('Erro ao executar requisição, status ' + response.status);
        return response.json().then(
            data => {
                // console.log(data); 
                if (data.length > 0) {
                    var temp = "";

                    data.forEach((e) => {
                        temp += "<tr>";
                        temp += "<td>" + e.id + "</td>";
                        temp += "<td>" + e.name + "</td>";
                        temp += "<td>" + e.cpfcnpj + "</td>";
                        temp += "<td>" + e.email + "</td>";
                        temp += "<td>" + e.latitude + "</td>";
                        temp += "<td>" + e.longitude + "</td></tr>";
                    })

                    document.getElementById("data").innerHTML = temp;
                }
            }
        )
    })
