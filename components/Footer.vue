<template>
  <div id="sectionFooter">
    <div class="logoWrapper">
      <div id="areaLogo-PRIMe">
        <a href="https://www.tuat.ac.jp/"
          ><img
            id="imageLogo-PRIMe"
            alt="TUAT"
            src="~/assets/images/logoTUAT.png"
        /></a>
      </div>
      <div id="areaLogo-RIKEN">
        <a href="http://www.yokohama.riken.jp/english/"
          ><img
            id="imageLogo-RIKEN"
            alt="RIKEN"
            src="~/assets/images/logoRIKEN.gif"
        /></a>
      </div>
      <div id="areaLogo-PRIMe">
        <a href="http://prime.psc.riken.jp/"
          ><img
            id="imageLogo-PRIMe"
            alt="PRIMe"
            src="~/assets/images/logoPRIMe.png"
        /></a>
      </div>
    </div>
    <div class="organizationInfo">
      <div>
        Tokyo University of Agriculture and Technology (TUAT) : Organization for
        Promotion of Tenure-track System, Department of Systems Biology
        <address>2-24-16 Nakamachi, Koganei, Tokyo 184-8588, Japan</address>
      </div>
      <div>
        <a rel="license" href="https://creativecommons.org/licenses/by/4.0/"
          ><img
            id="imageLogo-CCL"
            alt="Creative Commons License"
            src="~/assets/images/88x31.png"
        /></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
#sectionFooter {
  margin-top: 2em;
  margin-bottom: 0.5em;
  width: 100%;
  height: 160px;
  font-size: 93%;
}

.logoWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.organizationInfo {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  font-size: 12px;
  padding: 0 20px;
}

#areaLogo-RIKEN {
  padding-right: 1.5em;
  max-width: 62px;
}

#imageLogo-RIKEN {
  width: 100%;
  height: auto;
}

#areaLogo-CSRS {
  padding-right: 1.5em;
  max-width: 111.3px;
}

#imageLogo-CSRS {
  width: 100%;
  height: auto;
}

#areaLogo-PRIMe {
  padding-right: 1.5em;
  max-width: 215.5px;
}

#imageLogo-PRIMe {
  width: 100%;
  height: auto;
}

#imageLogo-CCL {
  margin-right: 2.5em;
  margin-left: 2.5em;
  width: 88px;
  height: 31px;
}
</style>