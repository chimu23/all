<script setup></script>

<template>
  <div
    class="border w-80 h-96 border-red-300 mx-auto absolute-middle-x top-1/3"
  >
    <div
      class="body border-2 border-black bg-white absolute-middle-x top-1/2 z-10"
    >
      <div class="face">
        <div class="eye">
          <div class="eye-in"></div>
        </div>
        <div class="eye-r">
          <div class="eye-in"></div>
        </div>
        <div class="blush"></div>
        <div class="blush-r"></div>
      </div>
      <div
        class="nose bg-black rounded-t-xl rounded-b-3xl w-4 h-3 top-20 absolute-middle-x"
      ></div>
      <div
        class="mouth absolute-middle-x w-8 h-5 bg-black top-28 -translate-y-3 rounded-b-full overflow-hidden"
      >
        <div
          class="w-full h-8 bg-red-600 absolute -translate-y-1 -bottom-5 left-0 right-0 rounded-full"
        ></div>
      </div>
      <span class="text-abc text-green-500 text-lg absolute-middle-x bottom-6"
        >绿迷</span
      >
    </div>
    <div
      class="ear bg-black rounded-t-full -z-10 left-14 top-20 absolute -rotate-45 translate-x-2"
    ></div>
    <div
      class="ear bg-black rounded-t-full -z-10 right-14 top-20 absolute rotate-45 -translate-x-2"
    ></div>
    <div class="hand top-1/2 left-2"></div>
    <div class="hand-r top-36 right-2"></div>
    <div class="footer bg-black absolute bottom-10 left-1/3 rounded-b-xl"></div>
    <div
      class="footer bg-black absolute bottom-10 right-1/3 rounded-b-xl"
    ></div>
  </div>
</template>
<style lang="scss" scoped>
@font-face {
  font-family: 'abc';
  src: url('@/assets/abc.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
.text-abc {
  font-family: 'abc';
}
.absolute-middle-x {
  @apply absolute -translate-x-1/2 left-1/2 -translate-y-1/2;
}
.body {
  width: 210px;
  height: 230px;
  border-radius: 50% 50% 44% 44% /50%;
}
.face {
  position: relative;
  width: 73%;
  height: 120px;
  border: 3px solid #000;
  border-radius: 50%;
  margin: 24px auto;
  box-shadow: 0 0 0 2px #b7f2ff, 0 0 0 4px #f52dd6, 0 0 0 7px #f4df74;
  .eye-info {
    width: 43px;
    height: 57px;
    border-radius: 66%;
    top: 18%;
    @apply bg-black absolute;
    .eye-in-info {
      width: 28px;
      height: 28px;
      @apply absolute rounded-full border-2 border-white;
    }
  }
  .eye {
    @extend .eye-info;
    left: 10%;
    transform: rotate(44deg);

    .eye-in {
      @extend .eye-in-info;
      top: 12%;
      left: 20%;
      &::before {
        content: '';
        @apply bg-white w-2.5 h-2.5 rounded-full absolute bottom-3 left-2.5;
      }
      &::after {
        content: '';
        @apply bg-white w-1 h-1 rounded-full absolute bottom-0 left-4 top-4;
      }
    }
  }
  .eye-r {
    @extend .eye-info;
    transform: rotate(-44deg);
    right: 10%;
    .eye-in {
      @extend .eye-in-info;
      top: 12%;
      left: 20%;
      &::before {
        content: '';
        @apply bg-white w-2.5 h-2.5 rounded-full absolute left-3.5 top-2.5;
      }
      &::after {
        content: '';
        @apply bg-white w-1 h-1 rounded-full absolute bottom-0 right-3 top-3 translate-y-1;
      }
    }
  }
  .blush {
    width: 0;
    height: 0;
    position: absolute;
    left: 21%;
    bottom: 30%;
    border-radius: 50%;
    box-shadow: 0 0 12px 12px rgba(220, 40, 34, 0.3);
  }
  .blush-r {
    width: 0;
    height: 0;
    position: absolute;
    right: 21%;
    bottom: 30%;
    border-radius: 50%;
    box-shadow: 0 0 12px 12px rgba(220, 40, 34, 0.3);
  }
}
.ear {
  width: 40px;
  height: 40px;
}
.footer {
  width: 46px;
  height: 60px;
  transform: translateY(-12px);
}
.hand-info {
  width: 100px;
  height: 43px;
  border-radius: 70%;
  @apply bg-black absolute;
}
.hand {
  @extend .hand-info;
  transform: rotate(306deg) translateX(12px);
}

.hand-r {
  @extend .hand-info;
  transform: rotate(298deg) translateX(-8px);
}
</style>
