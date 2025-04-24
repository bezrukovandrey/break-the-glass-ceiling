<script>
    import { page } from "$app/stores";
    const publicationId = $page.params.publicationId;
    import Publication from "../../../components/en/Publication.svelte";
  </script>
  
  <Publication {publicationId} />