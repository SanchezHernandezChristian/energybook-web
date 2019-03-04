/* eslint-disable */
import loopback from '@/services/loopback';
import modelObject from '@/services/lb-services';

modelObject.setModel('Meters');

let meters = Object.assign({}, {

    relation: '',

    getConsumptionCostsByFilter(id, device, service, filter, interval, custom_dates) {
        return loopback.post('Meters/getConsumptionCostsByFilter', {id, device, service, filter, interval, custom_dates});
    },

    getNetCodeReadings(id, device, filter, variables, interval, custom_dates) {
        return loopback.post('Meters/getNetCodeReadings', {id, device, filter, variables, interval, custom_dates});
    },

    getDpReadingsByFilter(meter_id, device, service, filter, custom_dates) {
        return loopback.post('/Meters/getDpReadingsByFilter', {id: meter_id, device, service, filter, custom_dates});
    },

    getEpimpReadingsByFilter(meter_id, device, service, filter, interval, custom_dates) {
        return loopback.post('/Meters/getEpimpReadingsByFilter', {id: meter_id, device, service, filter, interval, custom_dates});
    },

    getDeviceInfo(id) {
        return loopback.post(`/Meters/getDeviceInfo`, {id: id});
    },

    deviceVariables(id) {
        return loopback.post(`/Meters/deviceVariables`, {id: id});
    },

    getActivesAssigned(companyId) {
        return loopback.post('Meters/getActivesAssigned', {companyId: companyId});
    },

    unassignedMeters(){
        return loopback.get('Meters/unassignedMeters');
    },

    connectedDevices(id) {
        return loopback.post('/Meters/connectedDevices', id);
    },

    consumptionMaxMinValues(id) {
        return loopback.post('/Meters/consumptionMaxMinValues', id);
    },

    updateDesignatedMeter({meter, services}) {
        return loopback.post('/Meters/updateDesignatedMeter', {meter, services});
    },

}, modelObject);

export default meters;
