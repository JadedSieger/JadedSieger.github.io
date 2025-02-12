document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".chooselists a");
    const mainContainer = document.querySelector(".main");

    // Content Templates for each category
    const contentData = {
        "Hololive": `
            <table class="tabTitle1">
                  <tr>
                    <th class="Title1">
                      Hololive Talents:
                    </th>
                </table>
                <br>
                <br>
                <table class="pictureTable1">
                  </tr>
                  <tr>
                    <td class="MC">
                      <div class="zoom-container">
                        <a href="https://hololive.hololivepro.com/en/talents/mori-calliope/">
                          <img class="MoriCalliope" src="../Talents/MoriCalliope.png">
                          <br>
                          <p>Mori Calliope - Hololive English "Myth"</p>
                        </a>
                      </div>
                    </td>
                    <td class="HS">
                      <div class="zoom-container">
                        <a href="https://hololive.hololivepro.com/en/talents/hoshimachi-suisei/">
                          <img class="HoshimachiSuisei" src="../Talents/HoshimachiSuisei.png" alt="">
                          <br>
                          <p>Hoshimachi Suisei - Hololive Japan 0th Generation</p>
                        </a>
                      </div>
                    </td>
                    <td class="PP">
                      <div class="zoom-container">
                        <a href="https://hololive.hololivepro.com/en/talents/cecilia-immergreen/">
                          <img class="PipkinPippa" src="../TalentCatalog/Hololive/CeciliaGallery/Cecilia-Immergreen_pr-img_01.png" alt="">
                          <br>
                          <p>Cecilia Immergreen - Hololive English "Justice"</p>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="RP">
                      <div class="zoom-container">
                        <a href="https://hololive.hololivepro.com/en/talents/hiodoshi-ao/">
                          <img class="rinPenrose" src="./Hololive/AoGallery/Hiodoshi-Ao_pr-img_01_a-356x640.png" alt="">
                          <br>
                          <p>Hiodoshi Ao - Hololive DEV_IS "ReGLOSS"</p>
                        </a>
                      </div>
                    </td>
                    <td class="UP">
                      <div class="zoom-container">
                        <a href="https://hololive.hololivepro.com/en/talents/usada-pekora/">
                          <img class="UsadaPekora" src="../Talents/UsadaPekora.png" alt="">
                          <br>
                          <p>Usada Pekora - Hololive Japan 3rd Generation</p>
                        </a>
                      </div>
                    </td>
                    <td class="NR">
                      <div class="zoom-container">
                        <a href="https://hololive.hololivepro.com/en/talents/nerissa-ravencroft/">
                          <img class="NerissaRavencroft" src="../Talents/bg_Nerissa-Ravencroft_01.png" alt="">
                          <br>
                          <p>Nerissa Ravencroft - Hololive English "Advent"</p>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td class="OK">
                      <div class="zoom-container">
                        <a href="https://hololive.hololivepro.com/en/talents/ouro-kronii/">
                          <img class="rinPenrose" src="./Hololive/KroniiGallery/Ouro-Kronii_pr-img_01.png" alt="">
                          <br>
                          <p>Ouro Kronii - Hololive English "Promise"</p>
                        </a>
                      </div>
                    </td>
                    <td class="OK">
                      <div class="zoom-container">
                        <a href="https://hololive.hololivepro.com/en/talents/kureiji-ollie/">
                          <img class="rinPenrose" src="./Hololive/OllieGallery/Kureiji-Ollie_pr-img_01.png" alt="">
                          <br>
                          <p>Kureiji Ollie - Hololive Indonesia</p>
                        </a>
                      </div>
                    </td>
                    <td class="OK">
                      <div class="zoom-container">
                        <a href="https://hololive.hololivepro.com/en/talents/rindo-chihaya/">
                          <img class="rinPenrose" src="./Hololive/ChihayaGallery/Rindo-Chihaya_pr-img_01.png" alt="">
                          <br>
                          <p>Rindo Chihaya - Hololive DEV_IS "FLOW GLOW"</p>
                        </a>
                      </div>
                    </td>
                  </tr>
                </table>
        `,
        "Phase Connect": `
            <table class="tabTitle1">
              <tr>
                <th class="Title1">Phase Connect Talents:</th>
              </tr>
            </table>
            <br><br>
            <table class="pictureTable1">
              <tr>
                <td class="VS1">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-01-origins/">
                      <img src="../TalentCatalog/PhaseConnect/LiaGallery/Lia-New-Outfit.png">
                      <br>
                      <p>Ashelia Rinkou - Phase 01 "Origins"</p>
                    </a>
                  </div>
                </td>
                <td class="VS2">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-01-origins/">
                      <img src="../TalentCatalog/PhaseConnect/PippaGallery/Pippa.jpg">
                      <br>
                      <p>Pipkin Pippa - Phase 01 "Origins"</p>
                    </a>
                  </div>
                </td>
                <td class="VS3">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-01-origins/">
                      <img src="../TalentCatalog/PhaseConnect/TenmaGallery/tenma-3.jpg">
                      <br>
                      <p>Tenma Maemi - Phase 01 "Origins"</p>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="VS4">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-01-origins/">
                      <img src="../TalentCatalog/PhaseConnect/AiriGallery/Chisaka-Illust-Tachie.jpg">
                      <br>
                      <p>Chisaka Airi - Phase 02 "ALiAS"</p>
                    </a>
                  </div>
                </td>
                <td class="VS5">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-01-origins/">
                      <img src="../TalentCatalog/PhaseConnect/ShiinaGallery/Shiina-Illust-Tachie.jpg">
                      <br>
                      <p>Amanogawa Shiina - Phase 02 "ALiAS"</p>
                    </a>
                  </div>
                </td>
                <td class="VS6">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-01-origins/">
                      <img src="../TalentCatalog/PhaseConnect/RieGallery/Rie-Illust-Tachie-1500.jpg">
                      <br>
                      <p>Himemiya Rie - Phase 02 "ALiAS"</p>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="VS7">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-03-euphoria/">
                      <img src="../TalentCatalog/PhaseConnect/RuseGallery/Runie-KV_1000.png">
                      <br>
                      <p>Runie Ruse - Phase 03 "Euphoria"</p>
                    </a>
                  </div>
                </td>
                <td class="VS8">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-03-euphoria/">
                      <img src="../TalentCatalog/PhaseConnect/HinaGallery/Hina-KV.png">
                      <br>
                      <p>Hikanari Hina - Phase 03 "Euphoria"</p>
                    </a>
                  </div>
                </td>
                <td class="VS9">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-01-origins/">
                      <img src="../TalentCatalog/PhaseConnect/EimiGallery/Eimi-KV.png">
                      <br>
                      <p>Eimi Isami - Phase 03 "Euphoria"</p>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="VS10">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-03-euphoria/">
                      <img src="../TalentCatalog/PhaseConnect/LumiGallery/Lumi-Character-Illust.jpg">
                      <br>
                      <p>Kaneko Lumi - Phase Invaders</p>
                    </a>
                  </div>
                </td>
                <td class="VS11">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-03-euphoria/">
                      <img src="../TalentCatalog/PhaseConnect/AmaneGallery/Ember_Web.png">
                      <br>
                      <p>Ember Amane - Phase Invaders</p>
                    </a>
                  </div>
                </td>
                <td class="VS12">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-01-origins/">
                      <img src="../TalentCatalog/PhaseConnect/DizzyGallery/Dizzy_Web.png">
                      <br>
                      <p>Dizzy Dokuro - Phase Invaders</p>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="VS13">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-03-euphoria/">
                      <img src="../TalentCatalog/PhaseConnect/KannagiGallery/Loki1.png">
                      <br>
                      <p>Kannagi Loki - Phase JP - Kaleido</p>
                    </a>
                  </div>
                </td>
                <td class="VS14">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-03-euphoria/">
                      <img src="../TalentCatalog/PhaseConnect/YuuGallery/Yuu2.png">
                      <br>
                      <p>Ayase Yuu - Phase JP - Kaleido</p>
                    </a>
                  </div>
                </td>
                <td class="VS15">
                  <div class="zoom-container">
                    <a href="https://phase-connect.com/phase-01-origins/">
                      <img src="../TalentCatalog/PhaseConnect/ClaraGallery/Clara3-1.png">
                      <br>
                      <p>Kaminari Clara - Phase JP - Kaleido</p>
                    </a>
                  </div>
                </td>
              </tr>
            </table>
        `,
        "VShojo": `
            <table class="tabTitle1">
              <tr>
                <th class="Title1">VShojo Talents:</th>
              </tr>
            </table>
            <br><br>
            <table class="pictureTable1">
              <tr>
                <td class="VS1">
                  <div class="zoom-container">
                    <a href="https://www.vshojo.com">
                      <img src="../TalentCatalog/VShojo/AmaGallery/Multiverse_Monarch_-_Portrait.webp">
                      <br>
                      <p>AmaLee - VShojo EN</p>
                    </a>
                  </div>
                </td>
                <td class="VS2">
                  <div class="zoom-container">
                    <a href="https://www.vshojo.com">
                      <img src="../TalentCatalog/VShojo/IronGallery/Ironmouse_Portrait_04_2021.webp">
                      <br>
                      <p>Ironmouse - VShojo EN</p>
                    </a>
                  </div>
                </td>
                <td class="VS3">
                  <div class="zoom-container">
                    <a href="https://www.vshojo.com">
                      <img src="../TalentCatalog/VShojo/MataraGallery/Matara_Kan.webp">
                      <br>
                      <p>Matara Kan - VShojo EN</p>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="VS4">
                  <div class="zoom-container">
                    <a href="https://www.vshojo.com">
                      <img src="../TalentCatalog/VShojo/KsonGallery/Kson_-_Full_2d_body.webp">
                      <br>
                      <p>Kson - VShojo JP</p>
                    </a>
                  </div>
                </td>
                <td class="VS5">
                  <div class="zoom-container">
                    <a href="https://www.vshojo.com">
                      <img src="../TalentCatalog/VShojo/HenyaGallery/Henya_the_Genius_2D_Model.webp">
                      <br>
                      <p>Henya the Genius - VShojo JP</p>
                    </a>
                  </div>
                </td>
                <td class="VS6">
                  <div class="zoom-container">
                    <a href="https://www.vshojo.com">
                      <img src="../TalentCatalog/VShojo/HotaruGallery/drj7sy7mi31e1.png">
                      <br>
                      <p>Hotaru Akatsuki - VShojo JP</p>
                    </a>
                  </div>
                </td>
              </tr> 
            </table>
        `,
        "Independent": `
            <table class="tabTitle1">
              <tr>
                <th class="Title1">Independent VTubers:</th>
              </tr>
            </table>
            <br><br>
            <table class="pictureTable1">
              <tr>
                <td class="Indie1">
                  <div class="zoom-container">
                    <a href="./TalentProfiles/rinPenrose.html">
                        <img class="rinPenrose" src="../Talents/rinPenrose-removebg-preview.png" alt="">
                        <br>
                        <p>Rin Penrose - Independent Talent</p>
                    </a>
                  </div>
                </td>
                <td class="Indie2">
                  <div class="zoom-container">
                    <a href="https://virtualyoutuber.fandom.com/wiki/Dooby3D">
                      <img src="../TalentCatalog/Independent/DoobyGallery/Dooby3D_3D.webp">
                      <br>
                      <p>Dooby3D - Independent Talent</p>
                    </a>
                  </div>
                </td>
                <td class="Indie2">
                  <div class="zoom-container">
                    <a href="https://virtualyoutuber.fandom.com/wiki/Nimi_Nightmare">
                      <img src="../TalentCatalog/Independent/NimiGallery/Nimi_Nightmare_Portrait.webp">
                      <br>
                      <p>Nimi Nightmare - Independent Talent</p>
                    </a>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="Indie1">
                  <div class="zoom-container">
                    <a href="https://virtualyoutuber.fandom.com/wiki/Yuuki_Sakuna">
                        <img src="../TalentCatalog/Independent/SakunaGallery/Yuuki_Sakuna.webp">
                        <br>
                        <p>Yuuki Sakuna - Independent Talent</p>
                    </a>
                  </div>
                </td>
                <td class="Indie2">
                  <div class="zoom-container">
                    <a href="https://virtualyoutuber.fandom.com/wiki/Dokibird">
                      <img src="../TalentCatalog/Independent/DokiGallery/Dokibird_Third_Model_Portrait.webp">
                      <br>
                      <p>Dokibird - Independent Talent</p>
                    </a>
                  </div>
                </td>
                <td class="Indie2">
                  <div class="zoom-container">
                    <a href="https://virtualyoutuber.fandom.com/wiki/Mint_Fantôme">
                      <img src="../TalentCatalog/Independent/MintGallery/Mint_Fantome_3.0_Portrait.webp">
                      <br>
                      <p>Mint Fantôme - Independent Talent</p>
                    </a>
                  </div>
                </td>
              </tr>
            </table>
        `
    };

    // Function to change content dynamically
    function updateContent(category) {
        mainContainer.innerHTML = contentData[category] || "<h2>Unknown Category</h2>";
        history.pushState({}, "", `?category=${category}`); // Update URL
    }

    // Handle click events
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
            updateContent(this.textContent.trim());
        });
    });

    // Load content on page load based on URL
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
    if (category && contentData[category]) {
        updateContent(category);
        links.forEach(link => {
            if (link.textContent.trim() === category) link.classList.add("active");
        });
    }
});
