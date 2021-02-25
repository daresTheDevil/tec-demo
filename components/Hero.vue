<template>
  <div class="bg-gray-50 dark:bg-gray-800">
    <template v-for="hero in heroes">
      <main
        class="mx-auto max-w-7xl px-4 py-16 sm:py-32"
        :key="hero.id"
        v-if="hero.Type == 'aside'"
      >
        <div class="mx-auto max-w-7xl">
          <div class="lg:grid lg:grid-cols-12 lg:gap-8">
            <div
              class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center"
            >
              <div>
                <a
                  v-if="hero.hiring"
                  href="#"
                  class="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                >
                  <span
                    class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full"
                    >We're hiring</span
                  >
                  <span class="ml-4 text-sm">Visit our careers page</span>
                  <!-- Heroicon name: solid/chevron-right -->
                  <svg
                    class="ml-2 w-5 h-5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
                <h1
                  class="mt-4 text-4xl tracking-tight font-extrabold text-gray-700 dark:text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl"
                >
                  <span class="md:block">{{ hero.Title }}</span>
                </h1>
                <p
                  class="mt-3 text-base text-gray-600 dark:text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                >
                  {{ hero.Text }}
                </p>
              </div>
            </div>
            <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6">
              <div
                class="bg-white relative sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden"
              >
                <img
                  class="h-full w-full object-cover"
                  :src="
                    'https://floating-wildwood-84086.herokuapp.com' +
                    hero.Image.url
                  "
                  alt="People working on laptops"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <main
        class="mx-auto max-w-7xl px-4 py-16 sm:py-32"
        :key="hero.id"
        v-if="hero.Type == 'text'"
      >
        <div class="text-center">
          <h1
            class="text-4xl tracking-tight font-extrabold text-gray-800 dark:text-gray-100 sm:text-5xl md:text-6xl"
          >
            <span class="block xl:inline">{{ hero.Title }}</span>
          </h1>
          <p
            class="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl"
          >
            {{ hero.Text }}
          </p>
          <div
            class="mt-5 max-w-screen-2xl mx-auto sm:flex sm:justify-center md:mt-8"
          >
            <div class="rounded-md shadow">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 dark:bg-purple-500 dark:hover:bg-purple-600 hover:bg-purple-900 md:py-4 md:text-lg md:px-10"
              >
                Business services
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 dark:bg-purple-500 dark:hover:bg-purple-600 hover:bg-purple-900 md:py-4 md:text-lg md:px-10"
              >
                Home services
              </a>
            </div>
            <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <a
                href="#"
                class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 dark:bg-purple-500 dark:hover:bg-purple-600 hover:bg-purple-900 md:py-4 md:text-lg md:px-10"
              >
                Pay your bill
              </a>
            </div>
          </div>
        </div>
      </main>
      <main class="w-full" :key="hero.id" v-if="hero.Type == 'full'">
        <div class="relative sm:overflow-hidden">
          <div class="absolute inset-0">
            <img
              class="h-full w-full object-cover"
              :src="
                'https://floating-wildwood-84086.herokuapp.com' + hero.Image.url
              "
              alt="People working on laptops"
            />
            <div
              class="absolute inset-0 bg-indigo-700"
              style="mix-blend-mode: multiply"
            ></div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <div class="w-full flex justify-center mb-4">
              <a
                v-if="hero.hiring"
                href="#"
                class="inline-flex mx-auto items-center text-white bg-gray-100 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
              >
                <span
                  class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-600 rounded-full"
                  >We're hiring</span
                >
                <span class="ml-4 text-sm text-gray-800"
                  >Visit our careers page</span
                >
                <!-- Heroicon name: solid/chevron-right -->
                <svg
                  class="ml-2 w-5 h-5 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <h1
              class="text-4xl tracking-tight font-extrabold text-white text-center sm:text-5xl md:text-6xl"
            >
              <span class="block xl:inline">{{ hero.Title }}</span>
            </h1>
            <p
              class="mt-6 max-w-lg mx-auto text-center text-xl text-gray-100 sm:max-w-3xl"
            >
              {{ hero.Text }}
            </p>
            <div
              class="mt-5 max-w-screen-2xl mx-auto sm:flex sm:justify-center md:mt-8"
            >
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-purple-100 dark:bg-purple-500 dark:hover:bg-purple-600 hover:bg-purple-900 md:py-4 md:text-lg md:px-10"
                >
                  Business services
                </a>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 dark:bg-purple-500 dark:hover:bg-purple-600 hover:bg-purple-900 md:py-4 md:text-lg md:px-10"
                >
                  Home services
                </a>
              </div>
              <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-800 dark:bg-purple-500 dark:hover:bg-purple-600 hover:bg-purple-900 md:py-4 md:text-lg md:px-10"
                >
                  Pay your bill
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroes: [],
      error: null,
    }
  },
  async mounted() {
    try {
      this.heroes = await this.$strapi.$heroes.find()
    } catch (error) {
      this.error = error
    }
  },
  methods: {},
}
</script>
