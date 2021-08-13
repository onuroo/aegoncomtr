<script>
    import { _ } from 'svelte-i18n';
    const data = [
        {
            text1: '175 Yıl', 
            text2: 'Tarihçe', 
            text3: 'Tam 175 yıldır Aegon ile güvendesiniz.', 
        },
        {
            text1: '1200Kişi', 
            text2: 'Çalışan', 
            text3: `Giderek büyüyen Aegon Ailesi'nde 1200 çalışanımızla yanınızdayız.`, 
        },
        {
            text1: '130Bin', 
            text2: 'Sigortalı', 
            text3: `Türkiye'de 130 bini aşkın sigortalımızın yanında olmaktan mutluluk duyuyoruz.`, 
        },
        {
            text1: '1Milyar TL', 
            text2: 'Prim Üretimi', 
            text3: `2020'de hayat sigortalarında 1.003.103.653 TL prim üretimi gerçekleştirdik.`, 
        }
    ]
</script>
  
<div style="position: relative;margin: 8%;display: flex;justify-content: space-between;">
    <p class="font-semibold p-black m-0 title">{$_('main_page.statistics.title')}</p>
    <img src="assets/img/main_page/statistics_image.jpg" class="background_image" alt="...">
    <div class="card_container d-flex flex-column" style=" padding: 3%;padding-top: 4%;padding-bottom: 4%">
        
        <div class="row justify-content-center flex-wrap" style="height: inherit;flex: 1">
            {#each data as data_item}
                <div class="col-6 d-flex">
                    <div class="d-flex col-4 flex-column" style="padding-right: 10px;">
                        <p class="font-semibold p-white info_text_top" >{data_item.text1}</p>
                        <p class="font-semibold p-white info_text_bottom" >{data_item.text2}</p>
                    </div>
                    <div class="d-flex col-8 flex-row">
                        <p class="font-light p-white info_detail_text">{data_item.text3}</p>
                    </div>
                </div>
            {/each}
        </div>
    </div>
</div>

<style>
  .background_image {
    border-radius: 10px;
    width: 40%;
    object-fit: contain;
    background: #C4C4C4;
    box-shadow: 0px 54px 100px rgba(10, 4, 60, 0.1);
  }
  .title {
    font-size: 3vw;
    width: 100px;
  }
  .card_container {
    position: absolute;
    height: 55%;
    width: 77%;
    right: 23%;
    top: 30%;
    z-index: 1;
    display: flex;
    background-color: #E2000F;
    border-radius: 15px;
  }
  .info_text_top {
    font-size: 1.8vw;
    margin: 0;
    line-height: 2.5vw;
  }
  .info_text_bottom {
    font-size: 1.2vw;
    margin: 0;
    
  }
  .info_detail_text {
    font-size: 0.8rem;
    width: 80%;
    opacity: 0.8;
  }
  @media (max-width: 992px) {
    .info_detail_text {
        font-size: 0.62rem;
    }
  }
  @media (max-width: 767.98px) {
    .info_detail_text {
        font-size: 0.5rem;
    }
  }
  @media (max-width: 575.98px) {
    .info_detail_text {
        font-size: 0.5rem;
    }
  }
  @media (max-width: 420px) {
    .info_detail_text {
        font-size: 0.25rem;
    }
  }
</style>