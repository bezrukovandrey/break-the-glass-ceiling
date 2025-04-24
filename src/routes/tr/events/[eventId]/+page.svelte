<script>
    import { page } from "$app/stores";
    const eventId = $page.params.eventId;
    import Event from "../../../../components/tr/Event.svelte";
  </script>
  
  <Event {eventId} />