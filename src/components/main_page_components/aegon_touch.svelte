<script>
    import { _ } from 'svelte-i18n';
</script>
  
<div class="container_view">
    <div class="d-flex flex-row container" style="padding: 2%;margin: 5%; padding-right: 5%">
        <div class="col-7 d-flex flex-column justify-content-center align-items-center" style="padding-bottom: 15%">
            <div style="width: inherit">
                <p class="title font-semibold p-black">{$_('main_page.aegon_touch.title')}</p>
                <p class="text font-light p-black">{$_('main_page.aegon_touch.description')}</p>
                <div class="button">
                  <p class="button_label font-medium p-black">{$_('main_page.aegon_touch.button_label')}</p>
                </div>
            </div>
        </div>
        <div class="col-5">
            <img src="assets/img/main_page/aegon_touch.png" class="background_image w-100" alt="...">
        </div>
    </div>
</div>

<style>
  .container_view {
    background-color: white;
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
    width: 50vw;
    margin-bottom: 5%;
    font-size: 1.2rem;

  }
  .text {
    width: 30vw;
    font-size: 0.75rem;
    margin-bottom: 2%;
  }
  .button {
    width: 11rem;
    height: 40px;
    border: 1px solid #E2000F;
    border-radius: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-top: 12%;
  }
  .button_label {
    color: #E2000F;
    font-size: 0.7rem;
    margin: 0;
  }
</style>