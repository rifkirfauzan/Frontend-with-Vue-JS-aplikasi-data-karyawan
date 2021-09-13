<template>
    <div class="karyawan">
        <div class="container mt-5">
            <div class="row justify-content-center">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            EDIT DATA KARYAWAN
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="KaryawanUpdate">

                                <div class="form-group">
                                    <label>NAMA KARYAWAN</label>
                                    <input type="text" class="form-control" v-model="karyawan.nama_karyawan"
                                           placeholder="Masukkan nama_karyawan">
                                    <div v-if="validation.nama_karyawan">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.nama_karyawan[0] }}
                                        </div>
                                    </div>
                                </div>
                
                                <div class="form-group">
                                    <label>NIP</label>
                                    <input type="number" class="form-control" v-model="karyawan.nip"
                                           placeholder="Masukkan nip">
                                    <div v-if="validation.nip">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.nip[0] }}
                                        </div>
                                    </div>
                                </div>

                                  <div class="form-group">
                                    <label>JABATAN</label>
                                    <input type="text" class="form-control" v-model="karyawan.jabatan"
                                           placeholder="Masukkan jabatan">
                                    <div v-if="validation.jabatan">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.jabatan[0] }}
                                        </div>
                                    </div>
                                </div>

                              <div class="form-group">
                                    <label>ALAMAT</label>
                                    <textarea class="form-control" v-model="karyawan.alamat" rows="5"
                                              placeholder="Masukkan alamat"></textarea>
                                    <div v-if="validation.alamat">
                                        <div class="alert alert-danger mt-1" role="alert">
                                            {{ validation.alamat[0] }}
                                        </div>
                                    </div>
                                </div>

                                

                                <div class="form-group">
                                    <button type="submit" class="btn btn-md btn-success mr-2">UPDATE</button>
                                    <button type="reset" class="btn btn-md btn-danger">RESET</button>
                                </div>

                            </form>
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
                karyawan: {},
                validation: []
            }
        },
        created() {
            axios.get(`http://localhost:8000/karyawan/${this.$route.params.id}`)
                .then((response) => {
                this.karyawan = response.data.data;
            });
        },
        methods: {
            KaryawanUpdate() {
                axios.put(`http://localhost:8000/karyawan/${this.$route.params.id}`, this.karyawan)
                    .then((response) => {
                        this.$router.push({
                            name: 'karyawan'
                        });
                        console.log(response);
                    }).catch(error => {
                    this.validation = error.response.data.data;
                });
            }
        }
    }
</script>