<script>
    import { page } from "$app/stores";
    const publicationId = $page.params.publicationId;
    import Publication from "../../../../components/gr/Publication.svelte";
  </script>
  
  <Publication {publicationId} />