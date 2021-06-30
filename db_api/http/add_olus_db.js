const response = require('../http/request');
EquipoTotal = require('../models/equipo_total').EquipoTotal;
EquipoParcial = require('../models/equipo_parcial').EquipoParcial;

function insertTotalValue(data) {
    let ids = data.devices.id;
    let parametros = "";
    let url = "";
    for (const iterator of ids) {
        parametros += `?var=${iterator}.EPimp`;

    };
    url = `http://pureplasticecg.dyndns-web.com/services/user/values.xml${parametros}`;
    response.getData(url).then((data) => {
        console.log("Request to:", url);
        for (const iterator of data.values.variable) {
            const equipo_total = new EquipoTotal({ id: iterator.id[0], value: iterator.value[0] });
            equipo_total.save().then(() => console.log("Inserted ID:", iterator.id[0], "Value:", iterator.value[0], "-- Ok --")).catch((e) => console.log('Error:', e));
        };
    }, (error) => {
        console.log(error);
    });
};

function insertPartialValue(data) {
    const fecha = new Date();
    let ids = data.devices.id;
    let parametros = "";
    let fecha_inicio = _date();
    let fecha_fin = _date();
    let periodo = 3600;
    let url = `http://pureplasticecg.dyndns-web.com/services/user/records.xml?begin=${fecha_inicio}?end=${fecha_fin}`;
    for (const iterator of ids) {
        parametros += `?var=${iterator}.EPimp`;

    };
    url += `${parametros}?period=${periodo}`;
    response.getData(url).then((data) => {
        console.log("Request to:", url);
        for (const iterator of data.recordGroup.record) {
            for (const item of iterator.field) {
                const equipo_parcial = new EquipoParcial({ id: item.id[0], value: item.value[0], datetime: iterator.dateTime[0] });
                equipo_parcial.save().then(() => console.log("Inserted ID:", item.id[0], "Value:", item.value[0], "DateTime:", iterator.dateTime[0], "-- Ok --")).catch((e) => console.log('Error:', e));
            }
        };
    }, (error) => {
        console.log(error);
    });
};

function _date() {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (month < 10) {
        return `${day}0${month}${year}`;
    } else if (day < 10) {
        return `0${day}${month}${year}`;
    } else {
        return `${day}${month}${year}`;
    }
}
module.exports = { insertTotalValue, insertPartialValue };