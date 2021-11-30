"use strict";
class EnergiaSearcher {
    constructor() {
        this.urlApi = "https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=2021-11-29T12:00&end_date=2021-11-29T23:59&time_trunc=hour";
    }

    load() {
        $.ajax({
            dataType: "json",
            url: this.urlApi,
            method: "GET",
            success: function (data) {
//                $("p").text(JSON.stringify(data, null, 2));
                var strDatos = "<h1>Precios electricidad</h1>\n";
                var valores = data.included[0].attributes.values;
                for(let i =0; i<valores.length; i++)    {
                    $("table").append("<tr>\n\t<td>" + valores[i].datetime + "</td>\n<td>" + valores[i].value + "€/Mwh</td>\n</tr>");
                }
//                alert(valores);
            },
            error: function () {
                $("#error").remove();
                $("form").after("<p id='error'></p>");
                $("#error").html("Error en la obtención de la información de la API de <a href='hhttps://www.ree.es/es/apidatos'>RED Eléctrica de España</a>");
            }
        });
    }
}

var searcher = new EnergiaSearcher();