<template>
  <input
    type="text"
    :placeholder="placeholder"
    :value="modelValue"
    class="w-full text-lg font-normal focus:outline-none"
    @input="handleInput"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "",
    },
    // value: {
    //   type: String,
    //   required: true,
    // },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],

  // data() {
  //   return {
  //     value: "",
  //   };
  // },

  methods: {
    handleInput($event) {
      // this.value = $event.target.value;
      // this.$emit("handleInput", $event.target.value);
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
