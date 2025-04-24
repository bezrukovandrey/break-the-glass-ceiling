<script>
  // State to manage modal visibility
  let isModalOpen = false;

  // Function to open the modal
  function openModal() {
      isModalOpen = true;
  }

  // Function to close the modal
  function closeModal() {
      isModalOpen = false;
  }
</script>

<div class="bg-darkPurple text-white flex flex-col items-center xl:flex-row">
  <div class="px-6 pt-8 lg:px-8 xl:w-1/2 sm:w-3/4 w-4/5">
      <div class="mx-auto max-w-2xl xl:py-32 py-16">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <button class="relative flex items-center whitespace-nowrap rounded-full px-3 py-1 text-s leading-6 ring-1 ring-white hover:ring-sandy cursor-pointer" on:click={openModal}>
                  Az Erasmus+ Program társfinanszírozása.
                  <div class="font-semibold">
                    <span aria-hidden="true">&nbsp;</span><span class="absolute inset-0" aria-hidden="true"></span>További információ <span aria-hidden="true">&rarr;</span>
                  </div>
                </button>
          </div>
          <div class="text-center">
              <h1 class="text-balance text-xl lg:text-xxl font-bold tracking-tight">Üdvözöljük a Break the Glass Ceiling projekt oldalunkon!</h1>
              <p class="mt-6 text-s lg:text-m leading-8">A fiatal nők felhatalmazására összpontosítunk.Ezt a célt átfogó kutatás, közzététel és a felhatalmazási folyamatot elősegítő eredmények, módszerek és bevált gyakorlatok terjesztése révén hajtják végre.</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                  <a href="/hu/about" class="rounded-md bg-lightPurple px-4 py-3 text-s font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Tudjon meg többet →</a>
              </div>
          </div>
      </div>
  </div>
  <div class="w-2/3 xl:w-1/2 relative overflow-hidden flex items-center max-xl:mb-10" style="aspect-ratio: 1;">
    <img src="/image13.jpg" alt="Poster" class="w-full h-full object-cover">
</div>

</div>

<!-- Modal -->
{#if isModalOpen}
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-sandy rounded-lg p-6 w-1/3 relative">
        <button on:click={closeModal} class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
      </button>
          <h2 class="text-lg font-bold">Erasmus+ Program</h2>
          <p class="mt-2 text-gray-800">Az Erasmus+ az EU programja az oktatás, a képzés, az ifjúság és a sport támogatására.A 2021-2027-es becslések szerint 26,2 milliárd euró költségvetéssel lehetőséget kínál a résztvevők millióinak számára, hogy tanuljanak, képzzenek, tapasztalatokat szerezzenek és önként jelentkezzenek külföldön.<p class="mt-2 text-gray-800">A 2021-2027-es program nagy hangsúlyt fektet a társadalmi befogadásra, a zöld és a digitális átmenetekre, és elősegíti a fiatalok demokratikus életben való részvételét.</p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://commission.europa.eu/education/set-projects-education-and-training/erasmus-funding-programme_en" class="rounded-md bg-lightPurple px-4 py-3 text-s font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Látogasson el az Erasmus+ weboldalra→</a>
            </div>
      </div>
  </div>
{/if}

  