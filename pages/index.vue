<template>
  <div id="sectionMain" class="mainFrame">
    <!-- Logo -->
    <div class="container">
      <div class="row">
        <div class="col span_24">
          <div class="boxMainLogo">
            <img
              class="imgLogoScreen"
              src="~/assets/images/imagePhotoHome2.jpg"
            />
            <div class="labelLogo">
              <span class="iconAwesome">&#xf036;</span>システムバイオロジー分野
            </div>
            <div class="labelPhrase-jpn">
              生物学・化学・情報科学の融合研究による代謝オミクス科学
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col span_24">
          <div>
            <div class="labelLine-jpn">
              質量分析を軸としたオミクス科学により生命の代謝システムの解明を目指します。
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Research topic -->
    <div class="container">
      <div id="contensMsDial" class="row">
        <div class="col span_8">
          <div class="boxMenu">
            <div class="boxOrverwidth-left colorMsFinder"></div>
            <div class="boxContents-left">
              <a :href="contents[0].link"></a>
              <div class="labelMenuIcon">
                <img
                  class="imgIcon-Research"
                  src="~/assets/images/iconResearch.png"
                />
              </div>
              <div class="labelMenuTitle-Overview">{{ contents[0].title }}</div>
              <div class="labelMenuItem-Overview-jpn">
                {{ contents[0].description }}
              </div>
              <div class="labelButton">More</div>
            </div>
          </div>
        </div>
        <div class="col span_16">
          <div class="boxMenu">
            <div class="boxImage-right">
              <img
                class="imgScreen-right"
                src="~/assets/images/imagePhotoMsFinder.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Software -->
    <div class="container">
      <div id="contensMsFinder" class="row">
        <div class="col span_16">
          <div class="boxMenu">
            <div class="boxImage-left">
              <img
                class="imgScreen-left"
                src="~/assets/images/imagePhotoMsdial.jpg"
              />
            </div>
          </div>
        </div>
        <div class="col span_8">
          <div class="boxMenu">
            <div class="boxOrverwidth-right colorMsDial"></div>
            <div class="boxContents-right">
              <a
                :href="contents[1].link"
                target="_blank"
                rel="noopener"
              ></a>
              <div class="labelMenuIcon">
                <img
                  class="imgIcon-Msdial"
                  src="~/assets/images/iconMsdial.png"
                />
              </div>
              <div class="labelMenuTitle-Overview">{{ contents[1].title }}</div>
              <div class="labelMenuItem-Overview-jpn">
                {{ contents[1].description }}
              </div>
              <div class="labelButton">More</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- NEWS -->
    <div class="container">
      <div id="contensMrmprobs" class="row">
        <div class="col span_8">
          <div class="boxMenu">
            <div class="boxOrverwidth-left colorMrmprobs"></div>
            <div class="boxContents-left">
              <a :href="contents[2].link"></a>
              <div class="labelMenuIcon">
                <img class="imgIcon-News" src="~/assets/images/iconNews.png" />
              </div>
              <div class="labelMenuTitle-Overview">{{ contents[2].title }}</div>
              <div class="labelMenuItem-Overview-jpn">
                {{ contents[2].description }}
              </div>
              <div class="labelButton">More</div>
            </div>
          </div>
        </div>
        <div class="col span_16">
          <div class="boxMenu">
            <div class="boxImage-right">
              <img
                class="imgScreen-right"
                src="~/assets/images/imagePhotoMrmprobs.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Contact -->
    <div id="contact" class="container">
      <div class="row">
        <div class="col span_24">
          <div class="boxContact">
            <div class="labelMenuIcon">
              <span class="iconAwesome-Menu">&#xf2bd;</span>
            </div>
            <div class="labelMenuTitle">Contact</div>
            <div class="labelContact">
              <img src="~/assets/images/htsugawa.png" />
            </div>
            <div class="labelContact">{{ contact.name }}</div>
            <div class="labelContact">
              {{ contact.affiliation }}
              <span class="iconAwesome" >&#xf3c5;</span>
              {{ contact.address }}
            </div>
            <div class="labelContact">
              <span class="iconAwesome">&#xf199;</span>{{ contact.mail }}
            </div>
            <div class="labelContact">
              <span class="iconAwesome">&#xf879;</span>{{ contact.tel }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createClient } from '~/plugins/contentful.js'
const client = createClient()

export default {
  name: 'TopPage',
  async asyncData(ctx) {
    const { i18n } = ctx.app
    const localeMap = {
      ja: 'ja-JP',
      en: 'en-US',
    }
    return await client
      .getEntries({
        content_type: 'top',
        locale: localeMap[i18n.locale],
        limit: 1,
      })
      .then((data) => {
        return {
          contents: data.items[0].fields.contents.contents,
          contact: data.items[0].fields.contact
        }
      })
      .catch((error) => {
        console.error(error)
      })
  },
  head() {
    return {
      title: this.$t('top'),
    }
  },
}
</script>
