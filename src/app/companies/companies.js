/* eslint-disable */
import companies from '@/services/companies';
import Header from '@/app/components/header/Header.vue';
import Table from '@/app/components/table/Table.vue';
import Constants from '@/constants';

const companyStatus = Constants.Companies.status

export default {
    components: {
        Header, Table
    },
    data() {
        return {
            companies: [],
            items: [],
            fields: [{
                key: 'Nombre',
                sortable: true
            }, 'Razón Social', 'No. de Empleados', 'Tipo', 'Estado']
        }
    },

    beforeMount() {
        this.getCompanies();
    },

    methods: {
        getCompanies() {
            companies.find({}).then(res => {
                this.companies = res;
                this.companies.forEach(company => {
                    this.items.push({
                        'Nombre': company.company_name,
                        'Razón Social': company.legal_name,
                        'No. de Empleados': company.size,
                        'Tipo': company.company_type,
                        'Estado': companyStatus[company.status]
                    })
                });
            });
        }
    }
}