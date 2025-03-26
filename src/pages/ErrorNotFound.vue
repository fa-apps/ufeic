<template>
  <div class="text-center flex flex-col justify-around h-screen w-full">
    <div class="text-7xl text-indigo-400">404</div>

    <div class="my-4 text-indigo-600">Oops. Nothing here...</div>
    <div>
      <RouterLink
        to="/"
        class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Home
      </RouterLink>
    </div>
  </div>
</template>
