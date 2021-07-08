import React from 'react';
import logo from "../../assets/logo-green.svg";
// eslint-disable-next-line
import style from './style.scss';

export default function Footer(props) {


   return (
      <footer class="bg alignCenter bg-default">
         <div class="social-icons-items">
            <a href="https://www.instagram.com/visitguelph/" target="_blank" rel="noreferrer">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="488 -415 64 64" class="icon mr-2" >
                  <g class="cls-1">
                     <path fill="#f68622" d="M488-415h64v64h-64z" class="cls-3"></path>
                     <g data-name="Group 23">
                        <g data-name="Group 22" transform="translate(503.99 -399.111)">
                           <path fill="#fff" data-name="Path 33" d="M16.01 2.92c4.33 0 4.833 0 6.444.1a11.184 11.184 0 013.021.5 4.425 4.425 0 011.813 1.208A5.2 5.2 0 0128.5 6.545a8.186 8.186 0 01.5 3.021c.1 1.712.1 2.215.1 6.444s0 4.833-.1 6.444a11.184 11.184 0 01-.5 3.021 4.425 4.425 0 01-1.208 1.812 5.2 5.2 0 01-1.816 1.213 8.186 8.186 0 01-3.021.5c-1.712.1-2.215.1-6.444.1s-4.833 0-6.444-.1a11.184 11.184 0 01-3.021-.5 4.425 4.425 0 01-1.812-1.208 5.2 5.2 0 01-1.208-1.812 8.186 8.186 0 01-.5-3.021c-.1-1.712-.1-2.215-.1-6.444s0-4.833.1-6.444a11.184 11.184 0 01.5-3.021 4.425 4.425 0 011.208-1.812A5.2 5.2 0 016.547 3.53a8.186 8.186 0 013.021-.5c1.611-.1 2.115-.1 6.444-.1m0-2.92c-4.33 0-4.934 0-6.646.1a12.478 12.478 0 00-3.927.7A9.588 9.588 0 002.62 2.623 7.911 7.911 0 00.808 5.442a10.146 10.146 0 00-.7 3.927c-.1 1.712-.1 2.215-.1 6.646 0 4.33 0 4.934.1 6.646a12.478 12.478 0 00.7 3.927 9.588 9.588 0 001.81 2.812 7.911 7.911 0 002.819 1.813 10.146 10.146 0 003.927.7c1.712.1 2.215.1 6.646.1s4.934 0 6.646-.1a12.477 12.477 0 003.927-.7A9.588 9.588 0 0029.4 29.4a7.911 7.911 0 001.813-2.819 10.146 10.146 0 00.7-3.927c.1-1.712.1-2.215.1-6.646s0-4.934-.1-6.646a12.478 12.478 0 00-.7-3.927A9.588 9.588 0 0029.4 2.618 7.911 7.911 0 0026.581.806a10.146 10.146 0 00-3.927-.7c-1.812-.1-2.316-.1-6.646-.1z" class="cls-2"></path>
                           <path fill="#fff" data-name="Path 34" d="M16.01 7.854a8.257 8.257 0 108.257 8.257 8.294 8.294 0 00-8.257-8.257zm0 13.594a5.337 5.337 0 115.337-5.337 5.372 5.372 0 01-5.337 5.337z" class="cls-2"></path>
                           <circle fill="#fff" data-name="Ellipse 18" cx="1.913" cy="1.913" r="1.913" transform="translate(22.656 5.639)" class="cls-2"></circle>
                        </g>
                     </g>
                  </g>
               </svg>
            </a>
            <a href="https://facebook.com/cityofguelph" target="_blank" rel="noreferrer">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="1366 -415 64 64" class="icon mr-2"  >
                  <g class="cls-1">
                     <path fill="#3c5a99" d="M1366-415h64v64h-64z" class="cls-4"></path>
                     <g data-name="Group 32" transform="translate(1369 -409)">
                        <path fill="#fff" d="M37.458 58V35.278h7.049l1.007-8.072h-8.056v-5.182c0-2.292.6-3.887 4.028-3.887h4.33v-7.174a58.96 58.96 0 00-6.243-.3c-6.243 0-10.472 3.787-10.472 10.663v5.979h-7.049v8.072h7.049V58z" class="cls-2"></path>
                        <ellipse data-name="Ellipse 25" fill="none" cx="29" cy="28.701" rx="29" ry="28.701" class="cls-3"></ellipse>
                     </g>
                  </g>
               </svg>
            </a>
            <a href="https://twitter.com/cityofguelph" target="_blank" rel="noreferrer">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="1019 -415 64 64" class="icon mr-2"  >
                  <g class="cls-1">
                     <path fill="#5fa9dd" d="M1019-415h64v64h-64z" class="cls-3"></path>
                     <g data-name="Group 30">
                        <path data-name="Path 48" fill="#fff" d="M1067.934-393.778a13.247 13.247 0 01-4.028 1.108 7.116 7.116 0 003.021-3.83 13.1 13.1 0 01-4.427 1.715 7.315 7.315 0 00-5.139-2.215 6.962 6.962 0 00-6.948 6.948 8.813 8.813 0 00.2 1.611 19.712 19.712 0 01-14.4-7.25 6.8 6.8 0 00-.906 3.524 7.03 7.03 0 003.122 5.84 5.653 5.653 0 01-3.122-.906v.1a6.93 6.93 0 005.639 6.847 5.576 5.576 0 01-1.812.2 5.742 5.742 0 01-1.309-.1 6.828 6.828 0 006.545 4.833 13.921 13.921 0 01-8.66 3.021 9.77 9.77 0 01-1.712-.1 19.5 19.5 0 0010.674 3.122c12.788 0 19.837-10.573 19.837-19.837v-.906a17.128 17.128 0 003.425-3.725z" class="cls-2"></path>
                     </g>
                  </g>
               </svg>
            </a>
            <a href="https://youtube.com/user/cityofguelph" target="_blank" rel="noreferrer">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="842 -415 64 64" class="icon mr-2"  >
                  <g class="cls-1">
                     <path fill="#bf2126" d="M842-415h64v64h-64z" class="cls-2"></path>
                     <g data-name="Group 29">
                        <path fill="#bf2126" d="M869.67-376.555l10.573-5.437-10.573-5.539z" class="cls-2"></path>
                        <path fill="#010101" fill-rule="evenodd" opacity=".12" d="M869.67-387.531l9.264 6.142 1.309-.7z" class="cls-3"></path>
                        <g data-name="Group 28">
                           <path data-name="Path 47" fill="#fff" d="M892.667-391.16s-.4-2.719-1.51-3.826a5.3 5.3 0 00-3.928-1.614c-5.437-.4-13.694-.4-13.694-.4s-8.156 0-13.694.4a5.75 5.75 0 00-3.927 1.611c-1.214 1.211-1.514 3.829-1.514 3.829a56.52 56.52 0 00-.4 6.344v2.916a58.942 58.942 0 00.4 6.344s.4 2.719 1.51 3.826c1.51 1.51 3.424 1.51 4.33 1.712 3.122.3 13.292.4 13.292.4s8.156 0 13.694-.4a5.75 5.75 0 003.927-1.611c1.208-1.208 1.51-3.826 1.51-3.826a56.52 56.52 0 00.4-6.344v-2.92a59.546 59.546 0 00-.396-6.441zm-23.16 12.889v-10.976l10.573 5.539z" class="cls-4"></path>
                        </g>
                     </g>
                  </g>
               </svg>
            </a>
            {/* <a href="http://www.flickr.com/photos/cityofkitchener" target="_blank" rel="noreferrer">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="311 -415 64 64" class="icon mr-2"  >
                  <g class="cls-1">
                     <path fill="#ed278e" d="M311-415h64v64h-64z" class="cls-3"></path>
                     <g data-name="Group 21">
                        <g data-name="Group 20" transform="translate(313.844 -412)">
                           <circle data-name="Ellipse 15" fill="#fff" cx="9.667" cy="9.667" r="9.667" transform="translate(8.156 20.441)" class="cls-2"></circle>
                           <circle data-name="Ellipse 16" fill="#fff" cx="9.667" cy="9.667" r="9.667" transform="translate(30.108 20.441)" class="cls-2"></circle>
                        </g>
                     </g>
                  </g>
               </svg>
            </a> */}
            {/* <a href="https://www.kitchener.ca/en/city-services/pingstreet-mobile-app.aspx?_mid_=10739" target="_blank" rel="noreferrer">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="1189 -415 64 64" class="icon mr-2"  >
                  <g class="cls-1">
                     <path fill="#00788b" d="M1189-415h64v64h-64z" class="cls-3"></path>
                     <g data-name="Group 31">
                        <path data-name="Path 49" fill="#fff" d="M1220.788-404A12.806 12.806 0 001208-391.212a12.578 12.578 0 00.7 4.028c1.51 4.632 12.083 24.267 12.083 24.267s9.566-17.319 12.083-24.267a14.747 14.747 0 00.7-4.028A12.679 12.679 0 001220.788-404zm0 19.333a6.545 6.545 0 116.545-6.545 6.532 6.532 0 01-6.545 6.545z" class="cls-2"></path>
                     </g>
                  </g>
               </svg>
            </a> */}
            <a href="tel://5198221260" target="_blank" rel="noreferrer">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="665 -415 64 64" class="icon mr-2"  >
                  <g class="cls-1">
                     <path fill="#942c60" d="M665-415h64v64h-64z" class="cls-5"></path>
                     <g data-name="Group 27" transform="translate(668 -412)">
                        <g data-name="Group 24">
                           <path data-name="Path 35" fill="#fff" d="M27.188 17.723v3.021a2.121 2.121 0 01-.5 1.309 1.914 1.914 0 01-1.309.5 2.121 2.121 0 01-1.309-.5 1.546 1.546 0 01-.5-1.309v-.6h1.208v.7a.523.523 0 00.2.4.763.763 0 00.4.2.523.523 0 00.4-.2.763.763 0 00.2-.4v-2.92c0-.1-.1-.2-.2-.4a.443.443 0 00-.5-.1.514.514 0 00-.5.4h-1.215v-4.431h3.323V14.4h-2.115v2.316a1.4 1.4 0 011.007-.5 1.9 1.9 0 01.806.2 1 1 0 01.4.5.755.755 0 01.1.5c.104.005.104.105.104.307z" class="cls-2"></path>
                           <path data-name="Path 36" fill="#fff" d="M30.31 22.455h-1.208v-7.754l-1.208 1.208-.906-.806 2.114-1.912h1.208z" class="cls-2"></path>
                           <path data-name="Path 37" fill="#fff" d="M34.84 20.743a2.121 2.121 0 01-.5 1.309 1.668 1.668 0 01-1.208.5 2.121 2.121 0 01-1.309-.5 1.546 1.546 0 01-.5-1.309v-.7h1.208v.7a.523.523 0 00.2.4.763.763 0 00.4.2c.3 0 .5-.2.5-.6V18.73a1.4 1.4 0 01-1.007.5 1.174 1.174 0 01-.7-.2.669.669 0 01-.4-.5.755.755 0 01-.1-.5v-3.228a2.121 2.121 0 01.5-1.309 1.858 1.858 0 011.208-.5 2.121 2.121 0 011.309.5 1.546 1.546 0 01.5 1.309v5.941zm-1.208-3.021v-2.819a.572.572 0 00-1.007-.4.763.763 0 00-.2.4v2.719c0 .1.1.2.2.4a.443.443 0 00.5.1 1.768 1.768 0 00.507-.399z" class="cls-2"></path>
                        </g>
                        <g data-name="Group 25">
                           <path data-name="Path 38" fill="#fff" d="M27.691 23.764v1.108l-2.417 8.056h-1.208l2.417-8.056h-2.417v-1.108z" class="cls-2"></path>
                           <path data-name="Path 39" fill="#fff" d="M30.914 31.517h-.5v1.41h-1.111v-1.41h-2.115V30.41l2.115-6.646h1.208v6.646h.5v1.108zm-1.611-1.108v-3.523l-.906 3.524z" class="cls-2"></path>
                           <path data-name="Path 40" fill="#fff" d="M34.337 32.927h-1.208v-7.754l-1.208 1.208-.906-.806 2.114-1.912h1.208z" class="cls-2"></path>
                        </g>
                        <g data-name="Group 26">
                           <path data-name="Path 41" fill="#fff" d="M24.468 36.25a3.131 3.131 0 01-.1 1.108 4.588 4.588 0 01-1.108 1.813c-.1.2-.4.4-.7.806-.1.2-.2.3-.2.4-.1.1-.1.3-.2.5v1.007h2.316v1.208h-3.532v-1.41a4.544 4.544 0 01.1-1.309 4.208 4.208 0 01.4-1.007c.1-.1.3-.4.7-.806a6.574 6.574 0 00.7-.806c.1-.1.2-.3.3-.4a.769.769 0 00.2-.5v-1.309a.523.523 0 00-.2-.4.763.763 0 00-.4-.2.523.523 0 00-.4.2.554.554 0 00-.2.5v1.007h-1.2v-.906a2.121 2.121 0 01.5-1.309 1.546 1.546 0 011.309-.5 2.121 2.121 0 011.309.5 1.546 1.546 0 01.5 1.309v.5z" class="cls-2"></path>
                           <path data-name="Path 42" fill="#fff" d="M28.899 41.486a2.121 2.121 0 01-.5 1.309 1.914 1.914 0 01-1.309.5 2.121 2.121 0 01-1.309-.5 1.914 1.914 0 01-.5-1.309v-.6h1.208v.7a.572.572 0 001.007.4.763.763 0 00.2-.4v-1.812a.523.523 0 00-.2-.4.763.763 0 00-.4-.2h-.806v-1.112h.806a.523.523 0 00.4-.2.763.763 0 00.2-.4v-1.716a.572.572 0 00-1.007-.4.763.763 0 00-.2.4v.5h-1.215v-.6a2.121 2.121 0 01.5-1.309 1.546 1.546 0 011.309-.5 2.121 2.121 0 011.309.5 1.546 1.546 0 01.5 1.309v1.611a1.455 1.455 0 01-.2.7.68.68 0 01-.6.4 1.342 1.342 0 01.6.5 1.085 1.085 0 01.2.806z" class="cls-2"></path>
                           <path data-name="Path 43" fill="#fff" d="M33.329 41.787h-.5v1.41h-1.111v-1.41h-2.215V40.68l2.115-6.646h1.208v6.646h.5zm-1.611-1.108v-3.523l-.906 3.524z" class="cls-2"></path>
                           <path data-name="Path 44" fill="#fff" d="M37.458 38.465v3.021a2.121 2.121 0 01-.5 1.309 1.668 1.668 0 01-1.208.5 2.121 2.121 0 01-1.309-.5 1.914 1.914 0 01-.5-1.309v-.6h1.208v.7a.523.523 0 00.2.4.763.763 0 00.4.2.523.523 0 00.4-.2.763.763 0 00.2-.4v-2.92c0-.1-.1-.2-.2-.4a.443.443 0 00-.5-.1.514.514 0 00-.5.4h-1.215v-4.431h3.323v1.007h-2.115v2.316a1.4 1.4 0 011.007-.5 1.9 1.9 0 01.806.2 1 1 0 01.4.5.755.755 0 01.1.5z" class="cls-2"></path>
                        </g>
                        <path data-name="Path 45" fill="none" stroke-width="1.348" stroke-miterlimit="10" stroke="#fff" d="M35.545 50.85H22.857a5.844 5.844 0 01-5.84-5.84V13.09a5.844 5.844 0 015.84-5.84h12.688a5.844 5.844 0 015.84 5.84v31.92a5.781 5.781 0 01-5.84 5.84z" class="cls-3"></path>
                        <path data-name="Line 1" stroke-width=".899" fill="none" stroke-miterlimit="10" stroke="#fff" d="M17.219 11.278h23.965" class="cls-4"></path>
                        <path data-name="Line 2" stroke-width=".899" fill="none" stroke-miterlimit="10" stroke="#fff" d="M17.219 45.01h23.965" class="cls-4"></path>
                        <circle data-name="Ellipse 20" fill="#fff" cx="1.813" cy="1.813" r="1.813" transform="translate(27.389 46.017)" class="cls-2"></circle>
                        <path data-name="Path 46" fill="#fff" d="M32.525 10.069h-6.751a.58.58 0 01-.6-.6.65.65 0 01.6-.6h6.747a.65.65 0 01.6.6.534.534 0 01-.596.6z" class="cls-2"></path>
                     </g>
                  </g>
               </svg>
            </a>
            {/* <a href="http://www.engagekitchener.ca/?_ga=2.66928686.1200639731.1505141404-1418821044.1493639117" target="_blank" rel="noreferrer">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="141 -415 64 64" class="icon mr-2"  >
                  <g class="cls-1">
                     <path fill="#2c973e" d="M141-415h64v64h-64z" class="cls-3"></path>
                     <g data-name="Group 7">
                        <path data-name="Path 17" fill="#fff" d="M192.535-381.389a16.527 16.527 0 00.2-2.316c0-9.264-8.861-16.715-19.635-16.715s-19.735 7.552-19.735 16.715c0 8.458 7.351 15.406 16.917 16.514 0 0 1.007.1 2.618.1 5.035 6.142 12.788 5.337 12.788 5.337-3.524-2.719-4.431-5.135-4.733-6.646h.1a18.707 18.707 0 009.365-7.351h-17.319c-4.229 0-7.854-2.417-8.962-5.639h28.4zm-28.496-4.631c1.208-3.222 4.733-5.538 8.962-5.538s7.753 2.315 8.964 5.538z" class="cls-2"></path>
                     </g>
                  </g>
               </svg>
            </a> */}
         </div>
         <div class="bottom-footer">
            <div class="footer-links hidden-sm">
               <a href="https://guelph.ca/city-hall/contact-us/" target="_blank" class="mx-3" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22.495" height="22.534" class="mr-2 mt-n1">
                     <path data-name="phone-call (1)" d="M13.63 5.004a4.881 4.881 0 013.859 3.86m-3.859-7.76a8.785 8.785 0 017.759 7.75m-.976 7.789v2.928a1.952 1.952 0 01-2.124 1.953 19.317 19.317 0 01-8.424-3 19.034 19.034 0 01-5.857-5.857 19.317 19.317 0 01-3-8.463A1.952 1.952 0 012.951 2.08H5.88a1.952 1.952 0 011.952 1.679 12.533 12.533 0 00.683 2.745 1.952 1.952 0 01-.439 2.06l-1.24 1.24a15.618 15.618 0 005.853 5.854l1.24-1.24a1.952 1.952 0 012.06-.439 12.533 12.533 0 002.743.683 1.952 1.952 0 011.679 1.982z" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                  </svg>
            Contact us
            </a>
               <a href="/" class="mx-3" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23.5" height="23.5" class="mr-2 mt-n1">
                     <g data-name="Group 6952">
                        <g data-name="Group 6514" transform="translate(-136 -226)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                           <path data-name="Path 30810" d="M155.351 230.149a10.846 10.846 0 01.967 1.111 10.846 10.846 0 00-.967-1.111z"></path>
                           <path data-name="Path 30811" d="M154.99 245.696h0a10.751 10.751 0 001.374-14.378 10.75 10.75 0 01-1.374 14.378z"></path>
                           <path data-name="Path 30812" d="M139.409 244.53a10.852 10.852 0 001.1 1.166h0a10.8 10.8 0 01-1.1-1.166z"></path>
                           <path data-name="Path 30813" d="M156.319 231.26l.045.058z"></path>
                           <path data-name="Path 30814" d="M137 237.75a10.764 10.764 0 003.51 7.946 7.828 7.828 0 0114.48 0 10.75 10.75 0 001.374-14.378l-.045-.058a10.846 10.846 0 00-.967-1.111A10.75 10.75 0 00137 237.75zm14.781-.937a4.031 4.031 0 11-4.031-4.031 4.031 4.031 0 014.031 4.031z"></path>
                           <path data-name="Path 30815" d="M137 237.75a10.75 10.75 0 0118.351-7.6 10.749 10.749 0 00-15.942 14.381A10.7 10.7 0 01137 237.75z"></path>
                           <path data-name="Path 30816" d="M147.75 248.5a10.71 10.71 0 01-7.24-2.8h0a10.75 10.75 0 0014.48 0h0a10.71 10.71 0 01-7.24 2.8z"></path>
                           <path data-name="Path 30817" d="M154.99 245.696a7.828 7.828 0 00-14.48 0 10.748 10.748 0 0014.48 0z"></path>
                           <circle data-name="Ellipse 89" cx="4.031" cy="4.031" r="4.031" transform="rotate(-45 356.883 -53.062)"></circle>
                        </g>
                     </g>
                  </svg>
            MyGuelph login
         </a>
               <a target="_blank" href="https://guelph.ca/how-can-we-help-you/" class="mx-3" rel="noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22.955" height="20.103" class="mr-2 mt-n1">
                     <g data-name="alert-triangle (1)" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path data-name="Path 30972" d="M9.766 1.963l-8.47 14.14a2 2 0 001.71 3h16.94a2 2 0 001.71-3l-8.47-14.14a2 2 0 00-3.42 0z"></path>
                        <path data-name="Line 1025" d="M11.476 7.103v4"></path>
                        <path data-name="Line 1026" d="M11.476 15.103h.01"></path>
                     </g>
                  </svg>
            Report a problem
         </a>
            </div>
            <div class="footer-logo pt-5"><img src={logo} alt="City of Guelph Logo" class="pt-5 logo-color" /></div>
            <div class="footer-site-links">
               <div class="pt-4 pb-3"><span >©2021 City of Guelph</span><span class="mx-2">|</span><span >1 Carden Street
Guelph, Ontario</span><span class="mx-2">|</span><span >
                  Telephone: <a href="tel://5198221260" target="_blank" class="gray-color"  rel="noreferrer">519-822-1260</a>, TTY: <a href="tel://5198269771" target="_blank" class="gray-color"  rel="noreferrer">519-826-9771</a>,{" "} 
               <a href="mailto:info@guelph.ca" target="_blank" class="theme-font-bold"  rel="noreferrer">Email us</a></span></div>
               <div class="theme-font-bold"><a href="https://guelph.ca/city-hall/access-to-information/privacy-policy/" target="_blank" class="mx-3" rel="noreferrer">Privacy</a>
                  <a href="https://guelph.ca/living/accessibility" target="_blank" class="mx-3" rel="noreferrer">Accessibility</a>
                  <a href="https://guelph.ca/city-hall/access-to-information/privacy-policy/" target="_blank" class="mx-3" rel="noreferrer">Website policy</a>
                  <a href="https://guelph.ca/sitemap/" target="_blank" class="mx-3" rel="noreferrer">Sitemap</a></div>
               <div class="pt-3"><a href="https://www.guelph.ca" target="_blank" class="gray-color" rel="noreferrer">Designed by City of Guelph</a>
               </div>
            </div>
         </div>

      </footer>
   );
}
