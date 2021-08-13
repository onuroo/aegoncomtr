<script>

  import { _ } from 'svelte-i18n';

</script>

<style>
  .navbar .navbar-nav a {
    color: #1D263A;
    font-size: 15px;
  }

  .navbar_text {
    color: #1D263A;
    font-size: 15px;
  }

  .online_services_container {
    background-color: #E2000F;
    border-radius: 25px;
  }

  /* Prevent border after clicking menu icon */
  .navbar-toggler:focus,
  .navbar-toggler:active,
  .navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
  }

  /* Set item background after clicking item in dropdown menu. */
  .dropdown-menu li > a:hover, 
  .dropdown-menu li > a:focus {
    background-color: #FEF9F7;
  }
</style>

<nav class="navbar navbar-expand-lg bg-white navbar-light navbar-text">
  <div class="container-fluid py-4 px-4 px-lg-5 mx-xl-5">
    <div>
      LOGO
    </div>
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
        <li class="nav-item me-4">
          <a class="nav-link active" aria-current="page" href="#" >{$_('header.hakkimizda')}</a>
        </li>

        <li class="nav-item me-4 dropdown">
          <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside">
            {$_('header.urunler')}
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#" >Action</a></li>

            <!-- Multilevel dropdown menu -->
            <li class="dropend">
              <a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" data-bs-auto-close="outside">Another action</a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li class="dropend">
                  <a class="dropdown-item dropdown-toggle" data-bs-toggle="dropdown" >Another action</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                  </ul>
                </li>
              </ul>
            </li>

            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>

        <li class="nav-item me-4">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">{$_('header.iletisim')}</a>
        </li>

        <li class="nav-item me-4">
          <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">{$_('header.kariyer')}</a>
        </li>

        <li class="nav-item me-4 d-flex align-items-center d-none d-lg-flex">
          <div style="cursor: pointer">
            <img class="icon navbar-toggler-open" style="width: 15px;object-fit: contain;" src="assets/img/search/search.png" alt="menu interface icon" />
          </div>
        </li>

        <li class="nav-item me-4 ms-2 d-flex">
            <button class="btn online_services_container d-flex flex-row align-items-center px-4">
              <span class="navbar_text" style="color: white">{$_('header.online_hizmetler')}</span>
              <img class="icon navbar-toggler-open ms-4" style="width: 15px;object-fit: contain;" src="assets/img/dropdown_arrow/dropdown_arrow.png" alt="menu interface icon" />
            </button>
        </li>

      </ul>
    </div>
  </div>
</nav>