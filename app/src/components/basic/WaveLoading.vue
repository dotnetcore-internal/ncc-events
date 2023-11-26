<script setup lang="ts">

</script>

<template>

  <div class="wave-loading">

    <div class="audio">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>

  </div>

</template>

<style scoped lang="css">
.wave-loading {
  @apply h-32;
  display: grid;
  place-items: center;
}

.audio {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  width: 60px;
  height: 40px;

  .wave {
    height: 40px;
    display: block;
    width: 10px;
    height: 6px;
    border-radius: 8px;
    background: orange;
  }
}

.audio {
  .wave {
    animation: audio-wave 2s ease-in-out infinite;

    &:nth-child(1) {
      animation-delay: 0.1s;
    }

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.3s;
    }

    &:nth-child(4) {
      animation-delay: 0.4s;
    }

    &:nth-child(5) {
      animation-delay: 0.5s;
    }
  }
}

@keyframes audio-wave {
  0% {
    height: 6px;
    transform: translateY(0px);
    background: #ff8e3a;
  }

  25% {
    height: 6px;
    transform: translateY(0px);
    background: #9c73f8;
  }

  50% {
    height: 30px;
    transform: translateY(-5px) scaleY(1.5);
    background: #ed509e;
  }

  75% {
    height: 6px;
    transform: translateY(0px);
    background: #9c73f8;
  }

  100% {
    height: 6px;
    transform: translateY(0px);
    background: #0fccce;
  }
}
</style>