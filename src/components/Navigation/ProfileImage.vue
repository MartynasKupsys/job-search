<template>
  <img :src="imageLink" class="w-8 h-8 object-contain rounded-3xl" />
</template>

<script>
import image from "@/assets/PngItem_1030588.png";

export default {
  name: "ProfileImage",

  data() {
    return {
      imageLink: image,
    };
  },
};
</script>
