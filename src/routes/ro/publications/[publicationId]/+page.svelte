<script>
    import { page } from "$app/stores";
    const publicationId = $page.params.publicationId;
    import Publication from "../../../../components/ro/Publication.svelte";
  </script>
  
  <Publication {publicationId} />