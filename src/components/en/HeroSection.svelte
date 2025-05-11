<script>
import { language } from '../../store';
import { goto } from '$app/navigation';
$: langPrefix = $language ? `/${$language}` : '';

  
  let isModalOpen = false;

  
  function openModal() {
      isModalOpen = true;
  }

  
  function closeModal() {
      isModalOpen = false;
  }
</script>

<div class="bg-darkPurple text-white flex flex-col items-center xl:flex-row">
  <div class="px-6 pt-8 lg:px-8 xl:w-1/2 sm:w-3/4 w-4/5">
      <div class="mx-auto max-w-2xl xl:py-32 py-16">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
              <button class="relative flex items-center whitespace-nowrap rounded-full px-3 py-1 text-s leading-6 ring-1 ring-white hover:ring-sandy cursor-pointer" on:click={openModal}>
                  Co-funded by the Erasmus+ program. 
                  <div class="font-semibold">
                    <span aria-hidden="true">&nbsp;</span><span class="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span>
                  </div>
                </button>
          </div>
          <div class="text-center">
              <h1 class="text-balance text-xl lg:text-xxl font-bold tracking-tight">Welcome to our Break the Glass Ceiling Project Page!</h1>
              <p class="mt-6 text-s lg:text-m leading-8">We are focusing on empowering young women. This goal is pursued through comprehensive research, publication and dissemination of findings, methods and best practices that promote the empowerment process.</p>
              <p class="mt-6 text-s lg:text-m leading-8">This research focuses on empowering young women in European Solidarity Corps projects – so not just empowering any young women, but long-term volunteer women-, especially those from third countries. We want to highlight their specific needs because we believe the European Union does not pay enough attention to their participation. While there are opportunities available, there is often not enough financial support or other assistance.</p>
              <div class="mt-10 flex items-center justify-center gap-x-6">
                  <a href="#" on:click={() => { goto(`/about`); }} class="rounded-md bg-lightPurple px-4 py-3 text-s font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Learn more →</a>
              </div>
          </div>
      </div>
  </div>
  <div class="w-2/3 xl:w-1/2 relative overflow-hidden flex items-center max-xl:mb-10" style="aspect-ratio: 1;">
    <img src="/image13.jpg" alt="Poster" class="w-full h-full object-cover">
</div>

</div>


{#if isModalOpen}
  <div class="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div class="bg-sandy rounded-lg p-6 w-1/3 relative">
        <button on:click={closeModal} class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
      </button>
          <h2 class="text-lg font-bold">Erasmus+ Program</h2>
          <p class="mt-2 text-gray-800">Erasmus+ is the EU's programme to support education, training, youth and sport. With an estimated budget of €26.2 billion for 2021-2027, it provides opportunities for millions of participants to study, train, gain experience, and volunteer abroad.

            <p class="mt-2 text-gray-800">The 2021-2027 program emphasizes social inclusion, environmental and digital transitions, and youth engagement in democratic life. Research, including data from the "Break the Glass Ceiling" project, highlights the participation of women in volunteering and educational programs as a key factor for personal and professional development. 
              </p><p class="mt-2 text-gray-800">64% of participants in the European Solidarity Corps (ESC) program are women according to ESC reports for 2018/2019​. Additionally, women make up the majority of volunteers applying for programs like EVS and ESC​
              .</p>
              <p class="mt-2 text-gray-800">
              Sources:
              
              European Parliament Reports (2021, 2022)
              "Break the Glass Ceiling" Project Research, 2022-2-HU01-KA220-YOU-000101414</p>
              <p class="mt-2 text-gray-800"></p>
            <div class="mt-10 flex items-center justify-center gap-x-6">
              <a href="https://commission.europa.eu/education/set-projects-education-and-training/erasmus-funding-programme_en" class="rounded-md bg-lightPurple px-4 py-3 text-s font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Visit Erasmus+ website →</a>
            </div>
      </div>
  </div>
{/if}

  