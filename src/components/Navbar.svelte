<script>
  import { onMount } from 'svelte';
  import { goto, afterNavigate } from '$app/navigation';
  import {mobileMenuVisible} from '../store';
  import { language } from '../store';



  let currentPath;
  let isMenuOpen = false;
  let isMenuOpen1 = false;
  let isLanguageMenuOpen = false;
let menuRef;
  let menuRef1; 
  let languageMenuRef;
  $: langPrefix = $language && $language !== 'en' ? `/${$language}` : '';


  $: navItems = {
    en: {
      aboutName: "About the project",
      partners: "Partners",
      about: [
        { label: "Summary", path: `/about` },
        { label: "Objectives", path: `/mission` },
        { label: "Target groups", path: `/target` },
        { label: "Contacts", path: `/contacts` },
      ],
      other: [
        { label: "Publications", path: `/publications` },
        { label: "Stories", path: `/stories` },
        { label: "Events", path: `/events` },
      ],
    },
    hu: {
      aboutName: "A projektről",
      partners: "Partnerek",
      about: [
        { label: "Összegzés", path: `${langPrefix}/about` },
        { label: "Célkitűzések", path: `${langPrefix}/mission` },
        { label: "Célcsoportok", path: `${langPrefix}/target` },
        { label: "Névjegyek", path: `${langPrefix}/contacts` },
      ],
      other: [
        { label: "Publikációk", path: `${langPrefix}/publications` },
        { label: "Történetek", path: `${langPrefix}/stories` },
        { label: "Események", path: `${langPrefix}/events` },
      ],
    },
    tr: {
      aboutName: "Proje hakkında",
      partners: "Ortaklar",
      about: [
        { label: "Özet", path: `${langPrefix}/about` },
        { label: "Objektif", path: `${langPrefix}/mission` },
        { label: "Hedef gruplar", path: `${langPrefix}/target` },
        { label: "Kontaklar", path: `${langPrefix}/contacts` },
      ],
      other: [
        { label: "Yayınlar", path: `${langPrefix}/publications` },
        { label: "Hikâye", path: `${langPrefix}/stories` },
        { label: "Olaylar", path: `${langPrefix}/events` },
      ],
    },
    ro: {
      aboutName: "Despre proiect",
      partners: "Parteneri",
      about: [
        { label: "Rezumat", path: `${langPrefix}/about` },
        { label: "Obiective", path: `${langPrefix}/mission` },
        { label: "Grupuri țintă", path: `${langPrefix}/target` },
        { label: "Contacte", path: `${langPrefix}/contacts` },
      ],
      other: [
        { label: "Publicații", path: `${langPrefix}/publications` },
        { label: "Povești", path: `${langPrefix}/stories` },
        { label: "Evenimente", path: `${langPrefix}/events` },
      ],
    },
    gr: {
      aboutName: "Σχετικά με το έργο",
      partners: "Συνεργάτες",
      about: [
        { label: "Περίληψη", path: `${langPrefix}/about` },
        { label: "Στόχοι", path: `${langPrefix}/mission` },
        { label: "Ομάδες στόχοι", path: `${langPrefix}/target` },
        { label: "Επαφές", path: `${langPrefix}/contacts` },
      ],
      other: [
        { label: "Εκδόσεις", path: `${langPrefix}/publications` },
        { label: "Ιστορίες", path: `${langPrefix}/stories` },
        { label: "Εκδηλώσεις", path: `${langPrefix}/events` },
      ],
    },
    // Add more languages as needed
  }[$language] || navItems.en; 

  onMount(() => {
    currentPath = location.pathname;

    
    afterNavigate(() => {
      isMenuOpen = false;
      isMenuOpen1 = false;
      isLanguageMenuOpen = false;
      mobileMenuVisible.set(false);
    });

    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  function toggleMenu() {
    if (!isMenuOpen1 && !isLanguageMenuOpen) {
        isMenuOpen = !isMenuOpen;
    } else {
        isMenuOpen = true;  // Keep the menu open
        isMenuOpen1 = false; // Close the other menu
        isLanguageMenuOpen = false; // Close language menu
    }
}

function toggleMenu1() {
    if (!isMenuOpen && !isLanguageMenuOpen) {
        isMenuOpen1 = !isMenuOpen1;
    } else {
        isMenuOpen1 = true;  // Keep the menu open
        isMenuOpen = false; // Close the other menu
        isLanguageMenuOpen = false; // Close language menu
    }
}

function toggleLanguageMenu() {
    if (!isMenuOpen && !isMenuOpen1) {
        isLanguageMenuOpen = !isLanguageMenuOpen;
    } else {
        isLanguageMenuOpen = true; // Keep the menu open
        isMenuOpen = false; // Close the other menu
        isMenuOpen1 = false; // Close other menu
    }
}


  function handleClickOutside(event) {
    if (
      menuRef1 && !menuRef1.contains(event.target) &&
      languageMenuRef && !languageMenuRef.contains(event.target)
    ) {
      isMenuOpen = false;
      isMenuOpen1 = false;
      isLanguageMenuOpen = false;
    }
  }

  function changeLanguage(newLang) {
  const pathWithoutLang = location.pathname.replace(/^\/(en|hu|tr|ro|gr)/, '');
  const newPath = newLang === 'en' ? '/' : `/${newLang}${pathWithoutLang}`;

  if (location.pathname !== newPath) {
    goto(newPath);
  } else {
    goto(newPath, { replaceState: true }); // Forces a re-render if already on the same page
  }

  language.set(newLang);
}
</script>

<div class="justify-between items-stretch bg-sandy self-stretch flex w-full px-12">
  <a href='#' on:click={() => { goto(`${langPrefix}` || '/', ); }}><img alt="Logo of Break the Glass Ceiling" src="/logo_dark.png" class={`aspect-auto object-contain ${$mobileMenuVisible ? 'hidden': ''} object-center overflow-hidden w-1/4`} /></a>
  
  <button on:click={() => mobileMenuVisible.update(v => !v)} class="xl:hidden flex items-center absolute right-6 top-6">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-darkPurple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  </button>

  <div class={`justify-between items-stretch self-center flex ${$mobileMenuVisible ? 'flex-col' : 'hidden'} gap-8 my-auto xl:flex xl:flex-row max-xl:my-8 max-xl:items-center max-xl:w-full`}>
    <div class="relative" bind:this={menuRef1}>
      <button on:click={toggleMenu1} class="flex items-center text-darkPurple text-s my-auto w-full font-poppins">
        {navItems.partners}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen1 ? "M19 15l-7-7-7 7" : "M19 9l-7 7-7-7"} />
        </svg>
    </button>
      
      <div class={`absolute z-10 left-0 mt-2 w-5/2 bg-sandy shadow-lg p-2 rounded-lg transform transition-all duration-300 ease-in-out ${isMenuOpen1 ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <a href="#" on:click={() => { goto(`${langPrefix}/partners/egyutthato`, ); }} class="block text-darkPurple text-s my-2">Együttható</a>
        <a href="#" on:click={() => { goto(`${langPrefix}/partners/nevoparudimos`, ); }} class="block text-darkPurple text-s my-2">Nevo Parudimos</a>
        <a href="#" on:click={() => { goto(`${langPrefix}/partners/usobalkans`, ); }} class="block text-darkPurple text-s my-2">US of Balkans</a>
        <a href="#" on:click={() => { goto(`${langPrefix}/partners/piyouth`, ); }} class="block text-darkPurple text-s my-2">Pi Youth Association</a>
      </div>
    </div>
    
    <div class="relative" bind:this={menuRef}>
      <button on:click={toggleMenu} class="flex items-center text-darkPurple text-s my-auto w-full font-poppins">
        {navItems.aboutName}
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={isMenuOpen ? "M19 15l-7-7-7 7" : "M19 9l-7 7-7-7"} />
        </svg>
    </button>
      
      <div class={`absolute z-10 left-0 mt-2 w-full bg-sandy shadow-lg p-2 rounded-lg transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        {#each navItems.about as item}
        <a href="#" on:click={() => { goto(item.path, ); }} class="block text-darkPurple text-s my-2">{item.label}</a>
      {/each}</div>
    </div>

    {#each navItems.other as item}
      <a href="#" on:click={() => { goto(item.path, ); }} class="text-darkPurple text-s my-auto">{item.label}</a>
    {/each}

    <div class="relative" bind:this={languageMenuRef}>
      <button on:click={toggleLanguageMenu} class="flex items-center text-darkPurple text-s my-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 0 20" />
        </svg>
      </button>

      <div class={`absolute z-10 left-1/2 -translate-x-1/2 mt-2 w-3/2 bg-sandy shadow-lg p-2 rounded-lg transform transition-all duration-300 ease-in-out ${isLanguageMenuOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
        <a href="#" class="block text-darkPurple text-s my-1" on:click={() => changeLanguage('en')}>EN</a>
        <a href="#" class="block text-darkPurple text-s my-1" on:click={() => changeLanguage('hu')}>HU</a>
        <a href="#" class="block text-darkPurple text-s my-1" on:click={() => changeLanguage('gr')}>GR</a>
        <a href="#" class="block text-darkPurple text-s my-1" on:click={() => changeLanguage('ro')}>RO</a>
        <a href="#" class="block text-darkPurple text-s my-1" on:click={() => changeLanguage('tr')}>TR</a>
     </div>
    </div>
  </div>
  
</div>


