<script>
    import { onMount } from 'svelte';
    import { supabase } from '../../lib/supabase';
    import { language } from '../../store';
    export let publicationId;

    let publication = null;

    $: langPrefix = $language ? `/${$language}` : '';

    async function fetchPublication() {
        const { data, error } = await supabase
            .from('publications')
            .select('*')
            .eq('id', publicationId)
            .single();

        if (error) {
            console.error('Error fetching publication:', error);
        } else {
            publication = data;
        }
    }

    onMount(fetchPublication);
</script>

{#if publication}
    <div class="bg-mainPurple text-white flex flex-col items-center py-10">
        <h1 class="text-xl lg:text-xxl font-bold tracking-tight mb-6">{publication.title}</h1>
        <img src={publication.image} alt={publication.title} class="w-2/3 max-h-96 mx-auto object-cover rounded-lg mb-6" />
        <div class="bg-sandy text-black w-2/3 p-6 rounded-lg shadow-lg">
            <p class="text-base mb-4">{publication.description}</p>
            <a href={`/publications`} 
               class="inline-block rounded-md bg-lightPurple px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                ← Back to Publications
            </a>
        </div>
    </div>
{:else}
    <div class="py-48 text-center text-white">Loading publication details...</div>
{/if}