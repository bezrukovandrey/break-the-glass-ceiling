<script>
    import { onMount } from 'svelte';
    import { supabase } from '../../lib/supabase';
    import { language } from '../../store';
    export let storyId;

    let story = null;

    $: langPrefix = $language ? `/${$language}` : '';

    async function fetchStory() {
        const { data, error } = await supabase
            .from('stories')
            .select('*')
            .eq('id', storyId)
            .single();

        if (error) {
            console.error('Error fetching story:', error);
        } else {
            story = data;
        }
    }

    onMount(fetchStory);
</script>

{#if story}
    <div class="bg-mainPurple text-white flex flex-col items-center py-10">
        <h1 class="text-xl lg:text-xxl font-bold tracking-tight mb-6">{story.name}</h1>
        <img src={story.image} alt={story.name} class="w-2/3 max-h-96 mx-auto object-cover rounded-lg mb-6" />
        <div class="bg-sandy text-black w-2/3 p-6 rounded-lg shadow-lg">
            <p class="text-base mb-4">{story.text_ro}</p>
            <a href={`/ro/stories`} 
               class="inline-block rounded-md bg-lightPurple px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                ← Înapoi la povești
            </a>
        </div>
    </div>
{:else}
    <div class="py-48 text-center text-white">Încărcarea detaliilor istoricului ...</div>
{/if}