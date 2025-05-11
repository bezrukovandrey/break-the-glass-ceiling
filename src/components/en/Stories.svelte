<script>
   import { language } from '../../store';
   import { onMount } from 'svelte';
  import { supabase } from '../../lib/supabase';
   $: langPrefix = $language ? `/${$language}` : '';
    
    let volunteers = [
    ];

    async function fetchStories() {
    let { data, error } = await supabase.from('stories').select('*');
    if (error) {
      console.error('Error fetching stories:', error);
    } else {
      volunteers = data;
    }
  }

  onMount(fetchStories);
  </script>
  
  
  
<div class="bg-gray-900 text-white flex flex-col">
    <h1 class="text-xl lg:text-xxl font-bold tracking-tight flex justify-center items-center my-10">Stories</h1>
  </div>
{#if volunteers.length > 0}
  <div class="bg-lightPurple text-white p-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each volunteers as volunteer}
        <div class="bg-darkPurple p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <h2 class="text-xl font-bold">{volunteer.name}, {volunteer.age}</h2>
          <p class="mt-2 text-gray-300">{volunteer.text}</p>
          <div class="mt-4 flex justify-center">
            <a href={`${langPrefix}/stories/${volunteer.id}`} class="rounded-md bg-lightPurple px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Read more →</a>
          </div>
        </div>
      {/each}
    </div>
  </div>
{:else }
<div class="py-48 text-center text-white bg-lightPurple">No stories at the moment</div>
{/if}

