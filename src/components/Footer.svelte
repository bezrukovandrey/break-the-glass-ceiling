<script>
  import { language } from '../store';

  let message;

  
  $: {
    switch ($language) {
      case 'en':
        message = "Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.";
        break;
      case 'hu':
        message = "Az Európai Unió által finanszírozott projekt. A kifejtett nézetek és vélemények azonban kizárólag a szerző(k) véleményét tükrözik, és nem feltétlenül az Európai Unió vagy az Európai Oktatási és Kulturális Végrehajtó Ügynökség (EACEA) álláspontját. Az Európai Unió és az EACEA nem vonható felelősségre ezekért.";
        break;
      case 'gr':
        message = "Χρηματοδοτείται από την Ευρωπαϊκή Ένωση. Οι απόψεις και οι γνώμες που εκφράζονται είναι αποκλειστικά εκείνες των συγγραφέων και δεν αντικατοπτρίζουν απαραίτητα τις απόψεις της Ευρωπαϊκής Ένωσης ή της Ευρωπαϊκής Εκτελεστικής Υπηρεσίας Εκπαίδευσης και Πολιτισμού (EACEA). Ούτε η Ευρωπαϊκή Ένωση ούτε η EACEA μπορούν να θεωρηθούν υπεύθυνες για αυτές.";
        break;
        case 'tr':
        message = "Avrupa Birliği tarafından finanse edilmektedir. Bununla birlikte, ifade edilen görüşler ve görüşler yalnızca yazar(lar)ın görüşleridir ve mutlaka Avrupa Birliği veya Avrupa Eğitim ve Kültür Yürütme Ajansı (EACEA)inkileri yansıtmaz. Ne Avrupa Birliği ne de EACEA bunlardan sorumlu tutulamaz.";
        break;
        case 'ro':
        message = "Finanțat de Uniunea Europeană. Opiniile și opiniile exprimate sunt, totuși, doar cele ale autorului (autorilor) și nu reflectă neapărat cele ale Uniunii Europene sau ale Agenției Executive pentru Educație și Cultură (EACEA). Nici Uniunea Europeană, nici EACEA nu pot fi trase la răspundere pentru acestea.";
        break;
      
      default:
        message = "Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.";
    }
  }
</script>

<div class="bg-gray-900 text-white py-6">
  <div class="container mx-auto text-center text-xs my-4 px-4">
    {message}
  </div>
  <div class="flex justify-center">
    <img src="/eu_emblem.png" alt="Co-funded by the Erasmus+ programme of the European Union" class="w-1/2 sm:w-1/3 xl:w-1/4" />
  </div>
</div>


