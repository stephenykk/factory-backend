<template>
  <el-dialog
    v-model="visible"
    :title="(mode === 'create' ? '新建' : '编辑') + '原料'"
  >
    <el-form :model="formData" label-suffix=" :">
      <el-form-item label="名称" :label-width="100">
        <el-input v-model="formData.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="单价" :label-width="100">
        <el-input-number v-model="formData.cost" autocomplete="off" />
      </el-form-item>
    </el-form>

    <template #footer>
      <div class="dialog-footer">
        <el-button type="primary" @click="confirm">{{
          mode === "create" ? "创建" : "保存"
        }}</el-button>
        <el-button @click="hide">取消</el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";

const props = defineProps({
  mode: {
    type: String,
    default: "create", // create or edit
  },
});

const formData = reactive({ name: "", cost: 0 });
const visible = ref(false);

const show = (data: any) => {
  if (data) {
    Object.assign(formData, data);
  }
  visible.value = true;
};

const hide = () => {
  visible.value = false;
};

const confirm = () => {
    emit('confirm', formData)
    hide()
}

const emit = defineEmits(["confirm"]);

defineExpose({
  show,
  hide,
});
</script>
