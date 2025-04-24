<script>
    import { page } from "$app/stores";
    const storyId = $page.params.storyId;
    import Story from "../../../../components/hu/Story.svelte";
  </script>
  
  <Story {storyId} />