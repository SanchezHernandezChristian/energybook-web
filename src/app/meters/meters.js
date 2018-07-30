/* eslint-disable */
import meters from '@/services/meters';
import Header from '@/app/components/header/Header.vue';
import Table from '@/app/components/table/Table.vue';
import Constants from '@/constants';

const meterActive = Constants.Meters.active;

export default {
    components: {
        Header, Table
    },
    data() {
        return {
            meters: [],
            items: [],
            fields: [{
                key: 'No. de Serie',
                sortable: true
            }, 'Fecha de Registro', 'Activo'],
        }
    },

    beforeMount() {
        this.getMeters();
    },

    methods: {
        getMeters() {
            meters.find({}).then(res => {
                this.meters = res;
                this.meters.forEach(meter => {
                    this.items.push({
                        'No. de Serie': meter.serial_number,
                        'Fecha de Registro': moment(meter.created_at).format('LL'),
                        'Activo': meterActive[meter.active]
                    });
                });
            });
        }
    }
}