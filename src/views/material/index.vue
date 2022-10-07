<template>
  <div class="material-page" v-loading="loading">
    <Form @search="(data) => handleSearch(data)" @create="showModal"/>
    <Table
      :tableData="pagingData"
      :total="total"
      v-model:current-page="currentPage"
      :pageSize="pageSize"
    />
    <EditModal ref="modalRef" @confirm="update" />
  </div>
</template>

<script setup lang="ts">
import Form from "./Form.vue";
import Table from "./Table.vue";
import EditModal from "./EditModal.vue";

import { tableData, mockQueryData } from "@/mock/data";

import { ref, watch, reactive } from "vue";
import { sleep } from "@/utils";

const currentPage = ref(1);
const pageSize = ref(3);
const total = ref(0);
const pagingData = ref([]);
const searching = reactive({});
const loading = ref(false);
const modalRef = ref();

const fetchData = async () => {
  loading.value = true;
  await sleep();
  const params = {
    ...searching,
    currentPage: currentPage.value,
    pageSize: pageSize.value,
  };
  console.log("🚀 ~ file: index.vue ~ line 24 ~ fetchData ~ params", params);
  const res = mockQueryData(params, tableData);
  pagingData.value = res.data;
  total.value = res.total;

  loading.value = false;
};

watch(currentPage, (newval) => {
  console.log("🚀 ~ file: index.vue ~ line 18 ~ watch ~ newval", newval);
  fetchData();
});

const handleSearch = (data: object) => {
  console.log("🚀 ~ file: index.vue ~ line 12 ~ handleSearch ~ data", data);
  Object.assign(searching, data);
  fetchData();
};

const showModal = (data?: object) => {
    if(!modalRef.value) return

    modalRef.value.show(data)
}

const update = (data) => {
    console.log("🚀 ~ file: index.vue ~ line 66 ~ update ~ data", data)
    
}
</script>
