<script>
  import { _ } from 'svelte-i18n';

  const data = [
    {
      date: 'Nisan 19, 2021',
      title: 'Aegon ile TURK Finansman İş Birliği',
      image: 'assets/img/main_page/haberler_1.png',
    },
    {
      date: 'Nisan 19, 2021',
      title: 'Çağrı Merkezimize Ödül',
      image: 'assets/img/main_page/haberler_2.png'
    },
    {
      date: 'Nisan 19, 2021',
      title: '2020 Yılında Yüzde 39 Büyüdük',
      image: 'assets/img/main_page/haberler_3.png'
    },
    {
      date: 'Nisan 19, 2021',
      title: 'Aegon ile TURK Finansman İş Birliği',
      image: 'assets/img/main_page/haberler_4.png',
    },
    {
      date: 'Nisan 19, 2021',
      title: 'Çağrı Merkezimize Ödül',
      image: 'assets/img/main_page/haberler_5.png'
    },
    {
      date: 'Nisan 19, 2021',
      title: '2020 Yılında Yüzde 39 Büyüdük',
      image: 'assets/img/main_page/haberler_6.png'
    },
    {
      date: 'Nisan 19, 2021',
      title: 'Aegon ile TURK Finansman İş Birliği',
      image: 'assets/img/main_page/haberler_2.png',
    },
    {
      date: 'Nisan 19, 2021',
      title: 'Çağrı Merkezimize Ödül',
      image: 'assets/img/main_page/haberler_1.png'
    },
    {
      date: 'Nisan 19, 2021',
      title: '2020 Yılında Yüzde 39 Büyüdük',
      image: 'assets/img/main_page/haberler_3.png'
    }
  ]
</script>

<div class="container-fluid parent_container mw-100">
    <div class="column">
        <div class="row justify-content-between align-items-center mb-4">
            <div class="w-auto">
              <p class="font-semibold p-black title">{$_('main_page.featured_news.title')}</p>
            </div>
            <div class="row w-auto">
              <button class="carousel-control-prev prev_button jcarousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="" aria-hidden="true">
                  <img src="assets/img/left-arrow.png" class="arrow_icon" alt="" />
                </span>
                <span class="visually-hidden"></span>
              </button>
              <button class="carousel-control-next next_button jcarousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="" aria-hidden="true">
                  <img src="assets/img/right-arrow.png" class="arrow_icon" alt="" />
                </span>
                <span class="visually-hidden"></span>
              </button>
            </div>
        </div>
        <div class="col-12">
              <div class="wrapper">
                <div class="jcarousel-wrapper">
                    <div class="jcarousel">
                        <ul>
                          {#each data as data_item}
                            <li class="carousel_item">
                              <img class="carousel_img" src={data_item.image} alt="Image 1">
                              <p class="mt-4 font-semibold p-red" style="font-size:11px">{data_item.date}</p>
                              <p class="mt-4 font-semibold p-black data_title" >{data_item.title}</p>
                            </li>
                          {/each}
                        </ul>
                    </div>
                </div>
            </div>
                
        </div>
        <div class="button">
          <p class="button_label font-semibold">{$_('main_page.featured_news.see_all_news')}</p>
        </div>
    </div>
</div>


<style>
  .parent_container {
      background-color: rgba(250,215,200, 0.5);
      padding: 5%;
      padding-left: 10%;
      padding-right: 10%;
  }
  .next_button {
    justify-content: center;
    position: relative;
    height: 50px;
    width: 40px;
    margin-left: 3px;
  }
  .prev_button {
    justify-content: center;
    position: relative;
    height: 50px;
    width: 40px;
  }
  .arrow_icon {
    height: 18px;
    width: 18px;
  }
  .carousel_item {
    width: 0;
    margin-left: 6px;
    margin-right: 6px;
    border-radius: 15px;
    overflow: hidden;
  }
  .title {
    font-size: 2.4vw;
    width: 100%;
    margin: 0;
  }
  .data_title {
    font-size:1.4vw;
    width: 75%
  }
  .button {
    width: fit-content;
    /* width: inherit;
    min-width: max-content; */
    height: 40px;
    border: 1px solid #E2000F;
    border-radius: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin: auto;
    margin-top: 30px;
    padding-left: 8%;
    padding-right: 8%;
  }
  .button_label {
    color: #E2000F;
    font-size: 0.7rem;
    margin: 0;
  }

  @media (max-width: 767.98px) {
    .data_title {
      font-size: 1rem;
    }
    .title {
      font-size: 4vw;
    }
  }
  @media (max-width: 575.98px) {
    .data_title {
      font-size: 1rem;
    }
    .title {
      font-size: 4vw;
    }
  }

</style>