/* eslint-disable */
import Header from '@/app/components/header/Header.vue';
import companies from '@/services/companies';
import Table from '@/app/components/table/Table.vue';
import {gmapApi} from 'vue2-google-maps';

export default {
    components: {
        Header,Table
    },
    computed: {
        currentFormattedDate() {
            return moment(this.currentDate).format('dddd, MMMM Do YYYY');
        },
        google: gmapApi
    },
    beforeMount() {
        companies.find({}).then(res => {
            let companiesArr = res;
            companiesArr.forEach(company => {
                this.items.push({
                    'Nombre': company.company_name,
                    'Fecha de Registro': moment(company.created_at).format('LL')
                });
                this.getPosition(company.location);
            });
        });
    },
    data() {
        return {
            items: [],
            fields: [{
                key: 'Nombre',
                sortable: true
            }, 'Fecha de Registro'],
            markers: []
        };
    },
    methods: {
        getPosition(location) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode({
                "address": location
            }, results => {
                let latlng = results[0].geometry.location;
                this.markers.push({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                });
            });
        }
    }
};
