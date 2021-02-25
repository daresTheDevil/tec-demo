<template>
  <div>
    <button
      v-if="colorIndex == 0"
      class="flex-shrink-0 p-1 ml-4 rounded-full text-gray-500 hover:text-yellow-600 dark:text-gray-200 dark:hover:text-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      @click="colorSwitch"
    >
      <span class="sr-only">Light Mode</span>
      <svg
        class="w-6 h-6"
        fill="none"
        alt="System Color"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        ></path>
      </svg>
    </button>
    <button
      v-if="colorIndex == 1"
      class="flex-shrink-0 dark:bg-gray-800 p-1 ml-4 rounded-full text-gray-500 hover:text-gray-600 dark:text-gray-200 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      @click="colorSwitch"
    >
      <span class="sr-only">Dark Mode</span>
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        alt="Light Mode"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        ></path>
      </svg>
    </button>
    <button
      v-if="colorIndex == 2"
      class="flex-shrink-0 dark:bg-gray-800 p-1 ml-4 rounded-full text-gray-500 hover:text-gray-600 dark:text-gray-200 dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      @click="colorSwitch"
    >
      <span class="sr-only">System Color</span>
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          alt="Dark Mode"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorIndex: 0,
      colors: ['system', 'light', 'dark'],
    }
  },
  methods: {
    colorSwitch() {
      if (this.colorIndex < 2) {
        this.colorIndex++
        this.$colorMode.preference = this.colors[this.colorIndex]
      } else {
        this.colorIndex = 0
        this.$colorMode.preference = this.colors[this.colorIndex]
      }
    },
  },
}
</script>
