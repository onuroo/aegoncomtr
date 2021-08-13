<script>
    import { _ } from 'svelte-i18n';
    const data = [
        {
            image: 'assets/img/main_page/blog_1.png',
            title: 'Lorem İpsum Dolor Si Amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi accumsan, vulputate erat et, vehicula turpis.',
        },
        {
            image: 'assets/img/main_page/blog_2.png',
            title: 'Lorem İpsum Dolor Si Amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi accumsan, vulputate erat et, vehicula turpis.',
        },
        {
            image: 'assets/img/main_page/blog_3.png',
            title: 'Lorem İpsum Dolor Si Amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi accumsan, vulputate erat et, vehicula turpis.',
        },
        {
            image: 'assets/img/main_page/blog_4.png',
            title: 'Lorem İpsum Dolor Si Amet',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae mi accumsan, vulputate erat et, vehicula turpis.',
        },
    ]

    const array_left = [];
    const array_right = [];

    for (let i = 1; i < data.length + 1; i++) {
        if (i % 2 === 0) array_right.push(data[i - 1])
        else array_left.push(data[i - 1])
    }

</script>
  
<div class="d-flex flex-column justify-content-center align-items-center" style="padding: 8%">
    <div class="d-md-flex flex-row flex-sm-column flex-md-row align-self-start justify-content-between w-100">
        <div style="flex: 7">
            <p class="font-semibold p-black" style="font-size: 4vh">{$_('main_page.blog.title_1')}<br>
                {$_('main_page.blog.title_2')}</p>
        </div>
        <div style="flex: 1"></div>
        <div class="d-flex justify-content-center align-items-center" style="flex:7">
            <p class="font-light p-black" style="font-size: 0.75rem;width: 100%;">{$_('main_page.blog.description')}</p>
        </div>
    </div>
    <div class="d-flex flex-row justify-content-between" style="flex-direction: row;margin-top: 5%">
        <div class="d-flex flex-column justify-content-center align-items-center" style="height: fit-content; flex: 7">
            {#each array_left as data_item}
                <div style="padding: 0%; margin-bottom: 15%">
                    <img src={data_item.image} class="" style="border-radius: 10px; width: 100%;" alt="...">
                    <p class="font-semibold p-black title">{data_item.title}</p>
                    <p class="font-light p-black description">{data_item.description}</p>
                </div>
            {/each}
        </div>
        <div style="flex: 1"></div>
        <div class="d-flex flex-column justify-content-center align-items-center" style="height: fit-content; flex: 7">
            {#each array_right as data_item}
                <div style="padding: 0%; margin-bottom: 15%">
                    <img src={data_item.image} class="" style="border-radius: 10px; width: 100%;" alt="...">
                    <p class="font-semibold p-black title">{data_item.title}</p>
                    <p class="font-light p-black description">{data_item.description}</p>
                </div>
            {/each}
        </div>

    </div>
    <div class="button">
        <p class="button_label font-regular p-black">{$_('main_page.blog.button_label')}</p>
    </div>
</div>

<style>
  .title {
      font-size: 18px;
      margin-top: 5%;
  }
  .description {
      font-size: 13px;
      margin-top: 5%;
      width: 85%;
  }
  .button {
    width: 21vw;
    height: 4vw;
    background-color: #E2000F;
    border-radius: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .button_label {
    color: white;
    font-size: 1.1vw;
    margin: 0;
  }
</style>