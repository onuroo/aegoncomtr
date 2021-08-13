<script>
    import { _ } from 'svelte-i18n';
</script>
  
<div class="container_view">
    <img src="assets/img/main_page/aegon_direct_vector.png" class="background_image w-100" alt="...">

    <div class="d-flex flex-row container content_container" style="padding: 2%;margin: 5%; padding-right: 5%;margin-bottom: 0; padding-bottom: 0">
        <div class="col-7">
            <img src="assets/img/main_page/aegon_direct.png" class="background_image w-100" alt="...">
        </div>
        <div class="col-5 d-flex flex-column justify-content-center align-items-center" style="padding-bottom: 15%">
            <div style="width: inherit">
                <p class="title font-semibold p-black">{$_('main_page.aegon_direct.title')}</p>
                <p class="text font-light p-black">{$_('main_page.aegon_direct.description')}</p>
                <div class="d-none d-sm-block mt-4">
                  <div class="button ">
                    <p class="button_label font-medium p-black">{$_('main_page.aegon_direct.button_label')}</p>
                  </div>
                </div>
            </div>
        </div>
    </div>
    <div class="d-block d-sm-none pb-4">
      <div class="button">
        <p class="button_label font-medium p-black">{$_('main_page.aegon_direct.button_label')}</p>
      </div>
    </div>
</div>

<style>
  .container_view {
    background-color: #FCEBE3;
    position: relative;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content_container {
    padding: 8%;
  }
  .background_image {
    object-fit: contain;
  }
  .title {
    font-size: 1.2rem;
    margin-bottom: 5%;
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
    padding-left: 8%;
    padding-right: 8%;
  }
  .button_label {
    color: white;
    font-size: 0.7rem;
    margin: 0;
  }
</style>