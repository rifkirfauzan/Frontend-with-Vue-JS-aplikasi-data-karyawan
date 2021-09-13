<template>
    <div class="karyawan">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                           DATA KARYAWAN
                        </div>
                        <div class="card-body">
                            <router-link :class="['btn btn-md btn-success mb-2']" to="/create">TAMBAH DATA</router-link>
                            <hr>

                            <div class="table-responsive mt-2">
                                <table class="table table-hover table-bordered">
                                    <thead>
                                    <tr>
                                        <th>NAMA_KARYAWAN</th>
                                        <th>NIP</th>
                                        <th>JABATAN</th>
                                        <th>ALAMAT</th>
                                        <th>AKSI</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr v-for="karyawan in karyawan" :key="karyawan.id">
                                        <td>{{ karyawan.nama_karyawan }}</td>
                                        <td>{{ karyawan.nip }}</td>
                                        <td>{{ karyawan.jabatan }}</td>
                                        <td>{{ karyawan.alamat }}</td>
                                        <td class="text-center">
                                            <router-link :to="{name: 'edit', params: { id: karyawan.id }}" class="btn btn-sm btn-primary mr-2">EDIT</router-link>
                                            <button @click.prevent="KaryawanDelete(karyawan.id)" class="btn btn-sm btn-danger">HAPUS</button>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data() {
            return {
                karyawan: []
            }
        },
        created() {
            axios.get('http://localhost:8000/karyawan').then(response => {
                this.karyawan = response.data.data;
            });
        },
        methods: {
            KaryawanDelete(id)
            {
                axios.delete(`http://localhost:8000/karyawan/${id}`)
                    .then(response => {
                        this.karyawan.splice(this.karyawan.indexOf(id), 1);
                        console.log(response);
                    }).catch(error => {
                    console.log(error.response);
                });
            }
        }

    }
</script>