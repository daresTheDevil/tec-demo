<template>
  <div
    class="relative bg-gray-50 dark:bg-gray-800 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="relative max-w-7xl mx-auto">
      <div>
        <h2
          class="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-gray-100 sm:text-4xl"
        >
          TEC in the news
        </h2>
        <div
          class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"
        >
          <p class="text-xl text-gray-600 dark:text-gray-300">
            See what we're up to and add your Email to be notified of any news!
          </p>
          <form class="mt-6 flex flex-col sm:flex-row lg:mt-0 lg:justify-end">
            <div>
              <label for="email-address" class="sr-only">Email address</label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autocomplete="email"
                required
                class="appearance-none w-full px-4 py-2 border border-gray-300 text-base rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 lg:max-w-xs"
                placeholder="Enter your email"
              />
            </div>
            <div
              class="mt-2 flex-shrink-0 w-full flex rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto sm:inline-flex"
            >
              <button
                type="button"
                class="w-full bg-indigo-600 px-4 py-2 border border-transparent rounded-md flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto sm:inline-flex"
              >
                Notify me
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
      >
        <template v-for="post in posts">
          <div
            :key="post.id"
            class="flex flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <div class="flex-shrink-0">
              <img
                :src="'http://localhost:1337' + post.image.url"
                class="h-48 w-full object-cover"
              />
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm font-medium text-indigo-600">
                  <a href="#" class="hover:underline">{{ post.type }}</a>
                </p>
                <a href="#" class="block mt-2">
                  <p class="text-xl font-semibold text-gray-900">
                    {{ post.title }}
                  </p>
                  <p class="mt-3 text-base text-gray-500">
                    {{ post.leader }}
                  </p>
                </a>
              </div>
              <div class="mt-6 flex items-center">
                <div class="flex-shrink-0">
                  <a href="#">
                    <span class="sr-only">Daniela Metz</span>
                    <img
                      class="h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixqx=PrFMdmNz58&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </a>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-gray-900">
                    <a href="#" class="hover:underline"> Daniela Metz </a>
                  </p>
                  <div class="flex space-x-1 text-sm text-gray-500">
                    <time datetime="2020-02-12"> Feb 12, 2020 </time>
                    <span aria-hidden="true"> &middot; </span>
                    <span> 11 min read </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [],
      error: null,
    }
  },
  async mounted() {
    try {
      this.posts = await this.$strapi.$posts.find()
      console.log(this.posts)
    } catch (error) {
      this.error = error
    }
  },
  methods: {},
}
</script>
