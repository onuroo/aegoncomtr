<script>
    import { _ } from 'svelte-i18n';
    const data = [
        {
            story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius a sem vel mollis. Ut finibus tincidunt felis sed consequat. Sed porttitor",
            name: "Ahmet Turna",
            title: 'Doctor'
        },
        {
            story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius a sem vel mollis. Ut finibus tincidunt felis sed consequat. Sed porttitor",
            name: "Selim Sezer",
            title: 'Makine Mühendisi'
        },
        {
            story: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius a sem vel mollis. Ut finibus tincidunt felis sed consequat. Sed porttitor",
            name: "Bade Harputlu",
            title: 'Finans Danışmanı'
        }
    ];
</script>

<div style="position: relative;padding: 8%; background-color: #E2EDEF;">
    <div class="d-flex flex-row justify-content-between align-items-center mb-3">
        <p class="title font-semibold m-0">Müşteri Hikayeleri</p>
        <div class="button">
            <p class="button_label">Tümünü gör</p>
        </div>
    </div>
    <p class="description font-light">Güvenli bir gelecek için Müşteri Danışmanlarımızla tanışın, yarınlarınızı dilediğiniz gibi şekillendirin.</p>
    <div class="d-flex flex-nowrap flex-md-wrap flex-lg-wrap flex-column flex-sm-column flex-md-row justify-content-center align-items-center justify-content-xxl-between">
        {#each data as data_item}
            <div class="mt-4 card_item_container">
                <p>{data_item.story}</p>
                <div class="mt-5" style="padding: 4%; border-radius: 15px;background-color: rgba(230, 239, 239, 0.3)">
                    <div class="d-flex flex-row align-items-center" >
                        <div class="avatar"></div>
                        <div style="height: 50px; margin-left: 5%">
                            <p class="font-medium p-black" style="margin: 0">{data_item.name}</p>
                            <p class="font-light p-black" style="opacity: 0.7; font-size: calc(0.7rem);">{data_item.title}</p>
                        </div>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
<div class="d-flex flex-column justify-content-center align-items-center" style="padding: 8%">
    <div class="d-flex justify-content-center align-items-start">
        <div>
            <img src="assets/img/quotes.png" style="width: 60%" alt="...">
        </div>
        <p class="font-medium" style="width: 55%;font-size: 1.4rem;letter-spacing: -1px;">
            Aegon Hayat Sigortası ile hem kendimin hem ailemin geleceğini güvence altına aldım. Artık yarınlara güvenle bakıyorum.
        </p>
    </div>
    <div class="d-flex flex-row align-items-center" style="padding: 4%; min-width: 50%;;margin-top: 4%" >
        <div class="avatar" style="padding: 25px;margin-right: 10px"></div>
        <div style="height: 50px; margin-left: 5%">
            <p class="font-medium p-black" style="margin: 0; width: max-content;">SELİN TEMELLİ</p>
            <p class="font-light p-black" style="opacity: 0.7; font-size: calc(0.8rem);">Avukat</p>
        </div>
    </div>
</div>
<img src="assets/img/main_page/customer_stories_vector.png" class="w-100" style="object-fit: contain" alt="...">

<style>
  .title {
    font-size: 2rem;
  }
  .description {
    font-size: 0.9rem;
    width: 50vw;
    opacity: 0.7;
  }
  .card_item_container {
    margin: 1%;
    min-width: 250px;
    max-width: 25vw;
    background-color: white;
    padding:1.9rem;
    box-shadow: 0px 54px 100px #D2DFDF;
    border-radius: 15px;
  }
  .button {
    width: 12rem;
    height: 3rem;
    border: 1px solid #E2000F;
    border-radius: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .button_label {
    color: #E2000F;
    font-size: 0.9rem;
    margin: 0;
  }
  .avatar {
    height: 50px;
    width: 50px;
    border-radius: 25px;
    background-color: #E2000F;
  }
  
  @media (max-width: 992px) {
    .card_item_container {
        min-width: 350px;
        max-width: 350px;
    }
  }
  @media (max-width: 767.98px) {
    .description {
        width: 90vw;
    }
    .card_item_container {
        max-width: 90%;
        min-width: 90%;
    }
  }
</style>