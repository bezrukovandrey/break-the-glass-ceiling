<script>
    import { page } from "$app/stores";
    const storyId = $page.params.storyId;
    import Story from "../../../../components/ro/Story.svelte";
  </script>
  
  <Story {storyId} />