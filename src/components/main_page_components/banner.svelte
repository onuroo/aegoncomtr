<script>
    import { _ } from 'svelte-i18n';
</script>
  
<div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    
    <div class="carousel-inner" style="">
      <div class="carousel-item active" style="position: relative">
        <img src="assets/img/main_page/banner_image.jpg" class="d-block w-100" alt="...">
        <div class="banner_detail">
          <p class="title font-semibold p-black">{$_('main_page.banner.title')}</p>
          <p class="text font-light p-black opacity-75">{$_('main_page.banner.description')}</p>
          <div class="button">
            <p class="button_label font-regular p-black">{$_('main_page.banner.button_label')}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="position-absolute bottom-0">
        <img src="assets/img/main_page/banner_vector.png" class="d-block w-100" alt="...">
    </div>
</div>

<style>
  .banner_detail {
    position: absolute;
    height: 100%;
    width: 80%;
    top: 0;
    display: flex;
    flex-direction: column;
    left: 10%;
    justify-content: center;
  }
  .title {
    width: 50vw;
    margin-bottom: 2%;
    font-size: 4.7vw;
    line-height: 6.5vw;
  }
  .text {
    width: 40vw;
    font-size: 0.75rem;
    margin-bottom: 2%;
  }
  .button {
    width: fit-content;
    height: 20px;
    background-color: #E2000F;
    border-radius: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding-top: 2%;
    padding-bottom: 2%;
    padding-left: 8%;
    padding-right: 8%;
    margin-top: 15px;
  }
  .button_label {
    color: white;
    font-size: 0.8rem;
    margin: 0;
  }
  @media (max-width: 420px) {
    .text {
      font-size: 0.55rem;
    }
    .button {
      margin-top: 8px;
    }
    .button_label {
      font-size: 0.4rem;
    }
  }
</style>