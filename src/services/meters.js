/* eslint-disable */
import loopback from '@/services/loopback';
import modelObject from '@/services/lb-services';

modelObject.setModel('Meters');

let meters = Object.assign({}, {

    relation: '',

    getOwnerCompany(meter_id) {
        return loopback.post(`/Meters/getOwnerCompany`, meter_id);
    },

    getReadingsByFilter(meter_id, filter) {
        return loopback.post('/Meters/getReadingsByFilter', {id: meter_id, filter: `${filter}`});
    },

    getDeviceInfo(id) {
        return loopback.post(`/Meters/getDeviceInfo`, {id: id});
    },

    deviceVariables(id) {
        return loopback.post(`/Meters/deviceVariables`, {id: id});
    },

    getActivesAssigned(companyId) {
        return loopback.post('Meters/getActivesAssigned', {companyId: companyId});
    }

}, modelObject);

export default meters;
