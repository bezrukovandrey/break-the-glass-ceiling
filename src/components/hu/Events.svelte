<script>
    import { language } from '../../store';
    import { onMount } from 'svelte';
    import { supabase } from '$lib/supabase';
    $: langPrefix = $language ? `/${$language}` : '';
   let currentSlide = 0;

   let events = [];

   async function fetchEvents() {
   let { data, error } = await supabase.from('events').select('*');
   if (error) {
     console.error('Error fetching events:', error);
   } else {
     events = data;
   }
 }

 onMount(fetchEvents);


   
   function nextSlide() {
     currentSlide = (currentSlide + 1) % events.length;
   }

   
   function prevSlide() {
     currentSlide = (currentSlide - 1 + events.length) % events.length;
   }
</script>

<div class="bg-gray-900 text-white flex flex-col">
   <h1 class="text-xl lg:text-xxl font-bold tracking-tight flex justify-center items-center my-10">Események</h1>
</div>

<div class="bg-lightPurple">
   {#if events.length > 0}
   <div class="relative flex justify-center items-center w-full max-w-4xl mx-auto overflow-hidden">
       
       <button 
           on:click={prevSlide} 
           class="absolute left-0 p-2 mx-2 rounded-full hover:bg-gray-800 focus:outline-none transition-opacity z-10"
           class:opacity-50={currentSlide === 0} 
           disabled={currentSlide === 0}
           style="transform: translateY(-50%); top: 50%;">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
           </svg>
       </button>

      
       <div class="flex w-full my-10 justify-center items-center">
           {#each events as event, index}
               <div class={`transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 absolute'}`}>
                   <img src={event.image} alt={event.title_hu} class="w-2/3 mx-auto object-cover rounded-t-lg" />
                   <div class="bg-sandy text-black w-2/3 p-4 rounded-b-lg shadow-lg mx-auto">
                       <h2 class="text-l lg:text-xl font-bold">{event.title_hu}</h2>
                       <p class="text-s mt-2">{event.description_hu}</p>
                       <div class="mt-4 flex items-center justify-center gap-x-6">
                           <a href={`${langPrefix}/events/${events[currentSlide].id}`} class="rounded-md bg-lightPurple px-4 py-2 text-s font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read more →</a>
                       </div>
                   </div>
               </div>
           {/each}
       </div>

       
       <button 
           on:click={nextSlide} 
           class="absolute right-0 p-2 mx-2 rounded-full hover:bg-gray-800 focus:outline-none transition-opacity"
           class:opacity-50={currentSlide === events.length - 1} 
           disabled={currentSlide === events.length - 1}
           style="transform: translateY(-50%); top: 50%;">
           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
           </svg>
       </button>
   </div>

  
   <div class="pb-6 flex justify-center gap-2">
       {#each events as _, index}
           <button 
               on:click={() => (currentSlide = index)} 
               class="w-3 h-3 rounded-full {currentSlide === index ? 'bg-indigo-500' : 'bg-gray-400'} transition-colors"></button>
       {/each}
   </div>
   {:else}
   <div class="py-48 text-center text-white">Jelenleg nincs esemény</div>
   {/if}
</div>

