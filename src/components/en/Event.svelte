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
        <h1 class="text-xl lg:text-xxl font-bold tracking-tight mb-6">{event.title}</h1>
        <img src={event.image} alt={event.title} class="w-2/3 max-h-96 mx-auto object-cover rounded-lg mb-6" />
        <div class="bg-sandy text-black w-2/3 p-6 rounded-lg shadow-lg">
            <p class="text-base mb-4">{event.description}</p>
            <a href={`/events`} 
               class="inline-block rounded-md bg-lightPurple px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                ← Back to Events
            </a>
        </div>
    </div>
{:else}
    <div class="py-48 text-center text-white">Loading event details...</div>
{/if}
