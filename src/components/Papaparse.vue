<template >
<div >
<h3>Import csv</h3>
</div>
</template >

<script>
   import dataset from './../services/dataset.csv';

  export default {
    name: "Papaparse",
    data: function () {
      return {
        availability: {}
      }
    },
    methods: {
      readFile() {
        /* return first object in FileList */
        var file = dataset;
        this.$papa.parse(file, {
          header: true,
          complete: function (results) {
            this.availability = results.data;
            console.log(this.availability);
          }
        });
      }
    }
  }
</script>

<style scoped>

</style>