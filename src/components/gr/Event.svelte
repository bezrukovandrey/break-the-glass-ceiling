<script>
    import { onMount } from 'svelte';
    import { supabase } from '../../lib/supabase';
    import { language } from '../../store';
    export let eventId;

    let event = null;

    $: langPrefix = $language ? `/${$language}` : '';

    async function fetchEvent() {
        const { data, error } = await supabase
            .from('events')
            .select('*')
            .eq('id', eventId)
            .single();

        if (error) {
            console.error('Error fetching event:', error);
        } else {
            event = data;
        }
    }

    onMount(fetchEvent);
</script>

{#if event}
    <div class="bg-mainPurple text-white flex flex-col items-center py-10">
        <h1 class="text-xl lg:text-xxl font-bold tracking-tight mb-6">{event.title_gr}</h1>
        <img src={event.image} alt={event.title_gr} class="w-2/3 max-h-96 mx-auto object-cover rounded-lg mb-6" />
        <div class="bg-sandy text-black w-2/3 p-6 rounded-lg shadow-lg">
            <p class="text-base mb-4">{event.description_gr}</p>
            <a href={`/gr/events`} 
               class="inline-block rounded-md bg-lightPurple px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                ← Πίσω στις Εκδηλώσεις
            </a>
        </div>
    </div>
{:else}
    <div class="py-48 text-center text-white">Λεπτομέρειες συμβάντων φόρτωσης ...</div>
{/if}