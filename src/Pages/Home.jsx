import React, { useState, useEffect, Fragment } from "react";
import hero from "../Images/hero.svg";
import HomeContent2 from "../Components/HomeContent2";
import InfoImage from "../Images/home1.svg";

export default function Home() {
  const [visibleIndex, setVisibleIndex] = React.useState(1);
  const [initialBlue, setInitialBlue] = useState(true);
  return (
    <Fragment>
      <div className="flex flex-col bg-brand">
        <HomeContent2 />
        <div className="w-full py-24"></div>
        {/* Seccion */}
        <div className="px-5">
          <div className="flex bg-indigo-900 py-4 text-white items-center justify-center mx-auto max-w-6xl rounded-2xl">
            <div className="flex-col ">
              {/* Botones */}
              <div className="flex justify-between space-x-4 p-2">
                <button
                  className={
                    initialBlue
                      ? "mx-auto p-2 text-lg md:text-xl text-pink-600 w-full rounded-full font-fredoka font-bold"
                      : "mx-auto p-2 text-lg md:text-xl hover:text-pink-600 focus:text-pink-600 focus:underline focus:underline-offset-4 w-full rounded-full font-fredoka font-bold"
                  }
                  onClick={() => setVisibleIndex(1)}
                >
                  ¿Cómo nace DataLosRíos?
                </button>
                <button
                  className="mx-auto p-2 text-lg md:text-xl hover:text-pink-600 focus:text-pink-600 focus:underline focus:underline-offset-4 rounded-full w-full font-fredoka font-bold"
                  onClick={() => {
                    setVisibleIndex(2);
                    setInitialBlue(false);
                  }}
                >
                  ¿Qué se puede encontrar?
                </button>
                <button
                  className="mx-auto p-2 text-lg md:text-xl hover:text-pink-600 focus:text-pink-600 focus:underline focus:underline-offset-4 rounded-full w-full font-fredoka font-bold"
                  onClick={() => {
                    setVisibleIndex(3);
                    setInitialBlue(false);
                  }}
                >
                  ¿Qué datos usamos?
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-5 ">
                <svg
                  class="svg_bouncer mx-auto p-10 col-span-1 lg:col-span-2 h-64 w-64 lg:h-full lg:w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  data-name="Layer 1"
                  width={450}
                  height={490}
                  viewBox="0 0 578.0013 621.92557"
                  id="homeinfo"
                >
                  <path
                    d="M677.64241,491.89724l-249.84894,64.339a33.03735,33.03735,0,0,1-40.18683-23.728L312.04574,239.081a33.03734,33.03734,0,0,1,23.728-40.18683l232.44363-59.85691L627.712,165.67105l73.65843,286.03936A33.03734,33.03734,0,0,1,677.64241,491.89724Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#f2f2f2"
                  />
                  <path
                    d="M338.14273,208.094a23.52653,23.52653,0,0,0-16.89723,28.61789l75.5609,293.42725a23.52654,23.52654,0,0,0,28.6179,16.89723l249.84894-64.339a23.52654,23.52654,0,0,0,16.89723-28.61789l-72.51713-281.6073-52.285-23.40643Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#fff"
                  />
                  <path
                    d="M627.07719,167.18472l-38.66749,9.95733a10.99077,10.99077,0,0,1-13.38436-7.9027L567.671,140.68008a.68692.68692,0,0,1,.944-.7991l58.56966,26.01073A.68692.68692,0,0,1,627.07719,167.18472Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#f2f2f2"
                  />
                  <path
                    d="M606.73438,417.76533,492.98165,447.058a5.49538,5.49538,0,0,1-2.74083-10.64353L603.99355,407.1218a5.49538,5.49538,0,1,1,2.74083,10.64353Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#ccc"
                  />
                  <path
                    d="M633.31182,430.07333l-135.705,34.9456A5.49538,5.49538,0,0,1,494.866,454.3754l135.705-34.94561a5.49539,5.49539,0,0,1,2.74084,10.64354Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#ccc"
                  />
                  <circle
                    id="a597741b-ffcf-4aba-98b0-6652ef5d57c9"
                    data-name="Ellipse 44"
                    cx="135.55495"
                    cy="323.87767"
                    r="19.42315"
                    fill="#e6e6e6"
                  />
                  <path
                    d="M594.63919,366.93361,443.56425,405.8227A17.01917,17.01917,0,0,1,422.863,393.59731l-31.6597-122.9905a17.01916,17.01916,0,0,1,12.22538-20.7012l151.075-38.88909a17.01916,17.01916,0,0,1,20.7012,12.22539l31.65971,122.9905A17.01917,17.01917,0,0,1,594.63919,366.93361Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#fff"
                  />
                  <path
                    d="M594.63919,366.93361,443.56425,405.8227A17.01917,17.01917,0,0,1,422.863,393.59731l-31.6597-122.9905a17.01916,17.01916,0,0,1,12.22538-20.7012l151.075-38.88909a17.01916,17.01916,0,0,1,20.7012,12.22539l31.65971,122.9905A17.01917,17.01917,0,0,1,594.63919,366.93361ZM403.9273,251.84246a15.017,15.017,0,0,0-10.7871,18.26578l31.6597,122.9905a15.017,15.017,0,0,0,18.26577,10.7871l151.075-38.88908a15.017,15.017,0,0,0,10.7871-18.26578L573.268,223.74048a15.017,15.017,0,0,0-18.26578-10.7871Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#e6e6e6"
                  />
                  <path
                    id="b056fd3f-f1a0-44f0-b006-deff0bee637d-213"
                    data-name="Path 411"
                    d="M546.83934,252.37075l-76.24555,19.62681a2.73087,2.73087,0,0,1-3.30848-1.71854,2.63064,2.63064,0,0,1,1.85283-3.33925l77.61329-19.97889c3.13521,1.58858,2.31023,4.83781.087,5.41011Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#f2f2f2"
                  />
                  <path
                    id="f1ea6668-a825-428d-96fe-a2c4e1b5a672-214"
                    data-name="Path 412"
                    d="M550.282,265.74474l-76.24555,19.62681A2.73089,2.73089,0,0,1,470.728,283.653a2.63065,2.63065,0,0,1,1.85284-3.33925l77.61329-19.97889c3.13521,1.58858,2.31022,4.83781.087,5.41011Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#f2f2f2"
                  />
                  <path
                    id="ee9aa382-a9c9-40d0-8ed3-22ec2dd616d6-215"
                    data-name="Path 413"
                    d="M459.51412,297.22917l-23.2694,5.98992a2.962,2.962,0,0,1-3.60325-2.12795l-7.06858-27.45979a2.962,2.962,0,0,1,2.12794-3.60325l23.2694-5.98991a2.963,2.963,0,0,1,3.60325,2.12795l7.06859,27.45982a2.962,2.962,0,0,1-2.12795,3.60324Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#e6e6e6"
                  />
                  <path
                    id="be954d2b-d8b8-4d26-80a0-a319e99a4b10-216"
                    data-name="Path 414"
                    d="M557.10914,293.18514,440.74446,323.13925a2.73087,2.73087,0,0,1-3.30847-1.71854,2.63062,2.63062,0,0,1,1.85284-3.33925L557.02218,287.775c3.13521,1.58859,2.31022,4.83781.087,5.41012Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#f2f2f2"
                  />
                  <path
                    id="baaae9e4-1b4d-40c2-8a9d-f2abb078b489-217"
                    data-name="Path 415"
                    d="M560.55283,306.563,444.18814,336.51715a2.73086,2.73086,0,0,1-3.30846-1.71854,2.63061,2.63061,0,0,1,1.85283-3.33926l117.73335-30.30643c3.13521,1.58858,2.31022,4.83781.087,5.41011Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#f2f2f2"
                  />
                  <path
                    id="a91bf4c9-37f6-4391-92ed-1882bd0ce21c-218"
                    data-name="Path 416"
                    d="M563.99426,319.93218,447.62957,349.8863a2.73086,2.73086,0,0,1-3.30846-1.71854,2.63061,2.63061,0,0,1,1.85283-3.33926l117.73335-30.30643c3.13521,1.58858,2.31023,4.83781.087,5.41011Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#f2f2f2"
                  />
                  <path
                    id="efb98e07-468b-4c85-9a64-ee4cc5493d6f-219"
                    data-name="Path 417"
                    d="M567.43768,333.30908,451.073,363.2632a2.73087,2.73087,0,0,1-3.30847-1.71854,2.63063,2.63063,0,0,1,1.85284-3.33926L567.35072,327.899c3.13521,1.58858,2.31022,4.83781.087,5.41011Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#f2f2f2"
                  />
                  <path
                    id="aeb1db98-32e5-40b8-ab89-fdad6a3263dc-220"
                    data-name="Path 418"
                    d="M570.87937,346.67924,454.51469,376.63336a2.73088,2.73088,0,0,1-3.30847-1.71855,2.63062,2.63062,0,0,1,1.85284-3.33925l117.73335-30.30643c3.13521,1.58858,2.31022,4.83781.087,5.41011Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#f2f2f2"
                  />
                  <path
                    id="be265de5-288f-49a7-867d-c42e7cdbf4db-221"
                    data-name="Path 395"
                    d="M447.98728,469.72335a2.01449,2.01449,0,0,1-1.27407-.08782l-.02505-.01034L441.3969,467.382a2.02852,2.02852,0,1,1,1.58747-3.73356l3.42865,1.45835,4.49293-10.56929a2.02766,2.02766,0,0,1,2.65942-1.07259l.00068.00028-.027.06912.02812-.06941a2.03011,2.03011,0,0,1,1.0723,2.66008l-5.28586,12.42716a2.02886,2.02886,0,0,1-1.36522,1.16845Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#fff"
                  />
                  <path
                    d="M773.47457,603.71475h-258a33.03734,33.03734,0,0,1-33-33v-303a33.03734,33.03734,0,0,1,33-33H755.50142l50.97315,40.62891V570.71475A33.03734,33.03734,0,0,1,773.47457,603.71475Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#e6e6e6"
                  />
                  <path
                    d="M515.47446,244.21475a23.52654,23.52654,0,0,0-23.5,23.5v303a23.52653,23.52653,0,0,0,23.5,23.5h258a23.52653,23.52653,0,0,0,23.5-23.5V279.92032l-44.79614-35.70557Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#fff"
                  />
                  <path
                    d="M723.29356,332.319H605.82977a5.49538,5.49538,0,0,1,0-10.99076H723.29356a5.49538,5.49538,0,1,1,0,10.99076Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#6c63ff"
                  />
                  <path
                    d="M745.962,350.86594H605.82977a5.49539,5.49539,0,0,1,0-10.99077H745.962a5.49539,5.49539,0,1,1,0,10.99077Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#6c63ff"
                  />
                  <path
                    d="M723.29425,404.44277h-117.46a5.495,5.495,0,1,0,0,10.99h117.46a5.495,5.495,0,0,0,0-10.99Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#ccc"
                  />
                  <path
                    d="M745.96417,422.99281H605.83429a5.495,5.495,0,1,0,0,10.99H745.96417a5.495,5.495,0,0,0,0-10.99Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#ccc"
                  />
                  <path
                    d="M723.29356,498.55433H605.82977a5.49538,5.49538,0,0,1,0-10.99076H723.29356a5.49538,5.49538,0,1,1,0,10.99076Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#ccc"
                  />
                  <path
                    d="M745.962,517.10125H605.82977a5.49539,5.49539,0,0,1,0-10.99077H745.962a5.49539,5.49539,0,1,1,0,10.99077Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#ccc"
                  />
                  <circle
                    id="abdb8e2f-a218-463c-85f4-c869fef49971"
                    data-name="Ellipse 44"
                    cx="245.91553"
                    cy="197.05988"
                    r="19.42315"
                    fill="#6c63ff"
                  />
                  <path
                    id="ba7dbbd6-0052-44b1-a552-47a8298b8d3e-222"
                    data-name="Path 395"
                    d="M554.99015,343.50645a2.0144,2.0144,0,0,1-1.21191-.40277l-.02168-.01626-4.5647-3.49185a2.02852,2.02852,0,1,1,2.46838-3.21972l2.95665,2.26729,6.98671-9.11494a2.02767,2.02767,0,0,1,2.84288-.3755l.00058.00044-.04336.06021.04454-.06021a2.03011,2.03011,0,0,1,.37507,2.84345l-8.2179,10.71637a2.02892,2.02892,0,0,1-1.61348.79109Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#fff"
                  />
                  <path
                    d="M578.33429,419.21278a19.42256,19.42256,0,0,1-19.41992,19.43,4.17626,4.17626,0,0,1-.5-.02,19.422,19.422,0,1,1,19.91992-19.41Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#ccc"
                  />
                  <circle
                    id="e4a71040-498e-4958-ad41-c2d79154b8f7"
                    data-name="Ellipse 44"
                    cx="245.91553"
                    cy="363.29519"
                    r="19.42315"
                    fill="#ccc"
                  />
                  <path
                    d="M805.48234,276.65121h-39.929a10.99077,10.99077,0,0,1-10.99076-10.99077v-29.491a.68692.68692,0,0,1,1.11347-.53844l50.23281,39.79483A.68692.68692,0,0,1,805.48234,276.65121Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#ccc"
                  />
                  <path
                    d="M578.33429,419.21278a19.42256,19.42256,0,0,1-19.41992,19.43,4.17626,4.17626,0,0,1-.5-.02,42.05076,42.05076,0,0,1,3.77-38.56A19.43323,19.43323,0,0,1,578.33429,419.21278Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#6c63ff"
                  />
                  <path
                    d="M600.33429,409.94277a5.50988,5.50988,0,0,1,5.5-5.5h29.27a41.57257,41.57257,0,0,1,3.60986,10.99H605.83429A5.50129,5.50129,0,0,1,600.33429,409.94277Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#6c63ff"
                  />
                  <path
                    d="M639.39435,422.99281a41.92449,41.92449,0,0,1-1.46,10.99h-32.1001a5.495,5.495,0,1,1,0-10.99Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#6c63ff"
                  />
                  <path
                    d="M711.816,490.77021a6.00013,6.00013,0,0,1-8.24672,1.9979l-70.0049-42.70029a6,6,0,0,1,6.24883-10.24462l70.00489,42.70029A6.00014,6.00014,0,0,1,711.816,490.77021Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#3f3d56"
                  />
                  <path
                    d="M641.8111,448.06992a48,48,0,1,1-15.98318-65.97376A48.05436,48.05436,0,0,1,641.8111,448.06992Zm-71.71233-43.74176a36,36,0,1,0,49.48033-11.98738A36.04071,36.04071,0,0,0,570.09877,404.32816Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#3f3d56"
                  />
                  <circle
                    cx="484.60301"
                    cy="267.17256"
                    r="24.56103"
                    fill="#a0616a"
                  />
                  <path
                    d="M794.015,543.90119a11.002,11.002,0,0,1,8.32251-14.15136,10.46752,10.46752,0,0,1,1.45923-.17969l25.87158-41.52344L806.036,465.57991a9.43208,9.43208,0,1,1,13.1206-13.55274L851.786,484.201l.06567.08008a8.54468,8.54468,0,0,1-.59448,10.18457l-36.25,42.873a10.301,10.301,0,0,1,.27,1.0459,11.0026,11.0026,0,0,1-9.875,13.11621q-.46839.041-.93213.041A11.0367,11.0367,0,0,1,794.015,543.90119Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#a0616a"
                  />
                  <polygon
                    points="444.151 609.001 431.891 609 426.059 561.712 444.153 561.713 444.151 609.001"
                    fill="#a0616a"
                  />
                  <path
                    d="M758.2767,759.92208l-39.53051-.00146v-.5a15.38605,15.38605,0,0,1,15.38647-15.38623h.001l24.1438.001Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#2f2e41"
                  />
                  <polygon
                    points="566.007 592.05 555.473 598.322 526.268 560.676 541.815 551.419 566.007 592.05"
                    fill="#a0616a"
                  />
                  <path
                    d="M885.77238,739.69878l-33.96586,20.2233-.25581-.4296a15.386,15.386,0,0,1,5.34836-21.09206l.00084-.0005,20.74515-12.35158Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M735.512,727.21272c-8.21289-96.70606-13.09863-186.54492,16.92408-223.19336l.23217-.28418,50.52564,20.21094.08325.18066c.17041.37109,16.97388,37.333,13.0542,62.19434L828.794,643.64924l40.63574,68.041A4.50136,4.50136,0,0,1,867.379,718.118l-17.65918,7.76953a4.52142,4.52142,0,0,1-5.64844-1.76562l-44.2041-72.08008-24.96778-55.28613a1.50028,1.50028,0,0,0-2.85888.459L758.20052,727.31135a4.4918,4.4918,0,0,1-4.47461,4.02441H739.99764A4.53045,4.53045,0,0,1,735.512,727.21272Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M752.60628,504.786l-.24072-.11523-.0376-.26465c-1.88745-13.21.34668-27.8877,6.63989-43.625a34.63634,34.63634,0,0,1,40.20191-20.74317h0a34.59441,34.59441,0,0,1,22.06055,16.96387,34.2209,34.2209,0,0,1,2.3728,27.4248c-7.93384,23.2002-18.22583,44.90723-18.32886,45.124l-.21558.45312Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#6c63ff"
                  />
                  <path
                    d="M697.48021,471.88251A11.002,11.002,0,0,1,713.65,474.72233a10.46856,10.46856,0,0,1,.67932,1.3039l47.95411,9.69217,12.7683-30.00357a9.43208,9.43208,0,1,1,17.28928,7.54372l-18.71,41.83025-.052.08956a8.54469,8.54469,0,0,1-9.74785,3.00972L710.97846,489.2473a10.30273,10.30273,0,0,1-.88511.61918,11.00261,11.00261,0,0,1-15.74382-4.6565q-.20244-.42436-.36484-.85874A11.0367,11.0367,0,0,1,697.48021,471.88251Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#a0616a"
                  />
                  <path
                    d="M884.33087,432.51247c-2.36572-4.19178-5.8125-8.03119-10.36914-9.58069-5.88476-2.001-12.25683.12964-18.30713,1.55218-4.66162,1.09595-9.53173,1.76679-14.23046.84192-4.69825-.92492-9.23047-3.65924-11.36817-7.94409-3.145-6.30359-.4956-13.82062-.687-20.86255a25.33438,25.33438,0,0,0-31.92334-23.81061c-5.79346-1.67193-11.03906-1.82659-14.62256,2.62714a17.0001,17.0001,0,0,0-17,17h16.25537a16.1496,16.1496,0,0,0,2.4541,11.93109c2.86963,4.21582,7.85938,7.2655,8.81983,12.274.93115,4.85351-2.36817,9.45868-5.8291,12.98669-3.46045,3.528-7.4751,7.02381-8.55567,11.84626a14.68871,14.68871,0,0,0,2.10352,10.56475,34.40329,34.40329,0,0,0,7.38623,8.13575,108.40184,108.40184,0,0,0,45.0376,23.04034c11.7041,2.81781,24.50586,3.54822,35.37109-1.6355a35.12563,35.12563,0,0,0,15.46484-48.96667Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#2f2e41"
                  />
                  <path
                    d="M888.00065,760.96278h-190a1,1,0,0,1,0-2h190a1,1,0,0,1,0,2Z"
                    transform="translate(-310.99935 -139.03722)"
                    fill="#ccc"
                  />
                </svg>
                <div className="col-span-1 lg:col-span-3 px-10">
                  {/* Contenido 1 */}
                  <div
                    className={
                      visibleIndex == 1
                        ? "container p-4 min-w-3xl text-lg lg:text-xl font-athiti space-y-4 mt-6"
                        : "hidden"
                    }
                  >
                    <p className="fadetext">
                      Este proyecto es el resultado final de un trabajo de tesis
                      para optar al título de Ingeniero Civil Industrial en la
                      UACH de Manuel Huala, esta idea surge ante la necesidad de
                      una plataforma que a través de la visualización de datos
                      pueda soportar la toma de decisiones de inversión para los
                      distintos actores dentro de Los Ríos.
                    </p>
                    <p className="fadetext">
                      El proyecto es realizado bajo el alero de HUB Los Ríos,
                      proyecto perteneciente a la Corporación Regional de
                      Desarrollo Productivo que permite facilitar el nexo entre
                      proyectos de innovación y empresas, con el apoyo y
                      monitoreo del encargado de atracción de inversiones Don
                      Ronald Miranda y el constante apoyo del profesor
                      patrocinante de este trabajo Don Luis Vidal.
                    </p>
                  </div>
                  {/* Contenido 2 */}
                  <div
                    className={
                      visibleIndex == 2
                        ? "container p-4 min-w-3xl text-lg lg:text-xl font-athiti space-y-4 mt-6"
                        : "hidden"
                    }
                  >
                    <p className="fadetext">
                      En este DSS se puede encontrar información de diversa
                      índole a nivel regional y comunal para Los Ríos, todos
                      estos datos están relacionados de una u otra forma a
                      variables relevantes a la hora de invertir en un
                      territorio (según distintos estudios, expuestos en el
                      trabajo de título).
                    </p>
                    <p className="fadetext">
                      Por un lado se tienen visualizaciones de datos, las cuales
                      pueden ser descargadas como imagen y como archivo de
                      valores separados por coma (.csv), el cuál puede ser
                      trabajado con MS Excel u otro software para un análisis
                      más detallado. También pueden realizarse un análisis
                      exhaustivo a cada tipo de artículo exportado por Los Ríos
                      según los registros de Aduanas durante el periodo
                      2010-2021 viendo cuales poseen una _______ (VCRe mayor a 1).
                      Finalmente se puede hacer una simulación del efecto
                      desagregado de una variación en la demanda final de algún
                      sector productivo de Los Ríos, observando como variarían
                      también las demandas finales de los otros sectores según
                      sus encadenamientos (con datos del 2020).
                    </p>
                  </div>
                  {/* Contenido 3 */}
                  <div
                    className={
                      visibleIndex == 3
                        ? "container p-4 min-w-3xl text-lg lg:text-xl font-athiti space-y-4 mt-6"
                        : "hidden"
                    }
                  >
                    <p className="fadetext ">
                      Para las visualizaciones de datos comunales, de
                      exportaciones y regionales (exceptuando las vocaciones
                      productivas) se utilizaron datos de las siguientes
                      fuentes: CONASET, SEIA, SII, Banco Central, INE, SUBTEL,
                      Datos.gob.cl (aduanas).
                    </p>
                    <p className="fadetext ">
                      Las vocaciones productivas, los datos utilizados para
                      calcular las MIP de Los Ríos así como sus encadenamientos
                      productivos y fueron extraídas de documentos cómo FIC-R y
                      FIC-R.
                    </p>
                    <p className="fadetext ">
                      Estos datos a su vez fueron trabajados y analizados según
                      la metodología, estando algunas disponibles en los
                      siguientes repositorios públicos para la revisión de
                      cualquier usuario de la plataforma interesado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <FooterWave /> */}
      </div>
    </Fragment>
  );
}
