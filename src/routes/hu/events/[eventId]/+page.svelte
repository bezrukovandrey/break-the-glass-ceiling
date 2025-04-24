<script>
    import { page } from "$app/stores";
    const eventId = $page.params.eventId;
    import Event from "../../../../components/hu/Event.svelte";
  </script>
  
  <Event {eventId} />