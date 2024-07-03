<script setup></script>

<template>
  <main>
    <div class="container px-6 py-16 mx-auto">
      <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-3xl font-semibold text-gray-800 lg:text-4xl">
              Diagnostik Terdepan<br />
              memperbaiki masalah dengan akurasi <span class="text-[#b81818]">tinggi</span>
            </h1>

            <p class="mt-3 text-gray-600 dark:text-gray-400">
              Kami di Uwinfly mengerti pentingnya kinerja optimal dan keandalan motor listrik Anda.
              Oleh karena itu, kami mempersembahkan Pusat Layanan Resmi Uwinfly, di mana kualitas
              dan keahlian kami memastikan kendaraan Anda selalu dalam kondisi prima.
            </p>
            <router-link to="/diagnose">
              <button
                class="w-full px-5 py-2 mt-6 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-[#b81818] rounded-lg lg:w-auto hover:bg-[#ff2121] focus:outline-none focus:bg-[#ff2121]"
              >
                Diagnosa
              </button></router-link
            >
          </div>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <img
            class="w-full h-full lg:max-w-3xl"
            src="../assets/png/eletric.png"
            alt="Catalogue-pana.svg"
          />
        </div>
      </div>
    </div>
  </main>
</template>
