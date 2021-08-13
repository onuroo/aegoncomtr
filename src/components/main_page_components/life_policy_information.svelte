<script>
    import { _ } from 'svelte-i18n';
</script>
  
<div class="container_view">
    <div class="d-flex flex-row container" style="padding: 2%;margin: 5%;">
        <div class="col-7">
            <img src="assets/img/main_page/life_policy_information.png" class="background_image w-100" alt="...">
        </div>
        <div class="col-5 d-flex flex-column justify-content-center">
            <p class="title font-semibold p-black">{$_('main_page.life_policy_information.title')}</p>
            <p class="text font-light p-black">{$_('main_page.life_policy_information.description')}</p>
            <div class="button">
              <p class="button_label font-regular p-black">{$_('main_page.life_policy_information.button_label')}</p>
            </div>
        </div>
    </div>
    <div class="bottom_view"></div>
    <img src="assets/img/main_page/life_policy_information_vector.png" class="background_image w-100" alt="...">
</div>

<style>
  .container_view {
    background-color: #E2EDEF;
    position: relative;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .background_image {
    object-fit: contain;
  }
  .title {
    margin-bottom: 5%;
    font-size: 1.2rem;
  }
  .text {
    width: 30vw;
    font-size: 0.75rem;
    margin-bottom: 2%;
  }
  .button {
    width: inherit;
    min-width: max-content;
    height: 40px;
    background-color: #E2000F;
    border-radius: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 5%;
    padding-left: 8%;
    padding-right: 8%;
  }
  .button_label {
    color: white;
    font-size: 0.7rem;
    margin: 0;
  }
  .bottom_view {
    position: absolute;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: white;
    z-index: 1;
  }
</style>