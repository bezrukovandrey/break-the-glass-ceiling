<script>
    import { page } from "$app/stores";
    const storyId = $page.params.storyId;
    import Story from "../../../../components/gr/Story.svelte";
  </script>
  
  <Story {storyId} />